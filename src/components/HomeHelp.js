import React, { Component } from "react";
import ImgDeco from "../assets/assets/Decoration.svg";
import HomeHelpPagination from "./HomeHelpPagination";

class HomeHelp extends Component {
  render() {
    return (
      <section className="home-help">
        <h2 className="home-help-header">Komu pomagamy</h2>
        <img src={ImgDeco} alt="decoration" />
        <div className="help-btns-box">
          <button className="help-btn">Fundacjom</button>
          <button className="help-btn">Organizacjom pozarządowym</button>
          <button className="help-btn">Lokalnym zbiórkom</button>
        </div>
        <p className="help-content">
          W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi
          współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i
          czego potrzebują.
        </p>
        <HomeHelpPagination />
      </section>
    );
  }
}

export default HomeHelp;
