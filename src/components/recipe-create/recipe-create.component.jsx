import React, {Component} from 'react';
import http from '../../services/http.service';
import './recipe-create.style.scss'

export default class CreateRecipe extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: null,
            name: "",
            description: "",
            author: "",
            prepTime: 0,
            cookTime: 0,
            portions: 0,
            instructions: "",
            iconSrc: "",
            imageSrc: "",
            price: 0,

            unitSize: 0,
            // recipesByRecipeId: {id: ""},
            ingredientsByIngredientId: {id: null}

        };
    }

    onChangeName = e => {
        this.setState({name: e.target.value} );
    }

   onChangeDescription = e => {
        this.setState({description: e.target.value} );
   }

    onChangeAuthor = e => {
        this.setState({author: e.target.value} )
    }

    onChangePrepTime = e => {
        this.setState({prepTime: e.target.value} )
    }

    onChangeCookTime = e => {
        this.setState({cookTime: e.target.value} )
    }

    onChangePortions = e => {
        this.setState({portions: e.target.value} )
    }

    onChangeInstructions = e => {
        this.setState({instructions: e.target.value} )
    }

    onChangeIconSrc =  e => {
        this.setState({iconSrc: e.target.value} )
    }

    onChangeImageSrc = e => {
        this.setState({imageSrc: e.target.value})
    }

    onChangePrice = e => {
        this.setState({price: e.target.value} )
    }

    onChangeUnitSize = e => {
        this.setState({unitSize: e.target.value} )
    }

    onChangeIngredientsByIngredientId = e => {
        this.setState({ingredientsByIngredientId: {id: e.target.value} } )
    }

    async saveRecipe() {
        // event.preventDefault();

        let newRecipe = {
            name: this.state.name,
            description: this.state.description,
            author: this.state.author,
            prepTime: this.state.prepTime,
            cookTime: this.state.cookTime,
            portions: this.state.portions,
            instructions: this.state.instructions,
            iconSrc: this.state.iconSrc,
            imageSrc: this.state.imageSrc,
            price: this.state.price,
        }

        const request = await http.post("/recipes/create", newRecipe);
        console.log("Request: " + request.data);

        // http
        //     .post("/recipes/create", newRecipe)
        //     .then(r => {
        //         this.setState({
        //             id: r.data.id,
        //             name: r.data.name,
        //             description: r.data.description,
        //             author: r.data.author,
        //             prepTime: r.data.prepTime,
        //             cookTime: r.data.cookTime,
        //             portions: r.data.portions,
        //             instructions: r.data.instructions,
        //             iconSrc: r.data.iconSrc,
        //             imageSrc: r.data.imageSrc,
        //             price: r.data.price
        //         });
        //         console.log("dataID: " + r.data.id);
        //     })
        //     .catch(e => {
        //         console.log(e);
        //     })

        // console.log("Id: " + this.state.id);
        // console.log("Name: " + this.state.name);

        // let newRecipeHasIngredients = {
        //     unitSize: this.state.unitSize,
        //     recipesByRecipeId: {id: 137},
        //     ingredientsByIngredientId: {id: this.state.ingredientsByIngredientId.id}
        // }
        //
        // console.log("newRecipeHasIngredients: " + newRecipeHasIngredients.recipesByRecipeId.id);

        // http
        //     .post("/recipes/insertIntoRecipeHasIngredients", newRecipeHasIngredients)
        //     .then(r => {
        //         this.setState({
        //             unitSize: r.data.unitSize,
        //             ingredientsByIngredientId: {id: r.data.ingredientsByIngredientId}
        //         });
        //     })
        //     .catch(e => {
        //         console.log(e);
        //     })

    }

    render() {

        // console.log(this.state);

        return(
            <div className='container'>

                <form onSubmit={this.saveRecipe}>
                    <div className="field1-2">
                        <div>
                            <label>Name</label><br/>
                            <input
                                type="text" id="name" required value={this.state.name}
                                onChange={this.onChangeName} name="name"
                            />
                        </div>
                        <div>
                            <label>Author</label><br/>
                            <input
                                type="text" id="author" required
                                value={this.state.author} onChange={this.onChangeAuthor} name="author"
                            />
                        </div>
                    </div>

                    <div>
                        <label>Description: </label><br/>
                        <textarea className="text-box"
                             placeholder="Recipe Description"
                             value={this.state.description} onChange={this.onChangeDescription}
                             id="description" name="description"
                        />
                    </div>

                    <div className="field4-5-6">
                        <div>
                            <label>Prep Time: </label><br/>
                            <input
                                type="text" pattern="[0-9]{1,4}" required
                                value={this.state.prepTime} onChange={this.onChangePrepTime}
                                name="prepTime" id="prepTime"
                            />
                        </div>

                        <div>
                            <label>Cook Time: </label><br/>
                            <input
                                type="number" min={0} step={1} required
                                value={this.state.cookTime} onChange={this.onChangeCookTime}
                                id="cookTime" name="cookTime"
                            />
                        </div>

                        <div>
                            <label>Portions: </label><br/>
                            <input
                                type="number" min={0} step={1} required
                                value={this.state.portions} onChange={this.onChangePortions}
                                id="portions" name="portions"
                            />
                        </div>
                    </div>

                    <div className="instructions">
                        <label>Instructions: </label><br/>
                        <textarea className="text-box"
                            placeholder="Recipe Instructions"
                            id="instructions" name="instructions" required
                            value={this.state.instructions} onChange={this.onChangeInstructions}

                        />
                    </div>
                    <div className="url-source">
                        <label>Icon Source: </label><br/>
                        <input
                            type="text" id="iconSrc" name="iconSrc" required
                            value={this.state.iconSrc} onChange={this.onChangeIconSrc}
                        />
                    </div>
                    <div className="url-source">
                        <label>Image Source: </label><br/>
                        <input
                            type="text" id="imgSrc" name="imgSrc" required
                            value={this.state.imageSrc} onChange={this.onChangeImageSrc}
                        />
                    </div>

                    <div className="price">
                        <label>Price:</label><br/>
                        <input
                            type="number" id="price" name="price"
                            value={this.state.price} onChange={this.onChangePrice}
                        />
                    </div>


                    <div>
                        <label>Ingredient Size: </label><br/>
                        <input
                            type="number" id="unitSize" name="unitSize" required
                            value={this.state.unitSize} onChange={this.onChangeUnitSize}
                        />
                    </div>

                    <div>
                        <label>Ingredient: </label>
                        <select required id="ingredientsByIngredientId" name="ingredientsByIngredientId"
                                onChange={this.onChangeIngredientsByIngredientId}
                        >
                            {
                                <option value="" selected disabled hidden> Select..</option>
                            }
                            {
                                this.props.ingredients.map(item => (
                                    <option key={item.id} value={item.id}>
                                        {item.name}
                                    </option>
                                ))
                            }
                        </select>
                    </div>

                    <button className="btn-small btn-submit"  type="submit">
                        Submit
                    </button>

                    </form>
            </div>
        );
    }
}