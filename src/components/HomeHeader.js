import React, { Component } from "react";
import HomeHeaderNav from "./HomeHeaderNav";
import HeaderImg from "../assets/assets/Home-Hero-Image.jpg";

class HomeHeader extends Component {
  render() {
    return (
      <header className="home-header">
        <div className="home-header-img">
          <img src={HeaderImg} alt="bleble" />
        </div>
        <HomeHeaderNav />
      </header>
    );
  }
}

export default HomeHeader;
