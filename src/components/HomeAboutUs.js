import React, { Component } from "react";
import ImgTeam from "../assets/assets/People.jpg";
import ImgDeco from "../assets/assets/Decoration.svg";
import ImgSign from "../assets/assets/Signature.svg";

class HomeAboutUs extends Component {
  render() {
    return (
      <section className="home-about" id={this.props.name}>
        <div className="about-container">
          <h2 className="about-header">O nas</h2>
          <img src={ImgDeco} alt="decoration" />
          <p className="about-content">
            Nori grape silver beet broccoli kombu beet greens fava bean potato
            quandong celery. Bunya nuts black-eyed pea prairie turnip leek
            lentil turnip greens parsnip.
          </p>
          <img src={ImgSign} alt="signature" className="signature" />
        </div>
        <div className="team-box">
          <img src={ImgTeam} alt="team_image" className="team" />
        </div>
      </section>
    );
  }
}

export default HomeAboutUs;
