import React from "react";

const MedicalProfessionals = () => {
  return (
    <>
      <section
        id="MedicalProfessionals"
        style={{ paddingBottom: "10%", marginTop: "100px" }}
      >
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 indiImageMain">
              <div className="indi-img-box">
                <div className="indi-img-main"></div>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-8 col-xl-8">
              <div className="indi-content">
                <p className="hello-text" style={{ color: "#D87429" }}>
                  Mindfulness coaching
                </p>
                <h2 style={{ color: "rgba(96, 96, 96, 1)", fontSize: "40px" }}>
                  Why Mindfulness?
                </h2>
                <p className="sm-txt text-justify">
                  Mindfulness can increase your attentional bandwidth and boost
                  your muscles of resilience. With greater attention, you will
                  make better decisions, relate to new kinds of people and act
                  with agility. With greater resilience, you will be more
                  focused under pressure and able to handle difficult emotions.
                  More than simple stress relief, mindfulness trains you to
                  become deeply aware of all of your life, cultivating a
                  dynamic, awake resilience to what life throws at you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

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
                  src={require("../../assets/images/Medical-01.jpg")}
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
                  src={require("../../assets/images/hanging-roape.svg")}
                  alt="img"
                />
                <p className="img-no">02</p>
                <p className="img-name">My fave Instagram apps</p>
                <img
                  className="swing-img img-fluid"
                  src={require("../../assets/images/Medical-02.jpg")}
                  alt="img"
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
                  src={require("../../assets/images/hanging-roape.svg")}
                  alt="img"
                />
                <p className="img-no">03</p>
                <p className="img-name">Collaborative Inspirations</p>
                <img
                  className="swing-img img-fluid"
                  src={require("../../assets/images/Medical-03.jpg")}
                  alt="img"
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
                  src={require("../../assets/images/hanging-roape.svg")}
                  alt="img"
                />
                <p className="img-no">02</p>
                <p className="img-name">My fave Instagram apps</p>
                <img
                  className="swing-img img-fluid"
                  src={require("../../assets/images/Medicl-04.jpg")}
                  alt="img"
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

      <section className="seventh-section" style={{ margin: "6% 0 6% 0" }}>
        <div className="text-center">
          <h5 className="mb-4">Assistant principal, Lake County middle school</h5>
          <p>
            Dr. Mandel provided our teachers with strategies, techniques, and an
            abundance of knowledge to help them better understand the effects of
            stress on their lives and the lives of their students. She has
            provided our staff with the tools they need to build healthier lives
            and reduce stress. We are incredibly grateful for the work she has
            already done in our district and we hope to expand her expertise to
            our students in the near future.
          </p>
          <h3>-David L</h3>
        </div>
      </section>
    </>
  );
};

export default MedicalProfessionals;
