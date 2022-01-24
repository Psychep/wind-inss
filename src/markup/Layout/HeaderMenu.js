import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class HeaderMenu extends Component {
	render() {
		return (
			<>
				<ul className="nav navbar-nav">
					<li className="active"><Link to={'./anasayfa'}><span className="ti-home"></span> <i className=""></i></Link>

					</li>
					<li><Link to={'#'}>Ürünler <i className=""></i></Link>
						<ul className="sub-menu">
							<li><Link to={'#'}>About Us <i className="fa fa-angle-right"></i></Link>
								<ul className="sub-menu">
									<li><Link to={'./about-2'} className="dez-page">About Us 2</Link></li>
								</ul>
							</li>


							<li><Link to={'./expertise'} className="dez-page">Expertise</Link></li>
							<li><Link to={'./project-management'} className="dez-page">Project management</Link></li>
							<li><Link to={'./our-projects'} className="dez-page">Our Projects</Link></li>
							<li><Link to={'./project-details'} className="dez-page">Project Details </Link></li>

						</ul>
					</li>
					<li><Link to={'#'}>Hizmetlerimiz <i className=""></i></Link>
						<ul className="sub-menu">
							<li><Link to={'./service'} className="dez-page">Services</Link></li>
							<li><Link to={'./services-details'} className="dez-page">Services Details</Link></li>
						</ul>
					</li>
					<li><Link to={'#'}>Kampanyalarımız <i className=""></i></Link>

					</li>
					<li><Link to={'#'}>Hakkımızda <i className=""></i></Link>

					</li>
					<li><Link to={'#'}>Kurumsal <i className=""></i></Link>
						<ul className="sub-menu left">
							<li><Link to={'./shop-columns'} className="dez-page">Shop Columns</Link></li>
							<li><Link to={'./shop-product-details'} className="dez-page">Product Details</Link></li>

						</ul>
					</li>

				</ul>
			</>
		)
	}
}
export default HeaderMenu;