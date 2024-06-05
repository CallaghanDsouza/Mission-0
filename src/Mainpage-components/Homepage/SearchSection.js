import React from 'react';
import './SearchSection.css';

function SearchSection() {
  return (
    <div className="search-section">
      <h1>What can we help you find?</h1>
      <p>Use our quick search function to check out upcoming events and courses.</p>
      <div className="search-filters">
        <p>Search</p>
        <input type="text" placeholder="Enter search items" />
        <p>Type</p>
        <select>
          <option value="any">Any</option>
          <option value="training">Training</option>
          <option value="events">Events</option>
          <option value="conference">Conference</option>
          <option value="awards">Awards</option>
        </select>
        <p>Location</p>
        <select>
          <option value="any">Any</option>
          <option value="auckland">Auckland</option>
          <option value="wellington">Wellington</option>
          <option value="christchurch">Christchurch</option>
          <option value="tauranga">Tauranga</option>
          <option value="queenstown">Queenstown</option>
          <option value="waikato">Waikato</option>
          <option value="online">Online</option>
        </select>
        <button>RESET</button>
      </div>
      <div className="events-grid">
        <div className="event-card">
          <img src='/images/BuildingBlocksOfSuccess.webp' alt="Event 1" />
          <div className="event-info">
            <span className="event-tag">TRAINING</span>
            <h3>Building Blocks of Brand Strategy</h3>
            <p>Whether you're looking for the tools to build your brand from the ground up or you're having...</p>
            <br />
            <br />
            <div className="event-details">
              <span>6 Jun 2024</span>
              <span>Online</span>
            </div>
          </div>
          <button className="event-button">→</button>
        </div>
        <div className="event-card">
          <img src='/images/CriticalThinking.png' alt="Event 2" />
          <div className="event-info">
            <span className="event-tag">TRAINING</span>
            <h3>Behavioural Science for Customer Journeys</h3>
            <p>Make your customer the hero. Join us to look at the drivers of human behaviour, and how a greater...</p>
            <div className="event-details">
              <span>10 Jun 2024</span>
              <span>Auckland</span>
            </div>
          </div>
          <br /><br /><br />
          <button className="event-button">→</button>
        </div>
        <div className="event-card">
          <img src='/images/BrainyBreakfast.jpeg' alt="Event 3" />
          <div className="event-info">
            <span className="event-tag">EVENT</span>
            <h3>Brainy Breakfast</h3>
            <p>The Disrupters: A New Generation of Brands. ZURU Edge. Two Dudes. BLUNT.</p>
            <div className="event-details">
              <span>12 Jun 2024</span>
              <span>Auckland</span>
            </div>
          </div>
          <button className="event-button">→</button>
        </div>
        <div className="event-card">
          <img src='/images/Digitalday.png' alt="Event 4" />
          <div className="event-info">
            <span className="event-tag">TRAINING</span>
            <h3>Advanced Social Media Marketing</h3>
            <p>Dive deeper into the social platforms that everyone is familiar with to find the hidden tools to...</p>
            <div className="event-details">
              <span>12 Jun 2024</span>
              <span>Auckland</span>
            </div>
          </div>
          <button className="event-button">→</button>
        </div>
        <div className="event-card">
          <img src='/images/StakeHolder.avif' alt="Event 5" />
          <div className="event-info">
            <span className="event-tag">TRAINING</span>
            <h3>Agency and Media Transparency</h3>
            <p>Join international expert David Reid to gain a greater appreciation of the importance of your...</p>
            <div className="event-details">
              <span>18 Jun 2024</span>
              <span>Auckland</span>
            </div>
          </div>
          <br/><br/><br/>
          <button className="event-button">→</button>
        </div>
      </div>
    </div>
  );
}

export default SearchSection;
