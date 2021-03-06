import React, { Component } from "react";
import HomeAboutUs from "./HomeAboutUs";
import HomeForm from "./HomeForm";
import HomeHeader from "./HomeHeader";
import HomeFourSteps from "./HomeFourSteps";
import HomeHelp from "./HomeHelp";
import HomeThreeColumns from "./HomeThreeColumns";
import HomeFooter from "./HomeFooter";

class Home extends Component {
  render() {
    return (
      <div className="home">
        <HomeHeader name="HomeHeader" />
        <HomeThreeColumns />
        <HomeFourSteps name="HomeSteps" />
        <HomeAboutUs name="HomeAbout" />
        <HomeHelp name="HomeHelp" />
        <HomeForm name="HomeForm" />
        <HomeFooter />
      </div>
    );
  }
}

export default Home;
