import React, { Component } from "react";
import ImgDeco from "../assets/assets/Decoration.svg";
import FirstIcon from "../assets/assets/Icon-1.svg";
import SecondIcon from "../assets/assets/Icon-2.svg";
import ThirdIcon from "../assets/assets/Icon-3.svg";
import FourthIcon from "../assets/assets/Icon-4.svg";
import { Link } from "react-router-dom";

class HomeFourSteps extends Component {
  render() {
    return (
      <section className="home-four-steps" id={this.props.name}>
        <div className="home-steps-header">
          <h2 className="steps-header-title">Wystarczą 4 proste kroki</h2>
          <img src={ImgDeco} alt="img_decoration" />
        </div>
        <div className="four-steps-container">
          <div className="four-steps-box">
            <img src={FirstIcon} alt="tshirt_icon" />
            <h3 className="four-steps-title">Wybierz rzeczy</h3>
            <p className="four-steps-content">
              ubrania, zabawki, sprzęt i inne
            </p>
          </div>
          <div className="four-steps-box">
            <img src={SecondIcon} alt="bag_icon" />
            <h3 className="four-steps-title">Spakuj je</h3>
            <p className="four-steps-content">skorzystaj z worków na śmieci</p>
          </div>
          <div className="four-steps-box">
            <img src={ThirdIcon} alt="search_icon" />
            <h3 className="four-steps-title">Zdecyduj komu chcesz pomóc</h3>
            <p className="four-steps-content">wybierz zaufane miejsce</p>
          </div>
          <div className="four-steps-box">
            <img src={FourthIcon} alt="reload_icon" />
            <h3 className="four-steps-title">Zamów kuriera</h3>
            <p className="four-steps-content">
              kurier przyjedzie w dogodnym terminie
            </p>
          </div>
        </div>
        <div className="four-steps-button">
          <Link to="/logowanie">
            <button className="give-things-btn">Oddaj rzeczy</button>
          </Link>
        </div>
      </section>
    );
  }
}

export default HomeFourSteps;
