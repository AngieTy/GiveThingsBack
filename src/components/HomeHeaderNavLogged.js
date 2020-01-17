import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { connect } from "react-redux";
import { logoutUser } from "../reduxStuff/actions/auth";

class HomeHeaderNavLogged extends Component {
  handleLogout = e => {
    const { dispatch } = this.props;
    dispatch(logoutUser());
  };
  render() {
    return (
      <div className="home-nav-box">
        <div className="home-logged">
          <span className="home-user-logged">{this.props.email}</span>
          <Link to="/oddaj-rzeczy">
            <button className="home-give-btn"> Oddaj rzeczy </button>
          </Link>
          <Link to="/wylogowano">
            <button className="home-logout-btn" onClick={this.handleLogout}>
              Wyloguj się
            </button>
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
function mapStateToProps(state) {
  return {
    isAuthenticated: state.auth.isAuthenticated
  };
}
export default connect(mapStateToProps)(HomeHeaderNavLogged);
