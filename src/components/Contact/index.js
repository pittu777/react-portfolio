
import { useEffect, useState, useRef } from "react";
import Loader from "react-loaders";
import emailjs from "@emailjs/browser";
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";
import Map from "./Map/Map";
import data from "../MyData/MyData";
import confetti from "canvas-confetti";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
gsap.registerPlugin(SplitText);




const Contact = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const form = useRef();
  const [isProcessing, setIsProcessing] = useState(false);
  const descRef = useRef(null);


  function onClick1() {
    confetti({
      particleCount: 150,
      spread: 60,
    });
  }

  

  useEffect(() => {
  const timeout = setTimeout(() => {
    setLetterClass("text-animate-hover");

    // SplitText animation using `onSplit`
    SplitText.create(".split", {
      type: "words, chars",
      onSplit(self) {
        gsap.from(self.chars, {
          y:100,
          autoAlpha: 0,
          stagger: {
            amount:2,
            repeat:0,
            from:"random",
          }
        });
      },
    });
  }, 0);



  return () => clearTimeout(timeout);
}, []);


  useEffect(() => {
    const timeout = setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsProcessing(true);

    emailjs
      .sendForm(
        "service_rfakgvn", // Replace with your service ID
        "template_4ytxw1b", // Replace with your template ID
        form.current,
        "Bbyr-WDgDW4N-fCSU" // Replace with your public key
      )
      .then(() => {
        toast.success("Message successfully sent!");
        setIsProcessing(false);
        form.current.reset(); // Reset the form fields
      })
      .catch(() => {
        toast.error("Failed to send the message. Please try again.");
        setIsProcessing(false);
      });
  };

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
          <h3 className="contact-desc split" ref={descRef}>{data[0].paragraph}</h3>
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
                {!isProcessing && (
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
            {isProcessing && <p>Processing...</p>}
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
      {/* ToastContainer for notifications */}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
};

export default Contact;
