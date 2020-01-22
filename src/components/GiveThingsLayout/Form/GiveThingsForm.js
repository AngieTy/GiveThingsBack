import React, { Component } from "react";
import GiveThingsWarning from "../GiveThingsWarning";
import FormStepOne from "./FormStepOne";
import FormStepTwo from "./FormStepTwo";
import FormStepThree from "./FormStepThree";
import FormStepFour from "./FormStepFour";
import FormSummary from "./FormSummary";
import ThanksFormView from "./ThanksFormView";

class GiveThingsForm extends Component {
  state = {
    bags: "",
    type: "",
    localization: "",
    helpGroups: [],
    localizationSpecific: "",
    street: "",
    postCode: "",
    phone: "",
    date: "",
    time: "",
    note: "",
    isFirstStepSeen: true,
    isSecondStepSeen: false,
    isThirdStepSeen: false,
    isFourthStepSeen: false,
    isSummarySeen: false,
    isThanksSeen: false
  };

  //przejście do drugiego etpu
  handleSecondStep = state => {
    console.log("działam");
    this.setState({
      isFirstStepSeen: false,
      isSecondStepSeen: true
    });
  };

  //powrot z 2 etapu do 1
  handlePrevFirstStep = state => {
    this.setState({
      isFirstStepSeen: true,
      isSecondStepSeen: false
    });
  };
  //przejscie z 2 do 3 etapu
  handleThirdStep = () => {
    this.setState({
      isSecondStepSeen: false,
      isThirdStepSeen: true
    });
  };

  //powrót z 3 do 2 etapu
  handlePrevSecondStep = () => {
    this.setState({
      isThirdStepSeen: false,
      isSecondStepSeen: true
    });
  };

  //przejscie z 3 do 4 etapu
  handleFourthStep = () => {
    this.setState({
      isThirdStepSeen: false,
      isFourthStepSeen: true
    });
  };

  //powrót z 4 do 3 etapu

  handlePrevThirdStep = () => {
    this.setState({
      isFourthStepSeen: false,
      isThirdStepSeen: true
    });
  };

  //przejscie z 4 do 5 etapu

  handleFifthStep = () => {
    this.setState({
      isFourthStepSeen: false,
      isSummarySeen: true
    });
  };

  //FUNKCJE POBIERANIA WARTOSCI Z DZIECI

  // pobranie wartosci z 1 etapu
  handleDownloadValueFromFirstStep = state => {
    this.setState({
      type: state
    });
  };

  //pobranie wartosci z 2 etapu
  handleDownloadValueFromSecondStep = state => {
    this.setState({
      bags: state
    });
  };

  //pobranie wartosci lokalizacji z 3 etapu
  handleDownloadValueFromThirdtStep1 = localization => {
    this.setState({
      localization: localization
    });
  };
  //pobranie grup osob z 3 etapu

  handleDownloadValueFromThirdStep2 = groups => {
    if (groups !== "unchecked") {
      this.setState({
        helpGroups: [...this.state.helpGroups, groups]
      });
    }
  };

  //pobranie opcjonalnej organizacji z 3 etapu

  handleDownloadValueFromThirdStep3 = organization => {
    this.setState({
      localizationSpecific: organization
    });
  };

  //pobranie wartosci ulicy

  handleDownloadValueFromFourthStep1 = street => {
    this.setState({
      street: street
    });
  };

  //pobranie wartosci miasta
  handleDownloadValueFromFourthStep2 = city => {
    this.setState({
      city: city
    });
  };

  //pobranie wartosci kodu pocztowego

  handleDownloadValueFromFourthStep3 = postCode => {
    this.setState({
      postCode: postCode
    });
  };

  //pobranie wartosci nr tel

  handleDownloadValueFromFourthStep4 = number => {
    this.setState({
      phone: number
    });
  };

  //pobranie daty
  handleDownloadValueFromFourthStep5 = date => {
    this.setState({
      date: date
    });
  };

  //pobranie godziny
  handleDownloadValueFromFourthStep6 = time => {
    this.setState({
      time: time
    });
  };
  render() {
    const {
      isFirstStepSeen,
      isSecondStepSeen,
      isThirdStepSeen,
      isFourthStepSeen,
      isSummarySeen
    } = this.state;

    if (isFirstStepSeen) {
      return (
        <section className="give-things-form">
          <GiveThingsWarning />
          <form className="form">
            <FormStepOne
              next={this.handleSecondStep}
              value={this.handleDownloadValueFromFirstStep}
            />
          </form>
        </section>
      );
    } else if (isSecondStepSeen) {
      return (
        <section className="give-things-form">
          <GiveThingsWarning />
          <form className="form">
            <FormStepTwo
              next={this.handleThirdStep}
              prev={this.handlePrevFirstStep}
              value={this.handleDownloadValueFromSecondStep}
            />
          </form>
        </section>
      );
    } else if (isThirdStepSeen) {
      return (
        <section className="give-things-form">
          <GiveThingsWarning />
          <form className="form">
            <FormStepThree
              next={this.handleFourthStep}
              prev={this.handlePrevSecondStep}
              value={this.handleDownloadValueFromThirdtStep1}
              value2={this.handleDownloadValueFromThirdStep2}
              value3={this.handleDownloadValueFromThirdStep3}
            />
          </form>
        </section>
      );
    } else if (isFourthStepSeen) {
      return (
        <section className="give-things-form">
          <GiveThingsWarning />
          <form className="form">
            <FormStepFour
              prev={this.handlePrevThirdStep}
              next={this.handleFifthStep}
              value1={this.handleDownloadValueFromFourthStep1}
              value2={this.handleDownloadValueFromFourthStep2}
              value3={this.handleDownloadValueFromFourthStep3}
              value4={this.handleDownloadValueFromFourthStep4}
              value5={this.handleDownloadValueFromFourthStep5}
              value6={this.handleDownloadValueFromFourthStep6}
            />
          </form>
        </section>
      );
    } else if (isSummarySeen) {
      return (
        <section className="give-things-form">
          <GiveThingsWarning />
          <form className="form">
            <FormSummary
            // step={this.handleOneStep}
            // change={this.handlePrevView}
            />
          </form>
        </section>
      );
    } else {
      return (
        <section className="give-things-form">
          <form className="form">
            <ThanksFormView
            // step={this.handleOneStep}
            // change={this.handlePrevView}
            />
          </form>
        </section>
      );
    }
  }
}

export default GiveThingsForm;
