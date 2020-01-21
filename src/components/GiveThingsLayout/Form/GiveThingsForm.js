import React, { Component } from "react";
import GiveThingsWarning from "../GiveThingsWarning";
import FormStepOne from "./FormStepOne";
import FormStepTwo from "./FormStepTwo";
import FormStepThree from "./FormStepThree";
import FormStepFour from "./FormStepFour";
import FormSummary from "./FormSummary";

class GiveThingsForm extends Component {
  render() {
    return (
      <section className="give-things-form">
        <GiveThingsWarning />
        <form className="form">
          <FormSummary />
        </form>
      </section>
    );
  }
}

export default GiveThingsForm;
