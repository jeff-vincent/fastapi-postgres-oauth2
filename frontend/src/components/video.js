import React from 'react';
import './components.css'; // Assuming you have a CSS file for video player styling

const VideoPlayer = () => {
  const videoUrl = 'https://www.youtube.com/watch?v=RqTEHSBrYFw'; // Replace with your video URL

  return (
    <div className="video-player">
      <video className="video" controls>
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPlayer;

