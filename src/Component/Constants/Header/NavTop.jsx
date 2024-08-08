import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css";
function NavTop() {
  return (
    <div>
      {/* <!-- ***** Top Header Area ***** --> */}
      <div className="top-header-con">
        <div className="top-header">
          {/* <!-- Top Header Meta --> */}
          <div className="top-header-meta d-flex flex-wrap">
            <NavLink
              to="#"
              className="open"
              data-toggle="tooltip"
              data-placement="bottom"
              title="10 Am to 6 PM"
            >
              <i className="bi bi-clock"></i>
              <span>Opening Hours - 10 Am to 6 PM</span>
            </NavLink>
            {/* <!-- Social Info --> */}
            <div className="top-social-info">
              <NavLink to="https://web.facebook.com/DCGFAN/?_rdc=1&_rdr">
                <i className="bi bi-facebook" aria-hidden="true">
                </i>
              </NavLink>
              <NavLink to="http://twitter.com/dcg">
                <i className="bi bi-twitter" aria-hidden="true">
                </i>
              </NavLink>
              <NavLink to="#">
                <i className="bi bi-google" aria-hidden="true">
                </i>
              </NavLink>
            </div>
          </div>
          {/* <!-- Top Header Meta --> */}
          <div className="top-header-meta">
            <a href="mailto:info@dcg.org" className="email-address">
              <i className="bi bi-envelope-fill" aria-hidden="true">
              </i>{" "}
              <span>mailto:info@dcg.org</span>
            </a>

            <a href="tel:+08035374830" className="phone">
              <i className="bi bi-phone" aria-hidden="true" />
              08035374830
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavTop;
