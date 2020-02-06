import React, { Component } from "react";
import { Link as ScrollLink } from "react-scroll";

class HomeBurgerMenu extends Component {
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
        </div>
      </>
    );
  }
}

export default HomeBurgerMenu;
