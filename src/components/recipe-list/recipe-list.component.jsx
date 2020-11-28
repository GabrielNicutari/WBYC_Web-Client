import React, {Component} from 'react';
import RecipesService from "../../services/recipes.service";

class RecipeList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            recipes: [],
            currentPage: 1,
            totalPages: null,
            totalItems: null
        }
    }

    componentDidMount() {
        this.fetchAll();
    }

    fetchAll() {
        RecipesService.getAll()
            .then(response => {
                console.log(response.data);

                this.setState({totalPages: response.data.totalPages})
                this.setState({totalItems: response.data.totalItems})
                this.setState({recipes: response.data.recipes});
            })
            .catch(e => {
                console.log(e);
            })
    }

    render() {
        const { recipes } = this.state;

        return (
            <div>
                <ul className="list-group">
                    {recipes && recipes.map((recipe, index) => (
                        <li key={index}>
                            {recipe.id + " " + recipe.name}
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default RecipeList;