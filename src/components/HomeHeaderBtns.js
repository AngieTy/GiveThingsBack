import React, { Component } from "react";
import BtnsImg from "../assets/assets/Decoration.svg";
import { Link } from "react-router-dom";

class HomeHeaderBtns extends Component {
  render() {
    return (
      <div className="home-header-btns">
        <h1 className="home-header-banner">Zacznij pomagać!</h1>
        <h2 className="home-header-banner">
          Oddaj niechciane rzeczy w zaufane ręce
        </h2>
        <img src={BtnsImg} />
        <div className="header-btns-box">
          <Link to="/logowanie">
            <button className="give-things-btn">Oddaj rzeczy</button>
          </Link>
          <Link to="/logowanie">
            <button className="organize-collection-btn">
              Zorganizuj zbiórkę
            </button>
          </Link>
        </div>
      </div>
    );
  }
}

export default HomeHeaderBtns;
