import React, { Component } from "react";

class FormStepTwo extends Component {
  render() {
    return (
      <div className="form-step-two">
        <div className="form-step-number">Krok 2/4</div>
        <h2 className="form-header">
          Podaj liczbę 60l worków, w ktore spakowałeś/aś rzeczy:
        </h2>
        <div className="form-dropdown-box">
          <span className="form-dropdown-title">Liczba 60l worków:</span>
          <select className="form-dropdown" name="number">
            <option> - wybierz -</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
        </div>
      </div>
    );
  }
}

export default FormStepTwo;
