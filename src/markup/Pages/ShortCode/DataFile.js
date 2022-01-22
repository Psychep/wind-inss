import React from 'react';

import services1 from './../../../images/our-services/pic1.jpg';
import services2 from './../../../images/our-services/pic2.jpg';
import services3 from './../../../images/our-services/pic3.jpg';
import services4 from './../../../images/our-services/pic4.jpg';

import work1 from './../../../images/our-work/pic1.jpg';
import work2 from './../../../images/our-work/pic2.jpg';
import work3 from './../../../images/our-work/pic3.jpg';
import work4 from './../../../images/our-work/pic4.jpg';


const wraperBlog = [
	{ icon: <i className="ti-headphone-alt" />, title: 'Market forecast' },
	{ icon: <i className="ti-ruler-pencil" />, title: 'Most Versatile' },
	{ icon: <i className="ti-desktop" />, title: 'Workflow automation' },
];

const wraperBox2 = [
	{ icon: <i className="ti-desktop" />, title: 'Lifetime Updates', },
	{ icon: <i className="ti-ruler-pencil" />, title: 'Fast Supports', },
	{ icon: <i className="ti-palette" />, title: 'Interactive Elements', },
	{ icon: <i className="ti-file" />, title: 'Flexible Layout', },
];

const dlabBox = [
	{ icon: <i className="ti-ruler-pencil" />, title: 'Creative design', image: services1, },
	{ icon: <i className="ti-heart" />, title: 'Just Easy Way', image: services2, },
	{ icon: <i className="ti-brush-alt" />, title: 'Creative design', image: services3, },
	{ icon: <i className="ti-mouse-alt" />, title: 'Flexible Layout', image: services4, },
];

const wraperBox3 = [
	{ icon: <i className="flaticon-devices" />, title: 'Web Design Solutions' },
	{ icon: <i className="flaticon-pen" />, title: 'Web Development Solutions' },
	{ icon: <i className="flaticon-bar-chart" />, title: 'SEO/SMO Solutions' },
	{ icon: <i className="flaticon-file" />, title: 'Pre Customized Solutions' },
	{ icon: <i className="flaticon-notebook" />, title: 'Project Maintenance' },
	{ icon: <i className="flaticon-team" />, title: 'Social Networking Portal' },
];

const wraperBox4 = [
	{ icon: <i className="flaticon-devices" />, title: 'Custom Applications' },
	{ icon: <i className="flaticon-pen " />, title: 'Dynamic Website' },
	{ icon: <i className="flaticon-layers" />, title: 'CMS Development' },
	{ icon: <i className="flaticon-shop" />, title: 'PHP based E-commercet' },
	{ icon: <i className="flaticon-technology" />, title: 'CMS Development' },
	{ icon: <i className="flaticon-internet" />, title: 'Cloud (SaaS, PaaS)' },
];

const dlabBox2 = [
	{ icon: <i className="flaticon-diamond" />, title: 'Business', image: work1, },
	{ icon: <i className="flaticon-pen" />, title: 'Consulting', image: work2, },
	{ icon: <i className="flaticon-file" />, title: 'Finance', image: work3, },
	{ icon: <i className="flaticon-bar-chart" />, title: 'Growth', image: work4, },
];

const wraperBox5 = [
	{ icon: <i className="ti-check-box" />, title: 'Ensure Security', },
	{ icon: <i className="ti-user" />, title: 'Expert Team', },
	{ icon: <i className="ti-headphone-alt" />, title: '24/7 SUPPORT', },
];

const wraperBox6 = [
	{ icon: <i className="flaticon-bar-chart" />, title: 'Make it Simple', },
	{ icon: <i className="flaticon-trophy" />, title: 'Unique design', },
	{ icon: <i className="flaticon-devices" />, title: 'True Responsiveness', },
];
const wraperBox7 = [
	{ icon: <i className="flaticon-pen" />, title: 'Creative', },
	{ icon: <i className="flaticon-diamond" />, title: 'Unique design', },
	{ icon: <i className="flaticon-devices" />, title: 'Innovative', },
];

const wraperBox8 = [
	{ icon1: <i className="flaticon-trophy" />, title1: 'Elegant / Unique design', icon2: <i className="flaticon-technology" />, title2: 'Different Layout Type', },
	{ icon1: <i className="flaticon-bar-chart" />, title1: 'Make it Simple', icon2: <i className="flaticon-devices" />, title2: 'True Responsiveness', },
	{ icon1: <i className="flaticon-trophy" />, title1: 'Elegant / Unique design', icon2: <i className="flaticon-technology" />, title2: 'Different Layout Type', },
	{ icon1: <i className="flaticon-bar-chart" />, title1: 'Make it Simple', icon2: <i className="flaticon-devices" />, title2: 'True Responsiveness', },
];

const flipBlog = [
	{ image: test1, name: "Oto Sigortaları", link: "shop-product-details", id: "1", aciklama: "lorem ipsum dolor sit amed", urun: ["Trafik Sigortası", "Kasko", "Filo Kasko Sİgortası"] },
	{ image: test2, name: "Yangın Sigortaları", link: "shop-product-details", id: "2", aciklama: "lorem ipsum dolor sit amed", urun: ["Konut Sigortası", "İş Yeri Sigortası"] },
	{ image: test3, name: "Nakliyat  Sigortaları", link: "shop-product-details", id: "3", aciklama: "lorem ipsum dolor sit amed", urun: ["Hayvan Hayat Sigortası", "Kümes Hayvanları Sigortası", "Dolu Sigortası", "Sera Sigortası"] },
	{ image: test1, name: "Kefalet Sigortası", link: "shop-product-details", id: "5", aciklama: "lorem ipsum dolor sit amed", urun: ["Kefalet Sigortası"] },
	{ image: test1, name: "Sağlık Sigortaları", link: "shop-product-details", id: "6", aciklama: "lorem ipsum dolor sit amed", urun: ["Özel Sağlık sigortası", "Tamamlayıcı Sağlık Sigortası", "Yabancı Sağlık Sigortası"] },
	{ image: test1, name: "Mühendislik Sigortası", link: "shop-product-details", id: "10", aciklama: "lorem ipsum dolor sit amed", urun: ["Montaj", "Elektornik Cihaz", "Makine Kırılması Sigortası"] },
	{ image: test1, name: "Ferdi Kaza Sigortası", link: "shop-product-details", id: "7", aciklama: "lorem ipsum dolor sit amed", urun: ["Ferdi Kaza Sigortası"] },
	{ image: test1, name: "All Risk İnşaat Sigortaları", link: "shop-product-details", id: "8", aciklama: "lorem ipsum dolor sit amed", urun: ["All Risk İnşaat Sigortaları"] },
	{ image: test1, name: "Deprem Sigortası ", link: "shop-product-details", id: "9", aciklama: "lorem ipsum dolor sit amed", urun: ["Deprem Sigortası"] },
	{ image: test1, name: "Sorumluluk Sigortaları", link: "shop-product-details", id: "11", aciklama: "lorem ipsum dolor sit amed", urun: ["Sorumluluk Sigortaları"] },
];


export {
	wraperBlog,
	wraperBox2,
	wraperBox3,
	wraperBox4,
	wraperBox5,
	wraperBox6,
	wraperBox7,
	wraperBox8,
	dlabBox,
	dlabBox2,
	flipBlog,
};