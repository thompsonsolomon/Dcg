import React, { useEffect, useState } from "react";
// import "../Sermon/HomepageSermon.css";
import "./EventDetails.css";
import img1 from "../../Asset/bg-img/32.jpg";
import img2 from "../../Asset/bg-img/28.jpg";
import { Link, useParams } from "react-router-dom";
import Breadcrum from "../../Constants/Bread/Breadcrum";
import { db } from '../../../API/firebase'
import { Firestore, collection, doc, getDoc } from 'firebase/firestore';

//Reading of data From Firebase Starts
import {
  // collection,
  query,
  onSnapshot,
} from "firebase/firestore";

function EventDetails() {
  const params = useParams();
  const [Event, setEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  //---------  === CODE TO GET DATA FROM FIREBASE START === ------------
  useEffect(() => {
    setIsLoading(true)

    const GetEventdata = async () => {
      const docRef= doc(db, "Events", params.id)
      const  docSnap = await getDoc(docRef)
      
      if (docSnap) {
        console.log(docSnap.data())
        setEvents(docSnap.data())
      } else {
        console.log("No file Found ")
      }      
    }
    GetEventdata();
  }, []);
  console.log(Event)

  console.log("params", params.id);
  return (
    <div>
      {
        isLoading ? "Loading... " :
          <Breadcrum tag1="Event Detail" tag="event" />
      }
      {/* <!-- ##### Sermons Area Start ##### --> */}
      <div className="sermons-details-area section-padding-100">
        <div className="container">
          <div className="row justify-content-between">
            {/* <!-- Blog Posts Area --> */}
            <div className="col-12 col-lg-8">
              <div className="sermons-details-area">
                {/* <!-- Sermons Details Area --> */}
                {
                  Event &&
                  // Event.map((data) => (
                    <div key={Event.id} className="single-post-details-area">
                      <div className="post-content">
                        <h2 className="post-title mb-30">
                          {/* serminTitile */}
                          {Event.EventTitle}
                          {/* Start a New Way of Living */}
                        </h2> 
                        <img className="mb-30" src={Event.Imgurl} alt="" /> 
                        {/* <!-- Catagory & Share --> */}
                        <div className="catagory-share-meta d-flex flex-wrap justify-content-between align-items-center">
                          <div className="sermons-cata">
                            <Link
                              to="#"
                              // data-toggle="tooltip"
                              // data-placement="top"
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
                          {/* <!-- Share --> */}
                          <div className="share">
                            Share:
                            <Link to="#">
                              <i className="bi bi-facebook" ></i>
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
                              <i
                                className="bi bi-envelope-fill"
                                aria-hidden="true"
                              ></i>
                            </Link>
                          </div>
                        </div>

                        <p>
                          {/* //details  */}
                          {Event.disc}
                        </p>
                        {/* <blockquote>
                      <div className="blockquote-text">
                        <h6>
                          “There are many variations of passages of Lorem Ipsum
                          available, but the majority have suffered alteration
                          in some form, by injected humour, or randomised words
                          which don't look even slightly believable.”{" "}
                        </h6>
                        <h6>
                          Ollie Schneider - <span>Parson</span>
                        </h6>
                      </div>
                    </blockquote> */}
                        {/* <p>
                      He assignments are fast-paced and our services address
                      client needs for efficiency and flexibility. Our staff is
                      experienced in working with architects, interior design
                      firms, engineers, developers and clients in the public and
                      private sectors.
                    </p> */}
                      </div>
                    </div>
                }
                {/* <!-- Comment Area Start --> */}
                <div className="comment_area clearfix">
                  <ol>
                    {/* <!-- Single Comment Area --> */}
                    <li className="single_comment_area">
                      <div className="comment-wrapper d-flex">
                        {/* <!-- Comment Meta --> */}
                        <div className="comment-author">
                          <img src={img2} alt="" />
                        </div>
                        {/* <!-- Comment Content --> */}
                        <div className="comment-content">
                          <span className="comment-date">March 15, 2018</span>
                          <h5>Lena Headey</h5>
                          <p>
                            Neque porro quisquam est, qui dolorem ipsum quia
                            dolor sit amet, consectetur, adipisci velit, sed
                            quia non numquam eius modi tempora incidunt ut
                            labore.
                          </p>
                          <Link to="#">Like</Link>
                          <Link to="#">Reply</Link>
                        </div>
                      </div>
                    </li>
                  </ol>
                </div>

                {/* <!-- Leave A Comment --> */}
                <div className="leave-comment-area mt-50 clearfix">
                  <div className="comment-form">
                    <h4 className="headline">Leave A Comment</h4>
                    {/* <!-- Contact Form Area --> */}
                    <div className="contact-form-area">
                      <form action="#" method="post">
                        <div className="row">
                          <div className="col-12">
                            <div className="form-group">
                              <input
                                type="text"
                                className="form-control"
                                id="contact-name"
                                placeholder="Name"
                              />
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="form-group">
                              <input
                                type="email"
                                className="form-control"
                                id="contact-email"
                                placeholder="Email"
                              />
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="form-group">
                              <input
                                type="text"
                                className="form-control"
                                id="contact-number"
                                placeholder="Website"
                              />
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="form-group">
                              <textarea
                                className="form-control"
                                name="message"
                                id="message"
                                cols="30"
                                rows="10"
                                placeholder="Message"
                              ></textarea>
                            </div>
                          </div>
                          <div className="col-12">
                            <button
                              type="submit"
                              className="btn crose-btn mt-15"
                            >
                              Post Comment
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- ##### Sermons Area End ##### --> */}
    </div>
  );
}

export default EventDetails;
