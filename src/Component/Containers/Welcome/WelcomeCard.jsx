import React, { useState } from "react";
import img1 from "../../Asset/bg-img/bak (3).jpg";
import img2 from "../../Asset/bg-img/8.jpg";
import img3 from "../../Asset/bg-img/img_3.jpg";

function WelcomeCard() {
  const [showMore, setshowMore] = useState(false);
 const SeeMore = (id) =>{
 setshowMore(!showMore)
 }
  const Props = [
    {
      id: 1,
      image: img1,
      title: "Our Church",
      Text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.",
    },
    {
      id: 2,
      image: img2,
      title: "Our History",
      Text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.",
    },
    {
      id: 3,
      image: img3,
      title: "Our Sermons",
      Text: "There are many variations of passages of Lorem Ipsum available, but the majority havesuffered alteration in some form. There are many variations of passages of Lorem Ipsum available, but the majority havesuffered alteration in some form. There are many variations of passages of Lorem Ipsum available, but the majority havesuffered alteration in some form. There are many variations of passages of Lorem Ipsum available, but the majority havesuffered alteration in some form. There are many variations of passages of Lorem Ipsum available, but the majority havesuffered alteration in some form.",
    },
  ];


  // console.log(Props[1]);
  return (
    <div className="CardCon">
      {Props &&
        Props.map((data) => (
          // console.log(data);
          <div key={data.id} className="card">
            <div className="cardImg">
              <img src={data.image} alt={data.title} />
            </div>
            <div className="cardText">
              <h2>{data.title}</h2>

              <p>
                {showMore ? data.Text : `${data.Text.substring(0, 150)}`}
                <span onClick={() => SeeMore(data.id)}>
                  {showMore ? (
                    <span className="read">
                      Read Less <i className="bi bi-chevron-double-left"></i>{" "}
                    </span>
                  ) : (
                    <span className="read">
                      Read More 
                      <i className="bi bi-chevron-double-right"></i>{" "}
                    </span>
                  )}
                </span>
              </p>
            </div>
          </div>
        ))}
    </div>
  );
}

export default WelcomeCard;
