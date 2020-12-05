import React, {Component} from 'react';

import http from "../../services/http.service";

import './recipe-page.styles.scss';

class RecipePage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            recipe: {
                id: null,
                name: "",
                description: "",
                author: "",
                prepTime: null,
                cookTime: null,
                portions: null,
                instructions: "",
                iconSrc: "",
                imageSrc: "",
                recipeHasIngredientsById: []
            },
            //ingredients: []
        }
    }

    componentDidMount() {
        this.getRecipe(this.props.match.params.id);
    }

    getRecipe(id) {
        http
            .get("/recipes/" + id)
            .then((response) => {
                this.setState({
                    recipe: response.data
                });
                // this.setState({
                //     ingredients: response.data.recipeHasIngredientsById  //only if we feel like we need it later
                // })
                console.log(response.data);
            })
            .catch((e) => {
                console.log(e);
            })
    }


    render() {
        const { recipe } = this.state;

        return (
            <div className='recipe-page'>
                <div
                    className='banner'
                    style={{
                        backgroundImage: `url(${recipe.imageSrc})`
                    }}
                />
                <div className='title'>
                    <span className='recipe-name'>
                        {recipe.name}
                    </span>

                    <span className='recipe-description'>
                        {recipe.description}
                    </span>
                </div>

                Ingredients: {recipe.recipeHasIngredientsById.map((ingredient) => (
                    <div key={ingredient.id}>Unit Size: {ingredient.unitSize}</div>
                ))}

            </div>
        );
    }
}

export default RecipePage;