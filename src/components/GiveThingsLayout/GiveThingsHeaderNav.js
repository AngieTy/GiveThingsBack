import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logoutUser } from "../../reduxStuff/actions/auth";

class GiveThingsHeaderNav extends Component {
  handleLogout = e => {
    const { dispatch } = this.props;
    dispatch(logoutUser());
  };
  render() {
    return (
      <div className="home-nav-box">
        <div className="home-logged">
          <span className="home-user-logged">{this.props.user}</span>
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
              <Link to="/">Start</Link>
            </li>
            <li>
              <Link to="/">O co chodzi?</Link>
            </li>
            <li>
              <Link to="/">O nas</Link>
            </li>
            <li>
              <Link to="/">Fundacja i organizacja</Link>
            </li>
            <li>
              <Link to="/">Kontakt</Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}
function mapStateToProps(state) {
  console.log(state.auth.user);
  return {
    user: state.auth.user.user.email,
    isAuthenticated: state.auth.isAuthenticated
  };
}
export default connect(mapStateToProps)(GiveThingsHeaderNav);
