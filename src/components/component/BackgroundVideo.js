// BackgroundVideo.js

import React from 'react';

const BackgroundVideo = ({ video }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full overflow-hidden z-0">
      <video autoPlay loop muted playsInline className="absolute top-0 left-0 object-cover w-full h-full">
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default BackgroundVideo;