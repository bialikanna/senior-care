import React, { Fragment, Component } from "react";
import autoBind from "auto-bind";
import "../styles/components/main.less";
import { Header } from "./Header/Header";
import { Footer } from "./Footer/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Home } from "./Main/Home";
import { Contact } from "./Main/Contact";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      urlLink: window.location.pathname
    };
    autoBind(this);
  }

  render() {
    console.log("jsahdgkj", this.state.urlLink);
    return (
      <Router>
        <Fragment>
          <Header url={this.state.urlLink} />
          <Switch>
            <Route
              exact
              path={`${window.location.pathname}`}
              component={Home}
            />
            <Route
              exact
              path={`${window.location.pathname}contact`}
              component={Contact}
            />
          </Switch>
          <Footer />
        </Fragment>
      </Router>
    );
  }
}
