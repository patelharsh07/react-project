import React from "react";
import FollowUs from "../../Common/FollowUs";

const About = () => {
  return (
    <>
      <section id="AboutsecondSection" style={{ paddingBottom: "20%" }}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 px-0">
              <div className="about-owner-img-main">
                <div className="about-owner-image-main"></div>
              </div>
            </div>

            <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
              <div style={{ padding: "70px 30px" }}>
                <p className="hello-text hey-there text-capitalize">
                  Hey There
                </p>
                <h2 style={{ fontSize: "50px", color: "rgba(96, 96, 96, 1)" }}>
                  I'M Miriam Mandel
                </h2>
                <p className="sm-txt text-justify">
                  Dr. Mandel is a board-certified pediatrician graduating from
                  Ross University Medical School in 2000. She did her internship
                  at St Vincent's Sisters of Charity Hospital in New York and
                  completed her residency at Carolinas' Medical Center in
                  Charlotte, NC. After Moving to Ohio in January of 2003 she
                  worked in a private practice in Lake County while also working
                  as a pediatric hospitalist at St. John's Hospital in West
                  Lake. She worked at both locations for nine years.
                </p>
                <p className="sm-txt text-justify">
                  While working with children and raising two of her own, she
                  came to realize the importance of mindfulness and
                  self-soothing skills that can be nurtured during childhood
                  into late adolescence. Building upon this foundation, her
                  research suggests young adults can developinto more mindful
                  adultswhile enhancing a sense of self-esteem using tools such
                  as mindfulness, meditation and yoga. She is a certified
                  children’s yoga instructor and has written several published
                  articles on children’s well-being.
                </p>
              </div>
            </div>
          </div>

          <div className="container">
            <div className="row">
              <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                <p className="sm-txt text-justify ">
                  Dr. Mandel’s research in this area has spanned more than ten
                  years and she has been honored to work with students in
                  elementary schools and grade schools. Additionally, she has
                  performed education sessions for educators K-12, doctors,
                  nurses and nurse practitioners as well as university and
                  graduate students. This well-rounded applied research over an
                  extensive period of time has provided Dr. Mandel with a unique
                  grasp of the importance of teaching children and high school
                  students the skills to live happier and less stress filled
                  lives. Dr. Mandel has lectured on numerous occasions at the
                  grade school through post graduate levels and is an
                  accomplished speaker on her passion for developing
                  mindfulness, self-esteem and self-empowerment. What greater
                  gift can we give our children than the tools to self soothe in
                  a healthy way?
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="container Wht-is-Exhale-About">
        <div className="What-is-exhale-with-me" style={{ padding: "60px" }}>
          <p className="hello-text text-center">What is Exhale with me?</p>
          <p className="sm-txt text-center text-white">
            Dr. Mandel has lectured on numerous occasions at the grade school
            through post graduate levels and is an accomplished speaker on her
            passion for developing mindfulness, self-esteem and
            self-empowerment.{" "}
          </p>
          <p className="sm-txt text-center text-white">
            What greater gift can we give our children than the tools to self
            soothe in a healthy way?
          </p>
        </div>
      </div>
      <FollowUs/>
    </>
  );
};

export default About;
