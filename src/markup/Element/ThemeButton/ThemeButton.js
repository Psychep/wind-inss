import React, { Component } from "react";

export default class ThemeButton extends Component {
  render() {
    return (
      <>
        <a
          href="https://api.whatsapp.com/send?phone=+90(532)667 94 63&text=Merhaba"
          class="float"
          target="_blank"
        >
          <i class="fa fa-whatsapp my-float"></i>
        </a>
      </>
    );
  }
}
