import React, { Component } from "react";
import HomeHeaderNav from "./HomeHeaderNav";
import "../scss/main.scss";

class Login extends Component {
  render() {
    return (
      <section className="login">
        <HomeHeaderNav />
      </section>
    );
  }
}

export default Login;
