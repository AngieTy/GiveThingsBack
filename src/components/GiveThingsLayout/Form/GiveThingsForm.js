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

  handleDownloadValueFromThirdStep2 = (e, groups) => {
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

  //pobranie uwag dla kuriera
  handleDownloadValueFromFourthStep7 = note => {
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
      helpGroups: [...this.state.helpGroups],
      localizationSpecific: this.state.localizationSpecific,
      street: this.state.street,
      postCode: this.state.postCode,
      phone: this.state.phone,
      date: this.state.date,
      time: this.state.time,
      note: this.state.note
    };
    const db = firebase.firestore();
    const userRef = db.collection("users").doc(this.state.currentUserId);
    //mam id naszego uzytkownika pobrane z firebase
    // console.log(userRef.id);
    // console.log(userRef);
    //pobranie dokumentow z kolekcji
    // db.collection("users")
    //   .get()
    //   .then(snapshot => {
    //     console.log(snapshot.docs);

    //dostanie sie do informacji w poszczegolnym dokumencie
    // snapshot.docs.forEach(doc => {
    //   console.log(doc.data());
    // });
    // });
    //pobranie danych poszczegolnego dokumentu
    userRef.get().then(doc => {
      console.log(doc.data());
    });

    //wyslanie do bazy
    userRef
      .collection("messages")
      .add({ formData })
      .then(() => {
        console.log("Pomyślnie wysłano dokument!");
      })
      .catch(() => {
        console.log("Ups!Coś poszło źle!");
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
              value7={this.handleDownloadValueFromFourthStep7}
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
