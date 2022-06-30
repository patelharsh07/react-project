import React from "react";

const OurWorkshop = () => {
  return (
    <>
      <section>
        <div className="mission-part text-center">
          <div className="container">
            <p className="our-mission-text mb-5">Our Workshop</p>
            <div className="row">
              <div className="col-xl-4 col-lg-4 col-md-6 col-6 col-sm-6 ws-thumbneil">
                <img
                  alt="img"
                  src={require("../assets/images/w 01.png")}
                  className="img-fluid"
                />
                <button className="time-btn">90 mis</button>
                <h5>Introduction to HeartMath</h5>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 col-6 col-sm-6 mt-lg-0 mt-md-0 ws-thumbneil">
                <img
                  alt="img"
                  src={require("../assets/images/w 03.png")}
                  className="img-fluid"
                />
                <button className="time-btn">4 hours</button>
                <h5>New Skills for New Times</h5>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 col-6 col-sm-6 mt-lg-0 mt-3 ws-thumbneil ">
                <img
                  alt="img"
                  src={require("../assets/images/Workshop-04 1.png")}
                  className="img-fluid"
                />
                <button className="time-btn">4 hours</button>
                <h5>Finding Mindfulness</h5>
              </div>

              <div className="col-xl-4 col-lg-4 col-md-6 col-6 col-sm-6 mt-lg-4 mt-3 ws-thumbneil">
                <img
                  alt="img"
                  src={require("../assets/images/Workshop-04 1.png")}
                  className="img-fluid"
                />
                <button className="time-btn">4 hours</button>
                <h5>Finding Mindfulness</h5>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 col-6 col-sm-6 mt-lg-4 mt-md-0 mt-3 ws-thumbneil">
                <img
                  alt="img"
                  src={require("../assets/images/w 03.png")}
                  className="img-fluid"
                />
                <button className="time-btn">4 hours</button>
                <h5>New Skills for New Times</h5>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 col-6 col-sm-6 mt-lg-4 mt-md-0 mt-3 ws-thumbneil">
                <img
                  alt="img"
                  src={require("../assets/images/w 01.png")}
                  className="img-fluid"
                />
                <button className="time-btn">90 mis</button>
                <h5>Introduction to HeartMath</h5>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurWorkshop;
