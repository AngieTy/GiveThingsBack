import React, { Component } from "react";

class FormStepOne extends Component {
  render() {
    return (
      <div className="form-step-one">
        <div className="form-step-number">Krok 1/4</div>
        <h2 className="form-header">Zaznacz co chcesz oddać:</h2>
        <div className="form-type">
          <label className="form-type-input">
            <input type="radio" value="type" name="type" />
            ubrania, które nie nadają się do ponownego użycia
          </label>
          <label className="form-type-input">
            <input type="radio" value="type" name="type" />
            ubrania, do wyrzucenia
          </label>
          <label className="form-type-input">
            <input type="radio" value="type" name="type" />
            zabawki
          </label>
          <label className="form-type-input">
            <input type="radio" value="type" name="type" />
            książki
          </label>
          <label className="form-type-input">
            <input type="radio" value="type" name="type" />
            inne
          </label>
        </div>
      </div>
    );
  }
}

export default FormStepOne;
