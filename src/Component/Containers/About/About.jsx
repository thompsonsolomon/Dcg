import React from "react";
import Breadcrum from "../../Constants/Bread/Breadcrum";
import img1 from "../../Asset/bg-img/26.jpg";
import "../About/About.css";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
function About() {
  return (
    <div>
      <Breadcrum tag1="About" />

      {/* <!-- ##### About Us Area Start ##### --> */}
      <div className="about-us-area about-page section-padding-100">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-12 col-lg-5">
              <div className="about-content">
                <h2>Welcome To The Desciples Church of God for all Nation</h2>
                <p>
                  It’s very important to believe that you’re the one. We aim to
                  take a different approach in reaching out and helping people
                  along the journey. We stress cultural relevancy and utilize
                  all medias and means to communicate the church message. It’s
                  very important to believe that you’re the one.
                </p>
                <div className="opening-hours-location mt-30 d-flex align-items-center">
                  {/* <!-- Opening Hours --> */}
                  <div className="opening-hours">
                    <h6>
                      <i className="bi bi-clock-fill"></i> Opening Hours
                    </h6>
                    <p>
                      Mon - Fri at 08:00 - 21:00 <br />
                      Sunday at 09:00 - 18:00
                    </p>
                  </div>
                  {/* <!-- Location --> */}
                  <div className="location">
                    <h6>
                      <i className="bi bi-map"></i> Location
                    </h6>
                    <p>
                      {" "}
                      @km 11, Akure/Owo Road, Ajegunle ilu Abo Via Akure, <br />{" "}
                      Akure North LG Ondo State
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-6">
              <div className="about-thumbnail">
                <img src={img1} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- ##### About Us Area End ##### --> */}

      {/* <!-- ##### Team Members Area Start ##### --> */}
      <div className="team-members-area section-padding-100-0">
        <div className="container">
          <div className="row">
            {/* <!-- Section Heading --> */}
            <div className="col-12">
              <div className="section-heading">
                <h2>Staff members</h2>
                <p>
                  A brief overview of what you can expect at our worship
                  experiences.
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            {/* <!-- Team Members Area --> */}
            <div className="col-12 col-sm-6 col-lg-3">
              <div className="single-team-members text-center mb-100">
                <div
                  className="team-thumb"
                  style={{
                    backgroundSize: "cover",
                    backgroundImage: `url(
                    "${img1}"
                )`,
                    backgroundPosition: "center center",
                }}
    
                //   style={{backgroundImage: url(img/bg-img/33.jpg);}}
                >
                  {/* <img src={img1} alt="" /> */}
                  <div className="team-social-info">
                    <Link to="/">
                      <i className="bi bi-facebook" aria-hidden="true"></i>
                    </Link>
                    <Link to="/">
                      <i className="bi bi-twitter" aria-hidden="true"></i>
                    </Link>
                    <Link to="/">
                      <i className="bi bi-linkedin" aria-hidden="true"></i>
                    </Link>
                  </div>
                </div>
                <h6>Jackson Nash</h6>
                <span>Pastor</span>
              </div>
            </div>
            {/* <!-- Team Members Area --> */}
            <div className="col-12 col-sm-6 col-lg-3">
              <div className="single-team-members text-center mb-100">
                <div
                  className="team-thumb"
                  style={{
                    backgroundSize: "cover",
                    backgroundImage: `url(
                    "${img1}"
                )`,
                    backgroundPosition: "center center",
                }}
    
                //   style={{backgroundImage: url(img/bg-img/33.jpg);}}
                >
                  {/* <img src={img1} alt="" /> */}
                  <div className="team-social-info">
                  <Link  to="/">
                      <i className="bi bi-facebook" aria-hidden="true"></i>
                   </Link>
                  <Link  to="/">
                      <i className="bi bi-twitter" aria-hidden="true"></i>
                   </Link>
                  <Link  to="/">
                      <i className="bi bi-linkedin" aria-hidden="true"></i>
                   </Link>
                  </div>
                </div>
                <h6>Jackson Nash</h6>
                <span>Pastor</span>
              </div>
            </div>
            {/* <!-- Team Members Area --> */}
            <div className="col-12 col-sm-6 col-lg-3">
              <div className="single-team-members text-center mb-100">
                <div
                  className="team-thumb"
                  style={{
                    backgroundSize: "cover",
                    backgroundImage: `url(
                    "${img1}"
                )`,
                    backgroundPosition: "center center",
                }}
    
                //   style={{backgroundImage: url(img/bg-img/33.jpg);}}
                >
                  {/* <img src={img1} alt="" /> */}
                  <div className="team-social-info">
                    <Link to="/">
                      <i className="bi bi-facebook" aria-hidden="true"></i>
                    </Link>
                    <Link to="/">
                      <i className="bi bi-twitter" aria-hidden="true"></i>
                    </Link>
                    <Link to="/">
                      <i className="bi bi-linkedin" aria-hidden="true"></i>
                    </Link>
                  </div>
                </div>
                <h6>Jackson Nash</h6>
                <span>Pastor</span>
              </div>
            </div>
            {/* <!-- Team Members Area --> */}
            <div className="col-12 col-sm-6 col-lg-3">
              <div className="single-team-members text-center mb-100">
                <div
                  className="team-thumb"
                  style={{
                    backgroundSize: "cover",
                    backgroundImage: `url(
                    "${img1}"
                )`,
                    backgroundPosition: "center center",
                }}
    
                //   style={{backgroundImage: url(img/bg-img/33.jpg);}}
                >
                  {/* <img src={img1} alt="" /> */}
                  <div className="team-social-info">
                    <Link to="/">
                      <i className="bi bi-facebook" aria-hidden="true"></i>
                    </Link>
                    <Link to="/">
                      <i className="bi bi-twitter" aria-hidden="true"></i>
                    </Link>
                    <Link to="/">
                      <i className="bi bi-linkedin" aria-hidden="true"></i>
                    </Link>
                  </div>
                </div>
                <h6>Jackson Nash</h6>
                <span>Pastor</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
