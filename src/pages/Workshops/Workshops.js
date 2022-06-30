import React from "react";
import OurWorkshop from "../../Common/OurWorkshop";

const Workshops = () => {
  return (
    <>
      <section id="WorkshopFirstSec">
        <div className="containe-fluid p-lg-5 mr-0 mr-lg-3">
          <div className="row no-gutters align-items-center justify-content-center">
            <div className="col-12 col-sm-12 col-lg-4 col-xl-4 workshopMainImgSec">
              <div className="workshop-main-img">
                <img
                  className="img-fluid"
                  src={require("../../assets/images/Workshop-02.jpg")}
                  alt="img"
                />
              </div>
            </div>
            <div className="col-12 col-sm-12 col-lg-8 col-xl-8">
              <div className="workshop-main-txt">
                <p className="hello-text hey-there">Latest Post</p>
                <h2 style={{ fontSize: "40px", color: "rgba(96, 96, 96, 1)" }}>
                  Introduction to HeartMath
                </h2>
                <p className="sm-txt">
                  In fact, just a few years ago you could have found me wearing
                  red and khaki, exhausted in my stuffy windowless office. I
                  thought I had landed my dream job, but that dream turned into
                  a ladder-climbing nightmare...
                </p>

                <p>12 Day | 5 Classes | Intermediate</p>
                <p style={{ color: "rgba(178, 105, 51, 1)" }}>1:15 hr/day</p>
                <button className="read-more mt-4">
                  join now{" "}
                  <i className="fa fa-caret-right" aria-hidden="true"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <OurWorkshop />
    </>
  );
};

export default Workshops;
