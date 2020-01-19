import React, { Component } from "react";
import GiveThingsWarning from "../GiveThingsWarning";
import FormStepOne from "./FormStepOne";
import FormStepTwo from "./FormStepTwo";

class GiveThingsForm extends Component {
  render() {
    return (
      <section className="give-things-form">
        <GiveThingsWarning />
        <form className="form">
          <FormStepTwo />
        </form>
      </section>
    );
  }
}

export default GiveThingsForm;
