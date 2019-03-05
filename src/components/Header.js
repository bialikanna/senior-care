import React from "react";
import logoSeniorCare from "../styles/images/LogoSeniorCare.svg";
import { HeaderTelephone } from "./HeaderTelephone";
export class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <header>
        <HeaderTelephone />
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
