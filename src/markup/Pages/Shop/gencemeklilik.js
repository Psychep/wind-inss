import React, { Component } from "react";
import { Link } from "react-router-dom";
import Header from "./../../Layout/Header1";
import Footer from "./../../Layout/footer5";
import PageTitle from "./../../Layout/PageTitle";
import TabStyle1 from "./../ShortCode/TabStyle1";
import { OrderDetail } from "./../Login";
import ShopProductSlider from "./ShopProductSlider";
import ShopProductCarousel from "./ShopProductCarousel";
import bnr1 from "./../../../images/background/bg222.jpg";
import bg22 from "./../../../images/background/bg22.jpg";
import test2 from "./../../../images/testimonials/pic2.jpg";
import box2 from "./../../../images/portfolio/gencemeklili.jpg";

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
                          Genç Emeklilik Planı Müşterilerine Özel Kampanyamız
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
                          Anadolu Hayat Emeklilik - Genç Emeklilik Planı
                          Müşterilerine Özel Kampanyamız
                        </h2>
                        <p>
                          Anadolu Hayat Emeklilik iş birliğiyle Anadolu Hayat’ta
                          Genç Emeklilik Planı bulunan 18-25 yaş aralığındaki
                          müşterilerimize “Anadolu Hayat Emeklilik Genç”
                          kampanyamız kapsamında aşağıdaki ürün ve oranlarda
                          indirim fırsatı sunuyoruz.
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
                          Anadolu Hayat Emeklilik A.Ş.’ de Genç Emeklilik Planı
                          bulunan 18-25 aralığındaki müşteriler için
                          düzenlenecek poliçelerde, yukarıda belirtilen ürün ve
                          oranlarda indirim uygulanacaktır.
                        </li>
                        <li>
                          Birleşik Kasko Sigortası poliçelerinde indirim,
                          kullanım tarzı hususi otomobil olan araçlar için
                          geçerlidir.
                        </li>

                        <li>
                          Tamamlayıcı Sağlık Sigortası poliçelerinde indirim
                          sadece yeni işlerde geçerlidir. Yenileme poliçelerinde
                          geçerli değildir.
                        </li>
                        <li>
                          Sağlık Sigortası poliçelerinde indirim, poliçe
                          içerisinde yer alan her bir sigortalı üzerinden
                          kontrol edilerek, yalnızca indirim koşulunu sağlayan
                          sigortalılar için uygulanmaktadır.
                        </li>
                        <li>
                          Söz konusu indirim, başka kampanya ve indirimlerle
                          birleştirilemez.
                        </li>
                        <li>
                          Anadolu Sigorta süre ve koşullar konusunda önceden
                          haber vermeksizin değişiklik yapma ve yürürlükten
                          kaldırma hakkını saklı tutar.
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
