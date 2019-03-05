import React from "react";
import phoneSolid from "../styles/images/phone-solid.svg";
export class HeaderTelephone extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
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
    );
  }
}
