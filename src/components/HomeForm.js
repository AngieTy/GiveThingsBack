import React, { Component } from "react";
import ImgDeco from "../assets/assets/Decoration.svg";

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
  };

  handleSubmit = e => {
    e.preventDefault();

    const validateEmail = email => {
      const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    };

    const { name, email, textarea } = this.state;

    if (name.length < 1) {
      this.setState({
        errors: {
          name: "Pole nie może być puste."
        }
      });
      console.log("sukces");
    } else if (!validateEmail(email)) {
      this.setState({
        errors: {
          email: "Email nie jest poprawny."
        }
      });
      console.log("sukces2");
    } else if (textarea.length < 120) {
      this.setState({
        errors: {
          textarea: "Wiadomość musi mieć conajmniej 120 znaków."
        }
      });

      console.log("sukces3");
      // console.log(validateEmail(this.state.errors));
      // console.log(this.state.errors);
    } else if (
      name.length === 0 &&
      email.length === 0 &&
      textarea.length === 0
    ) {
      console.log("nie ma wysylania pustego formularza!");
    } else {
      this.setState({
        errors: {
          name: "",
          email: "",
          password: ""
        }
      });
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
    }
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
                  {<span className="error">{errors.name}</span>}
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
                  {<span className="error">{errors.email}</span>}
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
                  {<span className="error">{errors.textarea}</span>}
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
