import React, { Component } from "react";
import { Link } from "react-router-dom";

import Header from "../../Layout/Header1";
import Footer from "../../Layout/footer5";
import PageTitle from "./../../Layout/PageTitle";
import SectionCounter from "./../../Element/SectionCounter";
import TestimonialCarousel from "./../../Element/TestimonialCarousel";
import FormStyle from "./../../Element/FormStyle";

import bgslider9 from "../../../images/background/bg222.jpg";
//Images
import bnr1 from "./../../../images/banner/bnr4.jpg";
import bgmap from "./../../../images/background/bg-map.jpg";
import bg1 from "./../../../images/background/bg1.jpg";
import about from "./../../../images/main-slider/slide9.png";

class ServicesDetails extends Component {
  render() {
    return (
      <>
        <Header />
        <div className="page-content bg-white rubik-font">
          {/* <!-- inner page banner --> */}
          <div
            className="dlab-bnr-inr overlay-primary-white"
            style={{ backgroundImage: "url(" + bgslider9 + ")" }}
          >
            <PageTitle motherMenu="Bayilik" activeMenu="Bayilik " />
          </div>
          {/* <!-- inner page banner END --> */}
          <div className="content-block">
            {/* <!-- About Us --> */}
            <div className="section-full content-inner exp-services">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="section-head text-black text-center">
                      <h4 className="text-gray-dark font-weight-500 m-b10">
                        Bayimiz Olun
                      </h4>
                      <h2 className="box-title m-tb0">
                        Acentelik Başvurularınız için Wind Sigorta Başvuru
                        şartları.
                        <span className="bg-primary"></span>
                      </h2>
                      <p className="font-weight-300 font-18">
                        Ön Yeterlilik Koşulu:{" "}
                        <strong className="text-yellow">5684 </strong> sayılı
                        Sigortacılık Kanununu ve buna bağlı Sigorta Acenteleri
                        Yönetmeliği gereğince sigorta acenteliği yapmak
                        isteyenlerin Türkiye Odalar ve Borsalar Birliğince
                        tutulan levhaya kayıtlı olması gerekmektedir. Levhaya
                        kayıt olmamış acenteler uygunluk belgesi almak üzere
                        başvurularını TOBB tarafından görevlendirilecek odalara
                        yapabilirler. Konu ile ilgili mevzuat, detaylı bilgi ve
                        işlemler için www.sigorta.org.tr internet adresinden
                        yararlanabilirsiniz.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- Our Services --> */}
            {/* <!-- About Us --> */}
            <div className="section-full">
              <div className="container-fluid">
                <div className="row dzseth">
                  <div className="col-lg-6 col-md-12 p-a0 img-fix">
                    <img src={about} alt="" className="img-cover" />
                  </div>
                  <div className="col-lg-6 col-md-12 bg-black-light p-lr0 dis-tbl">
                    <div className="p-a30 dis-tbl-cell ">
                      <div className="max-w500 m-auto p-tb30">
                        <div className="row">
                          <div className="col-lg-12 text-white">
                            <h3 className="box-title m-b10">
                              Acentemiz olun<span className="bg-primary"></span>
                            </h3>
                            <h5 className="m-b30">
                              Acentelik faaliyetlerinde bulunacak gerçek
                              kişilerde aşağıdaki nitelikler aranır:
                            </h5>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-lg-12 m-b30 chosesus-content">
                            <ul className="list-checked primary text-white ">
                              <li className="text-white">
                                <span>Türkiye’de yerleşik olması.</span>
                              </li>
                              <li className="text-white">
                                <span>
                                  Medeni hakları kullanma ehliyetine sahip
                                  olması.
                                </span>
                              </li>
                              <li className="text-white">
                                <span>
                                  Sigortacılık kanunu’nda belirtilen suçlardan
                                  hüküm giymemiş veya ceza almamış olması.
                                </span>
                              </li>
                              <li className="text-white">
                                <span>
                                  Teknik personel vasıflarını taşıması.
                                </span>
                              </li>
                              <li>
                                <span>
                                  Asgari malvarlığı (25.000 TL) şartını yerine
                                  getirmiş olması.
                                </span>
                              </li>
                              <li>
                                <span>
                                  Fiziksel, teknik ve idari altyapı ile insan
                                  kaynakları bakımından yeterli olması.
                                </span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- Testimonials END --> */}
            {/* <!-- Get in touch --> */}
            <div
              className="section-full overlay-primary-white bg-img-fix"
              style={{ backgroundImage: "url(" + bgslider9 + ")" }}
            >
              <FormStyle />
            </div>
            {/* <!-- Get in touch --> */}
          </div>
          {/* <!-- contact area END --> */}
        </div>

        <Footer />
      </>
    );
  }
}
export default ServicesDetails;
