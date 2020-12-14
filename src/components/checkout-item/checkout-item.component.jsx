import React from 'react';

import './checkout-item.styles.scss';

const CheckoutItem = ({cartItem: {name, imageSrc, price, quantity}}) => {
    return (
        <div className="checkout-item">
            <div className="image-container">
                <img src={imageSrc} alt="item" />
            </div>
            <span className="name">{name}</span>
            <span className="quantity">{quantity}</span>
            <span className="price">{price}</span>
            <div className="remove-button">&#10005;</div>
        </div>
    );
};

export default CheckoutItem;