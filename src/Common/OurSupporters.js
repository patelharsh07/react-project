import React from "react";
import { useLocation } from "react-router-dom";

const OurSupporters = () => {
  const location = useLocation();
  return (
    <>
      <section className="third-section">
        {location.pathname !== "/contactus" && (
          <div className="bg-img-dog"></div>
        )}
        <div className="mission-part our-supporters-main text-center">
          <div className="container support-data">
            <p className="our-mission-text">Our Supporters</p>
            <div className="row our-supprters-logos-list mt-3 no-gutters">
              <div className="col-lg-4 col-xl-4 col-6 col-md-6 col-sm-6 col-6">
                <div className="supporter-img-box">
                  <img
                    className="img-fluid"
                    alt="img"
                    src={require("../assets/images/011.png")}
                  />
                </div>
              </div>
              <div className="col-lg-4 col-xl-4 col-6 col-md-6 col-sm-6 col-6">
                <div className="supporter-img-box">
                  <img
                    className="img-fluid"
                    alt="img"
                    src={require("../assets/images/012.png")}
                  />
                </div>
              </div>
              <div className="col-lg-4 col-xl-4 col-6 col-md-6 col-sm-6 col-6">
                <div className="supporter-img-box">
                  <img
                    className="img-fluid"
                    alt="img"
                    src={require("../assets/images/013.png")}
                  />
                </div>
              </div>
              <div className="col-lg-4 col-xl-4 col-6 col-md-6 col-sm-6 col-6">
                <div className="supporter-img-box">
                  <img
                    className="img-fluid"
                    alt="img"
                    src={require("../assets/images/014.png")}
                  />
                </div>
              </div>
              <div className="col-lg-4 col-xl-4 col-6 col-md-6 col-sm-6 col-6">
                <div className="supporter-img-box">
                  <img
                    className="img-fluid"
                    alt="img"
                    src={require("../assets/images/15.png")}
                  />
                </div>
              </div>
              <div className="col-lg-4 col-xl-4 col-6 col-md-6 col-sm-6 col-6">
                <div className="supporter-img-box">
                  <img
                    className="img-fluid"
                    alt="img"
                    src={require("../assets/images/16.png")}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurSupporters;
