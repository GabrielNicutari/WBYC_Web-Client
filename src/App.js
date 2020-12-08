import React, { Component } from 'react';
import './App.scss';
import { Switch, Route } from 'react-router-dom';

import Footer from "./components/footer/footer.component";
import SocialFooter from "./components/social-footer/social-footer.component";
import IngredientsPage from "./pages/ingredients-page/ingredients-page.component";
import RecipesPage from "./pages/recipes-page/recipes-page.component";
import RecipePage from "./pages/recipe-page/recipe-page.component";
import Header from "./components/header/header.component";
import HomePage from "./pages/index-page/index-page.component";

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
                <Header />
                <Switch>
                    <Route exact path={"/"} component={HomePage} />
                    <Route exact path={"/recipes"} component={RecipesPage} />
                    <Route exact path={"/ingredients"} component={IngredientsPage} />
                    <Route path={"/recipes/:id"} component={RecipePage} />
                </Switch>
                <SocialFooter/>
                <Footer/>
            </div>
        );
    }
}

export default App;
