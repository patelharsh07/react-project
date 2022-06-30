import React from "react";

const School = () => {
  return (
    <>
      <section id="schoolMain">
        <div className="container">
          <div className="row no-gutters no-reverse">
            <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">
              <div className="school-img-box">
                <img
                  className="img-fluid"
                  src={require("../../assets/images/school-side-1.jpg")}
                  alt="img"
                />
              </div>
            </div>
            <div
              className="col-12 col-sm-12 col-md-12 col-lg-8 col-xl-8"
              style={{zIndex: "-1"}}
            >
              <div className="school-content">
                <h2 className="sm-h">Parent Workshop Series</h2>
                <p className="sm-txt text-justify">
                  This is the newest option of workshops that is perfect for
                  schools who feel they can help improve parental education and
                  involvement Workshops can be purchased individually or as a
                  bundle for a discounted rate (4 is the most popular package)
                  These are done in the evenings and on zoom
                </p>
                <button className="read-more mt-4">
                  GET IN TOUCH
                  <i className="fa fa-caret-right" aria-hidden="true"></i>
                </button>
              </div>
            </div>
          </div>

          {/* <!-- reverse --> */}

          <div className="row no-gutters reverse">
            <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">
              <div className="school-img-box">
                <img
                  className="img-fluid"
                  src={require("../../assets/images/school-side-2.jpg")}
                  alt="img"
                />
              </div>
            </div>
            <div
              className="col-12 col-sm-12 col-md-12 col-lg-8 col-xl-8"
              style={{zIndex: "-1"}}
            >
              <div className="school-content">
                <h2 className="sm-h">Professional Development for teachers K-12</h2>
                <p className="sm-txt text-justify">
                  Demystify mediation and reveal its’ simplicity as a tool for
                  self-care Utilize stress reduction techniques for in and out
                  of the classroom Understand our bodies primitive stress
                  response and keep it in check Neuroplasticity and how it
                  affects different age groups Build community with a common
                  goal Learning about the voice in our head and why we shouldn’t
                  believe it
                </p>
                <button className="read-more mt-4">
                  GET IN TOUCH
                  <i className="fa fa-caret-right" aria-hidden="true"></i>
                </button>
              </div>
            </div>
          </div>

          <div className="row no-gutters no-reverse">
            <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">
              <div className="school-img-box">
                <img
                  className="img-fluid"
                  src={require("../../assets/images/school-side-3.jpg")}
                  alt="img"
                />
              </div>
            </div>
            <div
              className="col-12 col-sm-12 col-md-12 col-lg-8 col-xl-8"
              style={{zIndex: "-1"}}
            >
              <div className="school-content">
                <h2 className="sm-h">Weekly Meditations K-12 Teachers</h2>
                <p className="sm-txt text-justify">
                  This is the newest option of workshops that is perfect for
                  schools who feel they can help improve parental education and
                  involvement Workshops can be purchased individually or as a
                  bundle for a discounted rate (4 is the most popular package)
                  These are done in the evenings and on zoom
                </p>
                <button className="read-more mt-4">
                  GET IN TOUCH
                  <i className="fa fa-caret-right" aria-hidden="true"></i>
                </button>
              </div>
            </div>
          </div>

          {/* <!-- reverse --> */}

          <div className="row no-gutters reverse">
            <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">
              <div className="school-img-box">
                <img
                  className="img-fluid"
                  src={require("../../assets/images/school-side-4.jpg")}
                  alt="img"
                />
              </div>
            </div>
            <div
              className="col-12 col-sm-12 col-md-12 col-lg-8 col-xl-8"
              style={{zIndex: "-1"}}
            >
              <div className="school-content">
                <h2 className="sm-h">Professional Development for teachers K-12</h2>
                <p className="sm-txt text-justify">
                  Demystify mediation and reveal its’ simplicity as a tool for
                  self-care Utilize stress reduction techniques for in and out
                  of the classroom Understand our bodies primitive stress
                  response and keep it in check Neuroplasticity and how it
                  affects different age groups Build community with a common
                  goal Learning about the voice in our head and why we shouldn’t
                  believe it
                </p>
                <button className="read-more mt-4">
                  GET IN TOUCH
                  <i className="fa fa-caret-right" aria-hidden="true"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default School;
