import React, { Component } from "react";
import HomeHeaderNav from "./HomeHeaderNav";
import HomeHeaderBtns from "./HomeHeaderBtns";
import { connect } from "react-redux";
import HomeHeaderNavLogged from "./HomeHeaderNavLogged";

class HomeHeader extends Component {
  render() {
    return (
      <section className="home-header" id={this.props.name}>
        <div className="home-header-img"></div>
        <div className="home-header-container">
          {this.props.isAuthenticated ? (
            <HomeHeaderNavLogged />
          ) : (
            <HomeHeaderNav />
          )}

          <HomeHeaderBtns />
        </div>
      </section>
    );
  }
}
function mapStateToProps(state) {
  return {
    isAuthenticated: state.auth.isAuthenticated
  };
}
export default connect(mapStateToProps)(HomeHeader);
