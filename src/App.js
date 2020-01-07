import React, { Component } from "react";
import Home from "./components/Home";
import Login from "./components/Login";
import Registration from "./components/Registration";
import Logout from "./components/Logout";
import { HashRouter, Route, Switch } from "react-router-dom";

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
          </Switch>
        </HashRouter>
      </>
    );
  }
}
export default App;
