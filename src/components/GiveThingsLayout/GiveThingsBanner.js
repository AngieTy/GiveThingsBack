import React, { Component } from "react";
import ImgDeco from "../../assets/assets/Decoration.svg";

class GiveThingsBanner extends Component {
  render() {
    return (
      <section className="give-things-banner">
        <h1 className="banner-title">
          Oddaj rzeczy, których już nie chcesz POTRZEBUJĄCYM
        </h1>
        <img src={ImgDeco} alt="image_decoration" />
        <p className="banner-content">Wystarczą 4 proste kroki:</p>
        <div className="banner-content-container">
          <div className="banner-content-steps">
            <span className="banner-content-step">1</span>
            <p className="banner-content-text">Wybierz rzeczy</p>
          </div>
          <div className="banner-content-steps">
            <span className="banner-content-step">2</span>
            <p className="banner-content-text">Spakuj je w worki</p>
          </div>
          <div className="banner-content-steps">
            <span className="banner-content-step">3</span>
            <p className="banner-content-text">Wybierz fundację</p>
          </div>
          <div className="banner-content-steps">
            <span className="banner-content-step">4</span>
            <p className="banner-content-text">Zamów kuriera</p>
          </div>
        </div>
      </section>
    );
  }
}

export default GiveThingsBanner;
