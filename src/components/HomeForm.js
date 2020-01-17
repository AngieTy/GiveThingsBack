import React, { Component } from "react";
import ImgDeco from "../assets/assets/Decoration.svg";

class HomeForm extends Component {
  state = {
    name: "",
    email: "",
    textarea: "",
    errorName: "",
    errorEmail: "",
    errorTextarea: "",
    succes: false
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    const url = "https://fer-api.coderslab.pl/v1/portfolio/contact";
    const data = {
      name: this.state.name,
      email: this.state.email,
      message: this.state.textarea
    };

    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json"
        // "X-Auth-Token": "20200108224609"
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

    const {
      name,
      email,
      textarea
      // errorName,
      // errorEmail,
      // errorTextarea
    } = this.state;

    const validateEmail = email => {
      const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    };

    if (name.length < 1) {
      this.setState({ errorName: "Pole nie może być puste." });

      console.log("sukces");
    } else {
      this.setState({
        errorName: ""
      });
    }

    if (validateEmail(email) === false) {
      this.setState({ errorEmail: "Email nie jest poprawny." });

      console.log("sukces2");
    } else {
      this.setState({
        errorEmail: ""
      });
    }
    if (textarea.length < 120) {
      this.setState({
        errorTextarea: "Wiadomość powinna mieć minimum 120 znaków."
      });

      console.log("sukces3");
    } else {
      this.setState({
        errorTextarea: ""
      });
    }

    if (
      name.length > 1 &&
      validateEmail(email) === true &&
      textarea.length > 120
    ) {
      this.setState({
        name: "",
        email: "",
        textarea: "",
        isLogged: true,
        errorName: "",
        errorEmail: "",
        errorTextarea: ""
      });
      // return true;
    }
  };

  render() {
    const {
      name,
      email,
      textarea,
      errorName,
      errorEmail,
      errorTextarea
    } = this.state;
    return (
      <section className="home-form" id={this.props.name}>
        <div className="home-form-container">
          <div className="home-opacity-modifier clearfix">
            <form
              className="home-form-form"
              onSubmit={this.handleSubmit}
              noValidate
            >
              <h2 className="form-header">Skontaktuj się z nami</h2>
              <img src={ImgDeco} alt="image_decoration" className="form-img" />
              <div className="form-inputs-box">
                <label className="form-input-title">
                  Wpisz swoje imię
                  <input
                    type="text"
                    name="name"
                    value={name}
                    placeholder="Angelika"
                    onChange={this.handleChange}
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
                    onChange={this.handleChange}
                  />
                  {<span className="error">{errorEmail}</span>}
                </label>
              </div>
              <div className="form-text-box">
                <label>
                  Wpisz swoją wiadomość
                  <textarea
                    className="form-text-area"
                    name="textarea"
                    value={textarea}
                    onChange={this.handleChange}
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
