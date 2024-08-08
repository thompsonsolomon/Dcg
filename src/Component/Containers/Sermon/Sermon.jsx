import React, { useEffect, useState } from "react";
import Breadcrum from "../../Constants/Bread/Breadcrum";
import HomepageSermon from "./HomepageSermon";
import "./Sermon.css";
import { Link } from "react-router-dom";

import { db } from "../../../API/firebase";
import { collection } from "firebase/firestore";
import { query, onSnapshot } from "firebase/firestore";
function Sermon() {
  const [Sermon, setSermon] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  // ---------  === CODE TO GET DATA FROM FIREBASE START === ------------
  useEffect(() => {
    setIsLoading(true);
    const q = query(collection(db, "LeadSermons"));
    const unsub = onSnapshot(q, (querySnapshot) => {
      let StreamArrey = [];
      querySnapshot.forEach((doc) => {
        StreamArrey.push({ ...doc.data(), id: doc.id });
      });
      setSermon(StreamArrey);
      setIsLoading(false);
    });
    return () => unsub();
  }, []);
  console.log(Sermon)
  return (
    <div>
      <Breadcrum tag1="Sermon" />
      {/* <!-- ##### Sermons Area Start ##### --> */}
      <div className="sermons-content-area section-padding-100-0">
                

<div className="container">
          {
            Sermon &&
            Sermon.map((data) => (
              <div className="row">
                {
                  isLoading && <div>Loading !!!</div>
                }
                <div className="col-12">
                  <div className="sermons-content-thumbnail">
                    <img className="ThumbnaiImg" src={data.LeadImgurl} alt="" />
                  </div>
                  <div className="sermons-text text-center">
                    <h2>{data.LeadSermonTitle}</h2>
                    <div className="sermons-meta-data d-flex flex-wrap justify-content-center">
                      <p>
                        <i className="bi bi-person-fill" aria-hidden="true"></i>{" "}
                        Sermon From: <span>     {data.LeadSermonpreacher} </span>
                      </p>
                      <p>
                    <i className="bi bi-tag-fill" aria-hidden="true"></i>{" "}
                    Categories: <span>God, Pray</span>
                  </p>                       <p>
                        <i className="bi bi-clock-fill" aria-hidden="true"></i>{" "}
                        {data.LeadSermontimespan}
                      </p>
                    </div>

                    <div className="sermons-cata">
                      <Link
                        to="#"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Video"
                      >
                        <i
                          className="bi bi-camera-video-fill"
                          aria-hidden="true"
                        ></i>
                      </Link>
                      <Link
                        to="#"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Audio"
                      >
                        <i className="bi bi-headset" aria-hidden="true"></i>
                      </Link>
                      <Link
                        to="#"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Docs"
                      >
                        <i
                          className="bi bi-file-earmark-fill"
                          aria-hidden="true"
                        ></i>
                      </Link>
                      <Link
                        to="#"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Download"
                      >
                        <i
                          className="bi bi-cloud-arrow-down-fill"
                          aria-hidden="true"
                        ></i>
                      </Link>
                    </div>
                    <p>
                      {data.LeadSermondisc}
                    </p>
                    <div className="read-more-share d-flex flex-wrap justify-content-between">
                      {/* <div className="read-more-btn">
                        <Link to={""} >
                          Read More{" "}
                          <i
                            className="fa fa-angle-double-right"
                            aria-hidden="true"
                          ></i>
                        </Link>
                      </div> */}
                      <div className="share">
                        Share:
                        <Link to="#">
                          <i className="bi bi-facebook" aria-hidden="true"></i>
                        </Link>
                        <Link to="#">
                          <i className="bi bi-twitter" aria-hidden="true"></i>
                        </Link>
                        <Link to="#">
                          <i className="bi bi-google" aria-hidden="true"></i>
                        </Link>
                        <Link to="#">
                          <i className="bi bi-linkedin" aria-hidden="true"></i>
                        </Link>
                        <Link to="#">
                          <i className="bi bi-envelope-fill" aria-hidden="true"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>

      {/* There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don't look
                  even slightly believable. If you are going to use a passage of
                  Lorem Ipsum, you need to be sure there isn't anything
                  embarrassin. */}

      <HomepageSermon />
    </div>
  );
}

export default Sermon;
