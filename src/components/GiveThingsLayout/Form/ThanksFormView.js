import React, { Component } from "react";
import ImgDeco from "../../../assets/assets/Decoration.svg";

class ThanksFormView extends Component {
  render() {
    return (
      <div className="view">
        <h2 className="view-header">
          Dziękujemy za przesłanie formularza Na maila prześlemy wszelkie
          informacje o odbiorze.
        </h2>
        <img src={ImgDeco} alt="decoration-img" />
      </div>
    );
  }
}

export default ThanksFormView;
