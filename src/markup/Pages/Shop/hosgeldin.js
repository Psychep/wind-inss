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
import box2 from "./../../../images/portfolio/hosgeldin.jpg";

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
                          Aracınızı Anadolu Sigorta güvencesine almak için en
                          doğru zaman, şimdi!{" "}
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
                          Birleşik Kasko ve Elektrikli Araç Sigortası’nda Hoş
                          Geldin İndirimi Fırsatı
                        </h2>
                        <p>
                          Anadolu Sigorta’dan Trafik Sigortanız ya da başka
                          aracınıza ait bir Birleşik Kasko veya Elektrikli Araç
                          Sigortanız varsa, henüz Anadolu Sigorta’dan kaskosu
                          bulunmayan aracınız için kasko sigortanızı %7
                          indirimle yaptırabilirsiniz.
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
                          Kampanyamız 13 Ocak - 31 Mart 2022 tarihleri arasında,
                          bireysel müşterilerimizin kullanım tarzı hususi
                          otomobil, model yılı 5 yaş ve altında olan araçları
                          için yeni düzenlenecek Birleşik Kasko Sigortası ve
                          Elektrikli Araç Sigortası poliçelerinde geçerlidir.
                          Anadolu Sigorta’dan devam eden yenileme kapsamındaki
                          kasko poliçelerinde geçerli değildir.
                        </li>
                        <li>
                          Anadolu Sigorta’dan yürürlükte Trafik Sigortası olup
                          kasko sigortası bulunmayan aracı için Anadolu
                          Sigorta’dan Birleşik Kasko veya Elektrikli Araç
                          Sigortası yaptıracak bireysel müşterilerimiz %7
                          indirimden yararlanabilecektir.
                        </li>

                        <li>
                          Anadolu Sigorta’dan yürürlükte Birleşik Kasko
                          Sigortası veya Elektrikli Araç Sigortası olan bireysel
                          müşterilerimiz, henüz Anadolu Sigorta’da kasko
                          sigortası kapsamında olmayan diğer araçları için
                          düzenlenecek Birleşik Kasko Sigortası ve Elektrikli
                          Araç Sigortası poliçelerinde %7 indirimden
                          yararlanabilecektir.
                        </li>
                        <li>
                          Anadolu Sigorta’dan yürürlükte Birleşik Kasko
                          Sigortası veya Elektrikli Araç Sigortası bulunan
                          bireysel müşterilerimizin kampanya kapsamında henüz
                          Anadolu Sigorta’dan kaskosu bulunmayan birden fazla
                          aracı olması durumunda, kampanyadan birden fazla kez
                          yararlanılabilmektedir.
                        </li>
                        <li>
                          Kampanyadan yararlanmak için satış kanallarımıza
                          başvurabilirsiniz.
                        </li>
                        <li>
                          Söz konusu indirim, başka kampanya ve indirimler ile
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
