import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Header4 from "./../Layout/Header1";
import Footer5 from "./../Layout/footer5";
import { flipItem } from "./../Pages/ShortCode/DataFile";
//Images
import bg4 from "./../../images/background/bg4.png";
import slider9 from "./../../images/main-slider/slide9.png";
import bgslider9 from "./../../images/main-slider/slide9.jpg";
import bg6 from "./../../images/background/bg6.png";
import bg9 from "./../../images/background/bg9.png";
import bg10 from "./../../images/background/bg10.png";
import bg8 from "./../../images/background/bg8.png";
import bubble1 from "./../../images/bubbles/bubbles1.png";
import bubble2 from "./../../images/bubbles/bubbles2.png";
import bubble3 from "./../../images/bubbles/bubbles3.png";
import bubble4 from "./../../images/bubbles/bubbles4.png";
import bubble5 from "./../../images/bubbles/bubbles5.png";
import iconbubble1 from "./../../images/bubbles/icon1.png";
import iconbubble2 from "./../../images/bubbles/icon2.png";
import iconbubble3 from "./../../images/bubbles/icon3.png";
import iconbubble4 from "./../../images/bubbles/icon4.png";
import iconbubble5 from "./../../images/bubbles/icon5.png";

const Index6 = (props) => {
  let resizeMargin = () => {
    var screenWidth = window.innerWidth;
    if (screenWidth >= 1280) {
      var elmnt = document.querySelector(".container");
      var containerSize = elmnt.offsetWidth;

      var getMargin = (screenWidth - containerSize) / 2;

      var setResizeMarginButton =
        document.getElementsByClassName("setResizeMargin");
      var class_len =
        setResizeMarginButton !== null ? setResizeMarginButton.length : 0;
      for (var i = 0; i < class_len; i++) {
        setResizeMarginButton[i].setAttribute(
          "style",
          "margin-left:" + getMargin + "px"
        );
      }
    }
  };

  useEffect(() => {
    resizeMargin();
  }, []);

  var i = 0;

  // Placeholder Animation Start
  var inputSelector = document.querySelectorAll("input, textarea");

  for (i = 0; i < inputSelector.length; i++) {
    inputSelector[i].addEventListener("focus", function (event) {
      return this.parentElement.parentElement.classList.add("focused");
    });
  }

  for (i = 0; i < inputSelector.length; i++) {
    inputSelector[i].addEventListener("blur", function (event) {
      var inputValue = this.value;
      if (inputValue === "") {
        this.parentElement.parentElement.classList.remove("filled");
        this.parentElement.parentElement.classList.remove("focused");
      } else {
        this.parentElement.parentElement.classList.add("filled");
      }
    });
  }

  return (
    <>
      <Header4 />

      <div className="page-content bg-white rubik-font">
        <div
          className="home-banner-2"
          style={{ backgroundImage: "url(" + bgslider9 + ")" }}
        >
          <div className="container">
            <div className="home-bnr-inner-2 row align-items-center">
              <div className="home-bnr-content-2 col-md-6">
                <h4 className="sub-title">An??nda Sigorta</h4>
                <h2 className="dz-title text-primary">
                  <strong>W??ND S??GORTA </strong>
                  <span>Sigorta ??htiyac??n??z?? Belirleyin</span>
                  <br />
                </h2>
                <p>
                  Wind sigorta <br />
                  An??nda <br />
                  Sigortan haz??r.
                </p>
                <Link
                  to={"./iletisim"}
                  className="site-button button-md radius-xl"
                >
                  Hemen Teklif Al
                </Link>
              </div>

              <div className="col-md-6">
                <div className="curve-img">
                  <img src={slider9} alt="" className="slide-img-curve" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="content-block">
          {/* <!-- Coded & Maintained --> */}
          <div
            className="section-full content-inner-2 about-bx2"
            style={{
              backgroundImage: "url(" + bg4 + ")",
              backgroundPosition: "top right",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="container">
              <div className="row align-items-center d-flex">
                <div className="col-lg-8 col-md-7">
                  <div className="row">
                    <div className="col-5 bubbx1">
                      <div
                        className="bubbles-bx bubbles-bx1"
                        style={{ backgroundImage: "url(" + bubble1 + ")" }}
                      >
                        <div className="bubinbox">
                          <div className="text-primary">
                            <span className="icon-cell icon-lg">
                              <img src={iconbubble1} alt="" />
                            </span>
                          </div>
                          <h5 className="dlab-tilte">Oto Sigortalar??</h5>
                        </div>
                      </div>
                      <div
                        className="bubbles-bx bubbles-bx2 ml-auto "
                        style={{ backgroundImage: "url(" + bubble3 + ")" }}
                      >
                        <div className="bubinbox">
                          <div className="text-primary">
                            <span className="icon-cell icon-lg">
                              <img src={iconbubble3} alt="" />
                            </span>
                          </div>
                          <h5 className="dlab-tilte">Yang??n Sigortalar??</h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-3 bubbx1">
                      <div
                        className="bubbles-bx bubbles-bx3 "
                        style={{ backgroundImage: "url(" + bubble2 + ")" }}
                      >
                        <div className="bubinbox">
                          <div className="text-primary">
                            <span className="icon-cell icon-lg">
                              <img src={iconbubble2} alt="" />
                            </span>
                          </div>
                          <h5 className="dlab-tilte">Nakliyat Sigortalar??</h5>
                        </div>
                      </div>
                      <div
                        className="bubbles-bx bubbles-bx4 "
                        style={{ backgroundImage: "url(" + bubble4 + ")" }}
                      >
                        <div className="bubinbox">
                          <div className="text-primary">
                            <span className="icon-cell icon-lg">
                              <img src={iconbubble4} alt="" />
                            </span>
                          </div>
                          <h5 className="dlab-tilte">Tar??m Sigortalar??</h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-4 bubbx1 d-flex align-items-center">
                      <div
                        className="bubbles-bx bubbles-bx5"
                        style={{ backgroundImage: "url(" + bubble5 + ")" }}
                      >
                        <div className="bubinbox">
                          <div className="text-primary">
                            <span className="icon-cell icon-lg">
                              <img src={iconbubble5} alt="" />
                            </span>
                          </div>
                          <h5 className="dlab-tilte">Kefalet Sigortas??</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-5 title-bx about-bx2-content text-right ">
                  <h2>W??ND S??GORTA</h2>
                  <div className="dlab-separator bg-primary op8"></div>
                  <p>
                    Edindi??imiz de??erlerle, sigortac??l??k mesle??ini icra ederken
                    g??venilir ve h??zl?? bir ??ekilde, m????terilerimizin ihtiya??lar??
                    dahilinde hizmet verip sekt??rde marka olmay?? hedefleyen ??nc??
                    bir acenteyiz. Poli??e de??il g??ven sat??yoruz slogan??m??zla,
                    ihtiyaca y??nelik ??r??nleri uygun fiyata m????terilerimizle
                    bulu??turuyoruz. Her t??rl?? teknolojiye ayak uyduran dinamik
                    yap??m??zla t??m yeniliklere a????k acenteli??imizle, sizlerin
                    hizmetindeyiz.
                  </p>
                  <Link
                    to={"./urunler"}
                    className="site-button radius-xl button-md btn-long"
                  >
                    Daha Fazla
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Coded & Maintained End --> */}
          {/* <!-- Our Product Gallery --> */}

          {/* <!-- Our Product Gallery END --> */}
          {/* <!-- Our Branded Products --> */}
          <div
            className="section-full business-pro-blog"
            style={{ backgroundImage: "url(" + bg6 + ")" }}
          >
            {/* <!-- Our Branded Products --> */}

            {/* <!-- Our Branded Products END --> */}
            {/* <!-- Our Featured Products --> */}
            <div className="content-inner our-featured">
              <div className="setResizeMargin">
                <div className="row m-a0 d-flex align-items-center">
                  <div className="col-lg-4 col-md-6">
                    <div className="section-head title-bx">
                      <h2>
                        Sigorta <br /> ??irketleri
                      </h2>
                      <h3 className="text-primary font-weight-500">
                        ??al????t??????m??z Sigorta ??irketleri.
                      </h3>
                      <p className="m-b30">
                        {" "}
                        T??rkiye,Anadolu,Bereket,Mapfre,Gri,Arex,Gulf
                      </p>
                      <Link
                        to={"./sigortasirketleri"}
                        className="site-button button-long button-md radius-xl"
                      >
                        Detayl?? Bilgi{" "}
                      </Link>
                    </div>
                  </div>
                  <div className="col-lg-8 col-md-6 text-right">
                    <div className="feature-img-bx">
                      <img src={bg8} alt="" className="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- Our Featured Products END --> */}
          </div>
          {/* <!-- Customer Review  --> */}
          <div className="content-inner pro-client-review">
            <div className="container">
              <div className="section-head title-bx text-center">
                <h2>??r??nlerimiz</h2>
              </div>
              <div className="row">
                {flipItem.map((data, index) => (
                  <div className="col-lg-4 col-md-4 col-sm-12" key={index}>
                    <div className="flip-bx testimonial-flip">
                      <div className="front">
                        <div className="inner text-white">
                          <div className="testimonial-pic ">
                            <img
                              src={data.image}
                              alt=""
                              width="230"
                              height="230"
                            />
                          </div>
                          <div className="testimonial-detail text-white">
                            <strong className="testimonial-name text-white">
                              {data.name}
                            </strong>

                            <span className="testimonial-position text-white">
                              {data.urun.link}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="back">
                        <div className="inner text-white ">
                          <p className="m-b10">{data.name}</p>
                          <div className="testimonial-detail text-white">
                            {data.urun.map((data2, index) => (
                              <a
                                href={data2.link}
                                className="testimonial-name text-white"
                              >
                                {data2.urun}
                              </a>
                            ))}
                            <a
                              href="#"
                              className="testimonial-position text-white"
                            ></a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* <!-- Customer Review END --> */}
          {/* <!-- Our Recent Blog Posts --> */}

          {/* <!-- Newsletter --> */}

          {/* <!-- Newsletter END --> */}

          {/* <!-- Contact Us --> */}
          <div
            className="content-inner business-contact"
            style={{
              backgroundImage: "url(" + bg10 + ")",
              backgroundPosition: "right center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="container">
              <div className="section-head title-bx text-center">
                <h2>Hemen Teklif Al??n</h2>
              </div>
              <form className="row dezPlaceAni contact-form-bx">
                <div className="dzFormMsg"></div>
                <div className="col-lg-4 col-md-4">
                  <div className="form-group ">
                    <div className="input-group">
                      <label>Ad??n??z*</label>
                      <input
                        name="dzName"
                        required="required"
                        type="text"
                        className="form-control"
                        placeholder=""
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4">
                  <div className="form-group ">
                    <div className="input-group">
                      <label>E-mail*</label>
                      <input
                        name="dzEmail"
                        required="required"
                        type="email"
                        className="form-control"
                        placeholder=""
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4">
                  <div className="form-group ">
                    <div className="input-group">
                      <label>Telefon Numaras??*</label>
                      <input
                        name="dzOther[Subject]"
                        required="required"
                        type="text"
                        className="form-control"
                        placeholder=""
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-group">
                    <div className="input-group">
                      <label>Mesaj??n??z*</label>
                      <textarea
                        name="dzMessage"
                        rows="4"
                        className="form-control"
                        required
                        placeholder=""
                      ></textarea>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12 text-center ">
                  <button
                    name="submit"
                    type="submit"
                    value="Submit"
                    className="site-button radius-xl"
                  >
                    Teklif Al{" "}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer5 />
    </>
  );
};
export default Index6;
