import React, { Component } from "react";
import { Link } from "react-router-dom";
import Header from "./../../Layout/Header1";
import Footer from "../../Layout/footer5";
import PageTitle from "./../../Layout/PageTitle";
import { flipItem } from "../../Pages/ShortCode/DataFile";
import work1 from "./../../../images/our-services/anadolu.png";
import work2 from "./../../../images/our-services/arex.jpg";
import work3 from "./../../../images/our-services/bereket.jpg";
import work4 from "./../../../images/our-services/gri.png";
import work5 from "./../../../images/our-services/gulf.png";
import work6 from "./../../../images/our-services/mapfre.png";

import work7 from "./../../../images/our-services/turkiye.png";
import bgslider9 from "./../../../images/background/bg222.jpg";
//Images

const iconBox = [
  { icon: work5, title: "Gulf " },
  {
    icon: work2,
    title: "Arex ",
  },

  { icon: work3, title: "Bereket" },
  { icon: work4, title: "Gri" },
  { icon: work1, title: "Anadolu" },
  { icon: work6, title: "Mapfre" },
  { icon: work7, title: "Turkiye Sigorta" },
];

class Service extends Component {
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
            <PageTitle
              motherMenu="Çözüm Ortaklarımız"
              activeMenu="Çözüm Ortaklarımız"
            />
          </div>
          {/* <!-- inner page banner END --> */}
          <div className="content-block">
            {/* <!-- About Us --> */}
            <div className="section-full content-inner">
              <div className="container">
                <div className="section-head text-black text-center">
                  <h2 className="box-title m-tb0">
                    Çözüm Ortaklarımız
                    <span className="bg-primary"></span>
                  </h2>
                  <p>
                    Türkiye’nin en güçlü çözüm ortaklarıyla çalışmaktan gurur
                    duyuyoruz.
                  </p>
                </div>
              </div>
              <div className="container">
                <div className="row ">
                  {iconBox.map((data, index) => (
                    <div className="col-md-4 col-sm-6 m-b30 " key={index}>
                      <div className=" expertise   bx-style-1 p-a30 center">
                        <div className=" max-w250">
                          {" "}
                          <Link to={"./iletisim"} className="max-w250">
                            <img src={data.icon}></img>
                          </Link>{" "}
                        </div>
                        <div className="icon-content">
                          <h5 className="dlab-tilte text-uppercase">
                            <Link to={"#"}>{}</Link>
                          </h5>
                        </div>
                      </div>
                    </div>
                  ))}
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
export default Service;
