import React, { Component } from "react";
import BtnsImg from "../assets/assets/Decoration.svg";
import { Link } from "react-router-dom";

class HomeHeaderBtnsLogged extends Component {
  render() {
    return (
      <div className="home-header-btns">
        <h1 className="home-header-banner">Zacznij pomagać!</h1>
        <h2 className="home-header-banner">
          Oddaj niechciane rzeczy w zaufane ręce
        </h2>
        <img src={BtnsImg} alt="image_decoration" />
        <div className="header-btns-box">
          <Link to="/oddaj-rzeczy">
            <button className="give-things-btn">Oddaj rzeczy</button>
          </Link>
          <Link to="/oddaj-rzeczy">
            <button className="organize-collection-btn">
              Zorganizuj zbiórkę
            </button>
          </Link>
        </div>
      </div>
    );
  }
}

export default HomeHeaderBtnsLogged;
