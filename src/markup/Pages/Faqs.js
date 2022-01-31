import React, { Component } from "react";
import { Link } from "react-router-dom";
import Header from "./../Layout/Header1";
import Footer from "./../Layout/footer5";
import PageTitle from "./../Layout/PageTitle";
import AccordionBlog from "./../Element/AccordionBlog";
import VideoPopup from "./../Element/VideoPopup";

import bnr1 from "./../../images/background/bg222.jpg";
import pattern from "./../../images/pattern/pic1.jpg";
import about from "./../../images/main-slider/slide9.png";

const iconBlog = [
  { icon: <i className="flaticon-bar-chart" />, title: "Make it Simple" },
  { icon: <i className="flaticon-trophy" />, title: "Unique design" },
  { icon: <i className="flaticon-devices" />, title: "True Responsiveness" },
];

class Faqs extends Component {
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
            <PageTitle motherMenu="Hakkımızda" activeMenu="Hakkımızda" />
          </div>
          {/* <!-- inner page banner END --> */}
          {/* <!-- contact area --> */}
          <div className="content-block">
            {/* <!-- Your Faq --> */}
            <div
              className="section-full overlay-white-middle content-inner"
              style={{ backgroundImage: "url(" + pattern + ")" }}
            >
              <div className="container">
                <div className="section-head text-black text-center">
                  <h3>Biz Kimiz?</h3>
                  <div className="dlab-separator bg-primary"></div>
                  <p>
                    Edindiğimiz değerlerle, sigortacılık mesleğini icra ederken
                    güvenilir ve hızlı bir şekilde, müşterilerimizin ihtiyaçları
                    dahilinde hizmet verip sektörde marka olmayı hedefleyen öncü
                    bir acenteyiz. Poliçe değil güven satıyoruz sloganımızla,
                    ihtiyaca yönelik ürünleri uygun fiyata müşterilerimizle
                    buluşturuyoruz. Her türlü teknolojiye ayak uyduran dinamik
                    yapımızla tüm yeniliklere açık acenteliğimizle, sizlerin
                    hizmetindeyiz.
                  </p>
                </div>
                <div className="row">
                  <div className="col-lg-6 col-md-12 m-b30">
                    <div className="faq-video">
                      <VideoPopup />
                      <img src={about} alt="" className="img-cover radius-sm" />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-12 m-b30">
                    <AccordionBlog />
                  </div>
                </div>
                {/* <!-- Faq Info --> */}

                {/* <!-- Faq Info END --> */}
              </div>
            </div>
            {/* <!-- Your Faq End --> */}
          </div>
          {/* <!-- contact area END --> */}
        </div>

        <Footer />
      </>
    );
  }
}
export default Faqs;
