import React from 'react';

import './cart-item.styles.scss';

const CartItem = ({item: {imageSrc, price, name, quantity}}) => (
    <div className="cart-item">
        <img src={imageSrc} alt="item" />
        <div className="item-details">
            <span className="name">{name}</span>
            <span className="price">{price}DKK</span>
            {quantity} x {price}DKK
        </div>
    </div>
)

export default CartItem;