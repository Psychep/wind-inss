import React, { Component } from "react";
import Header from "./../Layout/Header1";
import Footer from "./../Layout/footer5";
import PageTitle from "./../Layout/PageTitle";
import SectionCounter from "./../Element/SectionCounter";
import TestimonialCarousel from "./../Element/TestimonialCarousel";
import FormStyle from "./../Element/FormStyle";

//Images
import rocket from "./../../images/rocket.png";
import bnr from "./../../images/background/bg222.jpg";
import tamplate from "./../../images/tamplate.png";
import bg1 from "./../../images/background/bg10.png";
import bgmap from "./../../images/background/bg-map.jpg";

const BlogLeft = ({ title, number, parg }) => {
  return (
    <>
      <div className="line-left clearfix">
        <div className="line-left-box">
          <div className="line-content-box ">
            <h4 className="min-title text-uppercase text-primary m-t0 m-b15">
              {title}
            </h4>
            <p className="font-16">{parg} </p>
          </div>
          <div className="line-num bg-primary-dark">{number}</div>
        </div>
      </div>
    </>
  );
};
const BlogRight = ({ title, number, parg }) => {
  return (
    <>
      <div className="line-right clearfix">
        <div className="line-right-box">
          <div className="line-content-box ">
            <h4 className="min-title text-uppercase text-primary m-t0 m-b15">
              {title}
            </h4>
            <p className="font-16">{parg}.</p>
          </div>
          <div className="line-num bg-primary-dark">{number}</div>
        </div>
      </div>
    </>
  );
};

class ProjectManagement extends Component {
  render() {
    return (
      <>
        <Header />
        <div className="page-content bg-white rubik-font">
          {/* <!-- inner page banner --> */}
          <div
            className="dlab-bnr-inr overlay-primary-white"
            style={{ backgroundImage: "url(" + bnr + ")" }}
          >
            <PageTitle motherMenu="Hizmetlerimiz" activeMenu="Hizmetlerimiz" />
          </div>
          {/* <!-- inner page banner END --> */}
          <div className="content-block">
            {/* <!-- About Us --> */}
            <div className="section-full content-inner-1">
              <div className="container">
                <div className="section-head text-black text-center">
                  <h4 className="text-gray-dark m-b10">Wind Sigorta</h4>
                  <h2 className="box-title m-tb0">
                    Her t??rl?? teknolojiye ayak uyduran dinamik yap??m??zla t??m
                    yeniliklere a????k acenteli??imizle, sizlerin hizmetindeyiz.{" "}
                    <span className="bg-primary"></span>
                  </h2>
                </div>
              </div>
              <div className="container">
                <div className="row">
                  <div className="col-lg-12 text-center">
                    <img
                      src={rocket}
                      alt=""
                      className="fa faa-horizontal animated"
                    />
                    <h5 className="text-primary">????lemler</h5>
                  </div>
                  <div className="col-lg-12">
                    <div className="time-line clearfix">
                      <BlogLeft
                        title="Sigorta ??htiyac??n??z?? Belirleyin"
                        parg="Wind Sigorta'n??n sundu??u trafik ve kasko gibi ara?? sigortas??ndan, ev sigortas?? ve sa??l??k sigortas??na kadar uzanan yelpazedeki sigorta ??e??itlerini inceleyin"
                        number="1"
                      />
                      <BlogRight
                        title="Kar????la??t??rmal?? Teklif Al??n"
                        parg="Sigortalar??m??z i??in k??sa bir form doldurarak t??m ??r??nlerimiz i??in kar????la??t??rmal?? teklif al??n."
                        number="2"
                      />
                      <BlogLeft
                        title="F??rsatlar??m??zdan & Kampanyalar??m??zdan faydalan??n"
                        parg="Wind Sigorta Size en uygun teklifleri verebilmek i??in size uygun kampanyalar?? sunar."
                        number="3"
                      />
                      <BlogRight
                        title="Hemen ??imdi H??zl?? bir teklif Al??n"
                        parg="Teklif Formunu doldurun ve size en k??sa s??rede tekliflerimizi sunal??m."
                        number="4"
                      />
                    </div>
                  </div>
                  <div className="col-lg-12 text-center">
                    <h5 className="text-primary">H??zl?? Teklif Al</h5>
                    <div className="arrow-bx fa faa-horizontal animated"></div>
                  </div>
                </div>
              </div>
              <div className="text-center" style={{ paddingTop: "65px" }}></div>
            </div>
            {/* <!-- Our Services --> */}
            {/* <!-- Why Chose Us --> */}
            {/* <!-- Why Chose Us End --> */}
            {/* <!-- Testimonials --> */}

            {/* <!-- Testimonials END --> */}
            {/* <!-- Get in touch --> */}
            <div
              className="section-full overlay-primary-white bg-img-fix"
              style={{ backgroundImage: "url(" + bg1 + ")" }}
            >
              <FormStyle />
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
export default ProjectManagement;
