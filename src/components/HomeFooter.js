import React, { Component } from "react";
import Facebook from "../assets/assets/Facebook.svg";
import Instagram from "../assets/assets/Instagram.svg";

class HomeFooter extends Component {
  render() {
    return (
      <footer className="home-footer">
        <span className="footer-copyright">Copyright by CodersLab</span>
        <div className="footer-media">
          <a href="https://www.facebook.com/CodersLabSzkolaIT/">
            <img src={Facebook} alt="facebook_icon" />
          </a>
          <a href="https://www.facebook.com/CodersLabSzkolaIT/">
            <img src={Instagram} alt="instagram_icon" />
          </a>
        </div>
      </footer>
    );
  }
}

export default HomeFooter;
