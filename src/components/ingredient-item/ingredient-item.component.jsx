import React, { useState } from "react";
import { Link } from "react-router-dom";
import { UpdateModal } from "../ingredient-update/ingredient-update-modal.component";
import "./ingredient-item.styles.scss";

const IngredientItem = ({ id, name, pricePerUnit, imageSrc, measurementUnitByMeasurementUnitId, customClickEvent}) => {

    const handleClick = () => {
        let fields = {id, name, pricePerUnit, imageSrc, measurementUnitByMeasurementUnitId};
        customClickEvent(fields);
    }

    return(
      //on link click we open the update modal maybe

      <div className="ingredient-item" onClick={handleClick}>
        <div
          className="image"
          style={{
            backgroundImage: `url(${imageSrc})`,
          }}
        />
        <div className="ingredient-item-footer">
          <span className="name">{name}</span>
        </div>
      </div>
    )
};

export default IngredientItem;
