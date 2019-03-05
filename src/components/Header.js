import React from "react";
import phoneSolid from "../styles/images/phone-solid.svg";
import logoSeniorCare from "../styles/images/LogoSeniorCare.svg";
export class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <header>
        <div class="header_telephone_bar">
          <div class="wrapper">
            <div class="header_contact_data">
              <div class="header_telephone_icon">
                <img src={phoneSolid} />
              </div>
              <p>
                <a href="tel:+48725658420"> +48 725 658 420</a>
              </p>
            </div>
          </div>
        </div>
        <div class="main_bar">
          <div class="wrapper">
            <div class="logo">
              <a href="#">
                <img src={logoSeniorCare} />{" "}
              </a>
            </div>
            <nav>
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
            </nav>
          </div>
        </div>
      </header>
    );
  }
}
