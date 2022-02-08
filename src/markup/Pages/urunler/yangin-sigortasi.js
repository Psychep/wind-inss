import React, { Component } from "react";
import { Link } from "react-router-dom";
import Header from "../../Layout/Header1";
import Footer from "../../Layout/footer5";
import PageTitle from "../../Layout/PageTitle";
import ImgCarousel from "../../Element/ImgCarousel";
import ClientCarousel from "../../Element/ClientCarousel";
import { flipItem } from "../ShortCode/DataFile";
import bgslider9 from "../../../images/background/bg222.jpg";
import bg1 from "../../../images/background/bg10.png";
import FormStyle from "../../Element/FormStyle";
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
              motherMenu={flipItem[1].name}
              activeMenu={flipItem[1].urun[0].urun}
            />
          </div>
          {/* <!-- inner page banner END --> */}
          <div className="content-block">
            {/* <!-- Project Details --> */}
            <div className="section-full content-inner-2">
              <div className="container">
                <div className="row m-b40">
                  <div className="col-lg-6 col-md-6 m-b20">
                    <h2 className="m-b10 m-t0">{flipItem[1].name}</h2>
                    <p className="m-b10">{flipItem[1].aciklama}</p>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <ImgCarousel />
                  </div>
                </div>
                <div className="row m-b50">
                  <div className="col-md-6 m-b20">
                    <div className="p-a30 bg-gray">
                      <h6>
                        Ürün: {flipItem[1].urun[0].urun} <br />
                        Açıklama:
                        <span className="m-l10 font-weight-300 text-gray-dark">
                          {flipItem[1].urun[0].aciklama}
                        </span>
                      </h6>
                      <h6></h6>
                    </div>
                  </div>
                  <div className="col-md-6 align-self-center">
                    <h5 className="text-black fw5 m-b10">{flipItem[1].name}</h5>
                    <p className="m-b0">
                      <a href={flipItem[1].urun[0].link}>
                        {flipItem[1].urun[0].urun}
                      </a>
                    </p>
                    <p className="m-b0">
                      <a href={flipItem[1].urun[1].link}>
                        {flipItem[1].urun[1].urun}
                      </a>
                    </p>
                    <p className="m-b0">
                      <a href={flipItem[1].urun[2].link}>
                        {flipItem[1].urun[2].urun}
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>{" "}
        <div
          className="section-full overlay-primary-white bg-img-fix"
          style={{ backgroundImage: "url(" + bg1 + ")" }}
        >
          <FormStyle />
        </div>
        <Footer />
      </>
    );
  }
}
export default ProjectDetails;
