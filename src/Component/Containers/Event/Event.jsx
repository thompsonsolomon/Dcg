import React from "react";
import "./Event.css";
import EventCard from "./EventCard";
import { Link } from "react-router-dom/cjs/react-router-dom";
function Event() {
  return (
    <div>
      <section className="breadcrumb_area br_image">
        <div className="container">
          <div className="page-cover text-center">
            <h2 className="page-cover-tittle">Latest Events</h2>
            <ol className="breadcrumb">
              <li>
                <Link to="/">Home </Link>
              <i className="bi bi-chevron-double-right"></i>{" "}
              </li>
              <i className="b"></i>{" "}
              <li className="active">Events</li>
            </ol>
          </div>
        </div>
      </section>

      <section className="event_blog_area section_gap">
        <div className="container">
          <div style={{ margin: "70px 0" }}>
            <EventCard />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Event;
