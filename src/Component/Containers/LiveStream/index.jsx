import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom";
import "./Styles.css";
import dummy from "./preloader.gif";
import "firebase/database";
import { db } from "../../../API/firebase";
import { collection } from "firebase/firestore";

//Reading of data From Firebase Starts
import {
  // collection,
  query,
  onSnapshot,
} from "firebase/firestore";

function Stream() {
  const [Streams, setStreams] = useState([]);
  const [Loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    // console.log(Loading);
    const q = query(collection(db, "stream"));
    const unsub = onSnapshot(q, (querySnapshot) => {
      let StreamArrey = [];
      querySnapshot.forEach((doc) => {
        StreamArrey.push({ ...doc.data(), id: doc.id });
      });
      setStreams(StreamArrey);
      setLoading(false);
      // console.log(Loading);
    });
    return () => unsub();
  }, [Loading, Streams]);

  return (
    <div className="Stream">
      <Link to="/Home" className="Back">
        <span>
          <i className="bi bi-arrow-left-circle-fill"></i>
        </span>
      </Link>
      {!Streams ? (
        <img
          width="853"
          height="480"
          src={dummy}
          title="There is no stream Currently "
          style={{
            position: "absolute",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
          }}
        />
      ) : (
        <div className="IframeHolder">
          {Streams &&
            Streams.map((stream) => (
              <iframe
                src={stream.StreamScr}
                title={stream.StreamTitle}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                style={{
                  position: "absolute",
                  top: "0",
                  left: "0",
                  width: "100%",
                  height: "100%",
                }}
              />
            ))}
        </div>
      )}
    </div>
  );
}

export default Stream;
