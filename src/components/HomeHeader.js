import React, { Component } from "react";
import HomeHeaderNav from "./HomeHeaderNav";
import HomeHeaderBtns from "./HomeHeaderBtns";
import HeaderImg from "../assets/assets/Home-Hero-Image.jpg";

class HomeHeader extends Component {
  render() {
    return (
      <header className="home-header" name="header">
        <div className="home-header-img">
          {/* <img src={HeaderImg} alt="bleble" /> */}
        </div>
        <div className="home-header-container">
          <HomeHeaderNav />
          <HomeHeaderBtns />
        </div>
      </header>
    );
  }
}

export default HomeHeader;
