import React from "react";
import { Link } from "react-router-dom";
import "./Welcome.css";

function BecomeMember() {
  return (
    <div className="BecomeMemberCon">
      <div className="BecomeMembertextCon">
        <h6>A Place For You</h6>
        <h2>
          Find a place to connect and grow through a small group, class, or
          regular gathering.
        </h2>
        <Link className="BecomeMemberBtn" to="/contact">
          Become A Member
        </Link>
      </div>
    </div>
  );
}

export const WatchLife = () => {
  return (
    <div>
      <div className="watch  bg-overlay">
        <div className="WatchCon">
        <div className="WatchTextCon">
          <h2 style={{ marginBottom: "20px" }}>WATCH LIVE</h2>
          <h6
            style={{
              letterSpacing: "1px",
              fontSize: "15px",
              marginBottom: "10px",
            }}
          >
            Be sure to visit our Upcoming event page regulally to get
            information
          </h6>
          <Link className="BecomeMemberBtn" to="/stream">
            Watch Live
          </Link>
        </div>
        </div>
      </div>
    </div>
  );
};

export default BecomeMember;
