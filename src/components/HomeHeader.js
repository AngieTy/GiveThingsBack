import React, { Component } from "react";
import HomeHeaderNav from "./HomeHeaderNav";
import HomeHeaderBtns from "./HomeHeaderBtns";

class HomeHeader extends Component {
  render() {
    return (
      <section  className="home-header" id={this.props.name} >
        <div className="home-header-img"></div>
        <div className="home-header-container">
        <HomeHeaderNav />
       <HomeHeaderBtns />
        </div>
      </section>
    );
  }
}

export default HomeHeader;
