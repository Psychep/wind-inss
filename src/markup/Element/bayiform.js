import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_8kjnr3o",
        "template_q16r2im",
        form.current,
        "user_ijt9nhCteZejMvvrDlvuZ"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("ok");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <div className="container">
        <div className="">
          <div className="">
            <form
              ref={form}
              onSubmit={sendEmail}
              className="inquiry-form  dzForm"
            >
              <div className="dzFormMsg"></div>
              <h3 className="box-title m-t0 m-b10">
                Teklif Formunu doldurun <span className="bg-primary"></span>
              </h3>
              <p>İhtiyaçlarınıza yönelik en uygun teklifi sizlere sunalım</p>
              <div className="row">
                <div className="col-lg-6">
                  <div className="form-group">
                    <div className="input-group">
                      <span className="input-group-addon">
                        <i className="ti-user text-primary"></i>
                      </span>
                      <input
                        type="text"
                        name="message"
                        required
                        className="form-control"
                        placeholder="Ad-Soyad"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <div className="input-group">
                      <span className="input-group-addon">
                        <i className="ti-mobile text-primary"></i>
                      </span>
                      <input
                        name="message"
                        type="text"
                        required
                        className="form-control"
                        placeholder="Telefon"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-group">
                    <div className="input-group">
                      <span className="input-group-addon">
                        <i className="ti-email text-primary"></i>
                      </span>
                      <input
                        type="email"
                        name="message"
                        className="form-control"
                        required
                        placeholder="E-mail"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <div className="input-group">
                      <span className="input-group-addon">
                        <i className="ti-check-box text-primary"></i>
                      </span>
                      <input
                        name="message"
                        type="text"
                        required
                        className="form-control"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <div className="input-group">
                      <span className="input-group-addon">
                        <i className="ti-file text-primary"></i>
                      </span>
                      <input
                        name="message"
                        type="text"
                        required
                        className="form-control"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-group">
                    <div className="input-group">
                      <span className="input-group-addon">
                        <i className="ti-agenda text-primary"></i>
                      </span>
                      <textarea
                        name="message"
                        rows="4"
                        className="form-control"
                        required
                        placeholder="Mesajınnız"
                      ></textarea>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12"></div>
                <div className="col-lg-12">
                  <button
                    type="submit"
                    value="Send"
                    className="site-button button-lg"
                  >
                    {" "}
                    <span>Teklif alın!</span>{" "}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default ContactUs;
