import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import SimpleReactLightbox from "simple-react-lightbox";
import { SRLWrapper, useLightbox } from "simple-react-lightbox";
import Header from "./../../Layout/Header1";
import Footer from "./../../Layout/footer5";
import PageTitle from "./../../Layout/PageTitle";
import bgslider9 from "./../../../images/background/bg222.jpg";
//images
import bnr1 from "./../../../images/banner/bnr8.jpg";
import box2 from "./../../../images/portfolio/sevgililergunu.jpg";
import gencemeklilik from "./../../../images/portfolio/gencemeklili.jpg";
import turkcell from "./../../../images/portfolio/turkcell.png";
import box3 from "./../../../images/portfolio/hosgeldin.jpg";
const imageBlog = [
  {
    Large: box2,
    aciklama: "Sevgililer Gününe Özel",
    sigorta: "Anadolu Sigorta",
  },
  {
    Large: gencemeklilik,
    aciklama: "Genç Emeklilik",
    sigorta: "Anadolu Sigorta",
  },
  {
    Large: turkcell,
    aciklama: "Turkcell Kampanya",
    sigorta: "Anadolu Sigorta",
  },
  {
    Large: box3,
    aciklama: "Hoşgeldin Özel Kampanyası",
    sigorta: "Anadolu Sigorta",
  },
];

//Light Gallery on icon click
const Iconimage = (props) => {
  const { openLightbox } = useLightbox();
  return (
    <Link
      to={"#"}
      onClick={() => openLightbox(props.imageToOpen)}
      className="mfp-link portfolio-fullscreen"
    >
      <i className="ti-fullscreen icon-bx-xs"></i>
    </Link>
  );
};

class PortfolioGrid4 extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <div className="page-content bg-white">
          {/*  banner  */}
          <div
            className="dlab-bnr-inr overlay-primary-white"
            style={{ backgroundImage: "url(" + bgslider9 + ")" }}
          >
            <PageTitle motherMenu="Kampanyalar" activeMenu="Kampanyalar " />
          </div>
          {/*  Section-1 Start  */}
          <div className="content-block">
            <div className="section-full content-inner-2 portfolio text-uppercase">
              <div className="container">
                <div className="row">
                  <div className="col-md-3">
                    <div className="sticky-top">
                      <h3>Kampanyalar</h3>
                      <ul className="list-check primary">
                        {imageBlog.map((item, index) => (
                          <li key={index}>{item.aciklama}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="col-md-9">
                    <GalleryGrid />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </Fragment>
    );
  }
}

function GalleryGrid() {
  return (
    <>
      <SimpleReactLightbox>
        <SRLWrapper>
          <ul className="row dlab-gallery-listing gallery-grid-4 gallery mfp-gallery port-style1">
            {imageBlog.map((item, index) => (
              <li
                className="web design card-container col-lg-4 col-md-6 col-sm-6 p-a0"
                key={index}
              >
                <div className="dlab-box dlab-gallery-box">
                  <div className="dlab-media dlab-img-overlay1 dlab-img-effect">
                    <img src={item.Large} alt="" />
                    <div className="overlay-bx">
                      <div className="overlay-icon align-b text-white text-left">
                        <div className="text-white text-left port-box">
                          <a href="#">{item.aciklama}</a>
                          <p>{item.sigorta}</p>
                          <Iconimage />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </SRLWrapper>
      </SimpleReactLightbox>
    </>
  );
}
export { GalleryGrid };
export default PortfolioGrid4;
