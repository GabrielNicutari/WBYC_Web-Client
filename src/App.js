import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import IngredientList from "./components/ingredient-list/ingredient-list.component";
import RecipeList from "./components/recipe-list/recipe-list.component";
import CreateRecipe from "./components/recipes/add-recipe.component";

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
                    <Route path={"/ingredients"} component={IngredientList} />
                    <Route exact path={"/recipes"} component={RecipeList} />
                    <Route path={"/recipes/create"} component={CreateRecipe}/>
                </Switch>
            </div>
        );
    }
}

export default App;
