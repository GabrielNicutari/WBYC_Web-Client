import React, {Component} from 'react';

import http from "../../services/http.service";
import RecipeList from "../../components/recipe-list/recipe-list.component";

class RecipesPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            recipes: [],
            currentPage: 0,
            totalPages: null,
            totalItems: null
        }
    }

    componentDidMount() {
        this.fetchAll(this.state.currentPage);
    }

    fetchAll(currentPage) {
        http.get("recipes?page=" + currentPage)
            .then(response => {
                console.log(response.data);

                this.setState({totalPages: response.data.totalPages});
                this.setState({totalItems: response.data.totalItems});
                this.setState({recipes: response.data.recipes});
            })
            .catch(e => {
                console.log(e);
            })
    }

    render() {
        const { recipes } = this.state;

        return (
            <div className='shop-page'>
                {
                    <RecipeList recipes={recipes} />
                }

                {/*<ul className="list-group">*/}
                {/*    {recipes.map((recipe, index) => (*/}
                {/*        // <li key={index}>*/}
                {/*        //     {recipe.id + " - " + recipe.name}*/}
                {/*        // </li>*/}
                {/*        <RecipeItem key={index} />*/}
                {/*    ))}*/}
                {/*</ul>*/}
            </div>
        );
    }
}

export default RecipesPage;