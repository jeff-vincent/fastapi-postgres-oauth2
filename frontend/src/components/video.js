import React from 'react';
import './components.css'; // Assuming you have a CSS file for video player styling

const VideoPlayer = () => {
  const videoUrl = 'http://localhost:8084/app/stream/618cc409013a1a342223d0f33567e997'; // Replace with your video URL

  return (
    <div className="video-player" style={{ width: '3in', height: '3in', marginLeft: '1in' }}>
      <video className="video" controls>
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPlayer;
