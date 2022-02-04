import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class leftsidebutton extends Component {
  render() {
    return (
      <>
        <div className="flank-area ">
          <Link
            to={"./kasko-sigortasi"}
            className="dez-page site-button primary paddin"
          >
            Kasko
          </Link>
          <Link
            to={"./ozel-saglik-sigortasi"}
            className="dez-page site-button primary paddin"
          >
            Sağlık
          </Link>
          <Link
            to={"./deprem-sigortasi"}
            className="dez-page site-button primary paddin"
          >
            Deprem
          </Link>
          <Link
            to={"./konut-sigortasi"}
            className="dez-page site-button primary paddin"
          >
            Yangın
          </Link>
          <Link
            to={"./sera-sigortasi"}
            className="dez-page site-button primary paddin"
          >
            Sera
          </Link>

          <div className="clear"></div>
        </div>
      </>
    );
  }
}
