import React from 'react';
import './Footer.css'

function Footer() {
  return (
    <div className="business-partners">
        <h2>Our Principal Business Partners</h2>
            <div className="partners-logos">
            <img src='/images/westpac.png' alt="Westpac" />
            <img src='/images/google.png' alt="Google" />
            <img src='/images/spark.png' alt="Spark" />
        </div>
    </div>
  )
}

export default Footer;