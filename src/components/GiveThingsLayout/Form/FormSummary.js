import React, { Component } from "react";
import clothes from "../../../assets/assets/Icon-1.svg";
import arrows from "../../../assets/assets/Icon-4.svg";

class FormSummary extends Component {
  //powrot do etapu 4

  handlePrevStep = e => {
    e.preventDefault();
    this.props.prev();
  };

  //przejscie to ostatniego etapu i wyslanie formularza

  handleSubmitForm = e => {
    e.preventDefault();
    this.props.next();
    this.props.sendData();
  };
  render() {
    return (
      <div className="form-summary">
        <h2 className="form-summary-header">Podsumowanie Twojej darowizny</h2>
        <div className="form-summary-banner">
          <h3 className="form-summary-banner-title">Oddajesz:</h3>
          <div className="form-summary-box">
            <img src={clothes} alt="tshirt-img" />
            <span className="form-summary-clothes">
              {this.props.data.bags}, {this.props.data.type},{" "}
              {this.props.data.helpGroups}
            </span>
          </div>
          <div className="form-summary-box">
            <img src={arrows} alt="recycle-img" />
            <span className="form-summary-clothes">
              do lokalizacji: {this.props.data.localization}
            </span>
          </div>
        </div>
        <div className="form-summary-container">
          <div className="form-summary-address">
            <h3 className="form-title">Adres odbioru:</h3>
            <div className="form-address-box">
              <div className="form-data">
                <span className="data-title">Ulica</span>
                <span className="data-value">{this.props.data.street}</span>
              </div>
              <div className="form-data">
                <span className="data-title">Miasto</span>
                <span className="data-value">{this.props.data.city}</span>
              </div>
              <div className="form-data">
                <span className="data-title">Kod pocztowy</span>
                <span className="data-value">{this.props.data.postCode}</span>
              </div>
              <div className="form-data">
                <span className="data-title">Numer telefonu</span>
                <span className="data-value">{this.props.data.phone}</span>
              </div>
            </div>
          </div>
          <div className="form-summary-date">
            <h3 className="form-title">Termin odbioru:</h3>
            <div className="form-address-box">
              <div className="form-data">
                <span className="data-title">Data</span>
                <span className="data-value">{this.props.data.date}</span>
              </div>
              <div className="form-data">
                <span className="data-title">Godzina</span>
                <span className="data-value">{this.props.data.time}</span>
              </div>
              <div className="form-data last-input">
                <span className="data-title">Uwagi dla kuriera</span>
                <span className="data-value">{this.props.data.note}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="form-btns">
          <button className="form-prev-btn" onClick={this.handlePrevStep}>
            Wstecz
          </button>
          <button className="form-next-btn" onClick={this.handleSubmitForm}>
            Potwierdzam
          </button>
        </div>
      </div>
    );
  }
}

export default FormSummary;
