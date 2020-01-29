import React, { Component } from "react";

class FormStepThree extends Component {
  //powrót do 3 etapu
  handlePrevStep = e => {
    e.preventDefault();
    this.props.prev();
  };

  //przejscie do 4 etapu
  handleNextStep = e => {
    e.preventDefault();
    this.props.next();
  };
  //pobranie wartosci lokalizacji
  handleCheckLocalization = e => {
    if (typeof this.props.value === "function") {
      let value = e.target.value;
      this.props.value(value);
    }
  };

  //pobranie wartosci grupy docelowej
  handleCheckGroups = e => {
    if (e.target.checked) {
      let text = e.target.nextElementSibling.innerText;
      this.props.value2(e, text);
    } else {
      let text = "unchecked";
      this.props.value2(e, text);
    }
  };
  //pobranie wartosci miejsca oddania rzeczy

  handleCheckSpecificLocalization = e => {
    let specLocal = e.target.value;
    this.props.value3(specLocal);
  };
  render() {
    return (
      <div className="form-step-three">
        <div className="form-step-number">Krok 3/4</div>
        <h2 className="form-header-localization">Lokalizacja:</h2>
        <select
          className="form-dropdown"
          onChange={this.handleCheckLocalization}
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
              <input type="checkbox" onChange={this.handleCheckGroups} />
              <p>dzieciom</p>
            </label>
          </li>
          <li className="checkbox-list-element">
            <label>
              <input type="checkbox" onChange={this.handleCheckGroups} />
              <p>samotnym matkom</p>
            </label>
          </li>
          <li className="checkbox-list-element">
            <label>
              <input type="checkbox" onChange={this.handleCheckGroups} />
              <p>bezdomnym</p>
            </label>
          </li>
          <li className="checkbox-list-element">
            <label>
              <input type="checkbox" onChange={this.handleCheckGroups} />
              <p>niepełnosprawnym</p>
            </label>
          </li>
          <li className="checkbox-list-element">
            <label>
              <input type="checkbox" onChange={this.handleCheckGroups} />
              <p>osobom starszym</p>
            </label>
          </li>
        </ul>
        <h3 className="form-header-optional">
          Wpisz nazwę konkretnej organizacji (opcjonalnie)
        </h3>
        <input
          type="text"
          className="form-optional-input"
          onChange={this.handleCheckSpecificLocalization}
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
