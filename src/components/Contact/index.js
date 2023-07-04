import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const form = useRef();
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);


  

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    setIsProcessing(true);

    emailjs
      .sendForm('service_rfakgvn', 'template_4ytxw1b', form.current, 'Bbyr-WDgDW4N-fCSU')
      .then(
        () => {
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
    
        const timeoutId = setTimeout(closePopup, 3000); // Change the duration (in milliseconds) as desired
    
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
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <h3>
            I am interested in freelance opportunities - especially on ambitious or large projects. However, if you have any other requests or questions, don't hesitate to contact me using the form below.
          </h3>
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input placeholder="Name" type="text" name="name" required />
                </li>
                <li className="half">
                  <input placeholder="Email" type="email" name="email" required />
                </li>
                <li>
                  <input placeholder="Subject" type="text" name="subject" required />
                </li>
                <li>
                  <textarea placeholder="Message" name="message" required></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
            {isProcessing && (<p>Processing.........</p>)}
            {isSuccess && (
  <div className="success-popup">
    <h1>Success</h1>
    <button onClick={() => window.location.reload(false)}>OK</button>
  </div>
  
  
)}
{isError && (
    <div className="error-popup">
      <h1>Failed to send the message</h1>
      <button onClick={() => window.location.reload(false)}>OK</button>
    </div>
  )}
          </div>
        </div>
        <div className="info-map">
          PITTU PRASANTH,
          <br />
          CHANDIGARH,
          <br />
          PUNJAB <br />
          INDIA <br />
          <br />
          <span>pittuprasanth98@gmail.com</span>
        </div>
        <div className="map-wrap">
        
        <iframe
        title="Contact Form" 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3428.121590179898!2d76.57575967530433!3d30.771166674565762!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ffb140bd63e07%3A0x68591e334d17a988!2sChandigarh%20University!5e0!3m2!1sen!2sin!4v1688461630075!5m2!1sen!2sin"
        width="800"
        height="600"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
        </div>
        
      </div>
    
      <Loader type="pacman" />
    </>
  );
};

export default Contact;