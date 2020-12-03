import React from 'react';

import RecipeItem from "../recipe-item/recipe-item.component";

import './recipe-list.styles.scss';

const RecipeList = (props) => (
    <div className='recipe-list'>
        {/*<h1 className='title'>{title.toUpperCase()}</h1>*/}
        <div className='preview'>
            {
                props.recipes.map(({id, ...otherRecipeProps}) => (
                    <RecipeItem key={id} {...otherRecipeProps}/>
                ))
            }
        </div>
    </div>
)

export default RecipeList;