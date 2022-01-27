import React, { Component } from 'react';
import Header from './../Layout/Header1';
import Footer from './../Layout/footer5';
import PageTitle from './../Layout/PageTitle';
import SectionCounter from './../Element/SectionCounter';
import TestimonialCarousel from './../Element/TestimonialCarousel';
import FormStyle from './../Element/FormStyle';

//Images
import rocket from './../../images/rocket.png';
import bnr from './../../images/background/bg1.png';
import tamplate from './../../images/tamplate.png';
import bg1 from './../../images/background/bg10.png';
import bgmap from './../../images/background/bg-map.jpg';


const BlogLeft = ({ title, number, parg }) => {
    return (
        <>
            <div className="line-left clearfix">
                <div className="line-left-box">
                    <div className="line-content-box ">
                        <h4 className="min-title text-uppercase text-primary m-t0 m-b15">{title}</h4>
                        <p className="font-16">
                            {parg}                        </p>
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
                        <h4 className="min-title text-uppercase text-primary m-t0 m-b15">{title}</h4>
                        <p className="font-16">
                            {parg}.
                        </p>
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

                <div className="page-content bg-white">
                    {/* <!-- inner page banner --> */}
                    <div className="dlab-bnr-inr overlay-primary" style={{ backgroundImage: "url(" + bnr + ")" }}>
                        <PageTitle motherMenu='Project Management' activeMenu='Project Management' />
                    </div>
                    {/* <!-- inner page banner END --> */}
                    <div className="content-block">
                        {/* <!-- About Us --> */}
                        <div className="section-full content-inner-1">
                            <div className="container">
                                <div className="section-head text-black text-center">
                                    <h4 className="text-gray-dark m-b10">Wind Sigorta</h4>
                                    <h2 className="box-title m-tb0">
                                        Her türlü teknolojiye ayak uyduran dinamik yapımızla tüm yeniliklere açık acenteliğimizle, sizlerin hizmetindeyiz.                                        <span className="bg-primary"></span>
                                    </h2>
                                    <p>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                    </p>
                                </div>
                            </div>
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-12 text-center">
                                        <img src={rocket} alt="" className="fa faa-horizontal animated" />
                                        <h5 className="text-primary">Start Project</h5>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="time-line clearfix">
                                            <BlogLeft title='Sigorta İhtiyacınızı Belirleyin' parg="Wind Sigorta'nın sunduğu trafik ve kasko gibi araç sigortasından, ev sigortası ve sağlık sigortasına kadar uzanan yelpazedeki sigorta çeşitlerini inceleyin" number='1' />
                                            <BlogRight title='Karşılaştırmalı Teklif Alın' parg="Sigortalarımız için kısa bir form doldurarak tüm ürünlerimiz için karşılaştırmalı teklif alın." number='2' />
                                            <BlogLeft title='Fırsatlarımızdan & Kampanyalarımızdan faydalanın' parg="Wind Sigorta Size en uygun teklifleri verebilmek için size uygun kampanyaları sunar." number='3' />
                                            <BlogRight title='Hemen Şimdi Hızlı bir teklif Alın' parg="Teklif Formunu doldurun ve size en kısa sürede tekliflerimizi sunalım." number='4' />


                                        </div>
                                    </div>
                                    <div className="col-lg-12 text-center">
                                        <h5 className="text-primary">Hızlı Teklif Al</h5>
                                        <div className="arrow-bx fa faa-horizontal animated"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="text-center" style={{ paddingTop: "65px" }}>
                            </div>
                        </div>
                        {/* <!-- Our Services --> */}
                        {/* <!-- Why Chose Us --> */}
                        {/* <!-- Why Chose Us End --> */}
                        {/* <!-- Testimonials --> */}

                        {/* <!-- Testimonials END --> */}
                        {/* <!-- Get in touch --> */}
                        <div className="section-full overlay-primary-dark bg-img-fix" style={{ backgroundImage: "url(" + bg1 + ")" }}>
                            <FormStyle />
                        </div>
                        {/* <!-- Get in touch --> */}
                    </div>
                    {/* <!-- contact area END --> */}
                </div>

                <Footer />
            </>
        )
    }
}
export default ProjectManagement;