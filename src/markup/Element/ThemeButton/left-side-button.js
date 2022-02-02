import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class leftsidebutton extends Component {
  render() {
    return (
      <>
        <div className="flank-area ">
          <Link to={"./"} className="dez-page site-button primary paddin">
            Kasko
          </Link>
          <Link to={"./"} className="dez-page site-button primary paddin">
            Sağlık
          </Link>
          <Link to={"./"} className="dez-page site-button primary paddin">
            Deprem
          </Link>
          <Link to={"./"} className="dez-page site-button primary paddin">
            Yangın
          </Link>
          <Link to={"./"} className="dez-page site-button primary paddin">
            Hayat
          </Link>

          <div className="clear"></div>
        </div>
      </>
    );
  }
}
