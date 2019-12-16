import React, { Component } from "react";

class HomeThreeColumns extends Component {
  render() {
    return (
      <section className="home-three-columns">
        <div className="three-columns-box">
          <h2 className="three-columns-header">10</h2>
          <h3 className="three-columns-title">oddanych worków</h3>
          <p className="three-columns-content">
            Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel
            enim a elit viverra elementuma. Aliquam erat volutpat.
          </p>
        </div>
        <div className="three-columns-box">
          <h2 className="three-columns-header">5</h2>
          <h3 className="three-columns-title">wspartych organizacji</h3>
          <p className="three-columns-content">
            Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel
            enim a elit viverra elementuma. Aliquam erat volutpat.
          </p>
        </div>
        <div className="three-columns-box">
          <h2 className="three-columns-header">7</h2>
          <h3 className="three-columns-title">zorganizowanych zbiórek</h3>
          <p className="three-columns-content">
            Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel
            enim a elit viverra elementuma. Aliquam erat volutpat.
          </p>
        </div>
      </section>
    );
  }
}

export default HomeThreeColumns;
