import React, { Component } from "react";
import {
  Link as ScrollLink,
  DirectLink,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller
} from "react-scroll";
import { Link } from "react-router-dom";

class HomeHeaderNav extends Component {
  render() {
    return (
      <div className="home-nav-box">
        <div className="home-logs">
          <Link to="/logowanie">
            <button className="home-log-btn"> Zaloguj się </button>
          </Link>
          <Link to="/rejestracja">
            <button className="home-register-btn">Załóż konto</button>
          </Link>
        </div>
        <nav className="home-nav">
          <ul className="home-nav-list">
            <li>
              <ScrollLink
                activeClass="active"
                to="header"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                Start
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                activeClass="active"
                to="four-steps"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                O co chodzi?
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                activeClass="active"
                to="about-us"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                O nas
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                activeClass="active"
                to="about-us"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                Fundacja i organizacja
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                activeClass="active"
                to="about-us"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                Kontakt
              </ScrollLink>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default HomeHeaderNav;
