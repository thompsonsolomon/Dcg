import React from "react";
import "./Footer.css";
import FooterImg from "../../Asset/bg-img/slider_1.jpg";
import { NavLink } from "react-router-dom";
function Footer() {
  return (
    // <!-- ##### Footer Area Start ##### -->
    <footer className="footer-area">
      {/* <!-- Main Footer Area --> */}
      <div className="main-footer-area">
        <div className="container">
          <div className="row">
            {/* <!-- Single Footer Widget --> */}
            <div className="col-12 col-sm-6 col-lg-3">
              <div className="single-footer-widget mb-70">
                <NavLink to="#" className="footer-logo">
                  <img
                    src={FooterImg}
                    style={{ height: "90px", borderRadius: "50px" }}
                    alt=""
                  />
                  {/* <img src={FooterImg} style={{,}} alt="" /> */}
                </NavLink>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>

            {/* <!-- Single Footer Widget --> */}
            <div className="col-12 col-sm-6 col-lg-3">
              <div className="single-footer-widget mb-70">
                <h5 className="widget-title">Quick Link</h5>
                <nav className="footer-menu">
                  <ul>
                    <li>
                      <NavLink to="/">
                        <i
                          className="fa fa-angle-double-right"
                          aria-hidden="true"
                        ></i>
                        Home
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/event">
                        <i
                          className="fa fa-angle-double-right"
                          aria-hidden="true"
                        ></i>
                        Event
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="about">
                        <i
                          className="fa fa-angle-double-right"
                          aria-hidden="true"
                        ></i>
                        About Us
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/events">
                        <i
                          className="fa fa-angle-double-right"
                          aria-hidden="true"
                        ></i>{" "}
                        Gallery
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/sermons">
                        <i
                          className="fa fa-angle-double-right"
                          aria-hidden="true"
                        ></i>{" "}
                        Sermons
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/contact">
                        <i
                          className="fa fa-angle-double-right"
                          aria-hidden="true"
                        ></i>{" "}
                        Contact
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/">
                        <i
                          className="fa fa-angle-double-right"
                          aria-hidden="true"
                        ></i>
                        Blogs
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/donate_us">
                        <i
                          className="fa fa-angle-double-right"
                          aria-hidden="true"
                        ></i>{" "}
                        Donate
                      </NavLink>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>

            {/* <!-- Single Footer Widget --> */}
            <div className="col-12 col-sm-6 col-lg-3">
              <div className="single-footer-widget mb-70">
                <h5 className="widget-title">News Latest</h5>

                {/* <!-- Single Latest News --> */}
                <div className="single-latest-news">
                  <NavLink to="/news">Polish schools in UK warned</NavLink>
                  <p>
                    <i className="fa fa-calendar" aria-hidden="true"></i> November
                    11,
                    <span className="Date"> {new Date().getFullYear()}</span>
                  </p>
                </div>

                {/* <!-- Single Latest News --> */}
                <div className="single-latest-news">
                  <NavLink to="/news">University league tables 2018</NavLink>
                  <p>
                    <i className="fa fa-calendar" aria-hidden="true"></i> November
                    11,
                    <span className="Date"> {new Date().getFullYear()}</span>
                  </p>
                </div>
              </div>
            </div>

            {/* <!-- Single Footer Widget --> */}
            <div className="col-12 col-sm-6 col-lg-3">
              <div className="single-footer-widget mb-70">
                <h5 className="widget-title">Contact Us</h5>

                <div className="contact-information">
                  <p>
                    <i className="fa fa-map-marker" aria-hidden="true"></i>
                    @km 11, Akure/Owo Road, Ajegunle ilu Abo Via Akure, <br />{" "}
                    Akure North LG Ondo State
                  </p>
                  <NavLink to="tel:+08035374830">
                    <i className="fa fa-phone" aria-hidden="true"></i>
                    08035374830{" "}
                  </NavLink>
                  <NavLink to="mailto:info@dcg.org">
                    <i className="fa fa-envelope" aria-hidden="true"></i>
                    info@dcg.org{" "}
                  </NavLink>
                  <p>
                    <i className="fa fa-clock-o" aria-hidden="true"></i>
                    Mon - sun: 06.00am - 06.00pm
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Copwrite Area --> */}
      <div className="copywrite-area">
        <div className="container h-100">
          <div className="row h-100 align-items-center flex-wrap">
            {/* <!-- Copywrite Text --> */}
            <div className="col-12 col-md-6">
              <div className="copywrite-text">
                <p>
                Copyright &copy;
                  <span className="Date"> {new Date().getFullYear()} </span>
                   All rights reserved | This template is made with <i className=" bi bi-heart " aria-hidden="true"> </i>  by 
                      <NavLink to="https://github.com/thompsonsolomon" className="Date" target="_blank"> Thompson Solomon </NavLink>                 
                </p>
              </div>
            </div>

            {/* <!-- Footer Social Icon --> */}
            <div className="col-12 col-md-6">
              <div className="footer-social-icon">
                <NavLink to="https://web.facebook.com/DCGFAN/?_rdc=1&_rdr">
                  <i className="fa fa-facebook" aria-hidden="true"></i>
                </NavLink>
                <NavLink to="http://twitter.com/dcg">
                  <i className="fa fa-twitter" aria-hidden="true"></i>
                </NavLink>
                <NavLink to="#">
                  <i className="fa fa-google-plus" aria-hidden="true"></i>
                </NavLink>
                <NavLink to="#">
                  <i className="fa fa-linkedin" aria-hidden="true"></i>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
    // <!-- ##### Footer Area End ##### -->
  );
}

export default Footer;
