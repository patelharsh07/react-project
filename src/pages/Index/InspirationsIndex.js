import React from "react";
import InspirationSeven from "../../Common/InspirationSeven";

const InspirationsIndex = () => {
  return (
    <>
      <section className="fourth-section">
        <div className="container">
          <div className="row hanging-section-main">
            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 top-div">
              <div className="haging-point"></div>
              <div className="swing">
                <img
                  className="hanging-rope"
                  src={require("../../assets/images/hanging-roape.svg")}
                  alt="img"
                />
                <p className="img-no">01</p>
                <p className="img-name">Collaborative Inspirations</p>
                <img
                  className="swing-img img-fluid"
                  src={require("../../assets/images/s 01.png")}
                  alt="img"
                />
                <p className="arrow-img">
                  <i className="fas fa-arrow-down"></i>
                </p>
                <p className="small-text">Continue reading</p>
                <p className="main-text">inspirations</p>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 bottom-div">
              <div className="haging-point"></div>
              <div className="swing">
                <img
                  className="hanging-rope"
                  alt="img"
                  src={require("../../assets/images/hanging-roape.svg")}
                />
                <p className="img-no">02</p>
                <p className="img-name">My fave Instagram apps</p>
                <img
                  alt="img"
                  className="swing-img img-fluid"
                  src={require("../../assets/images/s 03.png")}
                />
                <p className="arrow-img">
                  <i className="fas fa-arrow-down"></i>
                </p>
                <p className="small-text">service 02</p>
                <p className="main-text">School & Gifted ed.</p>
              </div>
            </div>

            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 top-div">
              <div className="haging-point"></div>
              <div className="swing">
                <img
                  className="hanging-rope"
                  alt="img"
                  src={require("../../assets/images/hanging-roape.svg")}
                />
                <p className="img-no">03</p>
                <p className="img-name">Collaborative Inspirations</p>
                <img
                  className="swing-img img-fluid"
                  alt="img"
                  src={require("../../assets/images/jeshoots.png")}
                />
                <p className="arrow-img">
                  <i className="fas fa-arrow-down"></i>
                </p>
                <p className="small-text">Continue reading</p>
                <p className="main-text">medical professionals</p>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 bottom-div">
              <div className="haging-point"></div>
              <div className="swing">
                <img
                  className="hanging-rope"
                  alt="img"
                  src={require("../../assets/images/hanging-roape.svg")}
                />
                <p className="img-no">02</p>
                <p className="img-name">My fave Instagram apps</p>
                <img
                  className="swing-img img-fluid"
                  alt="img"
                  src={require("../../assets/images/Coaching.png")}
                />
                <p className="arrow-img">
                  <i className="fas fa-arrow-down"></i>
                </p>
                <p className="small-text">service 02</p>
                <p className="main-text">School & Gifted ed.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <InspirationSeven />
    </>
  );
};

export default InspirationsIndex;
