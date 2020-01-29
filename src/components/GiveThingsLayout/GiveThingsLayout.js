import React, { Component } from "react";
import GiveThingsHeaderNav from "./GiveThingsHeaderNav";
import GiveThingsBanner from "./GiveThingsBanner";
import GiveThingsForm from "./Form/GiveThingsForm";
import HomeForm from "../HomeForm";
import HomeFooter from "../HomeFooter";
import ImgForm from "../../assets/assets/Form-Hero-Image.jpg";

class GiveThingsLayout extends Component {
  render() {
    return (
      <div className="give-things">
        <section className="give-things-header">
          <img src={ImgForm} alt="form_image" />
          <div className="give-things-header-container">
            <GiveThingsHeaderNav />
            <GiveThingsBanner />
          </div>
        </section>
        <GiveThingsForm />
        <HomeForm />
        <HomeFooter />
      </div>
    );
  }
}

export default GiveThingsLayout;
