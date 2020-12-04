import React from 'react';

import './recipe-item.styles.scss';

const RecipeItem = ({id, name, imageSrc, prepTime, cookTime}) => (
    <div className='recipe-item'>
        <div
            className='image'
            style={{
                backgroundImage: `url(${imageSrc})`
            }}
        />
        <div className='recipe-item-footer'>
            <span className='name'>{name}</span>
            <span className='prep-time'>{prepTime} min</span>
            <span className='cook-time'>| {cookTime} min</span>
        </div>

    </div>
)

export default RecipeItem;