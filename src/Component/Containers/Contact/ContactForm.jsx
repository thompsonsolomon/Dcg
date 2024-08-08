import React, { useState } from "react";
import { db } from "../../../API/firebase";
import { collection, addDoc } from "firebase/firestore";
import CustomAlert from "../../Helpers/Alert";

function ContactForm() {
  const [Fullname, setFullName] = useState("");
  const [Email, setEmail] = useState("");
  const [Phone, setPhone] = useState("");
  const [Message, setMessage] = useState("");
  const [Loading, setLoading] = useState(false);

  const SendMessage = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const current = new Date();
      // By default US English uses 12hr time with AM/PM
      const time = current.toLocaleTimeString("en-US");
      if (Fullname && Message !== "") {
        await addDoc(collection(db, "Contact"), {
          Fullname,
          Email,
          Phone,
          Message,
          time,
        });
        CustomAlert("success", "Message Sent Thank You");
        setEmail("");
        setFullName("");
        setMessage("");
        setPhone("");
      } else {
        CustomAlert("error", "Pls Write a message  ");
        setLoading(false);
      }
    } catch (error) {
      CustomAlert("error", "Error Occured");
      // setError("error Occured")
      console.log(error);
      setLoading(false);
    }
  };
  return (
    <div>
      <div className="contact-form section-padding-0-100" id="donate">
        <div className="container">
          <div className="row">
            {/* <!-- Section Heading --> */}
            <div className="col-12">
              <div className="section-heading">
                <h2>Leave A Message</h2>
                <p>
                  Your email address will not be published. Required fields are
                  marked.
                </p>
              </div>
            </div>
          </div>

          <div className="row formCon">
            <div className="col-12">
              {/* <!-- Contact Form Area --> */}
              <div className="contact-form-area">
                <form onSubmit={SendMessage}>
                  <div className="row">
                    <div className="col-12 col-lg-4">
                      <div className="form-group">
                        <label htmlFor="contact-name">Full Name*:</label>
                        <input
                          type="text"
                          required
                          className="form-control"
                          id="contact-name"
                          placeholder="Full Name"
                          name="name"
                          value={Fullname}
                          onChange={(e) => setFullName(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="col-12 col-lg-4">
                      <div className="form-group">
                        <label htmlFor="contact-email">Email*:</label>
                        <input
                          type="email"
                          required
                          className="form-control"
                          id="contact-email"
                          placeholder="info@dcg.org"
                          value={Email}
                          name="emai"
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="col-12 col-lg-4">
                      <div className="form-group">
                        <label htmlFor="contact-number">Phone*:</label>
                        <input
                          type="number"
                          required
                          className="form-control"
                          id="contact-number"
                          placeholder="(+12) 123 456 7910"
                          value={Phone}
                          name="number"
                          onChange={(e) => setPhone(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-group">
                        <label htmlFor="message">Message*:</label>
                        <textarea
                          className="form-control"
                          name="message"
                          id="message"
                          cols="30"
                          rows="10"
                          placeholder="Message"
                          value={Message}
                          onChange={(e) => setMessage(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="col-12 text-center">
                      <button className="btn crose-btn mt-15" type="submit">
                        {Loading ? "Loading" : "Submit Now"}
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
  );
}

export default ContactForm;
