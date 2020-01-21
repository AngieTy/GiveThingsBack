import React, { Component } from "react";
import clothes from "../../../assets/assets/Icon-1.svg";
import arrows from "../../../assets/assets/Icon-2.svg";

class FormSummary extends Component {
  render() {
    return (
      <div className="form-summary">
        <h2 className="form-summary-header">Podsumowanie Twojej darowizny</h2>
        <div className="form-summary-banner">
          <h3 className="form-summary-banner-title">Oddajesz:</h3>
          <div className="form-summary-box">
            <img src={clothes} alt="tshirt-img" />
            <span className="form-summary-clothes">
              4 worki, ubrania w dobrym stanie, dzieciom
            </span>
          </div>
          <div className="form-summary-box">
            <img src={arrows} alt="recycle-img" />
            <span className="form-summary-clothes">
              do lokalizacji: Warszawa
            </span>
          </div>
        </div>
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
      </div>
    );
  }
}

export default FormSummary;
