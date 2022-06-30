import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import RouterLayout from "./RouterLayout";
import { Link } from "react-router-dom";
const AppLayout = () => {
  return (
    <>
      <Header />
      <RouterLayout />
      <Footer />
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-body">
              <div className="member-sidebar-content">
                <p>hey there !</p>
                <img
                  alt="img"
                  src={require("../assets/images/side-nav-owner-image-main.jpg")}
                />
                <h3>I'm Miriam Mandel</h3>
                <h5>
                  she has performed education sessions for educators PK-12,
                  doctors, nurses and nurse practitioners as well as university
                  and graduate students.
                </h5>
                <div className="social-media-sidebar">
                  <i className="fab fa-facebook-f"></i>
                  <i className="fab fa-instagram"></i>
                  <i className="fab fa-twitter"></i>
                  <i className="fab fa-pinterest-p"></i>
                </div>
              </div>
              <div className="inner-side-div">
                <div className="sidebarpanel">
                  <div className="w-100 d-flex justify-content-end">
                    <button
                      type="button"
                      className="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <ul className="navbar-nav mt-2 ml-4 mr-5">
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppLayout;
