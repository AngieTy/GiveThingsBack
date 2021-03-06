import React, { Component } from "react";
import HomeHeaderNav from "./HomeHeaderNav";
import HomeHeaderBtns from "./HomeHeaderBtns";
import { connect } from "react-redux";
import HomeHeaderNavLogged from "./HomeHeaderNavLogged";
import HomeHeaderBtnsLogged from "./HomeHeaderBtnsLogged";

class HomeHeader extends Component {
  render() {
    return (
      <section className="home-header" id={this.props.name}>
        <div className="home-header-img">
          <div className="home-header-container">
            {this.props.isAuthenticated ? (
              <>
                <HomeHeaderNavLogged />
                <HomeHeaderBtnsLogged />
              </>
            ) : (
              <>
                <HomeHeaderNav />
                <HomeHeaderBtns />
              </>
            )}
          </div>
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
