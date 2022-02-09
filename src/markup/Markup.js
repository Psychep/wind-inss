import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ThemeButton from "./Element/ThemeButton/ThemeButton";
import Leftside from "./Element/ThemeButton/left-side-button";
import Homepage from "./Pages/Homepage1";
import Index2 from "./Pages/Index2";
import Index3 from "./Pages/Index3";
import Index4 from "./Pages/Index4";
import Index5 from "./Pages/Index5";
import Index6 from "./Pages/Index";
import Index7 from "./Pages/Index7";
import Aboutus1 from "./Pages/Aboutus/Aboutus1";
import Aboutus2 from "./Pages/Aboutus/Aboutus2";
import Error403 from "./Pages/Error/Error403";
import Error404 from "./Pages/Error/Error404";
import Error405 from "./Pages/Error/Error405";
import ComingSoon1 from "./Pages/ComingSoon/ComingSoon1";
import UnderMaintenance from "./Pages/UnderMaintenance";
import Expertise from "./Pages/Expertise";
import ProjectManagement from "./Pages/ProjectManagement";
import OurProjects from "./Pages/OurProjects";
import Team from "./Pages/Team";
import Faqs from "./Pages/Faqs";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Contact from "./Pages/Contact";
import Service from "./Pages/Service/Service";
import ServicesDetails from "./Pages/Service/ServicesDetails";
import BlogStandard from "./Pages/BlogStandard/BlogStandard";
import BlogStandardLeftSidebar from "./Pages/BlogStandard/BlogStandardLeftSidebar";
import BlogStandardRightSidebar from "./Pages/BlogStandard/BlogStandardRightSidebar";
import BlogClassicGrid from "./Pages/BlogClassic/BlogClassicGrid";
import BlogClassicLeftSidebar from "./Pages/BlogClassic/BlogClassicLeftSidebar";
import BlogClassicRightSidebar from "./Pages/BlogClassic/BlogClassicRightSidebar";
import BlogListLeftSidebar from "./Pages/BlogList/BlogListLeftSidebar";
import BlogListRightSidebar from "./Pages/BlogList/BlogListRightSidebar";
import BlogDetails from "./Pages/BlogDetail/BlogDetails";
import ProtfolioFullWidth from "./Pages/Protfolio/ProtfolioFullWidth";
import PortfolioGrid2 from "./Pages/Protfolio/PortfolioGrid2";
import PortfolioGrid3 from "./Pages/Protfolio/PortfolioGrid3";
import PortfolioGrid4 from "./Pages/Protfolio/PortfolioGrid4";
import ShopColumns from "./Pages/Shop/ShopColumns";
import ShopColumnsSidebar from "./Pages/Shop/ShopColumnsSidebar";

import ShopCart from "./Pages/Shop/ShopCart";
import ShopCheckout from "./Pages/Shop/ShopCheckout";
import ShopProductDetails from "./Pages/Shop/ShopProductDetails";

import ShopWishlist from "./Pages/Shop/ShopWishlist";
import ShopLogin from "./Pages/Shop/ShopLogin";
import ShopRegister from "./Pages/Shop/ShopRegister";

import ShortIconBox from "./Pages/ShortCode/ShortIconBox";
import ShortCounter from "./Pages/ShortCode/ShortCounter";
import ShortPortfolio from "./Pages/ShortCode/ShortPortfolio";
import ShortTabs from "./Pages/ShortCode/ShortTabs";
import ShortTeam from "./Pages/ShortCode/ShortTeam";
import ShortTestimonial from "./Pages/ShortCode/ShortTestimonial";
import ShortForm from "./Pages/ShortCode/ShortForm";
import ShortAccordions from "./Pages/ShortCode/ShortAccordions";

import ScrollToTop from "./Element/ScrollToTop";

import deniztekneyat from "./Pages/urunler/deniz-tekne-yat-sigortasi";
import ProjectDetails from "./Pages/urunler/trafik-sigortasi";
import montajsigortasi from "./Pages/urunler/montaj-elektronik-sigortasi";
import makinesigortasi from "./Pages/urunler/makine-kirilmasi-sigortasi";
import ferdikazasigortasi from "./Pages/urunler/ferdi-kaza-sigortasi";
import allrisk from "./Pages/urunler/allrisk";
import depremsigotasi from "./Pages/urunler/deprem-sigortasi";
import sorumluluksigortasi from "./Pages/urunler/sorumluluk-sigortalari";
import hayvanhayatsigortasi from "./Pages/urunler/hayvan-hayat-sigortasi";
import kumeshayvanlarisigortasi from "./Pages/urunler/kumes-hayvan-sigortasi";
import dolusigortasi from "./Pages/urunler/dolu-sigortasi";
import serasigortasi from "./Pages/urunler/sera-sigortasi";
import trafiksigortasi from "./Pages/urunler/trafik-sigortasi";
import filokaskosigortasi from "./Pages/urunler/filokasko";
import konutsigortasi from "./Pages/urunler/konut-sigortasi";
import kefaletsigortasi from "./Pages/urunler/kefalet-sigortasi";
import nakliyatsigortasi from "./Pages/urunler/nakliyat-sigortasi";
import emitasigortasi from "./Pages/urunler/emita-sigortasi";
import ozelsagliksigortasi from "./Pages/urunler/saglik-sigortasi";
import tamamlayicisagliksigortasi from "./Pages/urunler/tamamlayici-saglik-sigortasi";
import yabancisagliksigortasi from "./Pages/urunler/yabanci-saglik-sigortasi";
import isyerisigortasi from "./Pages/urunler/isyeri-sigortasi";
import kaskosigortasi from "./Pages/urunler/kasko";
class Markup extends Component {
  render() {
    return (
      <BrowserRouter basename="">
        <div className="page-wraper">
          <Switch>
            <Route path="/" exact component={Index6} />
            <Route path="/index-2" exact component={Index2} />
            <Route path="/index-3" exact component={Index3} />
            <Route path="/index-4" exact component={Index4} />
            <Route path="/index-5" exact component={Index5} />
            <Route path="/anasayfa" exact component={Index6} />
            <Route path="/index-7" exact component={Index7} />
            <Route path="/about-1" exact component={Aboutus1} />
            <Route path="/about-2" exact component={Aboutus2} />
            <Route path="/error-403" exact component={Error403} />
            <Route path="/error-404" exact component={Error404} />
            <Route path="/error-405" exact component={Error405} />
            <Route path="/coming-soon-1" exact component={ComingSoon1} />
            <Route
              path="/under-maintenance"
              exact
              component={UnderMaintenance}
            />
            <Route path="/urunler" exact component={Expertise} />
            <Route path="/teklif" exact component={ProjectManagement} />
            <Route path="/hizmetlerimiz" exact component={OurProjects} />
            <Route path="/trafik-sigortasi" exact component={ProjectDetails} />

            <Route path="/trafik-sigortasi" exact component={trafiksigortasi} />
            <Route path="/kasko-sigortasi" exact component={kaskosigortasi} />

            <Route
              path="/filo-kasko-sigortasi"
              exact
              component={filokaskosigortasi}
            />
            <Route path="/konut-sigortasi" exact component={konutsigortasi} />
            <Route path="/isyeri-sigortasi" exact component={isyerisigortasi} />
            <Route
              path="/kefalet-sigortasi"
              exact
              component={kefaletsigortasi}
            />

            <Route path="/deniztekneyat" exact component={deniztekneyat} />
            <Route
              path="/nakliyat-sigortasi"
              exact
              component={nakliyatsigortasi}
            />
            <Route path="/emita-sigortasi" exact component={emitasigortasi} />

            <Route
              path="/ozel-saglik-sigortasi"
              exact
              component={ozelsagliksigortasi}
            />

            <Route
              path="/tamamlayici-saglik-sigortasi"
              exact
              component={tamamlayicisagliksigortasi}
            />

            <Route
              path="/yabanci-saglik-sigortasi"
              exact
              component={yabancisagliksigortasi}
            />

            <Route path="/montaj-sigortasi" exact component={montajsigortasi} />
            <Route path="/makine-sigortasi" exact component={makinesigortasi} />

            <Route
              path="/ferdi-kaza-sigortasi"
              exact
              component={ferdikazasigortasi}
            />

            <Route path="/allrisk-sigortasi" exact component={allrisk} />

            <Route path="/deprem-sigortasi" exact component={depremsigotasi} />

            <Route
              path="/sorumluluk-sigortasi"
              exact
              component={sorumluluksigortasi}
            />
            <Route
              path="/hayvan-hayat-sigortasi"
              exact
              component={hayvanhayatsigortasi}
            />
            <Route
              path="/kumes-hayvanalri-sigortasi"
              exact
              component={kumeshayvanlarisigortasi}
            />
            <Route path="/dolu-sigortasi" exact component={dolusigortasi} />
            <Route path="/sera-sigortasi" exact component={serasigortasi} />

            <Route path="/team" exact component={Team} />
            <Route path="/hakkimizda" exact component={Faqs} />
            <Route path="/login" exact component={Login} />
            <Route path="/register" exact component={Register} />
            <Route path="/iletisim" exact component={Contact} />
            <Route path="/sigortasirketleri" exact component={Service} />
            <Route path="/bayilik" exact component={ServicesDetails} />
            <Route path="/blog-standard" exact component={BlogStandard} />
            <Route
              path="/blog-standard-left-sidebar"
              exact
              component={BlogStandardLeftSidebar}
            />
            <Route
              path="/blog-standard-right-sidebar"
              exact
              component={BlogStandardRightSidebar}
            />
            <Route
              path="/blog-classic-grid"
              exact
              component={BlogClassicGrid}
            />
            <Route
              path="/blog-classic-left-sidebar"
              exact
              component={BlogClassicLeftSidebar}
            />
            <Route
              path="/blog-classic-right-sidebar"
              exact
              component={BlogClassicRightSidebar}
            />
            <Route
              path="/blog-list-left-sidebar"
              exact
              component={BlogListLeftSidebar}
            />
            <Route
              path="/blog-list-right-sidebar"
              exact
              component={BlogListRightSidebar}
            />
            <Route path="/blog-details" exact component={BlogDetails} />
            <Route
              path="/portfolio-full-width"
              exact
              component={ProtfolioFullWidth}
            />
            <Route path="/kampanyalar" exact component={PortfolioGrid2} />
            <Route path="/portfolio-grid-3" exact component={PortfolioGrid3} />
            <Route path="/portfolio-grid-4" exact component={PortfolioGrid4} />
            <Route path="/shop-columns" exact component={ShopColumns} />
            <Route
              path="/shop-columns-sidebar"
              exact
              component={ShopColumnsSidebar}
            />

            <Route path="/shop-cart" exact component={ShopCart} />
            <Route path="/shop-checkout" exact component={ShopCheckout} />
            <Route
              path="/shop-product-details"
              exact
              component={ShopProductDetails}
            />
            <Route path="/shop-wishlist" exact component={ShopWishlist} />
            <Route path="/shop-login" exact component={ShopLogin} />
            <Route path="/shop-register" exact component={ShopRegister} />

            <Route path="/short-icon-box" exact component={ShortIconBox} />
            <Route path="/short-counter" exact component={ShortCounter} />
            <Route path="/short-portfolio" exact component={ShortPortfolio} />
            <Route path="/short-tabs" exact component={ShortTabs} />
            <Route path="/short-team" exact component={ShortTeam} />
            <Route
              path="/short-testimonial"
              exact
              component={ShortTestimonial}
            />
            <Route path="/short-form" exact component={ShortForm} />
            <Route path="/short-accordions" exact component={ShortAccordions} />
          </Switch>
        </div>
        <ScrollToTop />
        <ThemeButton />
        <Leftside />
      </BrowserRouter>
    );
  }
}

export default Markup;
