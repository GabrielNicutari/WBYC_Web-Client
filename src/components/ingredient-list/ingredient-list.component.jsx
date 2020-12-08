import React from "react";

import IngredientItem from "../ingredient-item/ingredient-item.component";

import "./ingredient-list.styles.scss";

const IngredientList = (props) => (
  <div>
    <div className="ingredient-list">
      <div className="preview">
        {props.ingredients.map(({ id, ...otherIngredientProps }) => (
          <IngredientItem key={id} id={id} {...otherIngredientProps} />
        ))}
      </div>
    </div>
  </div>
);

export default IngredientList;
