import React, { Component } from "react";
import { Link } from "react-router-dom";
import Header from "./../Layout/Header1";
import Footer from "./../Layout/footer5";
import PageTitle from "./../Layout/PageTitle";

//Images
import bnr1 from "./../../images/background/bg222.jpg";

import { flipItem } from "./../Pages/ShortCode/DataFile";

class Expertise extends Component {
  render() {
    return (
      <>
        <Header />
        <div className="page-content bg-white rubik-font">
          {/* <!-- inner page banner --> */}
          <div
            className="dlab-bnr-inr overlay-primary-white"
            style={{ backgroundImage: "url(" + bnr1 + ")" }}
          >
            <PageTitle motherMenu="Ürünlerimiz" activeMenu="Ürünler" />
          </div>
          {/* <!-- inner page banner END --> */}
          <div className="content-block">
            {/* <!-- About Us --> */}
            <div className="section-full content-inner">
              <div className="container">
                <div className="row">
                  <div className="col-lg-8 col-md-7">
                    <div className="section-head text-black">
                      <h4 className="text-gray-dark font-weight-300 m-b10">
                        Ürünler
                      </h4>
                      <h2 className="box-title m-tb0">
                        Poliçe değil güven satıyoruz{" "}
                        <span className="bg-primary"></span>
                      </h2>
                      <p>
                        Edindiğimiz değerlerle, sigortacılık mesleğini icra
                        ederken güvenilir ve hızlı bir şekilde, müşterilerimizin
                        ihtiyaçları dahilinde hizmet verip sektörde marka olmayı
                        hedefleyen öncü bir acenteyiz..
                      </p>
                    </div>
                    <div className="row serv">
                      {flipItem.map((data, index) => (
                        <div className="col-lg-6 col-md-12 col-sm-6 m-b30">
                          <div className="icon-bx-wraper expertise  bx-style-1 p-a30 center">
                            <div className="icon-lg m-b20">
                              {" "}
                              <Link to={"#"} className="icon-cell">
                                <img src={data.image} alt="" />
                              </Link>{" "}
                            </div>
                            <div className="icon-content">
                              <h5 className="dlab-tilte text-uppercase">
                                <Link to={data.link}>{data.name}</Link>
                              </h5>
                              <p className="demo-2">{data.aciklama}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-5 sticky-top">
                    <form
                      className="inquiry-form inner dzForm"
                      action="script/contact.php"
                    >
                      <div className="dzFormMsg"></div>
                      <h3 className="box-title m-t0 m-b10">
                        Teklif Formunu doldurun{" "}
                        <span className="bg-primary"></span>
                      </h3>
                      <p>
                        İhtiyaçlarınıza yönelik en uygun teklifi sizlere sunalım
                      </p>
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="form-group">
                            <div className="input-group">
                              <span className="input-group-addon">
                                <i className="ti-user text-primary"></i>
                              </span>
                              <input
                                name="dzName"
                                type="text"
                                required
                                className="form-control"
                                placeholder="Ad-Soyad"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="form-group">
                            <div className="input-group">
                              <span className="input-group-addon">
                                <i className="ti-mobile text-primary"></i>
                              </span>
                              <input
                                name="dzOther[Phone]"
                                type="text"
                                required
                                className="form-control"
                                placeholder="Numaranız"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="form-group">
                            <div className="input-group">
                              <span className="input-group-addon">
                                <i className="ti-email text-primary"></i>
                              </span>
                              <input
                                name="dzEmail"
                                type="email"
                                className="form-control"
                                required
                                placeholder="E-mail"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="form-group">
                            <div className="input-group">
                              <span className="input-group-addon">
                                <i className="ti-check-box text-primary"></i>
                              </span>
                              <input
                                name="dzOther[Subject]"
                                type="text"
                                required
                                className="form-control"
                                placeholder="Ürün Seçiniz"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="form-group">
                            <div className="input-group">
                              <span className="input-group-addon">
                                <i className="ti-file text-primary"></i>
                              </span>
                              <input
                                name="dzOther[Subject]"
                                type="text"
                                required
                                className="form-control"
                                placeholder="Ek Bilgi"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="form-group">
                            <div className="input-group">
                              <span className="input-group-addon">
                                <i className="ti-agenda text-primary"></i>
                              </span>
                              <textarea
                                name="dzMessage"
                                rows="4"
                                className="form-control"
                                required
                                placeholder="Mesajınız"
                              ></textarea>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="form-group">
                            <div className="input-group">
                              <div
                                className="g-recaptcha"
                                data-sitekey="6LefsVUUAAAAADBPsLZzsNnETChealv6PYGzv3ZN"
                                data-callback="verifyRecaptchaCallback"
                                data-expired-callback="expiredRecaptchaCallback"
                              ></div>
                              <input
                                className="form-control d-none"
                                data-recaptcha="true"
                                required
                                data-error="Please complete the Captcha"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <button
                            name="submit"
                            type="submit"
                            value="Submit"
                            className="site-button button-lg"
                          >
                            {" "}
                            <span>teklif alın</span>{" "}
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </>
    );
  }
}
export default Expertise;
