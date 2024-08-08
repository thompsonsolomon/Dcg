import React, { useEffect, useState } from "react";
import "./Event.css";
import { Link } from "react-router-dom";
import { db } from "../../../API/firebase";
import { collection } from "firebase/firestore";

//Reading of data From Firebase Starts
import { query, onSnapshot } from "firebase/firestore";

function EventCard() {
  // const Event = [
  //   {
  //     id: 1,
  //     image: img1,
  //     title: "Our Church",
  //     Text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.",
  //   },
  //   {
  //     id: 1,
  //     image: img1,
  //     title: "Spreading Peace to world",
  //     Text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.",
  //   },
  //   {
  //     id: 1,
  //     image: img1,
  //     title: "Spreading Peace to world",
  //     Text: "There are many variations of passages of Lorem Ipsum available, but the majority havesuffered alteration in some form. There are many variations of passages of Lorem Ipsum available, but the majority havesuffered alteration in some form. There are many variations of passages of Lorem Ipsum available, but the majority havesuffered alteration in some form. There are many variations of passages of Lorem Ipsum available, but the majority havesuffered alteration in some form. There are many variations of passages of Lorem Ipsum available, but the majority havesuffered alteration in some form.",
  //   },
  // ];

  const [Event, setEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  //---------  === CODE TO GET DATA FROM FIREBASE START === ------------
  useEffect(() => {
    setIsLoading(true);
    const q = query(collection(db, "Events"));
    const unsub = onSnapshot(q, (querySnapshot) => {
      let StreamArrey = [];
      querySnapshot.forEach((doc) => {
        StreamArrey.push({ ...doc.data(), id: doc.id });
      });
      setEvents(StreamArrey);
      setIsLoading(false);
    });
    return () => unsub();
  }, []);
  // console.log(Event)

  return (
    <div className="row event_two">
      {Event &&
        Event.map((data) => (
          <div key={data.id} className="col-lg-4 col-sm-6">
            <div className="event_post">
              {isLoading ? (
                "Loading..."
              ) : (
                <Link to={"event-details/" + data.id}>
                  <img src={data.Imgurl} alt="" />
                </Link>
              )}
              {isLoading ? (
                "Loading "
              ) : (
                <h2 className="event_title">{data.EventTitle}</h2>
              )}
              <ul className="list_style sermons_category event_category">
                <li>
                  <i className="bi bi-house-fill"></i>
                  {data.branch}
                </li>
                <li>
                  <i className="bi bi-cursor-fill"></i>
                  {data.date}
                </li>
                <li>
                  <i className="bi bi-clock-fill"></i>
                  {data.time}
                </li>
              </ul>
            </div>
          </div>
        ))}
    </div>
  );
}

export default EventCard;
