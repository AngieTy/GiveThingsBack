import React, { Component } from "react";
import Home from "./components/Home";
import Login from "./components/Login";
import Registration from "./components/Registration";
import Logout from "./components/Logout";
import GiveThingsLayout from "./components/GiveThingsLayout/GiveThingsLayout";
import { HashRouter, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

class App extends Component {
  render() {
    return (
      <>
        <HashRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/logowanie" component={Login} />
            <Route path="/rejestracja" component={Registration} />
            <Route path="/wylogowano" component={Logout} />
            <Route path="/oddaj-rzeczy" component={GiveThingsLayout} />
          </Switch>
        </HashRouter>
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    isVerifying: state.auth.isVerifying
  };
}
export default connect(mapStateToProps)(App);
