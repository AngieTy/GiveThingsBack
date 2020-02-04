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
  handleGetStreetValue = e => {
    let value = e.target.value;
    this.props.street(value);
  };

  //miasta
  handleGetCityValue = e => {
    let value = e.target.value;
    this.props.city(value);
  };

  //kodu pocztowego
  handlePostCodeValue = e => {
    let value = e.target.value;
    this.props.postCode(value);
  };

  //nr tel
  handleGetPhoneValue = e => {
    let value = e.target.value;
    this.props.phone(value);
  };

  //data
  handleGetPickupDate = e => {
    let value = e.target.value;
    this.props.date(value);
  };

  //czas
  handleGetPickupTime = e => {
    let value = e.target.value;
    this.props.time(value);
  };

  //uwagi dla kuriera
  handleGetCourierNote = e => {
    let value = e.target.value;
    this.props.note(value);
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
                <input type="text" onChange={this.handleGetStreetValue} />
              </label>
              <label className="form-input">
                <span className="input-title">Miasto</span>
                <input type="text" onChange={this.handleGetCityValue} />
              </label>
              <label className="form-input">
                <span className="input-title">Kod pocztowy</span>
                <input
                  type="text"
                  pattern="[0-9]{2}\-[0-9]{3}"
                  onChange={this.handleGetPostCodeValue}
                />
              </label>
              <label className="form-input">
                <span className="input-title">Numer telefonu</span>
                <input type="text" onChange={this.handleGetPhoneValue} />
              </label>
            </div>
          </div>
          <div className="form-pickup-date">
            <h3 className="form-title">Termin odbioru:</h3>
            <div className="form-address-box">
              <label className="form-input">
                <span className="input-title">Data</span>
                <input type="date" onChange={this.handleGetPickupDate} />
              </label>
              <label className="form-input">
                <span className="input-title">Godzina</span>
                <input type="time" onChange={this.handleGetPickupTime} />
              </label>
              <label className="form-input last-input">
                <span className="input-title">Uwagi dla kuriera</span>
                <textarea onChange={this.handleGetCourierNote}></textarea>
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
