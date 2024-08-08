import React, { useEffect, useState } from "react";
// import { SermonCardData } from "../../Context/Data"
import { db } from "../../../API/firebase";
import { collection } from "firebase/firestore";
import { query, onSnapshot } from "firebase/firestore";
import { Link } from "react-router-dom/cjs/react-router-dom";

function SermonCard() {
  const [Sermon, setSermon] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  //---------  === CODE TO GET DATA FROM FIREBASE START === ------------
  useEffect(() => {
    setIsLoading(true);
    const q = query(collection(db, "Sermons"));
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
  // console.log(Sermon)

  const Props = Sermon;
  // const Props = SermonCardData

  // console.log(Props[0]);
  return (
    <div className=" row justify-content-center CardCon">
      {Props &&
        Props.map((data) => (
          <div key={data.id} className="col-12 col-md-6 col-lg-4">
            <div className="single-latest-sermons ">
            <Link to={`/sermon-details/${data.id}`}>
              <div className="sermons-thumbnail">
                {isLoading ? (
                  " Loading ... "
                ) : (
                  <img className="SermonImg" src={data.Imgurl} alt={data.SermonTitle} />
                )}
              </div>
              </Link>
              <div className="sermons-content">
                <div className="SermonIconCon">
                  <i className="bi bi-camera-video-fill"></i>
                  <i className="bi bi-headset"></i>
                  <i className="bi bi-file-earmark-fill"></i>
                  <i className="bi bi-cloud-arrow-down-fill"></i>
                </div>
                <div className="SermonTitle">
                  <h4>{data.SermonTitle}</h4>
                </div>

                <div className="SermonInfo">
                  <span>
                    {/* icon  */}
                    <i className="bi bi-person-fill"></i>
                  </span>
                  <span className="SermonInfotitle">
                    {/* title  */}
                    
                  </span>
                  <span className="SermonInfoName">
                    {/* answer */}
                    {data.preacher}
                  </span>
                </div>

                <div className="SermonInfo">
                  <span>
                    {/* icon  */}
                    <i className="bi bi-clock-fill"></i>
                  </span>
                  <span className="SermonInfotitle">
                    {/* title  */}
                    
                  </span>
                  <span className="SermonInfoName">
                    {/* answer */}
                    {`${data.date} on ${data.timespan}`}
                    {/* {data.date}  | 
                    {data.timespan} */}
                  </span>
                </div>

                {/* <div className="read-more-btn">
                  <Link to={`/sermon-details/${data.id}`}>
                    Read More{" "}
                    <i
                      className="fa fa-angle-double-right"
                      aria-hidden="true"
                    ></i>
                  </Link>
                </div> */}
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}

export default SermonCard;
