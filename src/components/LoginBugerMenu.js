import React, { Component } from "react";
import { Link } from "react-router-dom";

class LoginBurgerMenu extends Component {
  state = {
    isShown: false
  };
  handleToggleMenu = () => {
    this.setState({
      isShown: !this.state.isShown
    });
  };

  render() {
    const { isShown } = this.state;
    const style = {
      left: isShown ? "0" : "-120%"
    };
    return (
      <>
        <span
          className="burger-menu-btn"
          onClick={this.handleToggleMenu}
        ></span>
        <div className="burger-menu" style={style}>
          <ul className="burger-nav-list">
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
        </div>
      </>
    );
  }
}

export default LoginBurgerMenu;
