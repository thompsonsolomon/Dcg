import React from "react";
import "../Admin/Admin.css";
import AdminImg from "../../Asset/bg-img/person.jpg";
import { useState } from "react/cjs/react.development";
import { Link, useHistory } from "react-router-dom/cjs/react-router-dom";
import { auth } from "../../../API/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import CustomAlert from "../../Helpers/Alert";

function Admin() {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [Loading, setLoading] = useState(false);
  const history = useHistory();

  const HandleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (Email === "" || Password === "") {
      CustomAlert("error", "please fill in all fields ");
    }
    try {
      await signInWithEmailAndPassword(auth, Email, Password);
      setLoading(false);
      history.push("/dashboard/Home");
    } catch (error) {
      CustomAlert("error", error.message);
      setEmail("");
      setPassword("");
      setLoading(false);
    }
  };
  return (
    <div className="adminWrapper">
      <div className="wrapper fadeInDown">
        <div id="formContent">
          <div className="fadeIn first">
            <img
              src={AdminImg}
              id="icon"
              alt="User Icon"
              style={{ padding: "20px", width: "20%" }}
            />
          </div>
          <form
            id="login-form"
            action="/feed"
            method="post"
            onSubmit={HandleLogin}
          >
            <input
              type="email"
              id="login-email"
              className="fadeIn adminIn emmm"
              placeholder="login"
              value={Email}
              onChange={(e) => setEmail(e.target.value)}
              max-value={10}
              min-value={6}
              required
              autoCapitalize="true"
            />
            <input
              type="password"
              id="login-password"
              className="fadeIn third adminIn"
              placeholder="password"
              value={Password}
              required
              onChange={(e) => setPassword(e.target.value)}
            />{" "}

            <i  className=""></i>
            <br />
            <button className="fadeIn fourth adminbtn" type="submit">
              {Loading ? "Loading " : "Log in"}
            </button>
          </form>

          {/* <!-- Remind Passowrd --> */}
          <div id="formFooter">
            <Link className="underlineHover" to="/">
              Forgot Password?
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Admin;
