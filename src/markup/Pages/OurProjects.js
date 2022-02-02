import React, { Component, useState, useEffect, Fragment } from "react";
import { Link } from "react-router-dom";
import Header from "./../Layout/Header1";
import Footer from "./../Layout/footer5";
import SimpleReactLightbox from "simple-react-lightbox";
import { SRLWrapper, useLightbox } from "simple-react-lightbox";
import PageTitle from "./../Layout/PageTitle";
import Masonry from "react-masonry-component";
import bnr1 from "./../../images/background/bg222.jpg";

//images
import box1 from "./../../images/product/arac-sigorta.png";
import box2 from "./../../images/product/yangin-sigorta.png";
import box3 from "./../../images/product/nakliyat-sigorta.png";
import box4 from "./../../images/product/kefalet.png";
import box5 from "./../../images/product/saglik-sigorta.png";
import box6 from "./../../images/product/muhendislik-sigortasi.png";
import box7 from "./../../images/product/ferdikazasigortasi.png";
import box8 from "./../../images/product/allrisk.png";
import box9 from "./../../images/product/depremsigorta.png";
import box10 from "./../../images/product/sorumluluksigota.png";
import box11 from "./../../images/product/hayvanhayat.png";
const imageBlog = [
  { Large: box1, tag: ["Wordpress", "Joomla"] },
  { Large: box2, tag: ["Php", "Drupal", "Laravel"] },
  { Large: box3, tag: ["Laravel", "Drupal"] },
  { Large: box4, tag: ["Wordpress"] },
  { Large: box5, tag: ["Joomla"] },
  { Large: box6, tag: ["Drupal"] },
  { Large: box7, tag: ["Php"] },
  {
    Large: box8,
    tag: ["Laravel", "Joomla", "Drupal", "Hayvan Hayat Sigortası"],
  },
  { Large: box9, tag: ["Laravel", "Joomla", "Drupal"] },
  { Large: box10, tag: ["Laravel", "Joomla", "Drupal"] },
  { Large: box11, tag: ["Laravel", "Joomla", "Drupal"] },
];

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
        <div className="page-content bg-white rubik-font">
          {/* <!-- inner page banner --> */}
          <div
            className="dlab-bnr-inr overlay-primary-white"
            style={{ backgroundImage: "url(" + bnr1 + ")" }}
          >
            <PageTitle motherMenu="Ürünlerimiz" activeMenu="Ürünlerimiz" />
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
      ? setFilterdImages(imageBlog)
      : setFilterdImages(
          imageBlog.filter((image) =>
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
              <TagLi
                name="Hayvan Hayat Sigortası"
                handlesettag={setTag}
                tagActive={tag === "Hayvan Hayat Sigortası" ? true : false}
              />
              <TagLi
                name="Joomla"
                handlesettag={setTag}
                tagActive={tag === "Joomla" ? true : false}
              />
              <TagLi
                name="Php"
                handlesettag={setTag}
                tagActive={tag === "Php" ? true : false}
              />
              <TagLi
                name="Drupal"
                handlesettag={setTag}
                tagActive={tag === "Drupal" ? true : false}
              />
              <TagLi
                name="Laravel"
                handlesettag={setTag}
                tagActive={tag === "Laravel" ? true : false}
              />
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
                    className={"my-gallery-class"} // default ''
                    options={masonryOptions} // default {}
                    disableImagesLoaded={false} // default false
                    updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
                    imagesLoadedOptions={imagesLoadedOptions} // default {}
                  >
                    {filteredImages.map((item, index) => (
                      <li
                        className="card-container col-xl-3 col-lg-4 col-md-6 col-sm-6 m-b30 drupal php wordpress"
                        key={index}
                      >
                        <div className="dlab-box portfolio-box">
                          <div className="dlab-media dlab-img-effect dlab-img-overlay1">
                            {" "}
                            <img src={item.Large} alt="" />
                            <div className="dlab-info-has p-a15 bg-primary">
                              <Link
                                to={"#"}
                                className="site-button outline radius-xl white"
                              >
                                Wordpress
                              </Link>
                              <Link
                                to={"#"}
                                className="site-button outline radius-xl white pull-right"
                              >
                                Vist Site
                              </Link>
                            </div>
                            <div className="overlay-bx">
                              <div className="overlay-icon text-white p-lr10">
                                <h5>Website Name</h5>
                                <p className="m-b10">
                                  Contrary to popular belief, Lorem Ipsum is not
                                  simply random text. It has roots
                                </p>
                                <Iconimage />
                                <a href="https://www.google.com/" target="bank">
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
