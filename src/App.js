import React, { Component } from "react";
import Home from "./components/Home";
import Login from "./components/Login";
import { HashRouter, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <>
        <HashRouter>
          <>
            <Route exact path="/" component={Home} />
          </>
          <Switch>
            <Route path="/logowanie">
              <Login />
            </Route>
          </Switch>
        </HashRouter>
      </>
    );
  }
}
export default App;
