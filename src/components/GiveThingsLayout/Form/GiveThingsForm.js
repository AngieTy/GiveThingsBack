import React, { Component } from "react";
import GiveThingsWarning from "../GiveThingsWarning";
import FormStepOne from "./FormStepOne";
import FormStepTwo from "./FormStepTwo";
import FormStepThree from "./FormStepThree";
import FormStepFour from "./FormStepFour";
import FormSummary from "./FormSummary";
import ThanksFormView from "./ThanksFormView";
import { connect } from "react-redux";
import "firebase/firestore";
import firebase from "firebase/app";

class GiveThingsForm extends Component {
  state = {
    bags: "",
    city: "",
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
    isThanksSeen: false,
    currentUserId: this.props.id
  };

  //przejście do drugiego etpu
  handleSecondStep = () => {
    this.setState({
      isFirstStepSeen: false,
      isSecondStepSeen: true
    });
  };

  //powrot z 2 etapu do 1
  handlePrevFirstStep = () => {
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

  //ppowrot z 5 etapu do 4

  handlePrevFourthStep = () => {
    this.setState({
      isSummarySeen: false,
      isFourthStepSeen: true
    });
  };

  //przejscie do ostatniego etapu

  handleFinalStep = () => {
    this.setState({
      isThanksSeen: true,
      isSummarySeen: false
    });
  };

  //FUNKCJE POBIERANIA WARTOSCI Z DZIECI

  // pobranie wartosci z 1 etapu
  handleGetThingsToGive = type => {
    this.setState({
      type: type
    });
  };

  //pobranie wartosci z 2 etapu
  handleGetBagsNumber = bags => {
    this.setState({
      bags: bags
    });
  };

  //pobranie wartosci lokalizacji z 3 etapu
  handleGetLocalizationValue = localization => {
    this.setState({
      localization: localization
    });
  };
  //pobranie grup osob z 3 etapu
  handleGetHelpGroups = (e, groups) => {
    if (groups !== "unchecked") {
      this.setState({
        helpGroups: [...this.state.helpGroups, groups]
      });
    } else {
      let helpGroups = [...this.state.helpGroups];
      let index = helpGroups.indexOf(e.target.nextElementSibling.innerText);
      helpGroups.splice(index, 1);
      this.setState({
        helpGroups: helpGroups
      });
    }
  };

  //

  //pobranie opcjonalnej organizacji z 3 etapu

  handleGetLocalizationSpecific = organization => {
    this.setState({
      localizationSpecific: organization
    });
  };

  //pobranie wartosci z 4 etapu - ulicy

  handleGetStreetValue = street => {
    this.setState({
      street: street
    });
  };

  //pobranie wartosci z 4 etapu - miasta
  handleGetCityValue = city => {
    this.setState({
      city: city
    });
  };

  //pobranie wartosci z 4 etapu - kodu pocztowego

  handleGetPostCodeValue = postCode => {
    this.setState({
      postCode: postCode
    });
  };

  //pobranie wartosci z 4 etapu -  nr tel

  handleGetPhoneNumberValue = number => {
    this.setState({
      phone: number
    });
  };

  //pobranie wartosci z 4 etapu -  daty
  handleGetPickupDate = date => {
    this.setState({
      date: date
    });
  };

  //pobranie wartosci z 4 etapu - godziny
  handleGetPickupTime = time => {
    this.setState({
      time: time
    });
  };

  //pobranie wartosci z 4 etapu -  uwag dla kuriera
  handleGetCourierNote = note => {
    this.setState({
      note: note
    });
  };

  // FIREBASE
  handleSendUserForm = () => {
    const formData = {
      bags: this.state.bags,
      city: this.state.city,
      type: this.state.type,
      localization: this.state.localization,
      helpGroups: this.state.helpGroups,
      localizationSpecific: this.state.localizationSpecific,
      street: this.state.street,
      postCode: this.state.postCode,
      phone: this.state.phone,
      date: this.state.date,
      time: this.state.time,
      note: this.state.note
    };
    //pobranie id uzytkownika
    const db = firebase.firestore();
    const userRef = db.collection("users").doc(this.state.currentUserId);

    //wyslanie do bazy formularza do aktualnego uzytkownika
    userRef
      .collection("messages")
      .add({ formData })
      .then(() => {
        console.log("Pomyślnie wysłano dokument!");
      })
      .catch(() => {
        console.log("Ups! Coś poszło źle!");
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
              type={this.handleGetThingsToGive}
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
              bags={this.handleGetBagsNumber}
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
              localization={this.handleGetLocalizationValue}
              helpGroups={this.handleGetHelpGroups}
              localizationSpecific={this.handleGetLocalizationSpecific}
              parentState={this.state.helpGroups}
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
              street={this.handleGetStreetValue}
              city={this.handleGetCityValue}
              postCode={this.handleGetPostCodeValue}
              phone={this.handleGetPhoneNumberValue}
              date={this.handleGetPickupDate}
              time={this.handleGetPickupTime}
              note={this.handleGetCourierNote}
              parentState={this.state}
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
              prev={this.handlePrevFourthStep}
              next={this.handleFinalStep}
              data={this.state}
              sendData={this.handleSendUserForm}
            />
          </form>
        </section>
      );
    } else {
      return (
        <section className="give-things-form">
          <form className="form">
            <ThanksFormView />
          </form>
        </section>
      );
    }
  }
}

function mapStateToProps(state) {
  console.log(state.auth.id);
  return {
    id: state.auth.id
  };
}

export default connect(mapStateToProps)(GiveThingsForm);
