import React, { Component } from "react";
import LoginHeaderNav from "../LoginHeaderNav";
import GiveThingsBanner from "./GiveThingsBanner";
import ImgForm from "../../assets/assets/Form-Hero-Image.jpg";

class GiveThingsLayout extends Component {
  render() {
    return (
      <section className="give-things">
        <img src={ImgForm} alt="form_image" />
        <div className="give-things-header-container">
          <LoginHeaderNav />
          <GiveThingsBanner />
        </div>
      </section>
    );
  }
}

export default GiveThingsLayout;
