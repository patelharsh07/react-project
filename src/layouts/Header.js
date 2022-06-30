import React from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  return (
    <>
      <section>
        <div className="header">
          <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid ">
              <Link className="navbar-brand" to={"/"}>
                <img
                  src={require("../assets/images/Exhale-logo.png")}
                  className="img-fluid header-logo"
                  alt="logo"
                />
              </Link>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse mr-3"
                id="navbarNavDropdown"
              >
                <ul className="navbar-nav mt-2 ml-auto mr-5">
                  <li className="nav-item">
                    <Link className="nav-link" to={"/about"}>
                      <span>About</span>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to={"/individualCoaching"}>
                      <span>Individual Coaching</span>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to={"/schools"}>
                      <span>Schools</span>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to={"/medicalProfessionals"}>
                      <span>Medical Professionals</span>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to={"/workshops"}>
                      <span>Workshops</span>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to={"/inspirations"}>
                      <span>Inspirations</span>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to={"/contactus"}>
                      <span>Contact Us</span>
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="nav-item side-nav sticky-li">
                <div
                  className="nav-link"
                  data-toggle="modal"
                  data-target="#exampleModal"
                >
                  <span className="openbtn">
                    <img
                      className="img-fluid"
                      alt="img"
                      src={require("../assets/images/menu-icon.svg")}
                    />
                  </span>
                </div>
              </div>
            </div>
          </nav>
        </div>

        {/* <!-- main-section-start--> */}
        {location.pathname !== "/contactus" && (
          <div className="slider-section" id="mainSec">
            <div
              id="carouselExampleIndicators"
              className="carousel slide carousel-fade"
              data-ride="carousel"
            >
              <ol className="carousel-indicators">
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="0"
                  className="active"
                ></li>
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="1"
                ></li>
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="2"
                ></li>
              </ol>
              <div className="carousel-inner">
                <div
                  className="carousel-item main-image img-one active"
                  data-interval="2000"
                >
                  <div className="main-content">
                    <p className="hello-text text-capitalize">hey there !</p>
                    <div className="d-flex">
                      <div className="other-content">
                        <h2>Exhale With Me</h2>
                        <p className="md-txt">
                          The first duty of a teacher is to break the student’s
                          ordinary view of the world
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="carousel-item main-image img-two"
                  data-interval="2000"
                >
                  <div className="main-content">
                    <p className="hello-text text-capitalize">hey there !</p>
                    <div className="d-flex">
                      <div className="other-content">
                        <h2>Exhale With Me</h2>
                        <p className="md-txt">
                          The first duty of a teacher is to break the student’s
                          ordinary view of the world
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="carousel-item main-image img-three"
                  data-interval="2000"
                >
                  <div className="main-content">
                    <p className="hello-text text-capitalize">hey there !</p>
                    <div className="d-flex">
                      <div className="other-content">
                        <h2>Exhale With Me</h2>
                        <p className="md-txt">
                          The first duty of a teacher is to break the student’s
                          ordinary view of the world
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <a
                className="carousel-control-prev"
                href="#carouselExampleIndicators"
                role="button"
                data-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="sr-only">Previous</span>
              </a>
              <a
                className="carousel-control-next"
                href="#carouselExampleIndicators"
                role="button"
                data-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="sr-only">Next</span>
              </a>
            </div>

            {/* <a className="line-content ml-auto" href="#secondSection">
              <div className="down-arrow">
                <p>
                  READY TO GET TO WORK?&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <img
                    className="img-fluid mr-1"
                    alt="img"
                    src={require("../assets/images/Vector.svg")}
                  />
                </p>
              </div>
            </a> */}
          </div>
        )}
      </section>
    </>
  );
};

export default Header;
