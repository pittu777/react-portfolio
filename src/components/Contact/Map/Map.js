import React from 'react';
import './Map.css'; // CSS file for styling

const Map = () => {
  return (
    <div className="map-container">
        
      <iframe
        title="Contact Form" 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3428.121590179898!2d76.57575967530433!3d30.771166674565762!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ffb140bd63e07%3A0x68591e334d17a988!2sChandigarh%20University!5e0!3m2!1sen!2sin!4v1688461630075!5m2!1sen!2sin"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
    
  );
};

export default Map;
