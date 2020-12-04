import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';

import Ingredientlist from "./components/ingredient-list/ingredient-list.component";
// import RecipeList from "./components/recipe-list/recipe-list.component";
import CreateRecipe from "./components/recipes/add-recipe.component";

import RecipesPage from "./pages/recipes-page/recipes-page.component";

class App extends Component {
    constructor() {
        super();

        this.state = {
            currentUser: null
        }
    }

    render() {
        console.log(process.env.REACT_APP_NAME);
        console.log(process.env.REACT_APP_API_URL);
        return (
            <div>
                <Switch>
                    <Route exact path={"/ingredients"} component={Ingredientlist} />
                    <Route path={"/recipes"} component={RecipesPage} />
                    <Route path={"/recipes/create"} component={CreateRecipe}/>
                </Switch>
            </div>
        );
    }
}

export default App;
