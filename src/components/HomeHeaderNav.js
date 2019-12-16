import React, { Component } from "react";

class HomeHeaderNav extends Component {
  componentDidMount() {}
  render() {
    return (
      <div className="home-nav-box">
        <div className="home-logs">
          <button className="home-log-btn">Zaloguj się</button>
          <button className="home-register-btn">Załóż konto</button>
        </div>
        <nav className="home-nav">
          <ul className="home-nav-list">
            <li>
              <a href="#">Start</a>
            </li>
            <li>
              <a href="#">O co chodzi?</a>
            </li>
            <li>
              <a href="#">O nas</a>
            </li>
            <li>
              <a href="#">Fundacja i organizacja</a>
            </li>
            <li>
              <a href="#">Kontakt</a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default HomeHeaderNav;
