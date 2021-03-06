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

import hayvanhayat from "./../../../images/product/hayvanhayat.png";

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
    name: "Oto Sigortalar??",
    link: "trafik-sigortasi",
    id: 1,
    aciklama:
      "Zorunlu trafik sigortas??, her ara?? sahibinin yapt??rmas??n??n zorunlu oldu??u bir ara?? sigortas??d??r. Trafik sigortas??, trafikte meydana gelebilecek kaza sonucunda kar???? taraf??n maddi ve bedensel zararlar??n??n kar????lanmas??n?? sa??lar.",
    urun: [
      {
        urun: "Trafik Sigortas??",
        aciklama:
          "Trafik Sigortas??, Karayollar?? Trafik Kanununun 2918 say??l?? h??km??nce trafi??e ????kan her ara?? i??in yap??lmas?? zorunlu k??l??nm???? bir sigorta t??r??d??r. Trafik Sigortas??n??n yap??lmas??ndaki temel ama??; kar??????lan kazada kar???? taraf??n u??rad?????? hasar neticesinde kar????la??t?????? kay??plar??n ??stlenilmesidir. Yani bu sigorta t??r??, zorunlu olarak bu sigortay?? yapt??rm???? ara?? sahibinin zarar??n?? kar????lamaz. Ara?? sahiplerinin kendi zararlar??n?? kar????lamak amac??yla kasko yapt??rmalar?? gerekir.",
        image: "flipitemimage",
        link: "trafik-sigortasi",
      },
      {
        urun: "Kasko",
        aciklama:
          "Bir motorlu kara ta????t?? sigortas?? olan kasko, sigortay?? yapt??ran ara?? sahibinin ve arac??n??n u??rayabilece??i zararlar??n kar????lanmas??n?? temin eder. Kasko yapt??ran ara?? sahibi, kendisini ve arac??n?? trafikte kar????la??abilece??i zararlara kar???? g??vence alt??na al??r. Kasko sigortas??n??n amac??; sigorta sahibine ait motorlu arac??n u??rayabilece??i zararlar?? tazmin etmektir. Kasko, yapt??r??lmas?? kanunlarla zorunlu tutulan bir sigorta t??r?? de??ildir. Kasko yapt??r??p yapt??rmamak ara?? sahiplerinin tasarrufundad??r. Ancak trafikte kar????la????labilecek muhtemel riskler g??z ??n??ne al??nd??????nda kasko sigortas??, ara?? ve ara?? sahipleri i??in sundu??u teminatlar sayesinde b??y??k ??nem arz etmektedir. Bununla birlikte ek teminatlar sunulan ara?? sahiplerine kasko sigortas?? tercihinde esneklik sa??lanarak ??zel kasko planlar?? olu??turulabiliyor.",
        image: "Konut Sigortas??",
        link: "trafik-sigortasi",
      },
      {
        urun: "Filo Kasko Sigortas??",
        aciklama:
          "Filo Kasko, y??ksek say??da ara?? sahibi olanlar i??in yap??lan kasko poli??esi ??e??ididir. T??zel ki??ilerin ara??lar??n?? g??vence alt??na alabildikleri ve baz?? genel ve ??zel ??artlarda istenilen teminatlara g??re ??ekillendirebildikleri fiyat avantaj?? sunan poli??edir.",
        image: "???? Yeri Sigortas??",
        link: "trafik-sigortasi",
      },
    ],
    tag: ["Oto Sigortalar??"],
  },
  {
    image: yanginsigorta,
    name: "Yang??n Sigortalar??",
    link: "konut-sigortasi",
    id: 2,
    aciklama:
      "Hem kirac??lar??n hem de ev sahiplerinin yararlanabilece??i, en uygun fiyatl?? konut poli??esiyle bir??ok riske kar???? e??yalar??n??z?? teminat alt??na alan bir yang??n sigortas?? t??r??d??r.",
    urun: [
      {
        urun: "Konut Sigortas??",
        aciklama:
          "Hem kirac??lar??n hem de ev sahiplerinin yararlanabilece??i, en uygun fiyatl?? konut poli??esiyle bir??ok riske kar???? e??yalar??n??z?? teminat alt??na alan bir yang??n sigortas?? t??r??d??r.       ",
        image: "flipitemimage",
        link: "konut-sigortasi",
      },
      {
        urun: "???? Yeri Sigortas??",
        aciklama:
          "Poli??e teminatlar?? kapsam??nda kar????la??abilece??iniz hasar durumunda, i??inizin durmas?? sonucunda olu??acak maddi zararlar??n boyutlar??n??n artmas??na engel olarak, m????terilere ve ??al????anlara kar???? sorumluluklar??n??za tam g??vence sa??layan ve i??inizi koruyan bir yang??n sigortas??d??r. ",
        image: "Konut Sigortas??",
        link: "isyeri-sigortasi",
      },
    ],
    tag: ["Yang??n Sigortalar??"],
  },
  {
    image: nakliyatsigorta,
    name: "Nakliyat Sigortalar??",
    link: "nakliyat-sigortasi",
    id: 3,
    aciklama:
      "Nakliyat Sigortalar??; nakliye arac?? ile mallar??n ta????nmas?? s??ras??nda, s??z konusu mallar??n fiziki zarara u??ramas??na kar????l??k birtak??m teminatlar sunan sigortalard??r. Kamyon, tren, gemi, u??ak gibi ara??lar vas??tas??yla ta????nan mallar; ya??anan bir olumsuzlu??a ba??l?? olarak fiziken zarar g??rd?????? takdirde, sigorta poli??esinde yer alan teminatlar d??hilinde s??z konusu ma??duriyet giderilir. Nakliyat Sigortalar??n??n kapsam??nda yer alan alt ba??l??klarda g??r??lebilece??i ??zere; hem yurti??i hem de yurtd?????? ta????mac??l?????? i??in farkl?? sigorta t??rleri bulunmaktad??r. Do??a Sigorta b??nyesinde 5 t??r nakliyat sigortas?? hizmeti sunulmaktad??r.",
    urun: [
      {
        urun: "Deniz/Tekne/Yat Sigortas??",
        aciklama:
          "Tekne-Yat Sigortalar?? ??r??n??m??z, ??zel ama??l?? olarak kulland??????n??z yatlar??n??za, deniz tehlikeleri veya karada ba??lama yerlerin de , marina da  veya yatma-??ekek yerinde meydana gelebilecek kazalara kar???? g??vence sa??layan bir Sigortad??r.        ",
        image: "teknesigortasi",
        link: "deniztekneyat",
      },
      {
        urun: "Nakliyat Sigortas??",
        aciklama:
          "Ta????d??????n??z sorumluluklar sizi zor durumda b??rakmas??n. Wind Sigorta ile sorumluluklar??n??z teminat alt??ndad??r, Freight Forwarder olarak faaliyet g??steren ??irketlerin, uluslararas?? konvansiyonlar kapsam??ndaki y??k??ml??l??klerine kar????l??k teminat sa??lamaktad??r,",

        image: "Nakliyat-Sigortasi",
        link: "nakliyat-sigortasi",
      },
      {
        urun: "Emtia Sigortas??",
        aciklama:
          "Sahibi bulundu??unuz mallar??n, ??e??itli nakil vas??talar?? ile bir yerden di??er bir yere ta????nmas??, bu ta????nma s??ras??nda da olu??abilecek ??e??itli rizikolara kar???? g??vence alt??na al??nmas?? Emtia Nakliyat Sigortas?? ??r??n??m??z ile sa??lanmaktad??r. ",
        image: "emita-sigortasi",
        link: "emita-sigortasi",
      },
    ],

    tag: ["Nakliyat Sigortalar??"],
  },
  {
    image: kefaletsigorta,
    name: "Kefalet Sigortas??",
    link: "shop-product-details",
    id: 4,
    aciklama:
      "Kefalet	sigortas??nda	sigorta	??irketi,	bor??lunun	s??zle??meden	ve/veya	kanundan	do??an	y??k??ml??l??????n??	yerine	getirmemesi	riskine	kar????	alacakl??ya/i??verene	d??zenledi??i	kefalet	senedi	bedeline	kadar	kefil	olmaktad??r.	Bu	sigorta	t??r??	geleneksel	sigorta	uygulamalar??ndan	ziyade	bankac??l??k	??r??nlerine	alternatif	bir	finansal	enstr??man	niteli??indedir.",

    urun: [
      {
        urun: "Kefalet Sigortas??",
        aciklama:
          "Kefalet	sigortas??nda	sigorta	??irketi,	bor??lunun	s??zle??meden	ve/veya	kanundan	do??an	y??k??ml??l??????n??	yerine	getirmemesi	riskine	kar????	alacakl??ya/i??verene	d??zenledi??i	kefalet	senedi	bedeline	kadar	kefil	olmaktad??r.	Bu	sigorta	t??r??	geleneksel	sigorta	uygulamalar??ndan	ziyade	bankac??l??k	??r??nlerine	alternatif	bir	finansal	enstr??man	niteli??indedir.",
        image: "kefalet-sigortasi",
        link: "kefalet-sigortasi",
      },
    ],
    tag: ["Kefalet Sigortas??"],
  },
  {
    image: sagliksigorta,
    name: "Sa??l??k Sigortalar??",
    link: "ozel-saglik-sigortasi",
    id: 5,
    aciklama:
      "Beklenmedik bir kaza veya hastal??k sonucu olu??acak sa??l??k giderlerinizin yan?? s??ra sa??l??????n??z i??in ihtiya?? duyaca????n??z her t??rl?? tan?? ve tedavi i??lemlerini, en se??kin sa??l??k kurumlar??nda en modern y??ntemlerle ve mali kayg?? duymadan kar????lanmas?? i??in haz??rlanm???? sigortalard??r. Sa??l??k giderleriniz, genel ve ??zel ??artlar dahilinde ve poli??ede belirtilen limitler do??rultusunda kar????lan??r.",
    urun: [
      {
        urun: "??zel Sa??l??k sigortas??",
        aciklama:
          "Beklenmedik bir kaza veya hastal??k sonucu olu??acak sa??l??k giderlerinizin yan?? s??ra sa??l??????n??z i??in ihtiya?? duyaca????n??z her t??rl?? tan?? ve tedavi i??lemlerini, en se??kin sa??l??k kurumlar??nda en modern y??ntemlerle ve mali kayg?? duymadan kar????lanmas?? i??in haz??rlanm???? sigortalard??r. Sa??l??k giderleriniz, genel ve ??zel ??artlar dahilinde ve poli??ede belirtilen limitler do??rultusunda kar????lan??r.  ",
        image: "saglik-sigortasi",
        link: "ozel-saglik-sigortasi",
      },
      {
        urun: "Tamamlay??c?? Sa??l??k Sigortas??",
        aciklama:
          "Wind Sigorta'n??n sundu??u Tamamlay??c?? Sa??l??k Sigortas?? ile Wind Sigorta anla??mal?? ??zel sa??l??k kurumlar??nda, ??zel ??artlar kapsam??nda SGK taraf??ndan kar????lanan sa??l??k giderlerinizde olu??an fark ??cretlerini hi??bir ek ??deme yapmadan kar????layabilirsiniz( SGK zorunlu muayene kat??l??m pay?? hari??).   ",
        image: "saglik-sigortasi",
        link: "tamamlayici-saglik-sigortasi",
      },
      {
        urun: "Yabanc?? Sa??l??k Sigortas??",
        aciklama:
          "Kanun gere??ince T??rk vatanda???? olmayan ve ikamet izni almak i??in T??rkiye???ye gelen yabanc?? konuklar??n yapt??rmak durumunda oldu??u Yabanc??lara ??zel Sa??l??k Sigortas?? Wind Sigorta???da!        ",
        image: "saglik-sigortasi",
        link: "yabanci-saglik-sigortasi",
      },
    ],

    tag: ["Sa??l??k Sigortalar??"],
  },
  {
    image: muhendisliksigorta,
    name: "M??hendislik Sigortas??",
    link: "montaj-sigortasi",
    id: 6,
    aciklama:
      "Montaj faaliyetlerinin ba??lang??c??ndan bitimine kadar ge??en s??re i??inde, ani ve beklenmedik sebeplerle ortaya ????kabilecek risklere kar???? g??vence sunan bir m??hendislik sigortas??d??r.",
    urun: [
      {
        urun: "Montaj Sigortas??",
        aciklama:
          "Montaj faaliyetlerinin ba??lang??c??ndan bitimine kadar ge??en s??re i??inde, ani ve beklenmedik sebeplerle ortaya ????kabilecek risklere kar???? g??vence sunan bir m??hendislik sigortas??d??r.",
        image: "montaj-sigortasi",
        link: "montaj-sigortasi",
      },
      {
        urun: "Makine K??r??lmas?? Sigortas??",
        aciklama:
          "????letmenizde kullan??lan makinelerin ??al??????rken aniden duraklamas?? veya beklenmedik bir sebepten ??t??r?? ??retiminizin aksamas??na sebep olarak ??nemli maliyetlerin kayb??na neden olmamas?? i??in makineleri teminat alt??na al??r.",
        image: "makine-sigortasi",
        link: "makine-sigortasi",
      },
    ],
    tag: ["M??hendislik Sigortas??"],
  },
  {
    image: ferdikaza,
    name: "Ferdi Kaza Sigortas??",
    link: "ferdi-kaza-sigortasi",
    id: 7,
    aciklama:
      "Ferdi kaza sigortas??, beklenmedik kaza riski nedeniyle kendinizi teminat alt??na alabilece??iniz bir sigortad??r. Ferdi kaza sigortas?? neleri kapsar sorusunun cevab?? olarak ise beklenmedik kazalara ilaveten deprem, sel, yer kaymas?? ve ter??r olaylar??na kar???? sigorta poli??enizin sizi teminat alt??na almas?? verilebilir. Ferdi kaza sigortas?? genel ??artlar?? kapsam??nda sigorta hizmetine ba??vurabilmek i??in 18- 60 ya??lar?? aras??nda olman??z yeterlidir.",

    urun: [
      {
        urun: "Ferdi Kaza Sigortas??",
        aciklama:
          "Ferdi kaza sigortas??, beklenmedik kaza riski nedeniyle kendinizi teminat alt??na alabilece??iniz bir sigortad??r. Ferdi kaza sigortas?? neleri kapsar sorusunun cevab?? olarak ise beklenmedik kazalara ilaveten deprem, sel, yer kaymas?? ve ter??r olaylar??na kar???? sigorta poli??enizin sizi teminat alt??na almas?? verilebilir. Ferdi kaza sigortas?? genel ??artlar?? kapsam??nda sigorta hizmetine ba??vurabilmek i??in 18- 60 ya??lar?? aras??nda olman??z yeterlidir.        ",
        image: "ferdi-kaza",
        link: "ferdi-kaza-sigortasi",
      },
    ],
    tag: ["Ferdi Kaza Sigortas??"],
  },
  {
    image: allrisk,
    name: "All Risk ??n??aat Sigortalar??",
    link: "allrisk-sigortasi",
    id: 8,
    aciklama:
      "??n??aat All Risks Sigortas??, m??teahhit kurulu??lar i??in ciddi bir g??vence sunmaktad??r. ??n??aat All Risks Sigortas??, yap?? malzemelerinin in??aat alan??na indirilmesinden, tesisin kullan??lmaya ba??lamas??na kadar ge??en s??re i??inde, do??a, teknik ve insan fakt??rlerinin neden olabilece??i ??ok geni?? bir risk yelpazesini g??vence alt??na almaktad??r. ??n??aat faaliyetlerinize (??antiyelerinize) yapt??raca????n??z ??n??aat All Risks Sigortas?? talepleriniz i??in, Wind Sigorta uzmanlar??na dan????abilirsiniz.        ",

    urun: [
      {
        urun: "All Risk ??n??aat Sigortalar??",
        aciklama:
          "??n??aat All Risks Sigortas??, m??teahhit kurulu??lar i??in ciddi bir g??vence sunmaktad??r. ??n??aat All Risks Sigortas??, yap?? malzemelerinin in??aat alan??na indirilmesinden, tesisin kullan??lmaya ba??lamas??na kadar ge??en s??re i??inde, do??a, teknik ve insan fakt??rlerinin neden olabilece??i ??ok geni?? bir risk yelpazesini g??vence alt??na almaktad??r. ??n??aat faaliyetlerinize (??antiyelerinize) yapt??raca????n??z ??n??aat All Risks Sigortas?? talepleriniz i??in, Wind Sigorta uzmanlar??na dan????abilirsiniz.        ",
        image: "allrisk-sigortasi",
        link: "allrisk-sigortasi",
      },
    ],
    tag: ["All Risk ??n??aat Sigortalar??"],
  },
  {
    image: depremsigorta,
    name: "Deprem Sigortas??",
    link: "deprem-sigortasi",
    id: 9,
    aciklama:
      "Zorunlu Deprem Sigortas??, evinizi depremin neden olabilece??i maddi hasarlara kar???? g??vence alt??na alan ve teminat?? Do??al Afet Sigortalar?? Kurumu (DASK) taraf??ndan verilen yapt??r??lmas?? zorunlu bir sigortad??r.  ",

    urun: [
      {
        urun: "Deprem Sigortas??",
        aciklama:
          "Zorunlu Deprem Sigortas??, evinizi depremin neden olabilece??i maddi hasarlara kar???? g??vence alt??na alan ve teminat?? Do??al Afet Sigortalar?? Kurumu (DASK) taraf??ndan verilen yapt??r??lmas?? zorunlu bir sigortad??r.  ",
        image: "deprem-sigortasi",
        link: "deprem-sigortasi",
      },
    ],
    tag: ["Deprem Sigortas??"],
  },
  {
    image: sorumluluksigorta,
    name: "Sorumluluk Sigortalar??",
    link: "sorumluluk-sigortasi",
    id: 10,
    aciklama:
      "Sorumluluk sigortas??; sigortal??y??, sigortal??n??n aile bireylerini ya da ??al????anlar??n?? ??e??itli ihmal durumlar??nda do??abilecek maddi ve bedensel zararlara kar???? g??vence alt??na alan bir sigorta t??r??d??r. Farkl?? ??e??itleri bulunan sorumluluk sigortalar??n??n kapsamlar?? imzalanan poli??elerde belirlenir ve sigortal?? ki??inin sorumlu oldu??u olumsuz durumlar sonucunda tazminat hakk?? do??an ki??ilerin kar????la??t??klar?? zarar, poli??e s??n??rlar?? dahilinde ??denir.",
    urun: [
      {
        urun: "Sorumluluk Sigortalar??",
        aciklama:
          "Sorumluluk sigortas??; sigortal??y??, sigortal??n??n aile bireylerini ya da ??al????anlar??n?? ??e??itli ihmal durumlar??nda do??abilecek maddi ve bedensel zararlara kar???? g??vence alt??na alan bir sigorta t??r??d??r. Farkl?? ??e??itleri bulunan sorumluluk sigortalar??n??n kapsamlar?? imzalanan poli??elerde belirlenir ve sigortal?? ki??inin sorumlu oldu??u olumsuz durumlar sonucunda tazminat hakk?? do??an ki??ilerin kar????la??t??klar?? zarar, poli??e s??n??rlar?? dahilinde ??denir.",
        image: "sorumluluk-sigortasi",
        link: "sorumluluk-sigortasi",
      },
    ],
    tag: ["Sorumluluk Sigortalar??"],
  },
  {
    image: hayvanhayat,
    name: "Hayvan Hayat Sigortas??",
    link: "hayvan-hayat-sigortasi",
    id: 11,
    aciklama:
      "Hayvan hayat sigortas??, Hayvan Hayat Sigortas?? Genel ??artlar??ndaki hayvanlar?? her t??rl?? adi ve bula????c?? hastal??klardan, kazalardan, do??al afetler sebebiyle meydana gelen zorunlu ??ld??rmeler veya ??l??mlerinden sigortal??n??n do??rudan do??ruya u??rad?????? maddi zarar?? temin eder.",

    urun: [
      {
        urun: "Hayvan Hayat Sigortas??",
        aciklama:
          "Hayvan hayat sigortas??, Hayvan Hayat Sigortas?? Genel ??artlar??ndaki hayvanlar?? her t??rl?? adi ve bula????c?? hastal??klardan, kazalardan, do??al afetler sebebiyle meydana gelen zorunlu ??ld??rmeler veya ??l??mlerinden sigortal??n??n do??rudan do??ruya u??rad?????? maddi zarar?? temin eder.",
        image: "hayvan-hayat-sigortasi",
        link: "hayvan-hayat-sigortasi",
      },
      {
        urun: "K??mes Hayvanlar?? Sigortas??",
        aciklama:
          "K??mes Hayvanlar?? Hayat Sigortas??nda, poli??ede yaz??l?? primin %50'si Devlet taraf??ndan kar????lan??r. Sigortal?? taraf??ndan ??denecek olan primin %25'i pe??in al??n??r, kalan prim tutar?? da en fazla 5 taksitle tahsil edilir. Sadece Geni?? Kapsaml?? 45 g??nl??k Broiler sigortalar??nda primin tamam?? pe??in tahsil edilir.",
        image: "kumes-hayvanlari-sigortasi",
        link: "kumes-hayvanalri-sigortasi",
      },
      {
        urun: "Dolu Sigortas??",
        aciklama:
          "Dolu Sigortalar?????nda Geleneksel sistemden poli??e tanzim edilebilmesi i??in, s??z konusu arazinin ??KS (??ift??i Kay??t Sistemi) kayd??n??n bulunmamas?? gerekmektedir.Sigorta kapsam??na bitkisel ??r??nler girmektedir.        ",
        image: "dolu-sigortasi",
        link: "dolu-sigortasi",
      },
      {
        urun: "Sera Sigortas??",
        aciklama:
          "Sera yap?? malzemeleri, i??indeki teknik ekipman ve serada yeti??tirilen bitkisel ??r??nler i??in Dolu, F??rt??na, Hortum, Yang??n, Deprem, Ta????t ??arpmas?? Heyelan, Kar ve dolu A????rl??????, Sel ve Su Bask??n?? risklerinin neden oldu??u miktar kayb?? sigorta kapsam??ndad??r.",
        image: "sera-sigortasi",
        link: "sera-sigortasi",
      },
    ],
    tag: ["Hayvan Hayat Sigortas??"],
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
