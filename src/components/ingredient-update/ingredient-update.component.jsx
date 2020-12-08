import React, { Component } from "react";
import http from "../../services/http.service";
import "./ingredient-update.styles.scss";
import { Redirect } from "react-router";

export default class UpdateIngredient extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: null,
      name: "",
      pricePerUnit: 0.0,
      imageSrc: "",
      measurementUnitByMeasurementUnitId: { id: undefined },
    };
  }

  componentDidMount() {
    this.setState(this.props.state);
    console.log(this.props.state);
  }

  onChangeName = (e) => {
    this.setState({ name: e.target.value });
  };

  onChangePricePerUnit = (e) => {
    this.setState({ pricePerUnit: e.target.value });
  };

  onChangeImageSrc = (e) => {
    this.setState({ imageSrc: e.target.value });
  };

  onChangeMeasurementUnit = (e) => {
    this.setState(
      { measurementUnitByMeasurementUnitId: { id: e.target.value } },
      () => console.log(this.state)
    );
  };

  updateIngredient = () => {
    console.log(this.state.id);

    http
      .put("/ingredient/update/" + this.state.id, this.state)
      .then((response) => {
        console.log(response.data);
        this.props.history.push("/ingredients/ingredients" + this.state.id);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  render() {
    return (
      <div className="container">
        <form>
          <div className="field1-2">
            <div>
              <label>Name</label>
              <br />
              <input
                type="text"
                id="name"
                required
                value={this.state.name}
                onChange={this.onChangeName}
                name="name"
              />
            </div>
            <div>
              <label>Price/Unit</label>
              <br />
              <input
                type="text"
                id="pricePerUnit"
                required
                value={this.state.pricePerUnit}
                onChange={this.onChangePricePerUnit}
                name="pricePerUnit"
              />
            </div>
          </div>

          <div className="field3-4">
            <div>
              <label>Image Source</label>
              <br />
              <input
                type="text"
                id="imageSrc"
                requiered
                value={this.state.imageSrc}
              />
            </div>
          </div>
          <div className="field3-4">
            <div>
              <label>Measurement</label>
              <br />
              <input
                type="text"
                id="measurementUnitByMeasurementUnitId"
                requiered
                value={this.state.measurementUnitByMeasurementUnitId}
              />
            </div>
          </div>

          <button
            class="btn btn-submit"
            onClick={this.updateRecipe}
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}
