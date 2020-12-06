import React, { Component, useEffect } from 'react';

import http from "../../services/http.service";
import RecipeList from "../../components/recipe-list/recipe-list.component";
import Loading from "../../Loading";
import {CreateModal} from "../../components/recipe-create/recipe-create-modal.component"

import './recipes-page.styles.scss'


class RecipesPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            recipes: [],
            currentPage: 0,
            totalPages: null,
            totalItems: null,

            loading: undefined,
            done: undefined,
            show: false
        }
    }

    componentDidMount() {
        this.fetchAll(this.state.currentPage);
    }

    // componentDidUpdate(prevProps, prevState) {
    //     if()this.state.show !== prevState.show
    // }

    fetchAll(currentPage) {
        this.setState({loading: undefined});
        this.setState({done: undefined});

        http.get("recipes?page=" + currentPage)
            .then(response => {
                console.log(response.data);

                this.setState({totalPages: response.data.totalPages});
                this.setState({totalItems: response.data.totalItems});
                this.setState({recipes: response.data.recipes});
            })
            .then(data => {
                this.setState({loading: true});
                setTimeout(() => {
                    this.setState({done: true});
                },500)
            })
            .catch(e => {
                console.log(e);
            })
    }

    close = () => this.setState({show: false});

    showModal = () => this.setState({show: true})


    render() {
        const { recipes, done, loading, show } = this.state;

        return (
            <div className='recipes-page'>
                <div className='recipes-header'>
                    <h1 className='title'>RECIPES</h1>
                    <div className='nav-bar'>
                        { show ? <div onClick={this.close} className='back-drop show'></div> : <div className='back-drop'></div> }
                        <button onClick={ this.showModal } className="btn-openModal">Create New Recipe</button>
                    </div>
                    <CreateModal show={show} close={this.close}/>



                </div>

                {/*{!done ?*/}
                {/*    (<Loading loading={loading} />)*/}
                {/*    :*/}
                {/*    (<RecipeList recipes={recipes} />)*/}
                {/*}*/}
            </div>
        );
    }
}

export default RecipesPage;