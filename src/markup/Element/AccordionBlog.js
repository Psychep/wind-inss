import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Accordion } from "react-bootstrap";

const defaultAccordion = [
  {
    title: "1. Sigorta Acenteleri?",
    text: "Sigorta acenteleri, belli bir bölge içinde, sigorta şirketlerinin nam ve hesabına sigorta sözleşmelerine aracılık eden veya bunları sigorta şirketleri adına yapmayı meslek edinen gerçek veya tüzel kişilerdir.		",
  },
  {
    title: "2. Sigorta Brokerları?",
    text: "Poliçe sahibi için çalışan, sigortacılarla ilişkilerinde tamamen bağımsız, sigortacı ve sigorta ürünleri konusunda müşterilerine çeşitli teklifler sunarak, müşterilerinin doğru şirketten, doğru ürünü seçmelerine yardımcı olan kişilerdir. Sigortam.net anlaşmalı sigorta şirketlerinin tekliflerini online karşılaştırmalı olarak sunan bir sigorta brokerıdır.	.",
  },
  {
    title: "3. Sigorta Kampanyaları ?",
    text: "Wind Sigorta sizler için uygun fiyat politikaları izler, ve bütçenize uygun kampanyalar düzenlemek için anlaşmalar imzalar.",
  },
];
const AccordionBlog = () => {
  const [activeDefault, setActiveDefault] = useState(0);
  return (
    <Accordion
      className="accordion dlab-accordion faq-1 box-sort-in m-b30"
      defaultActiveKey="-1"
    >
      {defaultAccordion.map((d, i) => (
        <div className="panel">
          <div className="acod-head">
            <h6 className="acod-title">
              <Accordion.Toggle
                as={Link}
                variant="link"
                className={` ${activeDefault === i ? "" : "collapsed"}`}
                onClick={() => setActiveDefault(activeDefault === i ? -1 : i)}
                eventKey={`${i}`}
              >
                {d.title}
              </Accordion.Toggle>
            </h6>
          </div>

          <Accordion.Collapse eventKey={`${i}`} className="acod-body">
            <div className="acod-content">{d.text}</div>
          </Accordion.Collapse>
        </div>
      ))}
    </Accordion>
  );
};
export { defaultAccordion };
export default AccordionBlog;
