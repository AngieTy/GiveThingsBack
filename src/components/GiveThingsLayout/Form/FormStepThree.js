import React, { Component } from "react";

class FormStepThree extends Component {
  render() {
    return (
      <div className="form-step-three">
        <div className="form-step-number">Krok 3/4</div>
        <h2 className="form-header-localization">Lokalizacja:</h2>
        <select className="form-dropdown">
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
              <input type="checkbox" />
              <p>dzieciom</p>
            </label>
          </li>
          <li className="checkbox-list-element">
            <label>
              <input type="checkbox" />
              <p>samotnym matkom</p>
            </label>
          </li>
          <li className="checkbox-list-element">
            <label>
              <input type="checkbox" />
              <p>bezdomnym</p>
            </label>
          </li>
          <li className="checkbox-list-element">
            <label>
              <input type="checkbox" />
              <p>niepełnosprawnym</p>
            </label>
          </li>
          <li className="checkbox-list-element">
            <label>
              <input type="checkbox" />
              <p>osobom starszym</p>
            </label>
          </li>
        </ul>
        <h3 className="form-header-optional">
          Wpisz nazwę konkretnej organizacji (opcjonalnie)
        </h3>
        <input type="text" className="form-optional-input" />
        <div className="form-btns">
          <button className="form-prev-btn">wstecz</button>
          <button className="form-next-btn">dalej</button>
        </div>
      </div>
    );
  }
}

export default FormStepThree;
