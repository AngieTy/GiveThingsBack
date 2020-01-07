import React, { Component } from "react";
import ImgDeco from "../assets/assets/Decoration.svg";

class HomeForm extends Component {
  state = {
    isLogged: false,
    name: "",
    email: "",
    errors: [],
    textarea: "",
    user: null
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleFormSubmit = e => {
    e.preventDefault();

    const { name, email, textarea } = this.state;
    const errors = [];

    if (name.length === 0) {
      errors.push("Pole nie może być puste!");
    }

    if (email.length === 0) {
      errors.push("Pole musi być poprawne!");
    }

    if (textarea.length < 120) {
      errors.push("Pole musi zawierać minimum 120 znaków.");
    }
  };
  render() {
    const { name, email, textarea, errors } = this.state;
    return (
      <section className="home-form" id={this.props.name}>
        <div className="home-form-container">
          <div className="home-opacity-modifier clearfix">
            <form className="home-form-form" onSubmit={this.handleFormSubmit}>
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
                  <div className="input-alert">
                    {errors.map((error, i) => (
                      <p key={i}>{error}</p>
                    ))}
                  </div>
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
                </label>
              </div>
              <div className="form-text-box">
                <label>
                  Wpisz swoją wiadomość
                  <textarea className="form-text-area">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </textarea>
                </label>
              </div>
              <button className="form-button" onClick={this.handleSendForm}>
                Wyślij
              </button>
            </form>
          </div>
        </div>
      </section>
    );
  }
}

export default HomeForm;
