import React, {Component} from 'react';
import http from "../../services/http.service";

class IngredientList extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            ingredients: [],
            currentPage: 0,
            totalPages: null,
            totalItems: null
        }
    }

    componentDidMount() {
        this.fetchAll(this.state.currentPage);
    }

    fetchAll(currentPage) {
        http.get("/ingredients?page=" + currentPage)
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
                    {ingredients.map((ingredient, index) => (
                        <li key={index}>
                            {ingredient.id + " - " + ingredient.name}
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default IngredientList;