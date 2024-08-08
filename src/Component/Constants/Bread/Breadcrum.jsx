import React from "react";
import { Link } from "react-router-dom";

function Breadcrum(props) {
  // console.log(props);
  return (
    <div>
      {/* <!-- ##### Breadcrumb Area Start ##### --> */}
      <div className="breadcrumb-area">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/Home">Home</Link>
                  </li>
                  {props.tag && (
                    <li className="breadcrumb-item">
                      <Link to="/sermons">{props.tag}</Link>
                    </li>
                  )}
                  {props.tag1 && (
                    <li className="breadcrumb-item active" aria-current="page">
                      {props.tag1}
                    </li>
                  )}
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- ##### Breadcrumb Area End ##### --> */}
    </div>
  );
}

export default Breadcrum;
