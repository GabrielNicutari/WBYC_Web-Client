import React, { Component, useEffect } from 'react';

import http from "../../services/http.service";
import RecipeList from "../../components/recipe-list/recipe-list.component";
import Loading from "../../Loading";

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
        }
    }

    componentDidMount() {
        this.fetchAll(this.state.currentPage);
    }

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

    render() {
        const { recipes, done, loading } = this.state;

        return (
            <div className='recipes-page'>
                <div className='recipes-header'>
                    <h1 className='title'>RECIPES</h1>
                </div>

                {!done ?
                    (<Loading loading={loading} />)
                    :
                    (<RecipeList recipes={recipes} />)
                }
            </div>
        );
    }
}

export default RecipesPage;