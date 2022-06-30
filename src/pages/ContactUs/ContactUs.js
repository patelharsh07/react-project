import React from "react";
import OurSupporters from "../../Common/OurSupporters";

const ContactUs = () => {
  return (
    <>
      <section className="contact-page">
        <div className="contact-main" id="contactPageMain">
          <div className="img-section">
            <div className="image-part">
              <p className="hello-text">
                Say
                <br />
                <span className="ml-4">Hello</span>
              </p>
            </div>
          </div>
          <div className="form-section">
            <p className="sm-txt text-center text-white">
              I'd love to chat with you! So I make sure your email goes to the
              right place, please use this form below. If you prefer, email us
              Directly at :<br />
              <span style={{ fontSize: "20px", fontFamily: "oswald" }}>
                Info@exhale.com
              </span>
            </p>

            <div className="row form-main">
              <div className="form-field ">
                <div className="input-box">
                  <input
                    id="name"
                    className="input-text"
                    placeholder="FULL NAME"
                    type="text"
                    name=""
                  />
                </div>
              </div>

              <div className="email-website">
                <div className="form-field ">
                  <div className="email-box">
                    <input
                      id="name"
                      className="input-text"
                      placeholder="EMAIL"
                      type="email"
                      name=""
                    />
                  </div>
                </div>
                <div className="form-field ">
                  <div className="website-box">
                    <input
                      id="name"
                      className="input-text"
                      placeholder="MOBILE"
                      type="number"
                      name=""
                    />
                  </div>
                </div>
              </div>

              {/* <!-- <div className="form-field ">
                    <div className="input-box">
                        <input id="name" className="input-text" placeholder="SUBJECT OF INQUIRY" type="text" name="">
                    </div>
                </div> --> */}

              {/* <!-- <div className="form-field ">
                    <div className="input-box">
                        <input id="name" className="input-text" placeholder="HOW DID YOU HERE ABOUT EXHALE" type="text"
                            name="">
                    </div>
                </div> --> */}

              <div className="form-field ">
                <div className="input-box message-box">
                  <textarea
                    id="name"
                    className="input-text"
                    placeholder="WRITE MESSAGE"
                    type="text"
                    name=""
                  ></textarea>
                </div>
              </div>
              <div className="form-field d-flex justify-content-end ">
                <button className="about-btn">
                  CLICK HERE TO SEND
                  <i className="fa fa-caret-right" aria-hidden="true"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <OurSupporters />
      <div style={{ marginBottom: "3rem" }}></div>
    </>
  );
};

export default ContactUs;
