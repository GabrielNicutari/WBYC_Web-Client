import React from 'react';
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import CustomButton from "../custom-button/custom-button.component";
import { addItem } from "../../redux/cart/cart.actions";

import './recipe-item.styles.scss';

const RecipeItem = ({ item, addItem }) => {
    const { id, name, imageSrc, prepTime, cookTime } = item;

    let disableLink = false;

    const handleHover = () => {
        disableLink = !disableLink;
    }

    return (
        <Link className='recipe-item' onClick={e => {
            if(disableLink === true) {
                e.preventDefault();
            }
        }} to={"/recipes/" + id}
        >
            <div
                className='image'
                style={{
                    backgroundImage: `url(${imageSrc})`
                }}
            />
            <div className='recipe-item-footer'>
                <span className='name'>{name} {id}</span>
                <span className='prep-time'>{prepTime} min</span>
                <span className='cook-time'>| {cookTime} min</span>
            </div>

            <CustomButton onMouseOver={handleHover} onMouseOut={handleHover} onClick={() => addItem(item)} inverted> Add To Cart</CustomButton>
        </Link>
    )
}

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(RecipeItem);