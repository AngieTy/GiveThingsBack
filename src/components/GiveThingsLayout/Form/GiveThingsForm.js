import React, { Component } from "react";
import GiveThingsWarning from "../GiveThingsWarning";
import FormStepOne from "./FormStepOne";
import FormStepTwo from "./FormStepTwo";
import FormStepThree from "./FormStepThree";

class GiveThingsForm extends Component {
  render() {
    return (
      <section className="give-things-form">
        <GiveThingsWarning />
        <form className="form">
          <FormStepThree />
        </form>
      </section>
    );
  }
}

export default GiveThingsForm;
