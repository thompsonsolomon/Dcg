import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "../Header/Nav.css";
import Navbrand from "../../Asset/bg-img/favicon.jpg";
function NaveBar() {


  const [show, handleShow] = useState(false);
  const [toggleMenu, HandletoggleMenu] = useState(false)
  useEffect(() => {
    const headerScrol = () => {
      if (window.scrollY > 10) {
        handleShow(true);
      } else handleShow(false);
    };
    window.addEventListener("scroll", headerScrol);

    return () => {
      window.removeEventListener("scroll", headerScrol);
    };
  }, []);



  return (
    <div>


      <header className="header-area">
        {/* <!-- ***** Navbar Area ***** --> */}
        <div className={`Top-Header-Area-Con ${show && "nav__black"}`}>
          <div className="Top-Header-Area mainNav">
            <div className="NavRignt">
              <img src={Navbrand} alt="navBrandImg" />
            </div>
            <div className="NavCenter">
              <ul>
                <li>
                  <NavLink to="/Home">Home</NavLink>
                </li>
                <li>
                  <NavLink to="/event">Event</NavLink>
                </li>
                <li>
                  <NavLink to="/sermons">Sermons</NavLink>
                </li>
                <li>
                  <NavLink to="/About">About</NavLink>
                </li>
                <li>
                  <NavLink to="/Contact">Contact</NavLink>
                </li>
              </ul>
            </div>
            <div className="NavLeft">
              <div className="searchSystem">
                <i className="bi bi-search" style={{ fontSize: "17px", fontWeight: "800" }} aria-hidden="true">
                </i>{" "}
              </div>

              <NavLink to="/donate_us" style={{ color: "white" }} className="Donate">
                <button className="DonateButton">Donate US</button>
              </NavLink>


            </div>
          </div>


          {/*RESPONSIVE ******** NAV ***** START */}
          <div className="Top-Header-Area responsive">
            <div className="NavRignt">
              <img src={Navbrand} alt="navBrandImg" />

            </div>

            <div className="responsiveNavCon">

              <div className="respoIcon">

                {
                  toggleMenu ?
                    <i className="bi bi-x" onClick={() => HandletoggleMenu(!toggleMenu)}></i> :
                    <i className="bi bi-list" onClick={() => HandletoggleMenu(!toggleMenu)}></i>
                }

              </div>

              <div className="NavCenter" style={{ top: toggleMenu ? "75px" : "-700px" }}>
                <ul>
                  <li>
                    <NavLink to="/Home">Home</NavLink>
                  </li>
                  <li>
                    <NavLink to="/event">Event</NavLink>
                  </li>
                  <li>
                    <NavLink to="/sermons">Sermons</NavLink>
                  </li>
                  <li>
                    <NavLink to="/About">About</NavLink>
                  </li>
                  <li>
                    <NavLink to="/Contact">Contact</NavLink>
                  </li>
                </ul>

                <div className="NavLeft">
                  <div className="searchSystem">
                    <i className="bi bi-search" style={{ fontSize: "17px", fontWeight: "800" }} aria-hidden="true">
                    </i>{" "}
                  </div>

                  <div className="Donate">
                    <button className="DonateButton"><NavLink style={{ color: "white" }} to="/donate_us">Donate US</NavLink></button>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </header>
      {/* <!-- ##### Header Area End ##### --> */}
    </div>
  );
}

export default NaveBar;
