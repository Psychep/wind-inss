import React, { Component } from "react";
import { Link } from "react-router-dom";
import Header from "../../Layout/Header1";
import Footer from "../../Layout/footer5";
import PageTitle from "../../Layout/PageTitle";
import TabStyle1 from "../ShortCode/TabStyle1";
import { OrderDetail } from "../Login";
import ShopProductSlider from "./ShopProductSlider";
import ShopProductCarousel from "./ShopProductCarousel";
import bnr1 from "./../../../images/background/bg222.jpg";
import bg22 from "./../../../images/background/bg22.jpg";
import test2 from "./../../../images/testimonials/pic2.jpg";
import box2 from "./../../../images/portfolio/turkcell.png";

class ShopProductDetails extends Component {
  render() {
    return (
      <>
        <Header />

        <div className="page-content bg-white rubik-font">
          {/* <!-- inner page banner --> */}
          <div
            className="dlab-bnr-inr overlay-primary-white"
            style={{ backgroundImage: "url(" + bnr1 + ")" }}
          >
            <PageTitle
              motherMenu="
              Kampanya ve Fırsatlar
              "
              activeMenu="
              Kampanya ve Fırsatlar
              "
            />
          </div>
          {/* <!-- inner page banner END --> */}
          {/* <!-- contact area --> */}
          <div className="section-full content-inner bg-white">
            {/* <!-- Product details --> */}

            <div className="container woo-entry">
              <div
                className="section-full content-inner bg-primary"
                style={{
                  backgroundImage: "url(" + bg22 + ")",
                  backgroundPosition: "center",
                }}
              >
                <div className="container">
                  <div className="row">
                    <div className="col-lg-4 col-md-5 m-b30">
                      <div className="tickit-box bg-white text-center">
                        <img src={box2}></img>
                        <span className="title">Wind sigorta</span>
                        <h2 className="price text-primary"></h2>
                        <p>
                          Turkcell Platinum’a özel yeni poliçelerde geçerli %10
                          indirim!{" "}
                        </p>
                        <Link
                          to={"iletisim"}
                          className="site-button btn-block radius-xl"
                        >
                          Teklif Al
                        </Link>
                      </div>
                    </div>
                    <div className="col-lg-7 offset-lg-1 col-md-7 text-white m-b30">
                      <div className="tickit-info">
                        <h2 className="font-50">
                          Birleşik Kasko’da Turkcell Platinum’a Özel %10 İndirim
                          Ayrıcalığı
                        </h2>
                        <p>
                          Aracınız için tam güvence sağlayan Birleşik Kasko
                          Sigortası’nda Turkcell Platinum’a özel yeni
                          poliçelerde geçerli %10 indirim ayrıcalığını
                          kaçırmayın. Platinum uygulamasından alacağınız
                          şifreyle 30 Nisan’a kadar kampanyaya katılabilirsiniz.
                        </p>
                        <div className="thumb-img m-b20"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row m-b30">
                <div className="col-md-7 col-sm-7 ">
                  <form method="post" className="cart sticky-top">
                    <div className="dlab-post-title ">
                      <h4 className="post-title">
                        <Link to={"#"}></Link>
                      </h4>
                      <p className="m-b10"></p>
                      <br /> <br /> <br />
                      <h4>Kampanya Koşulları:</h4>
                      <ul>
                        <li>
                          Kampanyamız 30 Nisan 2022 tarihine kadar geçerlidir.
                        </li>
                        <li>
                          27 yaş ve üzeri bireysel müşterilerimizin araç yaşı 10
                          yaş ve altı, kullanım tarzı hususi otomobil veya
                          kamyonet panel/glass van olan araçları için Anadolu
                          Sigorta’dan yeni düzenlenecek Birleşik Kasko Sigortası
                          poliçeleri geçerlidir.
                        </li>

                        <li>
                          Anadolu Sigorta’dan devam eden yenileme kapsamındaki
                          poliçelerde geçerli değildir.
                        </li>
                        <li>
                          Turkcell Platinum uygulamasından alacağınız kampanya
                          kodunuz ile anadolusigorta.com.tr üzerinden Turkcell
                          Platinum kampanyasını seçerek veya Anadolu Sigorta
                          satış kanallarına başvurarak ayrıcalığınızdan
                          yararlanabilirsiniz.
                        </li>
                        <li>
                          Kampanyamız dijital platformlarımız dahil tüm satış
                          kanallarımızda geçerlidir.
                        </li>
                        <li>
                          Kampanya kodu tek kullanımlıktır ve aynı kullanıcı
                          kampanyadan sadece 1 kez yararlanabilir.
                        </li>
                        <li>
                          Söz konusu kampanya, başka kampanya ve indirimler ile
                          birleştirilemez.
                        </li>
                        <li>
                          Anadolu Sigorta ve Turkcell süre ve koşullar konusunda
                          önceden haber vermeksizin değişiklik yapma ve
                          yürürlükten kaldırma hakkını saklı tutar.
                        </li>
                      </ul>
                      <div className="dlab-divider bg-gray tb15">
                        <i className="icon-dot c-square"></i>
                      </div>
                    </div>

                    <div className="dlab-divider bg-gray tb15">
                      <i className="icon-dot c-square"></i>
                    </div>
                  </form>
                </div>
              </div>
              {/* Tabs */}
              {/* Tabs End */}
            </div>
            {/* <!-- Product details --> */}
          </div>
          {/* <!-- contact area  END --> */}
        </div>

        <Footer />
      </>
    );
  }
}
export default ShopProductDetails;
