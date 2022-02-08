import React, { Component } from "react";
import { Link } from "react-router-dom";

class HeaderMenu extends Component {
  render() {
    return (
      <>
        <ul className="nav navbar-nav">
          <li className="active">
            <Link to={"./anasayfa"}>
              <span className="ti-home"></span> <i className=""></i>
            </Link>
          </li>
          <li>
            <Link to={"./urunler"}>
              Ürünler <i className=""></i>
            </Link>
          </li>
          <li>
            <Link to={"./teklif"}>
              Kampanyalar <i className=""></i>
            </Link>
          </li>

          <li>
            <Link to={"./sigortasirketleri"}>
              Çözüm Ortaklarımız <i className=""></i>
            </Link>
          </li>
          <li>
            <Link to={"./hakkimizda"}>
              Hakkımızda <i className=""></i>
            </Link>
          </li>
        </ul>
      </>
    );
  }
}
export default HeaderMenu;
