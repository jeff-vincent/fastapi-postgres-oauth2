import React from 'react';
import VideoPlayer from './video';
import Profile from './profile';
import Terminal from './terminal';
import IDE from './ide';
import './components.css'; // Assuming you have a CSS file for grid layout styling

const Grid = () => {
  return (
    <div className="grid-container">
        <div className="">
            <VideoPlayer />
        </div>
        <div className="">
            <Profile />
        </div>
        <div className="">
            <IDE />
        </div>
        <div className="">
            < Terminal/>
        </div>
    </div>
  );
};

export default Grid;