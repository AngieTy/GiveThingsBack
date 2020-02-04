import React, { Component } from "react";

class FormStepTwo extends Component {
  //przycisk powrotu do 1 kroku
  handlePrevStep = e => {
    e.preventDefault();
    this.props.prev();
  };
  //przycisk do kroku 3
  handleNextStep = e => {
    e.preventDefault();
    this.props.next();
  };

  //pobranie wartosci z 2 etapu
  handleGetBagsNumber = e => {
    e.preventDefault();
    if (typeof this.props.bags === "function") {
      let value = e.target.value;
      this.props.bags(value);
    }
  };

  render() {
    return (
      <div className="form-step-two">
        <div className="form-step-number">Krok 2/4</div>
        <h2 className="form-header">
          Podaj liczbę 60l worków, w ktore spakowałeś/aś rzeczy:
        </h2>
        <div className="form-dropdown-box">
          <span className="form-dropdown-title">Liczba 60l worków:</span>
          <select
            className="form-dropdown"
            name="number"
            onChange={this.handleGetBagsNumber}
          >
            <option> - wybierz -</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
        </div>
        <div className="form-btns">
          <button className="form-prev-btn" onClick={this.handlePrevStep}>
            wstecz
          </button>
          <button className="form-next-btn" onClick={this.handleNextStep}>
            dalej
          </button>
        </div>
      </div>
    );
  }
}

export default FormStepTwo;
