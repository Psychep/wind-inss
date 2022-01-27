import React, { Component, useState, useEffect, Fragment } from "react";
import { Link } from "react-router-dom";
import Header from "./../Layout/Header1";
import Footer from "./../Layout/Footer1";
import SimpleReactLightbox from "simple-react-lightbox";
import { SRLWrapper, useLightbox } from "simple-react-lightbox";
import PageTitle from "./../Layout/PageTitle";
import Masonry from "react-masonry-component";
import bnr2 from "./../../images/banner/bnr2.jpg";
import { flipItem } from "./../Pages/ShortCode/DataFile";

//Light Gallery on icon click
const Iconimage = (props) => {
  const { openLightbox } = useLightbox();

  return (
    <Link
      to={"#"}
      onClick={() => openLightbox(props.imageToOpen)}
      className="mfp-link"
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
      <Link to={"#"} className="site-button-secondry">
        <span>
          {name} {""}
        </span>{" "}
      </Link>
    </li>
  );
};

class Portfolio2 extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <div className="page-content bg-white">
          {/*  banner  */}
          <div
            className="dlab-bnr-inr overlay-primary"
            style={{ backgroundImage: "url(" + bnr2 + ")" }}
          >
            <PageTitle motherMenu="Our Projects" activeMenu="Our Projects" />
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
  const [tag, setTag] = useState("Show All");
  const [filteredImages, setFilterdImages] = useState([]);

  useEffect(() => {
    tag === "Show All"
      ? setFilterdImages(flipItem)
      : setFilterdImages(
          flipItem.filter((image) =>
            image.tag.find((element) => element === tag)
          )
        );
  }, [tag]);

  return (
    <>
      <div className="section-full content-inner portfolio-section mfp-gallery">
        <div className="container-fluid">
          <div className="section-head text-black text-center">
            <h4 className="text-gray-dark font-weight-300 m-b10">
              Our Portfolio
            </h4>
            <h2 className="box-title m-tb0">
              Web Development Portfolio<span className="bg-primary"></span>
            </h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
          <div className="site-filters clearfix center  m-b40">
            <ul className="filters" data-toggle="buttons">
              <TagLi
                name="Show All"
                handlesettag={setTag}
                tagActive={tag === "Show All" ? true : false}
              />
              {flipItem.map((data, index) => (
                <TagLi
                  name={data.name}
                  handlesettag={setTag}
                  tagActive={tag === data.name ? true : false}
                />
              ))}
            </ul>
          </div>
          <SimpleReactLightbox>
            <SRLWrapper>
              <div className="">
                <ul
                  id="masonry"
                  className="dlab-gallery-listing gallery-grid-4 mfp-gallery "
                >
                  <Masonry
                    className={"my-gallery-class"}
                    options={masonryOptions}
                    disableImagesLoaded={false}
                    updateOnEachImageLoad={false}
                    imagesLoadedOptions={imagesLoadedOptions}
                  >
                    {flipItem.map((item, index) => (
                      <li
                        className="card-container col-xl-3 col-lg-4 col-md-6 col-sm-6 m-b30 drupal php wordpress"
                        key={item.name}
                      >
                        <div className="dlab-box portfolio-box">
                          <div className="dlab-media dlab-img-effect dlab-img-overlay1">
                            {" "}
                            <img src={item.image} alt="" />
                            <div className="dlab-info-has p-a15 bg-primary">
                              <Link
                                to={"#"}
                                className="site-button outline radius-xl white"
                              >
                                {item.urun}
                              </Link>
                              <Link
                                to={"#"}
                                className="site-button outline radius-xl white pull-right"
                              >
                                {item.aciklama}
                              </Link>
                            </div>
                            <div className="overlay-bx">
                              <div className="overlay-icon text-white p-lr10">
                                <h5>Wind Sigorta</h5>
                                <p className="m-b10"></p>
                                <Iconimage />
                                <a href={item.link} target="bank">
                                  <i className="ti-arrow-top-right icon-bx-xs"></i>
                                </a>
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

export default Portfolio2;
