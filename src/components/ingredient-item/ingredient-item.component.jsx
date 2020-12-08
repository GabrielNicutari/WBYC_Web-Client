import React from "react";
import { Link } from "react-router-dom";
import { UpdateModal } from "../../components/ingredient-update/ingredient-update-modal.component";
import "./ingredient-item.styles.scss";

const IngredientItem = ({ state, show, close }) => (
  //on link click we open the update modal maybe
  <div className="ingredient-item">
    <div>
      {show ? (
        <div onClick={this.showModal} className="back-drop show"></div>
      ) : (
        <div className="back-drop"></div>
      )}
      <UpdateModal show={this.show} close={this.close} state={this.state} />
    </div>
    <div
      className="image"
      style={{
        backgroundImage: `url(${this.state.imageSrc})`,
      }}
    />
    <div className="ingredient-item-footer">
      <span className="name">{this.state.name}</span>
    </div>
  </div>
);

export default IngredientItem;
