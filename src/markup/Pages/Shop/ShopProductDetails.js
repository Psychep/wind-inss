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
import box2 from "./../../../images/portfolio/sevgililergunu.jpg";

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
                          100 TL değerinde hediye çeki kazanma fırsatını
                          yakalıyor!{" "}
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
                          Sevgililer Günü Hediyeniz
                          <br /> Anadolu Sigorta’dan
                        </h2>
                        <p>
                          Şubat ayında Anadolu Sigorta’dan ilk kez Bireysel
                          Sağlık Sigortası veya Tamamlayıcı Sağlık Sigortası
                          yaptıranlar, 100 TL değerinde hediye çeki kazanma
                          fırsatını yakalıyor!
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
                          Kampanyamız 1 Şubat – 28 Şubat 2022 tarihleri arasında
                          bireysel müşterilerimiz adına düzenlenecek Bireysel
                          Sağlık Sigortası ve Tamamlayıcı Sağlık Sigortası
                          poliçeleri için geçerlidir.
                        </li>
                        <li>
                          Anadolu Sigorta’dan düzenlenecek yeni poliçeler için
                          geçerlidir. Anadolu Sigorta’dan devam eden yenileme
                          kapsamındaki poliçelerde geçerli değildir.
                        </li>

                        <li>
                          Anadolu Sigorta’da ilk kez Bireysel Sağlık Sigortası
                          ve Tamamlayıcı Sağlık Sigortası kapsamına alınan
                          sigortalılarımız için geçerlidir. Şirketimizde
                          kurumsal sağlık poliçesi kapsamında olup, bireysel
                          poliçeye geçecek olan sigortalılarımız ile Bireysel
                          Sağlık Sigortası’ndan Tamamlayıcı Sağlık Sigortası’na
                          geçiş yapacak sigortalılarımız kampanya kapsamına
                          dahil değildir.
                        </li>
                        <li>
                          Söz konusu kampanya, başka kampanya ve indirimler ile
                          birleştirilemez. Herhangi bir kampanya/kurum/meslek
                          indirimi uygulanan poliçeler kampanya kapsamında
                          değildir.
                        </li>
                        <li>
                          Kampanya kapsamındaki poliçenin sigorta ettireni olan
                          bireysel müşterilerimize 100 TL Hepsiburada çeki
                          hediye edilecektir.
                        </li>
                        <li>
                          Aynı sigorta ettiren müşterimiz hediye çeki
                          kampanyasından sadece bir kez yararlanabilir.
                        </li>
                        <li>
                          Poliçede yer alan sigortalı sayısı hediye edilecek
                          Hepsiburada çeki adedini ve/veya değerini
                          etkilemeyecektir.
                        </li>
                        <li>
                          Kampanyamız, dijital platformlarımızdan alınacak
                          teklif/poliçelerde de geçerlidir. Teklif alma
                          aşamasında dijital platformlarımızdaki "Acente"
                          seçeneğini işaretleyerek, kendi satış kanalınızdan
                          poliçe satın alabilir ve hediye çeki kazanma hakkına
                          sahip olabilirsiniz.
                        </li>
                        <li>
                          Kampanya koşullarını sağlayan sigortalılarımızın 100
                          TL değerinde hediye çeki kodu, poliçenin iptal
                          edilmemiş olması koşuluyla, poliçenin sigorta ettireni
                          durumundaki bireysel müşterilerimizin şirketimizde
                          kayıtlı cep telefonu numarasına 7-11 Mart 2022
                          tarihleri arasında SMS ile iletilecektir.
                        </li>
                        <li>
                          Hediye çeklerinin SMS ile iletilebilmesi için
                          müşterilerimizin "Pazarlama ve İletişim İzni"
                          bulunması gerekmektedir. Pazarlama ve İletişim İzni,
                          Online Bireysel Şubemizin ve Sigortam Cepte mobil
                          uygulamamızın “Profil” bilgileri ekranından ya da
                          Sağlığım Cepte mobil uygulamamızın “İzinler” menüsü
                          üzerinden verilebilmektedir.
                        </li>
                        <li>
                          Gönderim tarihinde Pazarlama ve İletişim İzni
                          bulunmayan müşterilerimize hediye çekleri SMS ile
                          iletilememektedir. Gönderim tarihinden sonra Pazarlama
                          ve İletişim İzni verilmesi durumunda hediye çeki
                          temini mümkün olmamaktadır.
                        </li>
                        <li>
                          Hepsiburada hediye çekleri 01.12.2022 tarihine kadar
                          geçerlidir. Çekler altın ve ziynet ürünleri hariç tüm
                          ürünlerde geçerlidir. Çekler tek seferde
                          kullanılabilir, bölünemez. Hediye çeklerini
                          www.hepsiburada.com üzerinden yapılacak alışverişlerde
                          kullanabilmek için satın almak istenilen ürünler ile
                          birlikte sepet oluşturduktan sonra ödeme aşamasında
                          "Hediye çeki kullan" kısmında hediye çekine ait kodun
                          girilmesi yeterlidir. Çekler hangi Hepsiburada
                          hesabında kullanılırsa o hesapta aktifleşecektir. Bir
                          hesapta aktif olan kod daha sonra farklı bir hesapta
                          kullanılamaz. Hediye çeki kodları hamilinedir. Kayıp
                          halinde takip edilemez, iptal edilemez ve iadesi
                          yoktur.
                        </li>
                        <li>
                          Anadolu Sigorta ve Hepsiburada süre ve koşullar
                          konusunda önceden haber vermeksizin değişiklik yapma
                          ve yürürlükten kaldırma hakkını saklı tutar. .
                        </li>
                        <li>
                          Kampanya kapsamında Hepsiburada tarafınca sunulacak
                          hizmetin sorumluluğu Hepsiburada’ya aittir. Anadolu
                          Sigorta hizmetlerin kullanımı veya kullanılamaması
                          sonucu ortaya çıkabilecek ya da ilgisi olan, doğrudan
                          veya dolaylı hiçbir zararla ilgili olarak sorumluluk
                          kabul etmeyecektir.
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
