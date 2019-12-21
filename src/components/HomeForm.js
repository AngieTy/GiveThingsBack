import React, { Component } from "react";
import ImgDeco from "../assets/assets/Decoration.svg";

class HomeForm extends Component {
  render() {
    return (
      <section className="home-form" id={this.props.name}>
        <div className="home-form-container">
          <div className="home-opacity-modifier clearfix">
            <form className="home-form-form">
              <h2 className="form-header">Skontaktuj się z nami</h2>
              <img src={ImgDeco} alt="image_decoration" className="form-img" />
              <div className="form-inputs-box">
                <label className="form-input-title">
                  Wpisz swoje imię
                  <input type="text" name="name" placeholder="Angelika"></input>
                </label>
                <label className="form-input-title">
                  Wpisz swój email
                  <input
                    type="email"
                    name="email"
                    placeholder="abc@xyz.pl"
                  ></input>
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
              <button className="form-button">Wyślij</button>
            </form>
          </div>
        </div>
      </section>
    );
  }
}

export default HomeForm;
