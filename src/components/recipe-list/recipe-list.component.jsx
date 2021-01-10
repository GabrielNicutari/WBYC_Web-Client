import React from 'react';

import RecipeItem from "../recipe-item/recipe-item.component";

import './recipe-list.styles.scss';
import nothingWasFound from "../../assets/nothing-found.png";

const RecipeList = (props) => (
    <div>
        <div className='recipe-list'>
            <div className='preview'>
                {
                    (props.size > 0) ?
                        (
                            props.recipes
                                .map((item) => (
                                    <RecipeItem key={item.id} item={item}/>
                                ))
                        ) :
                        (
                            <div className="checkout-image-container">
                                <img src={nothingWasFound} className="image" alt="nothing" />
                                <h1 className="text">Nothing Was Found</h1>
                            </div>
                        )

                }
            </div>
        </div>
    </div>
)

export default RecipeList;