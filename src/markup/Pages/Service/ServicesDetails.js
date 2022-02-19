import React, { Component } from "react";
import { Link } from "react-router-dom";

import Header from "../../Layout/Header1";
import Footer from "../../Layout/footer5";
import PageTitle from "./../../Layout/PageTitle";
import SectionCounter from "./../../Element/SectionCounter";
import TestimonialCarousel from "./../../Element/TestimonialCarousel";
import ContactUs from "./../../Element/bayiform";
import Search from "../../Pages/Search";
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
                        Şubemiz Olun
                      </h4>
                      <h2 className="box-title m-tb0">
                        SİGORTA ŞUBE BAŞVURUSU
                        <span className="bg-primary"></span>
                      </h2>
                      <p className="font-weight-300 font-18">
                        Sigorta şubeliği –sigorta acenteliğinden farklı olarak-
                        bir çok sigorta şirketi ile anlaşması olan, kendi teknik
                        operasyon kadrosunu bünyesinde bulunduran güçlü bir
                        sigorta acentesinin resmi şubesi olarak faaliyet
                        göstermektir. Sigorta şubeliği için ayrı bir tüzel
                        kişilik kurmaya, sigorta şirketlerine acentelik
                        başvurusunda bulunmaya gerek yoktur. Güçlü bir sigorta
                        acentesinin şubesi olduğunuzda bu acentenin Sigorta
                        Şirketlerinin tamamından teklif alabilir, sigorta
                        poliçesi düzenleyebilirsiniz.
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
                  <div className="col-lg-6 col-md-12  bg-black-light p-a0 img-fix">
                    <img src={about} alt="" className="img-cover " />
                  </div>
                  <div className="col-lg-6 col-md-12 bg-black-light p-lr0 dis-tbl ">
                    <div className="p-a30 dis-tbl-cell ">
                      <div className="max-w500 m-auto p-tb30">
                        <div className="row">
                          <div className="col-lg-12 text-white">
                            <h3 className="box-title m-b10">
                              Şubemiz olun<span className="bg-primary"></span>
                            </h3>
                            <h5 className="m-b30">
                              SİGORTA ŞUBESİ AÇMAK İÇİN GEREKLİ ŞARTLAR
                            </h5>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-lg-12 m-b30 chosesus-content">
                            <ul className="list-checked primary text-white ">
                              <li className="text-white">
                                <span>
                                  Şube Müdürü : Sigorta acente şubesi açmak için
                                  ilk şart şube müdürüdür.{" "}
                                </span>
                              </li>
                              <li className="text-white">
                                <span>
                                  Ofis: Bir diğer şart ise Sigorta Şubesinin
                                  uygun bir mekanda açılmasıdır. Şubenin ,
                                  müstakil bir bina veya iş merkezi içerisinde;
                                  fiziki olarak ayrılmış , müstakil bir girişe
                                  sahip , başlıbaşına kullanılmaya elverişli
                                  bağımsız bir mekân olması ve bu mekânda
                                  yalnızca sigorta acenteliği faaliyeti
                                  yürütülüyor olması gerekmektedir.
                                </span>
                              </li>
                              <li className="text-white">
                                <span>
                                  Kuruluş masrafları: Sigorta Şubeliğinin
                                  açılması için gerekli masraflardır. Şube
                                  başvurusu sonrasında yapılan görüşmelerde
                                  Sigorta Acentesi tarafından belirtilir.
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
              <ContactUs />
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
