import React, { Component } from "react";
import clothes from "../../../assets/assets/Icon-1.svg";
import arrows from "../../../assets/assets/Icon-4.svg";

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
        <div className="form-summary-container">
          <div className="form-summary-address">
            <h3 className="form-title">Adres odbioru:</h3>
            <div className="form-address-box">
              <div className="form-data">
                <span className="data-title">Ulica</span>
                <span className="data-value">Kowalska</span>
              </div>
              <div className="form-data">
                <span className="data-title">Miasto</span>
                <span className="data-value">Poznań</span>
              </div>
              <div className="form-data">
                <span className="data-title">Kod pocztowy</span>
                <span className="data-value">66-666</span>
              </div>
              <div className="form-data">
                <span className="data-title">Numer telefonu</span>
                <span className="data-value">111111111</span>
              </div>
            </div>
          </div>
          <div className="form-summary-date">
            <h3 className="form-title">Termin odbioru:</h3>
            <div className="form-address-box">
              <div className="form-data">
                <span className="data-title">Data</span>
                <span className="data-value">12.12.2019</span>
              </div>
              <div className="form-data">
                <span className="data-title">Godzina</span>
                <span className="data-value">12:12</span>
              </div>
              <div className="form-data last-input">
                <span className="data-title">Uwagi dla kuriera</span>
                <span className="data-value">blablabla</span>
              </div>
            </div>
          </div>
        </div>
        <div className="form-btns">
          <button className="form-prev-btn">Wstecz</button>
          <button className="form-next-btn">Potwierdzam</button>
        </div>
      </div>
    );
  }
}

export default FormSummary;
