import React, { Component } from "react";

class FormStepOne extends Component {
  //pobranie wartosci do przekania rodzicowi
  handleGetInputValue = e => {
    if (typeof this.props.type === "function") {
      let value = e.target.parentElement.innerText;
      this.props.type(value);
    }
  };

  //zmiana widoku na następny
  handleNextStep = e => {
    e.preventDefault();
    this.props.next();
  };

  render() {
    return (
      <div className="form-step-one">
        <div className="form-step-number">Krok 1/4</div>
        <h2 className="form-header">Zaznacz co chcesz oddać:</h2>
        <div className="form-type">
          <label className="form-type-input">
            <input
              type="radio"
              value="type"
              name="type"
              onClick={this.handleGetInputValue}
            />
            ubrania, które nie nadają się do ponownego użycia
          </label>
          <label className="form-type-input">
            <input
              type="radio"
              value="type"
              name="type"
              onClick={this.handleGetInputValue}
            />
            ubrania, do wyrzucenia
          </label>
          <label className="form-type-input">
            <input
              type="radio"
              value="type"
              name="type"
              onClick={this.handleGetInputValue}
            />
            zabawki
          </label>
          <label className="form-type-input">
            <input
              type="radio"
              value="type"
              name="type"
              onClick={this.handleGetInputValue}
            />
            książki
          </label>
          <label className="form-type-input">
            <input
              type="radio"
              value="type"
              name="type"
              onClick={this.handleGetInputValue}
            />
            inne
          </label>
        </div>
        <div className="form-btns">
          <button className="form-next-btn" onClick={this.handleNextStep}>
            dalej
          </button>
        </div>
      </div>
    );
  }
}

export default FormStepOne;
