import React, { Component } from "react";

import "./App.scss";
import "fontsource-roboto";

import { Switch, Route } from "react-router-dom";

import Footer from "./components/footer/footer.component";
import IngredientsPage from "./pages/ingredients-page/ingredients-page.component";
import RecipesPage from "./pages/recipes-page/recipes-page.component";
import RecipePage from "./pages/recipe-page/recipe-page.component";
import Header from "./components/header/header.component";
import HomePage from "./pages/index-page/index-page.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

class App extends Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });
        });
      }
      this.setState({ currentUser: userAuth });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    console.log(process.env.REACT_APP_NAME);
    console.log(process.env.REACT_APP_API_URL);
    return (
      <div>
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path={"/"} component={HomePage} />
          <Route exact path={"/recipes"} component={RecipesPage} />
          <Route exact path={"/ingredients"} component={IngredientsPage} />
          <Route path={"/recipes/:id"} component={RecipePage} />
          <Route path="/signin" component={SignInAndSignUpPage} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
