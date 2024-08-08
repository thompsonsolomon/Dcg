import React, { useState } from "react";
import "./Welcome.css";
import WelcomeCard from "./WelcomeCard";
function Welcome() {
  const [showMore, setshowMore] = useState(false);
  const handleSeeMore = () =>{
    // console.log("seen");
    setshowMore(!showMore)
  }
  return (
    <div className="Welcome">
      <div className="WelcomeCon">
        <div className="WelcomeText">
          <h2>Welcome To Church</h2>
          <p>
            A church isn't a building—it's the people. We meet in locations
            around the United States and globally at the desciples Church
            Online. No matter where you join us.
          </p>
        </div>

        {/* Welcom Card  */}

        <div className="WelcomCardCon">
          <WelcomeCard handleSeeMore={handleSeeMore}  showMore/>
        </div>
        

      </div>
    </div>
  );
}

export default Welcome;
