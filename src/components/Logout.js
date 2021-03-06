import React, { Component } from "react";
import LogoutHeaderNav from "./LogoutHeaderNav";
import ImgDeco from "../assets/assets/Decoration.svg";
import { Link } from "react-router-dom";

class Logout extends Component {
  render() {
    return (
      <section className="logout">
        <LogoutHeaderNav />
        <main className="logout-container">
          <h2 className="logout-header">Wylogwanie nastąpiło pomyślnie!</h2>
          <img src={ImgDeco} alt="decoration_img" />
          <Link to="/">
            <button className="btn-main-site">Strona główna</button>
          </Link>
        </main>
      </section>
    );
  }
}

export default Logout;
