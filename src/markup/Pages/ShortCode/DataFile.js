import React from "react";

import services1 from "./../../../images/our-services/pic1.jpg";
import services2 from "./../../../images/our-services/pic2.jpg";
import services3 from "./../../../images/our-services/pic3.jpg";
import services4 from "./../../../images/our-services/pic4.jpg";

import work1 from "./../../../images/our-work/pic1.jpg";
import work2 from "./../../../images/our-work/pic2.jpg";
import work3 from "./../../../images/our-work/pic3.jpg";
import work4 from "./../../../images/our-work/pic4.jpg";

import aracsigorta from "./../../../images/product/arac-sigorta.png";
import yanginsigorta from "./../../../images/product/yangin-sigorta.png";
import nakliyatsigorta from "./../../../images/product/nakliyat-sigorta.png";
import kefaletsigorta from "./../../../images/product/kefalet.png";
import sagliksigorta from "./../../../images/product/saglik-sigorta.png";
import muhendisliksigorta from "./../../../images/product/muhendislik-sigortasi.png";
import ferdikaza from "./../../../images/product/ferdikazasigortasi.png";
import allrisk from "./../../../images/product/allrisk.png";
import depremsigorta from "./../../../images/product/depremsigorta.png";
import sorumluluksigorta from "./../../../images/product/sorumluluksigota.png";

const wraperBlog = [
  { icon: <i className="ti-headphone-alt" />, title: "Market forecast" },
  { icon: <i className="ti-ruler-pencil" />, title: "Most Versatile" },
  { icon: <i className="ti-desktop" />, title: "Workflow automation" },
];

const wraperBox2 = [
  { icon: <i className="ti-desktop" />, title: "Lifetime Updates" },
  { icon: <i className="ti-ruler-pencil" />, title: "Fast Supports" },
  { icon: <i className="ti-palette" />, title: "Interactive Elements" },
  { icon: <i className="ti-file" />, title: "Flexible Layout" },
];

const dlabBox = [
  {
    icon: <i className="ti-ruler-pencil" />,
    title: "Creative design",
    image: services1,
  },
  {
    icon: <i className="ti-heart" />,
    title: "Just Easy Way",
    image: services2,
  },
  {
    icon: <i className="ti-brush-alt" />,
    title: "Creative design",
    image: services3,
  },
  {
    icon: <i className="ti-mouse-alt" />,
    title: "Flexible Layout",
    image: services4,
  },
];

const wraperBox3 = [
  { icon: <i className="flaticon-devices" />, title: "Web Design Solutions" },
  { icon: <i className="flaticon-pen" />, title: "Web Development Solutions" },
  { icon: <i className="flaticon-bar-chart" />, title: "SEO/SMO Solutions" },
  { icon: <i className="flaticon-file" />, title: "Pre Customized Solutions" },
  { icon: <i className="flaticon-notebook" />, title: "Project Maintenance" },
  { icon: <i className="flaticon-team" />, title: "Social Networking Portal" },
];

const wraperBox4 = [
  { icon: <i className="flaticon-devices" />, title: "Custom Applications" },
  { icon: <i className="flaticon-pen " />, title: "Dynamic Website" },
  { icon: <i className="flaticon-layers" />, title: "CMS Development" },
  { icon: <i className="flaticon-shop" />, title: "PHP based E-commercet" },
  { icon: <i className="flaticon-technology" />, title: "CMS Development" },
  { icon: <i className="flaticon-internet" />, title: "Cloud (SaaS, PaaS)" },
];

const dlabBox2 = [
  { icon: <i className="flaticon-diamond" />, title: "Business", image: work1 },
  { icon: <i className="flaticon-pen" />, title: "Consulting", image: work2 },
  { icon: <i className="flaticon-file" />, title: "Finance", image: work3 },
  { icon: <i className="flaticon-bar-chart" />, title: "Growth", image: work4 },
];

const wraperBox5 = [
  { icon: <i className="ti-check-box" />, title: "Ensure Security" },
  { icon: <i className="ti-user" />, title: "Expert Team" },
  { icon: <i className="ti-headphone-alt" />, title: "24/7 SUPPORT" },
];

const wraperBox6 = [
  { icon: <i className="flaticon-bar-chart" />, title: "Make it Simple" },
  { icon: <i className="flaticon-trophy" />, title: "Unique design" },
  { icon: <i className="flaticon-devices" />, title: "True Responsiveness" },
];
const wraperBox7 = [
  { icon: <i className="flaticon-pen" />, title: "Creative" },
  { icon: <i className="flaticon-diamond" />, title: "Unique design" },
  { icon: <i className="flaticon-devices" />, title: "Innovative" },
];

const wraperBox8 = [
  {
    icon1: <i className="flaticon-trophy" />,
    title1: "Elegant / Unique design",
    icon2: <i className="flaticon-technology" />,
    title2: "Different Layout Type",
  },
  {
    icon1: <i className="flaticon-bar-chart" />,
    title1: "Make it Simple",
    icon2: <i className="flaticon-devices" />,
    title2: "True Responsiveness",
  },
  {
    icon1: <i className="flaticon-trophy" />,
    title1: "Elegant / Unique design",
    icon2: <i className="flaticon-technology" />,
    title2: "Different Layout Type",
  },
  {
    icon1: <i className="flaticon-bar-chart" />,
    title1: "Make it Simple",
    icon2: <i className="flaticon-devices" />,
    title2: "True Responsiveness",
  },
];

const flipItem = [
  {
    image: aracsigorta,
    name: "Oto Sigortaları",
    link: "shop-product-details",
    id: 1,
    aciklama: "lorem ipsum dolor sit amed",
    urun: [
      {
        urun: "Trafik Sigortası",
        aciklama:
          "Trafik Sigortası, Karayolları Trafik Kanununun 2918 sayılı hükmünce trafiğe çıkan her araç için yapılması zorunlu kılınmış bir sigorta türüdür. Trafik Sigortasının yapılmasındaki temel amaç; karışılan kazada karşı tarafın uğradığı hasar neticesinde karşılaştığı kayıpların üstlenilmesidir. Yani bu sigorta türü, zorunlu olarak bu sigortayı yaptırmış araç sahibinin zararını karşılamaz. Araç sahiplerinin kendi zararlarını karşılamak amacıyla kasko yaptırmaları gerekir.",
        image: "Filo Kasko Sİgortası",
      },
      {
        urun: "Kasko",
        aciklama:
          "Bir motorlu kara taşıtı sigortası olan kasko, sigortayı yaptıran araç sahibinin ve aracının uğrayabileceği zararların karşılanmasını temin eder. Kasko yaptıran araç sahibi, kendisini ve aracını trafikte karşılaşabileceği zararlara karşı güvence altına alır. Kasko sigortasının amacı; sigorta sahibine ait motorlu aracın uğrayabileceği zararları tazmin etmektir. Kasko, yaptırılması kanunlarla zorunlu tutulan bir sigorta türü değildir. Kasko yaptırıp yaptırmamak araç sahiplerinin tasarrufundadır. Ancak trafikte karşılaşılabilecek muhtemel riskler göz önüne alındığında kasko sigortası, araç ve araç sahipleri için sunduğu teminatlar sayesinde büyük önem arz etmektedir. Bununla birlikte ek teminatlar sunulan araç sahiplerine kasko sigortası tercihinde esneklik sağlanarak özel kasko planları oluşturulabiliyor.",
        image: "Konut Sigortası",
      },
      {
        urun: "Filo Kasko Sİgortası",
        aciklama:
          "Filo Kasko, yüksek sayıda araç sahibi olanlar için yapılan kasko poliçesi çeşididir. Tüzel kişilerin araçlarını güvence altına alabildikleri ve bazı genel ve özel şartlarda istenilen teminatlara göre şekillendirebildikleri fiyat avantajı sunan poliçedir.",
        image: "İş Yeri Sigortası",
      },
    ],
    tag: ["Oto Sigortaları"],
  },
  {
    image: yanginsigorta,
    name: "Yangın Sigortaları",
    link: "shop-product-details",
    id: 2,
    aciklama: "lorem ipsum dolor sit amed",
    urun: [
      {
        urun: "Konut Sigortası",
        aciklama:
          "Hem kiracıların hem de ev sahiplerinin yararlanabileceği, en uygun fiyatlı konut poliçesiyle birçok riske karşı eşyalarınızı teminat altına alan bir yangın sigortası türüdür.       ",
        image: "Filo Kasko Sİgortası",
      },
      {
        urun: "İş Yeri Sigortası",
        aciklama:
          "Poliçe teminatları kapsamında karşılaşabileceğiniz hasar durumunda, işinizin durması sonucunda oluşacak maddi zararların boyutlarının artmasına engel olarak, müşterilere ve çalışanlara karşı sorumluluklarınıza tam güvence sağlayan ve işinizi koruyan bir yangın sigortasıdır. ",
        image: "Konut Sigortası",
      },
    ],
    tag: ["Yangın Sigortaları"],
  },
  {
    image: nakliyatsigorta,
    name: "Nakliyat  Sigortaları",
    link: "shop-product-details",
    id: 3,
    aciklama:
      "Nakliyat Sigortaları; nakliye aracı ile malların taşınması sırasında, söz konusu malların fiziki zarara uğramasına karşılık birtakım teminatlar sunan sigortalardır. Kamyon, tren, gemi, uçak gibi araçlar vasıtasıyla taşınan mallar; yaşanan bir olumsuzluğa bağlı olarak fiziken zarar gördüğü takdirde, sigorta poliçesinde yer alan teminatlar dâhilinde söz konusu mağduriyet giderilir. Nakliyat Sigortalarının kapsamında yer alan alt başlıklarda görülebileceği üzere; hem yurtiçi hem de yurtdışı taşımacılığı için farklı sigorta türleri bulunmaktadır. Doğa Sigorta bünyesinde 5 tür nakliyat sigortası hizmeti sunulmaktadır.",
    urun: [
      {
        urun: "Deniz/Tekne/Yat Sigortası",
        aciklama:
          "Tekne-Yat Sigortaları ürünümüz, özel amaçlı olarak kullandığınız yatlarınıza, deniz tehlikeleri veya karada bağlama yerlerin de , marina da  veya yatma-çekek yerinde meydana gelebilecek kazalara karşı güvence sağlayan bir Sigortadır.        ",
        image: "Filo Kasko Sİgortası",
      },
      {
        urun: "Nakliyat Sigortası",
        aciklama:
          "Taşıdığınız sorumluluklar sizi zor durumda bırakmasın. Wind Sigorta ile sorumluluklarınız teminat altındadır, Freight Forwarder olarak faaliyet gösteren şirketlerin, uluslararası konvansiyonlar kapsamındaki yükümlülüklerine karşılık teminat sağlamaktadır,",

        image: "Konut Sigortası",
      },
      {
        urun: "Emtia Sigortası",
        aciklama:
          "Sahibi bulunduğunuz malların, çeşitli nakil vasıtaları ile bir yerden diğer bir yere taşınması, bu taşınma sırasında da oluşabilecek çeşitli rizikolara karşı güvence altına alınması Emtia Nakliyat Sigortası ürünümüz ile sağlanmaktadır. ",
        image: "İş Yeri Sigortası",
      },
    ],

    tag: ["Hayvan Hayat Sigortası"],
  },
  {
    image: kefaletsigorta,
    name: "Kefalet Sigortası",
    link: "shop-product-details",
    id: 5,
    aciklama: "lorem ipsum dolor sit amed",
    urun: [
      {
        urun: "Kefalet Sigortası",
        aciklama:
          "Kefalet	sigortasında	sigorta	şirketi,	borçlunun	sözleşmeden	ve/veya	kanundan	doğan	yükümlülüğünü	yerine	getirmemesi	riskine	karşı	alacaklıya/işverene	düzenlediği	kefalet	senedi	bedeline	kadar	kefil	olmaktadır.	Bu	sigorta	türü	geleneksel	sigorta	uygulamalarından	ziyade	bankacılık	ürünlerine	alternatif	bir	finansal	enstrüman	niteliğindedir.",
        image: "Filo Kasko Sİgortası",
      },
    ],
    tag: ["Kefalet Sigortası"],
  },
  {
    image: sagliksigorta,
    name: "Sağlık Sigortaları",
    link: "shop-product-details",
    id: 6,
    aciklama: "lorem ipsum dolor sit amed",
    urun: [
      {
        urun: "Özel Sağlık sigortası",
        aciklama:
          "Beklenmedik bir kaza veya hastalık sonucu oluşacak sağlık giderlerinizin yanı sıra sağlığınız için ihtiyaç duyacağınız her türlü tanı ve tedavi işlemlerini, en seçkin sağlık kurumlarında en modern yöntemlerle ve mali kaygı duymadan karşılanması için hazırlanmış sigortalardır. Sağlık giderleriniz, genel ve özel şartlar dahilinde ve poliçede belirtilen limitler doğrultusunda karşılanır.  ",
        image: "Filo Kasko Sİgortası",
      },
      {
        urun: "Tamamlayıcı Sağlık Sigortası",
        aciklama:
          "Wind Sigorta'nın sunduğu Tamamlayıcı Sağlık Sigortası ile Wind Sigorta anlaşmalı özel sağlık kurumlarında, özel şartlar kapsamında SGK tarafından karşılanan sağlık giderlerinizde oluşan fark ücretlerini hiçbir ek ödeme yapmadan karşılayabilirsiniz( SGK zorunlu muayene katılım payı hariç).   ",
        image: "Konut Sigortası",
      },
      {
        urun: "Yabancı Sağlık Sigortası",
        aciklama:
          "Kanun gereğince Türk vatandaşı olmayan ve ikamet izni almak için Türkiye’ye gelen yabancı konukların yaptırmak durumunda olduğu Yabancılara Özel Sağlık Sigortası Wind Sigorta’da!        ",
        image: "İş Yeri Sigortası",
      },
    ],

    tag: ["Sağlık Sigortaları"],
  },
  {
    image: muhendisliksigorta,
    name: "Mühendislik Sigortası",
    link: "shop-product-details",
    id: 7,
    aciklama: "lorem ipsum dolor sit amed",
    urun: [
      {
        urun: "Montaj Sigortası",
        aciklama:
          "Montaj faaliyetlerinin başlangıcından bitimine kadar geçen süre içinde, ani ve beklenmedik sebeplerle ortaya çıkabilecek risklere karşı güvence sunan bir mühendislik sigortasıdır.",
        image: "Filo Kasko Sİgortası",
      },
      {
        urun: "Makine Kırılması Sigortası",
        aciklama:
          "İşletmenizde kullanılan makinelerin çalışırken aniden duraklaması veya beklenmedik bir sebepten ötürü üretiminizin aksamasına sebep olarak önemli maliyetlerin kaybına neden olmaması için makineleri teminat altına alır.",
        image: "Konut Sigortası",
      },
    ],
    tag: ["Mühendislik Sigortası"],
  },
  {
    image: ferdikaza,
    name: "Ferdi Kaza Sigortası",
    link: "shop-product-details",
    id: 8,
    aciklama:
      "Ferdi kaza sigortası, beklenmedik kaza riski nedeniyle kendinizi teminat altına alabileceğiniz bir sigortadır. Ferdi kaza sigortası neleri kapsar sorusunun cevabı olarak ise beklenmedik kazalara ilaveten deprem, sel, yer kayması ve terör olaylarına karşı sigorta poliçenizin sizi teminat altına alması verilebilir. Ferdi kaza sigortası genel şartları kapsamında sigorta hizmetine başvurabilmek için 18- 60 yaşları arasında olmanız yeterlidir.   ",
    urun: [
      {
        urun: "Ferdi Kaza Sigortası",
        aciklama:
          "Ferdi kaza sigortası, beklenmedik kaza riski nedeniyle kendinizi teminat altına alabileceğiniz bir sigortadır. Ferdi kaza sigortası neleri kapsar sorusunun cevabı olarak ise beklenmedik kazalara ilaveten deprem, sel, yer kayması ve terör olaylarına karşı sigorta poliçenizin sizi teminat altına alması verilebilir. Ferdi kaza sigortası genel şartları kapsamında sigorta hizmetine başvurabilmek için 18- 60 yaşları arasında olmanız yeterlidir.        ",
        image: "Filo Kasko Sİgortası",
      },
    ],
    urun: ["Ferdi Kaza Sigortası"],
    tag: ["Ferdi Kaza Sigortası"],
  },
  {
    image: allrisk,
    name: "All Risk İnşaat Sigortaları",
    link: "shop-product-details",
    id: 9,
    aciklama: "lorem ipsum dolor sit amed",
    urun: [
      {
        urun: "All Risk İnşaat Sigortaları",
        aciklama:
          "İnşaat All Risks Sigortası, müteahhit kuruluşlar için ciddi bir güvence sunmaktadır. İnşaat All Risks Sigortası, yapı malzemelerinin inşaat alanına indirilmesinden, tesisin kullanılmaya başlamasına kadar geçen süre içinde, doğa, teknik ve insan faktörlerinin neden olabileceği çok geniş bir risk yelpazesini güvence altına almaktadır. İnşaat faaliyetlerinize (Şantiyelerinize) yaptıracağınız İnşaat All Risks Sigortası talepleriniz için, Wind Sigorta uzmanlarına danışabilirsiniz.        ",
        image: "Filo Kasko Sİgortası",
      },
    ],
    tag: ["All Risk İnşaat Sigortaları"],
  },
  {
    image: depremsigorta,
    name: "Deprem Sigortası",
    link: "shop-product-details",
    id: 10,
    aciklama: "lorem ipsum dolor sit amed",
    urun: [
      {
        urun: "Deprem Sigortası",
        aciklama:
          "Zorunlu Deprem Sigortası, evinizi depremin neden olabileceği maddi hasarlara karşı güvence altına alan ve teminatı Doğal Afet Sigortaları Kurumu (DASK) tarafından verilen yaptırılması zorunlu bir sigortadır.  ",
        image: "Filo Kasko Sİgortası",
      },
    ],
    tag: ["Deprem Sigortası"],
  },
  {
    image: sorumluluksigorta,
    name: "Sorumluluk Sigortaları",
    link: "shop-product-details",
    id: 11,
    aciklama:
      "Sorumluluk sigortası; sigortalıyı, sigortalının aile bireylerini ya da çalışanlarını çeşitli ihmal durumlarında doğabilecek maddi ve bedensel zararlara karşı güvence altına alan bir sigorta türüdür. Farklı çeşitleri bulunan sorumluluk sigortalarının kapsamları imzalanan poliçelerde belirlenir ve sigortalı kişinin sorumlu olduğu olumsuz durumlar sonucunda tazminat hakkı doğan kişilerin karşılaştıkları zarar, poliçe sınırları dahilinde ödenir.",
    urun: [
      {
        urun: "Sorumluluk Sigortaları",
        aciklama:
          "Sorumluluk sigortası; sigortalıyı, sigortalının aile bireylerini ya da çalışanlarını çeşitli ihmal durumlarında doğabilecek maddi ve bedensel zararlara karşı güvence altına alan bir sigorta türüdür. Farklı çeşitleri bulunan sorumluluk sigortalarının kapsamları imzalanan poliçelerde belirlenir ve sigortalı kişinin sorumlu olduğu olumsuz durumlar sonucunda tazminat hakkı doğan kişilerin karşılaştıkları zarar, poliçe sınırları dahilinde ödenir.",
        image: "Filo Kasko Sİgortası",
      },
    ],
    tag: ["Sorumluluk Sigortaları"],
  },
  {
    image: sorumluluksigorta,
    name: "Hayvan Hayat Sigortası",
    link: "shop-product-details",
    id: 12,
    aciklama: "lorem ipsum dolor sit amed",
    urun: [
      {
        urun: "Hayvan Hayat Sigortası",
        aciklama:
          "Hayvan hayat sigortası, Hayvan Hayat Sigortası Genel Şartlarındaki hayvanları her türlü adi ve bulaşıcı hastalıklardan, kazalardan, doğal afetler sebebiyle meydana gelen zorunlu öldürmeler veya ölümlerinden sigortalının doğrudan doğruya uğradığı maddi zararı temin eder.",
        image: "Filo Kasko Sİgortası",
      },
      {
        urun: "Kümes Hayvanları Sigortası",
        aciklama:
          "Kümes Hayvanları Hayat Sigortasında, poliçede yazılı primin %50'si Devlet tarafından karşılanır. Sigortalı tarafından ödenecek olan primin %25'i peşin alınır, kalan prim tutarı da en fazla 5 taksitle tahsil edilir. Sadece Geniş Kapsamlı 45 günlük Broiler sigortalarında primin tamamı peşin tahsil edilir.",
        image: "Konut Sigortası",
      },
      {
        urun: "Dolu Sigortası",
        aciklama:
          "Dolu Sigortaları’nda Geleneksel sistemden poliçe tanzim edilebilmesi için, söz konusu arazinin ÇKS (Çiftçi Kayıt Sistemi) kaydının bulunmaması gerekmektedir.Sigorta kapsamına bitkisel ürünler girmektedir.        ",
        image: "İş Yeri Sigortası",
      },
      {
        urun: "Sera Sigortası",
        aciklama:
          "Sera yapı malzemeleri, içindeki teknik ekipman ve serada yetiştirilen bitkisel ürünler için Dolu, Fırtına, Hortum, Yangın, Deprem, Taşıt Çarpması Heyelan, Kar ve dolu Ağırlığı, Sel ve Su Baskını risklerinin neden olduğu miktar kaybı sigorta kapsamındadır.",
        image: "İş Yeri Sigortası",
      },
    ],
  },
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
  flipItem,
};
