import React, {Component} from 'react';
import IngredientsService from "../../services/ingredients.service";

class IngredientList extends Component {
    constructor(props) {
        super(props);

        // this.fetchIngredients = this.fetchIngredients.bind(this);

        this.state = {
            ingredients: [],
            currentPage: 1,
            totalPages: null,
            totalItems: null
        }
    }

    componentDidMount() {
        this.fetchIngredients();
    }

    fetchIngredients() {
        IngredientsService.getAll()
            .then(response => {

                console.log(response.data);
                this.setState({ingredients: response.data});
                // console.log(this.state.ingredients);
            })
            .catch(e => {
                console.log(e);
            })
    }

    render() {
        const { ingredients } = this.state.ingredients;

        return (
            <div>
                <ul className="list-group">
                    {ingredients && ingredients.map((ingredient, index) => (
                        <li key={index}>
                            {ingredient}
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default IngredientList;