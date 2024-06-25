import { useEffect, useState } from "react";
import Loader from "react-loaders";

import { useRef } from "react";
import emailjs from "@emailjs/browser";
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";
import Map from "./Map/Map";
import data from "../MyData/MyData";
import confetti from "canvas-confetti";

const Contact = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const form = useRef();
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  function onClick1() {
    confetti({
      particleCount: 150,
      spread: 60,
    });
  }

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  var message = "Processing.........";

  const sendEmail = (e) => {
    e.preventDefault();

    setIsProcessing(true);

    emailjs
      .sendForm(
        "service_rfakgvn",
        "template_4ytxw1b",
        form.current,
        "Bbyr-WDgDW4N-fCSU"
      )
      .then(() => {
        // alert('Message successfully sent!');
        setIsSuccess(true);
        // window.location.reload(false);
      })
      .catch(() => {
        setIsError(true);
        // alert('Failed to send the message, please try again');
      });
  };
  useEffect(() => {
    if (isSuccess || isError) {
      const closePopup = () => {
        setIsSuccess(false);
        setIsError(false);

        window.location.reload(false);
      };

      const timeoutId = setTimeout(closePopup, 300000); //3000 put time also Change the duration (in milliseconds) as desired

      return () => clearTimeout(timeoutId);
    }
  }, [isSuccess, isError]);

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={["C", "o", "n", "t", "a", "c", "t", " ", "m", "e"]}
              idx={15}
            />
          </h1>
          <h3>{data[0].paragraph}</h3>
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input placeholder="Name" type="text" name="name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>

                {!isSuccess && !isError && (
                  <li>
                    <input
                      onClick={onClick1}
                      type="submit"
                      className="flat-button button"
                      value="SEND"
                    />
                  </li>
                )}
              </ul>
            </form>
            {isProcessing && <p>{message}</p>}
            {isSuccess && (
              <div className="success-popup">
                <h1>Success</h1>
                <button onClick={() => window.location.reload(false)}>
                  OK
                </button>
              </div>
            )}
            {isError && (
              <div className="error-popup">
                <h1>Failed to send the message</h1>
                <button onClick={() => window.location.reload(false)}>
                  OK
                </button>
              </div>
            )}
          </div>
        </div>
        <div className="info-map">
          {data[0].name},
          <br />
          {data[0].city},
          <br />
          {data[0].state}, <br />
          {data[0].country} <br />
          <br />
          <span>{data[0].mail}</span>
        </div>
        <div className="map-wrap">
          <Map />
        </div>
      </div>

      <Loader type="pacman" />
    </>
  );
};

export default Contact;
