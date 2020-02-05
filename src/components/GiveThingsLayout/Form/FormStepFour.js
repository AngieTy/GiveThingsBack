import React, { Component } from "react";

const regExp = /^\d{2}s\d{3}$/;

class FormStepFour extends Component {
  state = {
    errorStreetMessage: "",
    errorCityMessage: "",
    errorPostCodeMessage: "",
    errorPhoneMessage: "",
    errorDateMessage: "",
    errorTimeMessage: ""
  };
  //powrot z 4 etapu do 3
  handlePrevStep = e => {
    e.preventDefault();
    this.props.prev();
  };
  //przejscie do podsumowania
  handleNextStep = e => {
    e.preventDefault();

    if (
      this.props.parentState.street.length < 2 ||
      /\d/.test(this.props.parentState.street)
    ) {
      this.setState({
        errorStreetMessage: "Pole nie może być puste (min. 2 znaki)."
      });
    } else {
      this.setState({
        errorStreetMessage: ""
      });
    }
    if (
      this.props.parentState.city.length < 2 ||
      /\d/.test(this.props.parentState.city)
    ) {
      this.setState({
        errorCityMessage: "Pole nie może być puste (min. 2 znaki)."
      });
    } else {
      this.setState({
        errorCityMessage: ""
      });
    }
    if (
      regExp.test(this.props.parentState.postCode) ||
      this.props.parentState.postCode === ""
    ) {
      this.setState({
        errorPostCodeMessage: "Niepoprawny kod pocztowy."
      });
    } else {
      this.setState({
        errorPostCodeMessage: ""
      });
    }
    if (this.props.parentState.phone.length !== 9) {
      this.setState({
        errorPhoneMessage: "Numer telefonu powinien mieć 9 cyfr."
      });
    } else {
      this.setState({
        errorPhoneMessage: ""
      });
    }
    if (this.props.parentState.date === "") {
      this.setState({
        errorDateMessage: "Pole nie może być puste."
      });
    } else {
      this.setState({
        errorDateMessage: ""
      });
    }
    if (this.props.parentState.time === "") {
      this.setState({
        errorTimeMessage: "Pole nie może być puste."
      });
    } else {
      this.setState({
        errorTimeMessage: ""
      });
    }
    if (
      this.props.parentState.street.length > 1 &&
      this.props.parentState.city.length > 1 &&
      this.props.parentState.phone.length === 9
    ) {
      this.props.next();
    }
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
  handleGetPostCodeValue = e => {
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
    const {
      errorCityMessage,
      errorDateMessage,
      errorPhoneMessage,
      errorPostCodeMessage,
      errorStreetMessage,
      errorTimeMessage
    } = this.state;
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
                {<p className="error-message">{errorStreetMessage}</p>}
              </label>

              <label className="form-input">
                <span className="input-title">Miasto</span>
                <input type="text" onChange={this.handleGetCityValue} />
                {<p className="error-message">{errorCityMessage}</p>}
              </label>
              <label className="form-input">
                <span className="input-title">Kod pocztowy</span>
                <input type="text" onChange={this.handleGetPostCodeValue} />
                {<p className="error-message">{errorPostCodeMessage}</p>}
              </label>
              <label className="form-input">
                <span className="input-title">Numer telefonu</span>
                <input type="text" onChange={this.handleGetPhoneValue} />
                {<p className="error-message">{errorPhoneMessage}</p>}
              </label>
            </div>
          </div>
          <div className="form-pickup-date">
            <h3 className="form-title">Termin odbioru:</h3>
            <div className="form-address-box">
              <label className="form-input">
                <span className="input-title">Data</span>
                <input type="date" onChange={this.handleGetPickupDate} />
                {<p className="error-message">{errorDateMessage}</p>}
              </label>
              <label className="form-input">
                <span className="input-title">Godzina</span>
                <input type="time" onChange={this.handleGetPickupTime} />
                {<p className="error-message">{errorTimeMessage}</p>}
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
