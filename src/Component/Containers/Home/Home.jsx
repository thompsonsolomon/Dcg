import React from "react";
import "./Home.css";
import NaveBar from "../../Constants/Header/NaveBar";
// import img from "../../Asset/bg-img/1.jpg";
import NavTop from "../../Constants/Header/NavTop";
// import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
// import { formVariants } from "../../Helpers/Animation";
function Home() {
  return (
    <div>
      <div className="navContainer">
        <NavTop />
        <NaveBar />
      </div>

      <div className="HeroPageCon">
        <div className="HeropageImgCon">
          <div className="overlay"></div>
          <div className="image"></div>

          <div className="HeroTextCon">
            <div
              // variants={formVariants}
              // initial="start"
              // animate="end"
              // exit="exit"
              // layout
            >
              <span>Building The Hope </span>
              <p className="HeaderSmallText">
                Learn about our mission, our beliefs, and the hope we have in
                jesus{" "}
              </p>
            </div>

            <button className="HeaderButton">
              <NavLink to="/">About Us</NavLink>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
