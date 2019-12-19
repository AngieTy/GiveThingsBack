import React, { Component } from "react";
import Home from "./components/Home";
import Login from "./components/Login";
import { HashRouter, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <>
        <HashRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/logowanie" component={Login} />
          </Switch>
        </HashRouter>
      </>
    );
  }
}
export default App;
