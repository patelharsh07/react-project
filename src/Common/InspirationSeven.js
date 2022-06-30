import React from "react";

const InspirationSeven = () => {
  return (
    <>
      <section className="fifth-section">
        <div className="inspiration-div py-5">
          <h1>
            Inspiration
            <br />
            by
            <br />
            Miriam Mandel
          </h1>
        </div>
      </section>
      <section className="sixth-section">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
              <div className="contain-section">
                <h5 className="insp-text">Inspiration 7:</h5>
                <h3 className="mt-3">“The Immense Power of Intention”</h3>
                <p>
                  “There is no power in the world that can stop a firm
                  conviction” -D.R. Butler
                </p>

                <p>
                  Intention, in my humble opinion, is extremely underrated and
                  underutilized. I’m not exactly sure why. I have experienced
                  the power of utilizing conscious intention in my life and for
                  some reason still don’t use it all the time… (we teach what we
                  need to learn more of)
                </p>
                <button className="read-more mt-4">
                  Read More{" "}
                  <i className="fa fa-caret-right" aria-hidden="true"></i>
                </button>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
              <ul>
                {/* <!-- <div className="bottom-continue-div">
                            <h1>continue reading
                                Most Popular Inspiration</h1>
                        </div> --> */}
                <li
                  className="bottom-continue-div"
                  style={{ pointerEvents: "none" }}
                >
                  <h1>continue reading Most Popular Inspiration</h1>
                </li>
                <li className="l1">
                  <span className="count">03</span>“The Immense Power of
                  Intention”
                  <i
                    className="fa fa-arrow-right float-right py-2"
                    aria-hidden="true"
                  ></i>
                </li>
                <li className="l2">
                  <span className="count">05</span>“Journaling”
                  <i
                    className="fa fa-arrow-right py-2 float-right"
                    aria-hidden="true"
                  ></i>
                </li>
                <li className="l1">
                  <span className="count">07</span>“Kindness”
                  <i
                    className="fa fa-arrow-right py-2 float-right"
                    aria-hidden="true"
                  ></i>
                </li>
                <li className="l2">
                  <span className="count">09</span>“Separation from emotions”
                  <i
                    className="fa fa-arrow-right float-right py-2"
                    aria-hidden="true"
                  ></i>
                </li>
                <li className="l1">
                  <span className="count">11</span>“Physiology matters”
                  <i
                    className="fa fa-arrow-right float-right py-2"
                    aria-hidden="true"
                  ></i>
                </li>
                <li className="l2">
                  <span className="count">13</span>“Core Values”
                  <i
                    className="fa fa-arrow-right float-right py-2"
                    aria-hidden="true"
                  ></i>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default InspirationSeven;
