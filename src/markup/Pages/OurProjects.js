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
  { Large: box1, name: "Trafik Sigortası", tag: ["Oto Sigortaları", "Joomla"] },
  {
    Large: box2,
    name: "Hayvan Hayat Sigortası",
    tag: ["Php", "Drupal", "Laravel"],
  },
  { Large: box3, name: "Kasko", tag: ["Oto Sigortaları"] },
  { Large: box4, name: "Filo Kasko Sigortası", tag: ["Oto Sigortaları"] },
  { Large: box5, name: "Konut Sigortası", tag: ["Yangın Sigortaları"] },
  { Large: box6, name: "İş Yeri Sigortası", tag: ["Yangın Sigortaları"] },
  {
    Large: box7,
    name: "Deniz/Tekne/Yat Sigortası",
    tag: ["Nakliyat Sigortaları"],
  },
  {
    Large: box8,
    name: "Nakliyat Sigortası",
    tag: ["Nakliyat Sigortaları"],
  },
  {
    Large: box9,
    name: "Emtia Sigortası",
    tag: ["Nakliyat Sigortaları"],
  },
  {
    Large: box10,
    name: "Kefalet Sigortası",
    tag: ["Kefalet Sigortası"],
  },
  {
    Large: box11,
    name: "Özel Sağlık sigortası",
    tag: ["Sağlık Sigortaları"],
  },
  {
    Large: box11,
    name: "Tamamlayıcı Sağlık Sigortası",
    tag: ["Sağlık Sigortaları"],
  },
  {
    Large: box11,
    name: "Yabancı Sağlık Sigortası",
    tag: ["Sağlık Sigortaları"],
  },
  {
    Large: box11,
    name: "Montaj Sigortası",
    tag: ["Mühendislik Sigortası"],
  },
  {
    Large: box11,
    name: "Makine Kırılması Sigortası",
    tag: ["Mühendislik Sigortası"],
  },
  {
    Large: box11,
    name: "Ferdi Kaza Sigortası",
    tag: ["Ferdi Kaza Sigortası"],
  },
  {
    Large: box11,
    name: "All Risk İnşaat Sigortaları",
    tag: ["All Risk"],
  },
  {
    Large: box11,
    name: "Deprem Sigortası",
    tag: ["Deprem Sigortası"],
  },
  {
    Large: box11,
    name: "Sorumluluk Sigortaları",
    tag: ["Sorumluluk Sigortaları"],
  },
  {
    Large: box11,
    name: "Hayvan Hayat Sigortası",
    tag: ["hayvan-hayat-sigortası"],
  },
  {
    Large: box11,
    name: "Kümes Hayvanları Sigortası",
    tag: ["Hayvan Hayat Sigortası"],
  },
  {
    Large: box11,
    name: "Dolu Sigortası",
    tag: ["Hayvan Hayat Sigortası"],
  },
  {
    Large: box11,
    name: "Sera Sigortası",
    tag: ["Hayvan Hayat Sigortası"],
  },
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
  const [tag, setTag] = useState("Tümü");
  const [filteredImages, setFilterdImages] = useState([]);

  useEffect(() => {
    tag === "Tümü"
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
              Ürünlerimiz
            </h4>
            <h2 className="box-title m-tb0">
              Sunduğumuz sigorta hizmetleri<span className="bg-primary"></span>
            </h2>
            <p>
              Her türlü teknolojiye ayak uyduran dinamik yapımızla tüm
              yeniliklere açık acenteliğimizle, sizlerin hizmetindeyiz..
            </p>
          </div>
          <div className="site-filters clearfix center  m-b40">
            <ul className="filters" data-toggle="buttons">
              <TagLi
                name="Tümü"
                handlesettag={setTag}
                tagActive={tag === "Tümü" ? true : false}
              />
              <TagLi
                name="Oto Sigortaları"
                handlesettag={setTag}
                tagActive={tag === "Oto Sigortaları" ? true : false}
              />
              <TagLi
                name="Yangın Sigortaları"
                handlesettag={setTag}
                tagActive={tag === "Yangın Sigortaları" ? true : false}
              />
              <TagLi
                name="Nakliyat Sigortaları"
                handlesettag={setTag}
                tagActive={tag === "Nakliyat Sigortaları" ? true : false}
              />
              <TagLi
                name="Kefalet Sigortası"
                handlesettag={setTag}
                tagActive={tag === "Kefalet Sigortası" ? true : false}
              />
              <TagLi
                name="Sağlık Sigortaları"
                handlesettag={setTag}
                tagActive={tag === "Sağlık Sigortaları" ? true : false}
              />
              <TagLi
                name="Mühendislik Sigortası"
                handlesettag={setTag}
                tagActive={tag === "Mühendislik Sigortası" ? true : false}
              />
              <TagLi
                name="Ferdi Kaza Sigortası"
                handlesettag={setTag}
                tagActive={tag === "Ferdi Kaza Sigortası" ? true : false}
              />
              <TagLi
                name="All Risk"
                handlesettag={setTag}
                tagActive={tag === "All Risk" ? true : false}
              />
              <TagLi
                name="Deprem Sigortası"
                handlesettag={setTag}
                tagActive={tag === "Deprem Sigortası" ? true : false}
              />
              <TagLi
                name="Sorumluluk Sigortaları"
                handlesettag={setTag}
                tagActive={tag === "Sorumluluk Sigortaları" ? true : false}
              />
              <TagLi
                name="Hayvan Hayat Sigortası"
                handlesettag={setTag}
                tagActive={tag === "Hayvan Hayat Sigortası" ? true : false}
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
                        className="card-container col-xl-3 col-lg-4 col-md-6 col-sm-6 m-b30 "
                        key={index}
                      >
                        <div className="dlab-box portfolio-box">
                          <div className="dlab-media dlab-img-effect dlab-img-overlay1">
                            {" "}
                            <img src={item.Large} alt="" />
                            <div className="overlay-bx">
                              <div className="overlay-icon text-white p-lr10">
                                <h5> {item.name}</h5>
                                <p className="m-b10">
                                  Wind Sigorta {item.name} hizmeti detayları
                                </p>
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
