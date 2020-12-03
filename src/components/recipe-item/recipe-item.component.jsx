import React from 'react';

import './recipe-item.styles.scss';

const RecipeItem = ({id, name, imageSrc}) => (
    <div className='recipe-item'>
        <div
            className='image'
            style={{
                backgroundImage: `url(${imageSrc})`
            }}
        />
        <div className='recipe-item-footer'>
            <span className='name'>{name}</span>
        </div>

    </div>
)

export default RecipeItem;