import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from './../../Layout/Header1';
import Footer from './../../Layout/Footer1';
import PageTitle from './../../Layout/PageTitle';
import TabStyle1 from './../ShortCode/TabStyle1';
import { OrderDetail } from './../Login';
import ShopProductSlider from './ShopProductSlider';
import ShopProductCarousel from './ShopProductCarousel';
import bnr1 from './../../../images/banner/bnr7.jpg';

class ShopProductDetails extends Component {
    render() {
        return (
            <>
                <Header />

                <div className="page-content bg-white">
                    {/* <!-- inner page banner --> */}
                    <div className="dlab-bnr-inr overlay-primary bg-pt" style={{ backgroundImage: "url(" + bnr1 + ")" }}>
                        <PageTitle motherMenu='Product Details' activeMenu='Product Details' />
                    </div>
                    {/* <!-- inner page banner END --> */}
                    {/* <!-- contact area --> */}
                    <div className="section-full content-inner bg-white">
                        {/* <!-- Product details --> */}
                        <div className="container woo-entry">
                            <div className="row m-b30">
                                <div className="col-md-5 col-sm-5">
                                    <div className="product-gallery on-show-slider">
                                        <ShopProductSlider />
                                    </div>
                                </div>
                                <div className="col-md-7 col-sm-7 ">
                                    <form method="post" className="cart sticky-top">
                                        <div className="dlab-post-title ">
                                            <h4 className="post-title"><Link to={"#"}>Product name</Link></h4>
                                            <p className="m-b10">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic.</p>
                                            <div className="dlab-divider bg-gray tb15"><i className="icon-dot c-square"></i></div>
                                        </div>


                                        <div className="dlab-divider bg-gray tb15"><i className="icon-dot c-square"></i></div>



                                    </form>
                                </div>
                            </div>
                            {/* Tabs */}
                            {/* Tabs End */}


                        </div>
                        {/* <!-- Product details --> */}
                    </div>
                    {/* <!-- contact area  END --> */}
                    <OrderDetail />
                </div >

                <Footer />
            </>
        )
    }
}
export default ShopProductDetails;