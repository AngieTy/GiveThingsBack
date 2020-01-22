import React, { Component } from "react";

class FormStepFour extends Component {
  //powrot z 4 etapu do 3
  handlePrevStep = e => {
    e.preventDefault();
    this.props.prev();
  };
  //przejscie do podsumowania
  handleNextStep = e => {
    e.preventDefault();
    this.props.next();
  };

  //pobranie wartosci
  //ulicy
  handleStreetValue = e => {
    let value = e.target.value;
    this.props.value1(value);
  };

  //miasta
  handleCityValue = e => {
    let value = e.target.value;
    this.props.value2(value);
  };

  //kodu pocztowego
  handlePostCodeValue = e => {
    let value = e.target.value;
    this.props.value3(value);
  };

  //nr tel
  handlePhoneValue = e => {
    let value = e.target.value;
    this.props.value4(value);
  };

  //data
  handleDateValue = e => {
    let value = e.target.value;
    this.props.value5(value);
  };

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
                <input type="text" onChange={this.handleStreetValue} />
              </label>
              <label className="form-input">
                <span className="input-title">Miasto</span>
                <input type="text" onChange={this.handleCityValue} />
              </label>
              <label className="form-input">
                <span className="input-title">Kod pocztowy</span>
                <input
                  type="text"
                  pattern="[0-9]{2}\-[0-9]{3}"
                  onChange={this.handlePostCodeValue}
                />
              </label>
              <label className="form-input">
                <span className="input-title">Numer telefonu</span>
                <input type="text" onChange={this.handlePhoneValue} />
              </label>
            </div>
          </div>
          <div className="form-pickup-date">
            <h3 className="form-title">Termin odbioru:</h3>
            <div className="form-address-box">
              <label className="form-input">
                <span className="input-title">Data</span>
                <input type="date" onChange={this.handleDateValue} />
              </label>
              <label className="form-input">
                <span className="input-title">Godzina</span>
                <input type="time" />
              </label>
              <label className="form-input last-input">
                <span className="input-title">Uwagi dla kuriera</span>
                <textarea></textarea>
              </label>
            </div>
          </div>
        </div>
        <div className="form-btns">
          <button className="form-prev-btn" onClick={this.handlePrevStep}>
            Wstecz
          </button>
          <button className="form-next-btn" onClick={this.handleNextStep}>
            Dalej
          </button>
        </div>
      </div>
    );
  }
}

export default FormStepFour;
