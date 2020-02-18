import React, { Component } from "react";
import ImgDeco from "../assets/assets/Decoration.svg";
import "firebase/firestore";
import firebase from "firebase/app";

class HomeForm extends Component {
  state = {
    name: "",
    email: "",
    message: "",
    errorName: "",
    errorEmail: "",
    errorTextarea: "",
    correctMessage: ""
  };

  handleChangeInputValue = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmitForm = e => {
    e.preventDefault();

    const url = "https://fer-api.coderslab.pl/v1/portfolio/contact";
    const data = {
      name: this.state.name,
      email: this.state.email,
      message: this.state.message
    };

    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(response => {
        if (response.ok === true) {
          this.setState({
            succes: true
          });
        }
      })
      .catch(error => {
        console.log(error);
      });

    const { name, email, message } = this.state;

    const validateEmail = email => {
      const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    };

    if (name.length < 1) {
      this.setState({ errorName: "Pole nie może być puste." });
    } else {
      this.setState({
        errorName: ""
      });
    }

    if (validateEmail(email) === false) {
      this.setState({ errorEmail: "Email nie jest poprawny." });
    } else {
      this.setState({
        errorEmail: ""
      });
    }
    if (message.length < 120) {
      this.setState({
        errorTextarea: "Wiadomość powinna mieć minimum 120 znaków."
      });
    } else {
      this.setState({
        errorTextarea: ""
      });
    }
    if (
      name.length > 1 &&
      validateEmail(email) === true &&
      message.length > 120
    ) {
      const db = firebase.firestore();
      db.collection("contactFormMessages")
        .doc(this.state.email)
        .collection("message")
        .add({
          email: this.state.email,
          name: this.state.name,
          message: this.state.message
        })
        .then(() => {
          console.log("Pomyślnie wysłano wiadomość");
        })
        .catch(() => {
          console.log("Ups! Coś poszło nie tak :C");
        });
      this.setState({
        name: "",
        email: "",
        message: "",
        errorName: "",
        errorEmail: "",
        errorTextarea: "",
        correctMessage: "Pomyślnie wysłano wiadomość."
      });
    }
  };

  render() {
    const {
      name,
      email,
      message,
      errorName,
      errorEmail,
      errorTextarea,
      correctMessage
    } = this.state;
    return (
      <section className="home-form" id={this.props.name}>
        <div className="home-form-container">
          <div className="home-opacity-modifier clearfix">
            <form
              className="home-form-form"
              onSubmit={this.handleSubmitForm}
              noValidate
            >
              <h2 className="form-header">
                Skontaktuj się z nami
                {<span className="correct">{correctMessage}</span>}
              </h2>
              <img src={ImgDeco} alt="image_decoration" className="form-img" />

              <div className="form-inputs-box">
                <label className="form-input-title">
                  Wpisz swoje imię
                  <input
                    type="text"
                    name="name"
                    value={name}
                    placeholder="Angelika"
                    onChange={this.handleChangeInputValue}
                  />
                  {<span className="error">{errorName}</span>}
                </label>

                <label className="form-input-title">
                  Wpisz swój email
                  <input
                    type="email"
                    name="email"
                    value={email}
                    placeholder="abc@xyz.pl"
                    onChange={this.handleChangeInputValue}
                  />
                  {<span className="error">{errorEmail}</span>}
                </label>
              </div>
              <div className="form-text-box">
                <label>
                  Wpisz swoją wiadomość
                  <textarea
                    className="form-text-area"
                    name="message"
                    value={message}
                    onChange={this.handleChangeInputValue}
                  />
                  {<span className="error">{errorTextarea}</span>}
                </label>
              </div>
              <button className="form-button">Wyślij</button>
            </form>
          </div>
        </div>
      </section>
    );
  }
}

export default HomeForm;
