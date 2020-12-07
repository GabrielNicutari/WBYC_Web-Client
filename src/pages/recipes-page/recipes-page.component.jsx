import React, { Component } from 'react';

import http from "../../services/http.service";
import RecipeList from "../../components/recipe-list/recipe-list.component";
import Loading from "../../Loading";
import Pagination from "../../components/pagination/pagination.component";

import './recipes-page.styles.scss'

class RecipesPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            recipes: [],
            currentPage: 0,
            itemsPerPage: 12,
            totalPages: null,
            totalItems: null,
            sorting: "id,asc",

            loading: undefined,
            done: undefined,
        }
    }

    componentDidMount() {
        this.fetchAll(this.state.currentPage, this.state.sorting);
    }

    fetchAll(currentPage, sort) {
        this.setState({loading: undefined});
        this.setState({done: undefined});

        http.get("recipes?page=" + currentPage + "&sort=" + sort)
            .then(response => {
                console.log(response.data);

                this.setState({totalPages: response.data.totalPages});
                this.setState({totalItems: response.data.totalItems});
                this.setState({recipes: response.data.recipes});
            })
            .then(() => {
                this.setState({loading: true});
                setTimeout(() => {
                    this.setState({done: true});
                },500)
            })
            .catch(e => {
                console.log(e);
            })
    }

    paginate = pageNr => {
        this.setState({currentPage: pageNr - 1})
    }

    sortToggle = () => {
        this.state.sorting === "id,asc" ?
            (this.setState({sorting: "id,desc"}))
            :
            (this.setState({sorting: "id,asc"}));
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.state.sorting !== prevState.sorting || this.state.currentPage !== prevState.currentPage) {
            this.fetchAll(this.state.currentPage, this.state.sorting);
        }
    }

    render() {
        const { recipes, done, loading, totalItems, currentPage, sorting, itemsPerPage } = this.state;

        return (
            <div className='recipes-page'>
                <div className='recipes-header'>
                    <h1 className='title'>RECIPES</h1>
                </div>

                <div className='recipes-listings'>
                    <span className='results'>{currentPage * itemsPerPage + 1} - {totalItems - ((currentPage) * itemsPerPage) > itemsPerPage ?
                        ((currentPage + 1) * itemsPerPage) : totalItems} of {totalItems} total results for <strong>Recipes</strong>
                    </span>

                    <button className='btn btn-sort' onClick={this.sortToggle}>
                        <span>Sort: {sorting}</span>
                    </button>

                </div>

                <Pagination itemsPerPage={itemsPerPage} totalItems={totalItems} paginate={this.paginate} done={done}/>

                {!done ?
                    <Loading loading={loading} />
                    :
                    (<RecipeList recipes={recipes} />)
                }

                {/*<Pagination itemsPerPage={itemsPerPage} totalItems={totalItems} paginate={this.paginate} done={done}/>*/}


            </div>
        );
    }
}


export default RecipesPage;