import React, {Component} from 'react';
import http from '../../services/http.service';
import './recipe-update.styles.scss';
import { Redirect } from 'react-router';

export default class UpdateRecipe extends Component {
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
            recipeHasIngredientsById: []
        };
    }

    componentDidMount() {
        this.setState(this.props.state);
        console.log(this.props.state);
    }



    onChangeName = e => {
        this.setState({name: e.target.value});
    }

   onChangeDescription = e => {
        this.setState({description: e.target.value});
   }

    onChangeAuthor = e => {
        this.setState({author: e.target.value})
    }

    onChangePrepTime = e => {
        this.setState({prepTime: e.target.value})
    }

    onChangeCookTime = e => {
        this.setState({cookTime: e.target.value})
    }

    onChangePortions = e => {
        this.setState({portions: e.target.value})
    }

    onChangeInstructions = e => {
        this.setState({instructions: e.target.value})
    }

    onChangeIconSrc =  e => {
        this.setState({iconSrc: e.target.value})
    }

    onChangeImageSrc = e => {
        this.setState({imageSrc: e.target.value})
    }

    updateRecipe = () => {
        console.log(this.state.id);

        http
            .put(
                "/recipes/update/" + this.state.id,
                this.state
            )
            .then((response) => {
                console.log(response.data);
                this.props.history.push("/recipes/update/" + this.state.id);
            })
            .catch((e) => {
                console.log(e);
            });

    }


    render() {
        console.log("state:" + this.state.name);
        console.log("id:" + this.state.id);

        return(
            <div className='container'> =====Update Recipe=====

                <form>
                    <div>
                        <label class="floating-label">Name: </label>
                        <input
                            class="inputText"
                            type="text" id="name" required value={this.state.name}
                            onChange={this.onChangeName} name="name"
                        />
                    </div>

                    <div>
                        <label class="floating-label">Description: </label>
                        <textarea
                            class="inputText"
                             placeholder="Recipe Description" rows={5} cols={50}
                             value={this.state.description} onChange={this.onChangeDescription}
                             id="description" name="description"
                        />
                    </div>

                    <div>
                        <label class="floating-label">Author: </label>
                        <input
                            class="inputText"
                            type="text" id="author" required
                            value={this.state.author} onChange={this.onChangeAuthor} name="author"
                        />
                    </div>

                    <div>
                        <label class="floating-label">Preparation Time: </label>
                        <input
                            class="inputText"
                            type="number" min={0} step={1} required
                            value={this.state.prepTime} onChange={this.onChangePrepTime}
                            name="prepTime" id="prepTime"
                        />
                    </div>

                        <label class="floating-label">Cook Time: </label>
                        <input
                            class="inputText"
                            type="number" min={0} step={1} required
                            value={this.state.cookTime} onChange={this.onChangeCookTime}
                            id="cookTime" name="cookTime"
                        />

                    <div>
                        <label class="floating-label">Portions: </label>
                        <input
                            class="inputText"
                            type="number" min={0} step={1} required
                            value={this.state.portions} onChange={this.onChangePortions}
                            id="portions" name="portions"
                        />
                    </div>

                    <div>
                        <label class="floating-label">Instructions: </label>
                        <input
                            class="inputText"
                            type="text" id="instructions" name="instructions" required
                            value={this.state.instructions} onChange={this.onChangeInstructions}

                        />
                    </div>

                    <div>
                        <label class="floating-label">Icon Source: </label>
                        <input
                            class="inputText"
                            type="text" id="iconSrc" name="iconSrc" required
                            value={this.state.iconSrc} onChange={this.onChangeIconSrc}

                        />
                    </div>

                    <div>
                        <label class="floating-label">Image Source: </label>
                        <input
                            class="inputText"
                            type="text" id="imgSrc" name="imgSrc" required
                            value={this.state.imageSrc} onChange={this.onChangeImageSrc}
                        />
                    </div>

                    <button onClick={this.updateRecipe} type="submit">
                        Submit
                    </button>

                    </form>
            </div>
        );
    }
}