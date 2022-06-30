import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-12 col-lg-8 col-xl-8">
              <div className="d-flex about-footer-inner">
                <div className="footer-owner-img">
                  <img
                    className="img-fluid"
                    alt="img"
                    src={require("../assets/images/miriam-4.jpg")}
                  />
                </div>
                <div className="pl-4 footer-text">
                  <h5 className="insp-text">Follow Us</h5>
                  <h3>Exhalewithme</h3>
                  <p className="footer-right-txt">
                    These are collaborative inspirations that will sometimes be
                    chosen by me and can also be selected by you.
                  </p>
                  <div className="social-media d-flex mt-2">
                    <p>
                      <i className="fab fa-linkedin-in"></i>&nbsp;&nbsp;&nbsp;
                      <span>Linked In</span>
                    </p>
                    <p className="ml-3">
                      <i className="fab fa-youtube"></i>&nbsp;&nbsp;&nbsp;
                      <span>Youtube</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">
              <div className="get-around-main ">
                <div className="get-around">
                  <a href="#mainSec">
                    <div className="back-to-top">
                      <div className="back-to-top-arrow">
                        <i className="fa fa-arrow-up" aria-hidden="true"></i>
                      </div>
                      <p className="line-content footer">BACK TO TOP</p>
                    </div>
                  </a>
                  <h3 className="uline">Get Around</h3>
                  <div className="QuickLinks">
                    <a href="about.html">About</a>
                    <br />
                    <a href="individualCoaching.html">Individual Coaching </a>
                    <br />
                    <a href="school.html">Schools</a>
                    <br />
                    <a href="Medical-Professionals.html">
                      Medical Professionals
                    </a>
                    <br />
                    <a href="workshop.html">Workshops</a>
                    <br />
                    <a href="inspiration-main.html">Inspirations</a>
                    <br />
                    <a href="contact.html">Contact Us</a>
                    <br />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
              <div className="footer-singe-line">
                <p className="sm-txt">Copyright @ 2022 All rights reserved.</p>
                <p className="sm-txt">
                  Designed & Developed By{" "}
                  <a className="footer-link" href="https://helicoreinfo.com/">
                    Helicore Info pvt. Ltd.
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- <div className="d-flex social-media-and-thumbnail">
            <div className="follow-us-footer">
                <h5 className="insp-text">Follow Us</h5>
                <h3>Instagram is
                    kind of my thing.</h3>
                <div className="social-media mt-5">
                    <p><i className="fab fa-instagram"></i>&nbsp;&nbsp;&nbsp;instagram</p>
                </div>
            </div>
            <div className="followus-footer-img-div">
                <img src="./assets/images/Workshop-04 1.png" className="img-fluid" />
            </div>
            <div className="followus-footer-img-div">
                <img src="./assets/images/s 01 1.png" className="img-fluid" />
            </div>
            <div className="followus-footer-img-div">
                <img src="./assets/images/Home-08 1.png" className="img-fluid" />
            </div>
        </div> --> */}
      </footer>
    </>
  );
};

export default Footer;
