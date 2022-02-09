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
import work7 from "./../../../images/our-services/acibadem.png";
import work8 from "./../../../images/our-services/aksigorta.png";
import work9 from "./../../../images/our-services/allianz.png";
import work10 from "./../../../images/our-services/allianzhayat.png";
import work11 from "./../../../images/our-services/anadoluhayat.png";
import work12 from "./../../../images/our-services/axa.png";
import work13 from "./../../../images/our-services/axahayat.png";
import work14 from "./../../../images/our-services/dogasigorta.png";
import work15 from "./../../../images/our-services/fiba-emeklilik.png";
import work16 from "./../../../images/our-services/groupama.png";
import work17 from "./../../../images/our-services/hdisigorta.png";
import work18 from "./../../../images/our-services/raysigorta.png";
import work19 from "./../../../images/our-services/sompojapan.png";
import work20 from "./../../../images/our-services/turknippon.png";
import work21 from "./../../../images/our-services/unico.png";
import work22 from "./../../../images/our-services/zurich.png";

import bgslider9 from "./../../../images/background/bg222.jpg";
//Images

const iconBox = [
  {
    icon: work5,
    title: "Gulf ",
    description:
      "Gulf Sigorta çok uluslu yapısının vermiş olduğu bilgi ve birikim ile hem kurumsal hem de bireysel sigortalarda hizmet vermektedir",
  },
  {
    icon: work2,
    title: "Arex",
    description:
      "Hayat sigortası dışındaki (sağlık, yangın, motorlu taşıt, konut, tarım, denizcilik, havacılık, kaza, doğal afet, ulaştırma, nakliyat, para kaybı, borçlanma, mali sorumluluk, kefalet, kredi, finansal kayıplar vb) sigortacılık faaliyetleri.  ",
  },
  {
    icon: work3,
    title: "Bereket",
    description:
      "Bereket Sigorta, çalışma prensibi olarak tüm yatırımlarını faizsiz enstrümanlara yapmakta, en önemli ilke olarak bütün operasyon ve anlaşmalarında faizsizlik prensibine azami özen göstermektedir.  ",
  },
  {
    icon: work4,
    title: "Gri",
    description:
      "GRI Sigorta, ihtiyaç duyduğunuz her anınızda yanınızda olmak için karşılaştırmalı Konut Sigortasıyla evinizi güvence altına alır ve evinizde güvenle oturmanızı sağlar.  ",
  },
  {
    icon: work1,
    title: "Anadolu",
    description:
      "Köklü yapısı ve tarihi ile Türkiye'nin en önemli sigorta şirketleri arasında bulunan Anadolu Sigorta 1925’te kurulmuştur.",
  },
  {
    icon: work6,
    title: "Mapfre",
    description:
      "Sigorta şirketleri arasında yaptığı atılımlarla dikkat çeken Mapfre Sigorta, birçok farklı branşta hizmet veriyor  ",
  },
  {
    icon: work7,
    title: "Turkiye Sigorta",
    description:
      "Türkiye Sigorta, yenilikçi çözümleri ile Türkiye’nin önde gelen sigorta şirketlerinden birisidir",
  },
  {
    icon: work8,
    title: "Ak Sigorta",
    description:
      "Aksigorta, prim üretimi, özkaynakları ve mali yapısı ile Türkiye’nin önde gelen sigorta şirketlerinden birisidir",
  },
  {
    icon: work9,
    title: "Allianz ",
    description:
      "70'den fazla ülkede sigortacılık hizmeti veren Allianz Sigorta, dünyanın en büyük sigorta şirketleri arasında bulunmaktadır.  ",
  },
  {
    icon: work10,
    title: "Allianz Hayat",
    description:
      "Sektörün öncü sigorta şirketi, Allianz Hayat Emeklilik, grup, ferdi hayat ve ferdi kaza poliçeleri ile hizmet vermektedir.",
  },
  {
    icon: work11,
    title: "Anadolu Hayat",
    description:
      "Kuruluşundan bugüne öncü olarak kabul edilen Anadolu Hayat Emeklilik, En önemli sigorta şirketleri arasındadır.  ",
  },
  {
    icon: work12,
    title: "Axa Sigorta",
    description:
      "Axa Sigorta'nın sermayedarı AXA Grubu, dünyada sigorta şirketleri arasında en büyük ilk üç şirket arasında gösterilmektedir.",
  },
  {
    icon: work13,
    title: "Axa Hayat",
    description:
      "Axa Grubu kalitesini barındıran sigorta şirketi AXA Hayat ve Emeklilik ile kendiniz ve sevdikleriniz güvence altında.  ",
  },
  {
    icon: work14,
    title: "Doğa Sigorta",
    description:
      "Doğa Sigorta; Yangın, Kaza, Ferdi Kaza ve Sağlık Sigortaları gibi bir çok alanda 2014 yılından beri faaliyet göstermektedir.  ",
  },
  {
    icon: work15,
    title: "Fiba Emeklilik",
    description:
      "Fiba Emeklilik, 2012'de kurulan dinamik yapısı, müşteri odaklı ilkeleri ve büyüme odaklı vizyonuyla müşterilerine hizmet sunmaktadır.",
  },
  {
    icon: work16,
    title: "Group Ama",
    description:
      "Kasko, trafik ve sağlık branşlarında hizmet veren Groupama Sigorta Türkiye’nin en önemli sigorta şirketleri arasındadır.",
  },
  {
    icon: work17,
    title: "Hdi Sigorta",
    description:
      "Sektörün öncü sigorta şirketleri arasındaki HDI Sigorta, başta kasko sigortası olmak üzere birçok branşta hizmet vermektedir.  ",
  },
  {
    icon: work18,
    title: "Ray Sigorta",
    description:
      "Ray Sigorta 1958 yılında kurulmuş ve bu tarihten itibaren Türkiye’nin önemli sigorta şirketleri arasında yer almayı başarmıştır.  ",
  },
  {
    icon: work19,
    title: "Sompo Japan",
    description:
      "Sompo Sigorta, Türkiye’de ve dünyanın ikinci büyük sigorta pazarı olan Japonya'da lider sigorta şirketleri arasındadır.",
  },
  {
    icon: work20,
    title: "Türk Nippon",
    description:
      "Türk Nippon Sigorta, yenilikçi sigorta şirketi olma vizyonu ve müşteri memnuniyetini esas alan ürünleri ile öne çıkmayı hedeflemektedir.  ",
  },
  {
    icon: work21,
    title: "Uninco",
    description:
      "26 yıllık tecrübesi ile sektörün en önemli şirketleri arasında yer alan Aviva, artık yoluna Unico Sigorta adıyla devam ediyor.",
  },
  {
    icon: work22,
    title: "Zurich",
    description:
      "Geniş ürün portföyü, tarihi ve köklü yapısı ile Zurich Sigorta, dünyanın en önemli sigorta şirketleri arasında bulunmaktadır.  ",
  },
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
              <div className="content-inner pro-client-review">
                <div className="container">
                  <div className="row">
                    {iconBox.map((data, index) => (
                      <div className="col-lg-4 col-md-4 col-sm-12" key={index}>
                        <div className="flip-bx testimonial-flip">
                          <div className="front">
                            <div className="inner text-white">
                              <div className="testimonial-pic ">
                                <img
                                  src={data.icon}
                                  alt=""
                                  width="230"
                                  height="230"
                                />
                              </div>
                              <div className="testimonial-detail text-white">
                                <strong className="testimonial-name text-white">
                                  {data.title}
                                </strong>

                                <span className="testimonial-position text-white"></span>
                              </div>
                            </div>
                          </div>
                          <div className="back">
                            <div className="inner text-white ">
                              <h4 className="m-b10">{data.title}</h4>
                              <div className="testimonial-detail text-white">
                                <p>{data.description}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
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
export default Service;
