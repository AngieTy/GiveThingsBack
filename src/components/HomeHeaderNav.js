import React, { Component } from "react";
import { Link } from "react-router-dom";
import {Link as ScrollLink} from "react-scroll";

// let ScrollLink = Scroll.Link;


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
                to="HomeHeader"
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
                to="HomeSteps"
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
                to="HomeAbout"
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
                to="HomeHelp"
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
                to="HomeForm"
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
