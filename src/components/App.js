import React, { Fragment, Component } from "react";
import autoBind from "auto-bind";
import "../styles/components/main.less";
import { Header } from "./Header";
import { Baner } from "./Baner";
import { Services } from "./Services";
import { ServicesDetails } from "./ServicesDetails";
import { Access } from "./Access";
import { FooterData } from "./FooterData";
import { FooterSecondMenu } from "./FooterSecondMenu";

class FooterBottom extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section id="bottom-bar">
        <div class="wrapper">
          <div className="one-of-two">
            <div class="box-bottom-bar">
              <p>2019 wszelkie prawa zastrzeżone</p>
              <p>Projekt i realizacja: Anna Bialik</p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    autoBind(this);
  }

  render() {
    return (
      <Fragment>
        <Header />
        <Baner />
        <Services />
        <ServicesDetails />
        <Access />
        <FooterData />
        <FooterSecondMenu />
        <FooterBottom />
      </Fragment>
    );
  }
}
