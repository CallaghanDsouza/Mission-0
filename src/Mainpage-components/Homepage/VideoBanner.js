import React from 'react';
import './VideoBanner.css';

function VideoBanner() {
  return (
    <div className='video-banner'>
      <div className='content'>
        <h1>NEW ZEALAND <br/> MARKETING AGENCY</h1><br />
        <p>Connecting Market Spaces Digitally</p><br />
        <div className="search-bar">
          <input type="text" placeholder="Search..." />
          <button>🔍</button>
        </div>
      </div>
      <video className='video-background' src='/videos/video.mp4' autoPlay loop muted />
    </div>
  );
}

export default VideoBanner;
