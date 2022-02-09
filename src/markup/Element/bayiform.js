import React, { Fragment, Component } from "react";
import { iller } from "../../markup/Pages/ShortCode/il-ilce";
class FormStyle extends Component {
  render() {
    return (
      <Fragment>
        <div className="container">
          <div className="">
            <div className="">
              <form
                className="inquiry-form  dzForm"
                action="script/contact.php"
              >
                <div className="dzFormMsg"></div>
                <h3 className="box-title m-t0 m-b10">
                  Bayi Formunu doldurun <span className="bg-primary"></span>
                </h3>
                <p>Bayilik formu</p>
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
                          placeholder="Telefon"
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
                        <select
                          name="dzOther[Subject]"
                          type="text"
                          required
                          className="form-control"
                          placeholder="Şehriniz"
                        >
                          <option disabled selected>
                            il seçiniz
                          </option>
                          {iller.map((item, index) => (
                            <option className="test" value="test">
                              {item.il_adi}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <div className="input-group">
                        <span className="input-group-addon">
                          <i className="ti-file text-primary"></i>
                        </span>
                        <select
                          name="dzOther[Subject]"
                          type="text"
                          required
                          className="form-control"
                          placeholder="Şehriniz"
                        >
                          <option disabled selected>
                            il seçiniz
                          </option>
                          {iller.map((item, index) => (
                            <option className="test" value="test">
                              {item.il_adi}
                            </option>
                          ))}
                        </select>
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
                          placeholder="Mesajınnız"
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
                      <span>Başvurun!</span>{" "}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
export default FormStyle;
