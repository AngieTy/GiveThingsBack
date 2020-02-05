import React, { Component } from "react";

class FormStepThree extends Component {
  state = {
    errorMessage: ""
  };
  //powrót do 3 etapu
  handlePrevStep = e => {
    e.preventDefault();
    this.props.prev();
  };

  //przejscie do 4 etapu
  handleNextStep = e => {
    e.preventDefault();
    const inputsElements = [
      ...document.querySelectorAll("input[type=checkbox]")
    ];
    const isInputChecked = inputsElements.some(element => element.checked);
    if (isInputChecked || this.props.parentState.length > 0) {
      this.props.next();
      this.setState({
        errorMessage: ""
      });
    } else {
      this.setState({
        errorMessage: "Wybierz conajmniej jeden element."
      });
    }
  };

  //pobranie wartosci lokalizacji
  handleGetLocalizationValue = e => {
    if (typeof this.props.localization === "function") {
      let value = e.target.value;
      this.props.localization(value);
    }
  };

  //pobranie wartosci grupy docelowej
  handleGetHelpGroupValue = e => {
    if (e.target.checked) {
      let text = e.target.nextElementSibling.innerText;
      this.props.helpGroups(e, text);
    } else {
      let text = "unchecked";
      this.props.helpGroups(e, text);
    }
  };
  //pobranie wartosci miejsca oddania rzeczy

  handleGetLocalizationSpecificValue = e => {
    let specLocal = e.target.value;
    this.props.localizationSpecific(specLocal);
  };

  render() {
    const { errorMessage } = this.state;
    return (
      <div className="form-step-three">
        <div className="form-step-number">Krok 3/4</div>
        <h2 className="form-header-localization">Lokalizacja:</h2>
        <select
          className="form-dropdown"
          onChange={this.handleGetLocalizationValue}
        >
          <option> - wybierz -</option>
          <option>Poznań</option>
          <option>Warszawa</option>
          <option>Kraków</option>
          <option>Katowice</option>
          <option>Wrocław</option>
        </select>
        <h3 className="form-header-help">Komu chcesz pomóc?</h3>
        <ul className="form-checkbox-list">
          <li className="checkbox-list-element">
            <label>
              <input type="checkbox" onChange={this.handleGetHelpGroupValue} />
              <p>dzieciom</p>
            </label>
          </li>
          <li className="checkbox-list-element">
            <label>
              <input type="checkbox" onChange={this.handleGetHelpGroupValue} />
              <p>samotnym matkom</p>
            </label>
          </li>
          <li className="checkbox-list-element">
            <label>
              <input type="checkbox" onChange={this.handleGetHelpGroupValue} />
              <p>bezdomnym</p>
            </label>
          </li>
          <li className="checkbox-list-element">
            <label>
              <input type="checkbox" onChange={this.handleGetHelpGroupValue} />
              <p>niepełnosprawnym</p>
            </label>
          </li>
          <li className="checkbox-list-element">
            <label>
              <input type="checkbox" onChange={this.handleGetHelpGroupValue} />
              <p>osobom starszym</p>
            </label>
          </li>
          {<p className="form-error-message">{errorMessage}</p>}
        </ul>
        <h3 className="form-header-optional">
          Wpisz nazwę konkretnej organizacji (opcjonalnie)
        </h3>
        <input
          type="text"
          className="form-optional-input"
          onChange={this.handleGetLocalizationSpecificValue}
        />
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

export default FormStepThree;
