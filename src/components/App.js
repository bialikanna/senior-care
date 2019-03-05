import React, { Fragment, Component } from "react";
import autoBind from "auto-bind";
import "../styles/components/main.less";
import mail from "../styles/images/mail.svg";
import phone from "../styles/images/telefon.svg";
import facebook from "../styles/images/facebook.svg";
import { OurAccess } from "./OurAccess";
import { OurServicesDetails } from "./OurServicesDetails";
import { Banner } from "./Banner";
import { Header } from "./Header";

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
        <Banner />
        <section id="our-services">
          <div class="wrapper">
            <h1>Nasze usługi</h1>
            <p>
              Lorem Ipsum jest tekstem stosowanym jako przykładowy wypełniacz w
              przemyśle poligraficznym. Został po raz pierwszy użyty w XV w.
              przez nieznanego drukarza do wypełnienia tekstem próbnej książki.
              Pięć wieków później zaczął być używany przemyśle elektronicznym.
            </p>
          </div>
        </section>

        <OurServicesDetails />

        <OurAccess />

        <section id="our-data">
          <div class="wrapper">
            <div class="one-of-three">
              <div class="box-one-of-three">
                <div class="footer-box">
                  <div class="footer-icon">
                    <img src={phone} alt="" />
                  </div>
                  <p>
                    <a href="tel:+48725658420">+48 725 658 420</a>
                  </p>
                </div>
              </div>
            </div>

            <div class="one-of-three">
              <div class="box-one-of-three">
                <div class="footer-box">
                  <div class="footer-icon">
                    <img src={mail} alt="" />
                  </div>
                  <p>gabriela.nowicka8@gmail.com</p>
                </div>
              </div>
            </div>

            <div class="one-of-three">
              <div class="box-one-of-three">
                <div class="footer-box">
                  <div class="footer-icon">
                    <img src={facebook} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="second-menu">
          <div class="wrapper">
            <div class="box-second-menu">
              <ul>
                <li>
                  <a href="#">HOME</a>
                </li>
                <li>
                  <a href="kontakt.html">USŁUGI</a>
                </li>
                <li>
                  <a href="onas.html">O NAS</a>
                </li>
                <li>
                  <a href="praca.html">PRACA</a>
                </li>
                <li>
                  <a href="uslugi.html">KONTAKT</a>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section id="bottom-bar">
          <div class="wrapper">
            <div className="one-of-two">
              <p>2019 wszelkie prawa zastrzeżone</p>
            </div>
            <div className="one-of-two">
              <p>Projekt i realizacja: Anna Bialik</p>
            </div>
          </div>
        </section>
      </Fragment>
    );
  }
}
