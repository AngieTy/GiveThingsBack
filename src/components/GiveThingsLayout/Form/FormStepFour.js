import React, { Component } from "react";

class FormStepFour extends Component {
  render() {
    return (
      <div className="form-step-four">
        <div className="form-number">Krok 4/4</div>
        <h2 className="form-header">
          Podaj adres oraz termin odbioru rzecz przez kuriera
        </h2>
        <div className="form-pickup-container">
          <div className="form-pickup-address">
            <h3 className="form-title">Adres odbioru:</h3>
            <div className="form-address-box">
              <label className="form-input">
                <span className="input-title">Ulica</span>
                <input type="text" />
              </label>
              <label className="form-input">
                <span className="input-title">Miasto</span>
                <input type="text" />
              </label>
              <label className="form-input">
                <span className="input-title">Kod pocztowy</span>
                <input type="text" pattern="[0-9]{2}\-[0-9]{3}" />
              </label>
              <label className="form-input">
                <span className="input-title">Numer telefonu</span>
                <input type="text" />
              </label>
            </div>
          </div>
          <div className="form-pickup-date">
            <h3 className="form-title">Termin odbioru:</h3>
            <div className="form-address-box">
              <label className="form-input">
                <span className="input-title">Data</span>
                <input type="text" />
              </label>
              <label className="form-input">
                <span className="input-title">Godzina</span>
                <input type="text" />
              </label>
              <label className="form-input last-input">
                <span className="input-title">Uwagi dla kuriera</span>
                <textarea></textarea>
              </label>
            </div>
          </div>
        </div>
        <div className="form-btns">
          <button className="form-prev-btn">wstecz</button>
          <button className="form-next-btn">dalej</button>
        </div>
      </div>
    );
  }
}

export default FormStepFour;
