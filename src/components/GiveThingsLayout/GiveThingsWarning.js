import React, { Component } from "react";

class GiveThingsWarning extends Component {
  render() {
    return (
      <section className="give-things-warning">
        <div className="give-things-warning-container">
          <h2 className="give-things-warning-header">Ważne!</h2>
          <p className="give-things-warning-content">
            Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu będziemy
            wiedzieć komu najlepiej je przekazać.
          </p>
        </div>
      </section>
    );
  }
}

export default GiveThingsWarning;
