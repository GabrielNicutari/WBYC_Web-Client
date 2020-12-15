import React from 'react';

import RecipeItem from "../recipe-item/recipe-item.component";

import './recipe-list.styles.scss';

const RecipeList = (props) => (
    <div>
        <div className='recipe-list'>
            <div className='preview'>
                {
                    props.recipes
                        .map((item) => (
                            <RecipeItem key={item.id} item={item}/>
                        ))
                }
            </div>
        </div>
    </div>
)

export default RecipeList;