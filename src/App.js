import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Ingredientlist from "./components/ingredient-list/ingredient-list.component";
import RecipeList from "./components/recipe-list/recipe-list.component";

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
                    <Route path={"/recipes"} component={RecipeList} />
                </Switch>
            </div>
        );
    }
}

export default App;
