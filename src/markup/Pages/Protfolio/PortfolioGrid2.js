import React, { Component, useState, useEffect, Fragment } from "react";
import { Link } from "react-router-dom";
import SimpleReactLightbox from "simple-react-lightbox";
import { SRLWrapper, useLightbox } from "simple-react-lightbox";
import Header from "./../../Layout/Header1";
import Footer from "./../../Layout/footer5";
import PageTitle from "./../../Layout/PageTitle";
import Masonry from "react-masonry-component";
import bgslider9 from "./../../../images/background/bg222.jpg";

//imagesimport box1 from './../../../images/portfolio/image_1.jpg';
import box2 from "./../../../images/portfolio/sevgililer-gunu.png";

import box3 from "./../../../images/portfolio/hosgeldin.jpg";
import { box1 } from "./ProtfolioFullWidth";

const imageBlog = [
  {
    Large: box2,
    aciklama: "Sevgililer Gününe Özel",
    sigorta: "Anadolu Sigorta",
  },
  {
    Large: box3,
    aciklama: "Sevgililer Gününe Özel",
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

// Masonry section
const masonryOptions = {
  transitionDuration: 0,
};

const imagesLoadedOptions = { background: ".my-bg-image-el" };
// Masonry section end

const TagLi = ({ name, handlesettag, tagActive }) => {
  return (
    <li
      className={` tag ${tagActive ? "btn active" : "btn"}`}
      onClick={() => handlesettag(name)}
    >
      <input type="radio" />
      <Link to={"#"} className="site-button-secondry radius-sm">
        <span>
          {name} {""}
        </span>{" "}
      </Link>
    </li>
  );
};

class PortfolioGrid2 extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <div className="page-content bg-white rubik-font">
          {/*  banner  */}
          <div
            className="dlab-bnr-inr overlay-primary-white"
            style={{ backgroundImage: "url(" + bgslider9 + ")" }}
          >
            <PageTitle motherMenu="Kampanyalar" activeMenu="Kampanyalar " />
          </div>
          {/*  Section-1 Start  */}
          <PortfolioItem />
        </div>
        <Footer />
      </Fragment>
    );
  }
}
function PortfolioItem() {
  const [tag, setTag] = useState("All");
  const [filteredImages, setFilterdImages] = useState([]);

  useEffect(() => {
    tag === "All"
      ? setFilterdImages(imageBlog)
      : setFilterdImages(
          imageBlog.filter((image) =>
            image.tag.find((element) => element === tag)
          )
        );
  }, [tag]);

  return (
    <>
      <div className="section-full content-inner-2 portfolio text-uppercase">
        <div className="container">
          <div className="site-filters clearfix center  m-b40">
            <ul className="filters" data-toggle="buttons"></ul>
          </div>
          <SimpleReactLightbox>
            <SRLWrapper>
              <div className="clearfix">
                <ul
                  id="masonry"
                  className="dlab-gallery-listing gallery-grid-4 gallery mfp-gallery port-style1"
                >
                  <Masonry
                    className={"my-gallery-class"} // default ''
                    options={masonryOptions} // default {}
                    disableImagesLoaded={false} // default false
                    updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
                    imagesLoadedOptions={imagesLoadedOptions} // default {}
                  >
                    {filteredImages.map((item, index) => (
                      <li
                        className="web design card-container col-lg-6 col-md-6 col-sm-6 p-a0"
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
                  </Masonry>
                </ul>
              </div>
            </SRLWrapper>
          </SimpleReactLightbox>
        </div>
      </div>
    </>
  );
}
export { box1 };
export default PortfolioGrid2;
