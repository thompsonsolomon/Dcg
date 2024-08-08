import React, { useState } from "react";
import "./index.css";
import "./Component/Styles/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NaveBar from "./Component/Constants/Header/NaveBar";
import EventPage from "./Component/Pages/EventPage";
import Main from "./Component/Pages/Main";
import SermonDetails from "./Component/Containers/SermonDetails/SermonDetails";
import SermonPage from "./Component/Pages/SermonPage";
import Footer from "./Component/Constants/Footer/Footer";
import AboutPage from "./Component/Pages/AboutPage";
import ContactPage from "./Component/Pages/ContactPage";
import Four0Four from "./Component/Pages/Four0Four";
import NetworkController from "./Component/Helpers/NetworkController";
import DonamePage from "./Component/Pages/DonatePage";
import Stream from "./Component/Containers/LiveStream";
import EventDetails from "./Component/Containers/EventDetails/EventDetails";
export default function App() {
  const [Preloader, setPreloader] = useState(true);
  //Preloader timer
  setTimeout(() => {
    setPreloader(false);
  }, 5000);
  return (
    <div className="App">
      {Preloader && (
        <div className="preloader">
          <div className="line-preloader"></div>
        </div>
      )}
      <Router>
        {/* <NetworkController /> */}
        <div>
          <Switch>
            <Route path="/sermon-details/:id">
              <div>
                <NaveBar />
                <SermonDetails />
                <Footer />
              </div>
            </Route>

            <Route exact path="/event">
              <div>
                <EventPage />
              </div>
            </Route>

            <Route exact path="/sermons">
              <SermonPage />
            </Route>
            <Route exact path="/donate_us">
              <DonamePage />
            </Route>
            <Route exact path="/stream">
              <Stream />
            </Route>
            <Route exact path="/about">
              <AboutPage />
            </Route>
            <Route exact path="/Event-details/:id">
              <NaveBar />
              <EventDetails />
              <Footer />
            </Route>

            <Route exact path="/Contact">
              <ContactPage />
            </Route>

            <Route exact path="/Home">
              <Main />
            </Route>

            <Route exact path="/">
              <Main />
            </Route>

            <Route path="*">
              {/* <div>no page found </div> */}
              <Four0Four />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}
