import React, { Component } from "react";

import HomeAboutUs from "./HomeAboutUs";
import HomeFooter from "./HomeFooter";
import HomeForm from "./HomeForm";
import HomeHeader from "./HomeHeader";
import HomeFourSteps from "./HomeFourSteps";
import HomeHelp from "./HomeHelp";
import HomeThreeColumns from "./HomeThreeColumns";

class Home extends Component {
  render() {
    return (
      <div>
        <HomeHeader />
        <HomeThreeColumns />
        <HomeFourSteps />
        <HomeAboutUs />
        <HomeHelp />
        <HomeForm />
        <HomeFooter />
      </div>
    );
  }
}

export default Home;
