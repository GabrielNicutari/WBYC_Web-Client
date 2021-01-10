import React, { Component } from "react";

import http from "../../services/http.service";
import IngredientList from "../../components/ingredient-list/ingredient-list.component";
import Loading from "../../Loading";
import Pagination from "../../components/pagination/pagination.component";
import { CreateModal } from "../../components/ingredient-create/ingredient-create-modal.component";
import "fontsource-roboto";
import "./ingredients-page.styles.scss";
import SearchBar from "../../components/search-bar/search-bar.component";

class IngredientsPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ingredients: [],
      currentPage: 0,
      itemsPerPage: 1,
      totalPages: null,
      totalItems: null,
      sorting: "id,asc",
      key: "",

      loading: undefined,
      done: undefined,
      show: false,
    };
  }

  componentDidMount() {
    this.fetchAll(this.state.currentPage, this.state.sorting, this.state.key);
  }

  fetchAll(currentPage, sort, key) {
    this.setState({ loading: undefined });
    this.setState({ done: undefined });

    http
      .get("ingredients?page=" + currentPage + "&sort=" + sort + "&key=" + key)
      .then((response) => {
        this.setState({ totalPages: response.data.totalPages });
        this.setState({ totalItems: response.data.totalItems });
        this.setState({ ingredients: response.data.ingredients });
        this.setState({ itemsPerPage: response.data.size });
      })
      .then(() => {
        this.setState({ loading: true });
        setTimeout(() => {
          this.setState({ done: true });
        }, 500);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  onSearch = (key) => {
    this.setState({currentPage: 0});
    this.setState({key: key});
  }

  paginate = (pageNr) => {
    this.setState({ currentPage: pageNr - 1 });
  };

  sortToggle = () => {
    this.state.sorting === "id,asc"
      ? this.setState({ sorting: "id,desc" })
      : this.setState({ sorting: "id,asc" });
  };

  onChangeSort = (e) => {
    this.setState({sorting: e.target.value})
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (
      this.state.sorting !== prevState.sorting ||
      this.state.currentPage !== prevState.currentPage ||
      this.state.key !== prevState.key
    ) {
      this.fetchAll(this.state.currentPage, this.state.sorting, this.state.key);
    }
  }

  close = () => this.setState({ show: false });

  showModal = () => this.setState({ show: true });

  render() {

    const { ingredients, done, loading, totalItems, currentPage, sorting, itemsPerPage, show} = this.state;

    return (
      <div className="ingredients-page">
        <div className="ingredients-header">
          <h1 className="title">INGREDIENTS</h1>

          <SearchBar onSearch={this.onSearch}/>

          <div className="nav-bar">
            {show ? (
              <div onClick={this.close} className="back-drop show" />
            ) : (
              <div className="back-drop" />
            )}
            <button
              onClick={this.showModal}
              className="btn-large btn-openModal"
            >
              Add Ingredient
            </button>
          </div>
          <CreateModal show={show} close={this.close} />
        </div>

        <div className="ingredients-listings">
          <span className="results">
            {currentPage * itemsPerPage + 1} -{" "}
            {totalItems - currentPage * itemsPerPage > itemsPerPage
              ? (currentPage + 1) * itemsPerPage
              : totalItems}{" "}
            of {totalItems} total results for <strong>Ingredients</strong>
          </span>

          {/*<button className="btn-mini btn-sort" onClick={this.sortToggle}>*/}
          {/*  <span>Sort: {sorting}</span>*/}
          {/*</button>*/}

          <select className="btn-mini btn-sort" onChange={this.onChangeSort} name="sorting">
            <option value="id,asc">ID, Asc</option>
            <option value="id,desc">ID, Desc</option>
            <option value="name,asc">Name, Asc</option>
            <option value="name,desc">Name, Desc</option>
          </select>
        </div>

        <Pagination
          itemsPerPage={itemsPerPage}
          totalItems={totalItems}
          paginate={this.paginate}
          done={done}
        />

        {!done ? (
          <Loading loading={loading} />
        ) : (
          <IngredientList show={show} close={this.close} ingredients={ingredients} size={totalItems}/>
        )}
      </div>
    );
  }
}

export default IngredientsPage;
