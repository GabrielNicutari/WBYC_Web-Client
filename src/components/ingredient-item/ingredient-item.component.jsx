import React from 'react';
import { Link } from "react-router-dom";

import './ingredient-item.styles.scss';

const IngredientItem = ({id, name, imageSrc}) => (

    //on link click we open the update modal maybe
    <Link className='ingredient-item'>
        <div
            className='image'
            style={{
                backgroundImage: `url(${imageSrc})`
            }}
        />
        <div className='ingredient-item-footer'>
            <span className='name'>{name}</span>
        </div>
    </Link>
)

export default IngredientItem;