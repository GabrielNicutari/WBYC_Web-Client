import React, {Component} from 'react';
import IngredientsService from "../../services/ingredients.service";

class IngredientList extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            ingredients: [],
            currentPage: 1,
            totalPages: null,
            totalItems: null
        }
    }

    componentDidMount() {
        this.fetchAll();
    }

    fetchAll() {
        IngredientsService.getAll()
            .then(response => {

                console.log(response.data);
                this.setState({totalPages: response.data.totalPages});
                this.setState({totalItems: response.data.totalItems});
                this.setState({ingredients: response.data.ingredients});
            })
            .catch(e => {
                console.log(e);
            })
    }

    render() {
        const { ingredients } = this.state;

        return (
            <div>
                <ul className="list-group">
                    {ingredients && ingredients.map((ingredient, index) => (
                        <li key={index}>
                            {ingredient.name}
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default IngredientList;