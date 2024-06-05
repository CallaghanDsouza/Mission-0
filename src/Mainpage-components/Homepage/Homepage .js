import React from 'react';
import './Homepage.css';
import VideoBanner from './VideoBanner';
import SearchSection from './SearchSection';


function Homepage() {
  return (
    <div>
      <VideoBanner />

      <div className="container">
        <div className="section">
          <div className="text-content">
            <h1>Digital Day Out is this July!</h1>
            <p><strong>The programme is finalised. The speakers are confirmed. And the team at the MA are busy preparing our biggest conference of the year! Have you got your ticket?</strong></p>
            <p>Duolingo, Spotify, Google, FCB Toronto are our four confirmed international keynotes! And then we have an amazing line-up of local experts ready to take the stage.</p>
            <p>Grab your ticket and join us 2 July at Aotea Centre.</p>
            <button>FIND OUT MORE</button>
          </div>
          <div className="image-content">
            <img src='/images/Digitalday.png' alt="Digital Day Out" />
          </div>
        </div>
    <br />

        <div className="section">
        <div className="image-content">
            <img src='/images/BrainyBreakfast.jpeg' alt="Brainy Breakfast" height='800px' width='110%'/> 
          </div>
          <div className="text-content">
            <h1>Brainy Breakfast June, Auckland</h1>
            <p><strong>ZURU Edge. Two Dudes. BLUNT.</strong></p>
            <p>Three incredible New Zealand brands reinventing categories, taking on the world, and doing things differently. Are you ready to be inspired? To learn from some of NZ’s most ambitious brands?</p>
            <button>FIND OUT MORE</button> 
          </div>
        </div>
      </div>

      <div className="exhibitor-section">
        <h2>Become an Exhibitor at Digital Day Out 2024</h2>
        <p>Get in touch to find out more about sponsorship options.</p>
        <p className="email">callaghandsouza@marketing.org.nz</p>
      </div>  

      <div className="best-practice-services">
        <h2>Best Practice Services</h2>
        <div className="services-container">
          <div className="service-item">
            <img src='/images/DoNotCall.png' alt="Do Not Call / Do Not Mail" />
            <h3>Do Not Call / Do Not Mail</h3>
            <p>The Marketing Association offers a number of free services for consumers because we understand that, with the best will in the world, occasionally things can go wrong.</p>
            <button>FIND OUT MORE</button>
          </div>
          <div className="service-item">
            <img src='/images/ExpertAdvice.png' alt="Advice Line" />
            <br />
            <br/>
            <h3>Advice Line</h3>
            <p>We're here to help our members stay on the right side of the many laws that affect marketing and marketers.</p>
            <br />
           <button>FIND OUT MORE</button>
          </div>
          <div className="service-item">
            <img src='/images/Secret.png' alt="Name Suppression Service" />
            <h3>Name Suppression Service</h3>
            <p>If you are a professional marketer committed to best practice, keep reading...</p>
            <button>FIND OUT MORE</button>
          </div>
          <div className="service-item">
            <img src='/images/Mailbox.png' alt="Mailbox Complaints" />
            <h3>Mailbox Complaints</h3>
            <p>If you're receiving unwanted, unaddressed advertising mail, you can report this by emailing the complaints department of the two major distributors.</p>
            <button>FIND OUT MORE</button>
          </div>
        </div>
      </div>

      <div className="workshops-banner">
        <img src='/images/BlurredImage.png' alt="In-House Workshops" />
        <div className="workshops-text">
          <h2>In-House Workshops</h2>
          <p>A convenient and cost effective way to upskill your whole team.</p>
        </div>
      </div>

      <SearchSection />
     

    </div>
  );
}

export default Homepage;
