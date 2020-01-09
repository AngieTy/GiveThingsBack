import React, { Component } from "react";
import ImgDeco from "../assets/assets/Decoration.svg";

const validEmailRegex = RegExp(
  // eslint-disable-next-line
  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);
const validateForm = errors => {
  let valid = true;
  Object.values(errors).forEach(val => val.length > 0 && (valid = false));
  return valid;
};

class HomeForm extends Component {
  state = {
    name: "",
    email: "",
    textarea: "",
    errors: {
      name: "",
      email: "",
      textarea: ""
    }
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
    e.preventDefault();
    const { name, value } = e.target;
    let errors = this.state.errors;

    // eslint-disable-next-line default-case
    switch (name) {
      case "name":
        errors.name = value.length < 1 ? "Pole nie może być puste." : "";
        break;
      case "email":
        errors.email = validEmailRegex.test(value)
          ? ""
          : "Email nie jest poprawny.";
        break;
      case "textarea":
        errors.textarea =
          value.length < 120 ? "Minimalna liczba znaków to 120." : "";
        break;
      default:
        break;
    }

    // this.setState({ errors, [name]: value }, () => {
    //   console.log(errors);
    // });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (validateForm(this.state.errors)) {
      console.info("Poprawny formularz");
    } else {
      console.error("Nieprawidłowy formularz");
    }

    // console.log("User name:" + this.state.name);
    // console.log("User email:" + this.state.email);
    // console.log("User message:" + this.state.textarea);

    const url = "https://fer-api.coderslab.pl/v1/portfolio/contact";
    const data = {
      name: this.state.name,
      email: this.state.email,
      textarea: this.state.textarea
    };

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
        // "X-Auth-Token": "20200108224609"
      },
      body: JSON.stringify(data)
    })
      .then(resp => {
        if (resp.ok === true) {
          console.log(resp);
        }
      })
      .catch(err => console.log(err));
  };

  render() {
    const { name, email, textarea, errors } = this.state;
    return (
      <section className="home-form" id={this.props.name}>
        <div className="home-form-container">
          <div className="home-opacity-modifier clearfix">
            <form className="home-form-form" onSubmit={this.handleSubmit}>
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
                  {errors.name.length > 0 && (
                    <span className="error">{errors.name}</span>
                  )}
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
                  {errors.email.length > 0 && (
                    <span className="error">{errors.email}</span>
                  )}
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
                  {errors.textarea.length < 120 && (
                    <span className="error">{errors.textarea}</span>
                  )}
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
