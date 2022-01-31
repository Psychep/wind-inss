import React, { Component } from "react";
import { Link } from "react-router-dom";
import Header from "../../Layout/Header1";
import Footer from "../../Layout/footer5";
import PageTitle from "../../Layout/PageTitle";
import ImgCarousel from "../../Element/ImgCarousel";
import ClientCarousel from "../../Element/ClientCarousel";
import { flipItem } from "../ShortCode/DataFile";
import bgslider9 from "../../../images/background/bg222.jpg";

//Images
import bnr1 from "../../../images/banner/bnr2.jpg";

class ProjectDetails extends Component {
  /* componentDidMount(){
        window.abc();
    } */
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
              style="color: #333;"
              motherMenu={flipItem[5].name}
              activeMenu={flipItem[5].urun[1].urun}
            />
          </div>
          {/* <!-- inner page banner END --> */}
          <div className="content-block">
            {/* <!-- Project Details --> */}
            <div className="section-full content-inner-2">
              <div className="container">
                <div className="row m-b40">
                  <div className="col-lg-6 col-md-6 m-b20">
                    <h2 className="m-b10 m-t0">{flipItem[5].name}</h2>
                    <p className="m-b10">{flipItem[5].aciklama}</p>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <ImgCarousel />
                  </div>
                </div>
                <div className="row m-b50">
                  <div className="col-md-6 m-b20">
                    <div className="p-a30 bg-gray">
                      <h6>
                        Ürün: {flipItem[5].urun[1].urun} <br />
                        Açıklama:
                        <span className="m-l10 font-weight-300 text-gray-dark">
                          {flipItem[5].urun[1].aciklama}
                        </span>
                      </h6>
                      <h6>
                        Sigorta şirketi:{" "}
                        <span className="m-l10 font-weight-300 text-gray-dark">
                          {" "}
                          Türkiye,Anadolu,Bereket,Mapfre,Gri,Arex,Gulf
                        </span>
                      </h6>
                    </div>
                  </div>
                  <div className="col-md-6 align-self-center">
                    <h5 className="text-black fw5 m-b10">{flipItem[5].name}</h5>
                    <p className="m-b0">
                      <a href={flipItem[5].urun[0].link}>
                        {flipItem[5].urun[0].urun}
                      </a>
                    </p>
                    <p className="m-b0">
                      <a href={flipItem[5].urun[1].link}>
                        {flipItem[5].urun[1].urun}
                      </a>
                    </p>
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
export default ProjectDetails;