import React, { Component } from "react";
import { Link } from "react-router-dom";

class Footer5 extends Component {
  render() {
    return (
      <>
        <footer className="site-footer text-uppercase footer-white business-footer">
          <div className="footer-top">
            <div className="container">
              <div className="row">
                <div className="col-5 col-lg-2 col-md-6 col-sm-6 footer-col-4">
                  <div className="widget widget_services border-0">
                    <h5 className="m-b30 text-white">Acentemiz</h5>
                    <ul>
                      <li>
                        <Link to={"./anasayfa"}>Anasayfa </Link>
                      </li>
                      <li>
                        <Link to={"./hakkimizda"}>Hakkımızda </Link>
                      </li>
                      <li>
                        <Link to={"./urunler"}>Ürünlerimiz</Link>
                      </li>
                      <li>
                        <Link to={"./iletisim"}>Bize ulaşın</Link>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 col-sm-6 footer-col-4">
                  <div className="widget widget_getintuch">
                    <h5 className="m-b30 text-white ">İletişim</h5>
                    <ul>
                      <li>
                        <i className="ti-mobile"></i>
                        <strong>Telefon</strong> 0(532)667 94 63
                      </li>
                      <li>
                        <i className="ti-email"></i>
                        <strong>email</strong>windsigorta@outlook.com
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-7 col-lg-2 col-md-6 col-sm-6 footer-col-4">
                  <div className="widget widget_services border-0"></div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 footer-col-4 ">
                  <div className="widget">
                    <h5 className="m-b30 text-white">İletişimde Kalalım</h5>
                    <p className="text-capitalize m-b20">
                      Yeni ürünlerimiz ve size özel kampanyalarımızdan haberdar
                      olmak isterseniz gündemimize kayıt olabilirsiniz.
                    </p>
                    <div className="subscribe-form m-b20">
                      <form
                        className="dzSubscribe"
                        action="script/mailchamp.php"
                        method="post"
                      >
                        <div className="dzSubscribeMsg"></div>
                        <div className="input-group">
                          <input
                            name="dzEmail"
                            required="required"
                            className="form-control"
                            placeholder="E-mail"
                            type="email"
                          />
                          <span className="input-group-btn">
                            <button
                              name="submit"
                              value="Submit"
                              type="submit"
                              className="site-button"
                            >
                              Kaydet
                            </button>
                          </span>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-bottom bg-primary">
            <div className="container">
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-6 text-left ">
                  {" "}
                  <span>Copyright © 2022 Nextlevel Dijital</span>{" "}
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 text-right "></div>
              </div>
            </div>
          </div>
        </footer>
      </>
    );
  }
}

export default Footer5;
