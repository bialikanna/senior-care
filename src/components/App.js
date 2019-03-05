import React, { Fragment, Component } from "react";
import autoBind from "auto-bind";
import "../styles/components/main.less";
import phoneSolid from "../styles/images/phone-solid.svg";
import logoSeniorCare from "../styles/images/LogoSeniorCare.svg";
import baner1 from "../styles/images/baner1.jpg";
import baner2 from "../styles/images/baner2.jpg";
// import baner3 from "../styles/images/baner3.jpg";
// import baner4 from "../styles/images/baner4.jpg";
import services1 from "../styles/images/services1.svg";
import services2 from "../styles/images/services2.svg";
import services3 from "../styles/images/services3.svg";
import services4 from "../styles/images/services4.svg";
import access1 from "../styles/images/access1.svg";
import access2 from "../styles/images/access2.svg";
import mail from "../styles/images/mail.svg";
import phone from "../styles/images/telefon.svg";
import facebook from "../styles/images/facebook.svg";


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    autoBind(this);
  }

  render() {
    return (
      <Fragment>
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

        <section id="baner">
          <div class="wrapper">
            <div class="welcome">
              <h1 class="welcome_title">
                Witaj na stronie <span>Senior Care</span>
              </h1>
              <p class="welcome_text">
                Cóż robić? Jakiego lekarstwa szukać i gdzie? Jak sobie pomóc?
                Jak się odnaleźć w tym gąszczu niewiadomych Ciekawe, czy ktoś
                wie? Owszem, wiedzą ludzie, z dużym okładem wieku są przecież
                różne instytucje, nie daj się starości człowieku. Pomożemy we
                wszystkim aby ułatwić Ci życie. Zapraszamy !
              </p>
            </div>
            <div class="welcome_images">
              <div class="oneoftwo">
                <div class="left">
                  <img src={baner1} />
                </div>
              </div>
              <div class="oneoftwo">
                <div class="right">
                  <img src={baner2} />
                  <img src={baner2} />
                </div>
              </div>
            </div>
          </div>
        </section>
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

        <section id="our-services-details">
          <div class="wrapper">
            <div class="oneoffour">
              <div class="box">
                <div class="inner_box">
                  <div class="circle">
                    <img src={services1} alt="" />
                  </div>
                  <h2>Podawanie leków</h2>
                  <p>                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Perferendis, inventore dolor a ipsum asperiores qui odio
                    soluta facere cupiditate eos, minima doloribus, officiis
                    quis delectus vitae maxime! Ipsa, aspernatur, sint. Lorem Ipsum jest tekstem stosowanym jako przykładowy wypełniacz w
              przemyśle poligraficznym. Został po raz pierwszy użyty w XV w.
              przez nieznanego drukarza do wypełnienia tekstem próbnej książki.
              Pięć wieków później zaczął być używany przemyśle elektronicznym.
                  </p>
                </div>
              </div>
            </div>
            <div class="oneoffour">
              <div class="box">
                <div class="inner_box">
                  <div class="circle">
                    <img src={services2} alt="" />
                  </div>
                  <h2>Badanie EKG</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Perferendis, inventore dolor a ipsum asperiores qui odio
                    soluta facere cupiditate eos, minima doloribus, officiis
                    quis delectus vitae maxime! Ipsa, aspernatur, sint. Lorem Ipsum jest tekstem stosowanym jako przykładowy wypełniacz w
              przemyśle poligraficznym. Został po raz pierwszy użyty w XV w.
              przez nieznanego drukarza do wypełnienia tekstem próbnej książki.
              Pięć wieków później zaczął być używany przemyśle elektronicznym.
                  </p>
                </div>
              </div>
            </div>
            <div class="oneoffour">
              <div class="box">
                <div class="inner_box">
                  <div class="circle">
                    <img src={services3} alt="" />

                  </div>
                  <h2>Gotowanie</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Perferendis, inventore dolor a ipsum asperiores qui odio
                    soluta facere cupiditate eos, minima doloribus, officiis
                    quis delectus vitae maxime! Ipsa, aspernatur, sint.Lorem Ipsum jest tekstem stosowanym jako przykładowy wypełniacz w
              przemyśle poligraficznym. Został po raz pierwszy użyty w XV w.
              przez nieznanego drukarza do wypełnienia tekstem próbnej książki.
              Pięć wieków później zaczął być używany przemyśle elektronicznym.
                  </p>
                </div>
              </div>
            </div>
            <div class="oneoffour">
              <div class="box">
                <div class="inner_box">
                  <div class="circle">
                    <img src={services4} alt="" />
                  </div>
                  <h2>Pierwsza pomoc</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Perferendis, inventore dolor a ipsum asperiores qui odio
                    soluta facere cupiditate eos, minima doloribus, officiis
                    quis delectus vitae maxime! Ipsa, aspernatur, sint. Lorem Ipsum jest tekstem stosowanym jako przykładowy wypełniacz w
              przemyśle poligraficznym. Został po raz pierwszy użyty w XV w.
              przez nieznanego drukarza do wypełnienia tekstem próbnej książki.
              Pięć wieków później zaczął być używany przemyśle elektronicznym.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="our-access">
          <div class="wrapper">
            <div class="one-of-two">
              <div class="box-our-access">
                <div class="our-access-foto">
                  <img src={access1} alt="" />
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                    proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
              </div>
            </div>
          </div>

          <div class="one-of-two">
              <div class="box-our-access">
                <div class="our-access-foto">
                  <img src={access2} alt="" />
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                    proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
              </div>
          </div>
        </section>

        <section id="our-data">
          <div class="wrapper">
            <div class="one-of-three">
              <div class="box-one-of-three">
                <div class="footer-box">
                  <div class="footer-icon">
                    <img src={phone} alt="" />
                  </div>
                  <p><a href="tel:+48725658420">+48 725 658 420</a></p>
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
            
        {/* <section id="second-menu">
          <div class="wrapper">
            <div class="box-second-menu">
              <ul>
                <li><a href="#">HOME</a></li>
                <li><a href="kontakt.html">USŁUGI</a></li>
                <li><a href="onas.html">O NAS</a></li>
                <li><a href="praca.html">PRACA</a></li>
                <li><a href="uslugi.html">KONTAKT</a></li>
              </ul> 
            </div> 
          </div>
        </section> */}
           
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
      </Fragment>
    );
  }
}
