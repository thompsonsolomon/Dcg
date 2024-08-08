import React, { useCallback } from "react";
import { Link } from "react-router-dom";
import "./404.css";
import img from "../../Asset/core-img/spaceman_illustration-2.png";
import { useHistory } from "react-router-dom/cjs/react-router-dom";

const Page404 = () => {
  const history = useHistory();

  const HandleGoback = useCallback(() => {
    history.push(-1);
  }, [history]);

  return (
    <div class="error-404 d-flex align-items-center justify-content-center">
      <div class="container">
        <div class="card shadow-none bg-transparent">
          <div class="row no-gutters">
            <div class="col-lg-6">
              <div class="card-body">
                <h1 class="display-1">404</h1>
                <h2 class="font-weight-bold display-4">404 Not Found</h2>
                <p>
                  You have reached the edge of the universe.
                  <br />
                  The page you requested could not be found.
                  <br />
                  Dont'worry and return to the previous page.
                </p>
                <div class="mt-5">
                  {" "}
                  <Link
                    to="/Home"
                    class="btn btn-lg btn-primary px-md-5 radius-30"
                  >
                    Go Home
                  </Link>
                  <button
                    onClick={() => HandleGoback()}
                    class="btn btn-lg btn-outline-dark ml-3 px-md-5 radius-30"
                  >
                    Back
                  </button>
                </div>
              </div>
            </div>
            <div class="col-lg-6">
              <img src={img} class="card-img" alt="" />
            </div>
            {/* <!--end row--> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page404;
