import React from "react";

const AboutInfo = () => {
  return (
    <>
      <section id="secondSection" className="second-container">
        <div className="main d-flex">
          <div className="owner-img">
            <img
              src={require("../../assets/images/owner-img-2.jpg")}
              alt="img"
            />
          </div>
          <div className="about-owner">
            <p className="hello-text text-capitalize">about !</p>
            <div className="other-content">
              <h2>Miriam Mandel</h2>
              <p>
                Dr. Mandel is a board-certified pediatrician graduating from
                Ross University Medical School in 2000. She did her internship
                at St Vincent’s Sisters of Charity Hospital in New York and
                completed her residency at Carolinas’ Medical Center in
                Charlotte, NC.{" "}
              </p>
              <p
                style={{
                  fontFamily: "Raleway",
                  fontWeight: "lighter",
                  fontStyle: "normal",
                }}
              >
                Dr. Mandel is a board-certified pediatrician graduating from
                Ross University Medical School in 2000.
              </p>
              <p
                style={{
                  fontFamily: "Raleway",
                  fontWeight: "lighter",
                  fontStyle: "normal",
                }}
              >
                Additionally, she has performed education sessions for educators
                PK-12, doctors, nurses and nurse practitioners as well as
                university and graduate students. Individual and family coaching
                is also available.{" "}
              </p>
              <button className="about-btn">
                CONTINUE READING{" "}
                <i className="fa fa-caret-right" aria-hidden="true"></i>
              </button>
            </div>
          </div>
        </div>
        <div className="mission-part text-center">
          <div className="container">
            <p className="our-mission-text">Our Mission</p>
            <p className="mt-4">
              “The Mission Of Exhale is to provide individuals the knowledge for
              understanding the
              <br />
              physiology of their bodies, the strength of their minds and power
              of their hearts”
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutInfo;
