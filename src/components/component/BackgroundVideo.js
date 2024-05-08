import React from 'react';

const BackgroundVideo = ({ video }) => {
  return (
    <div className="overflow-hidden absolute inset-0 z-0">
      <video autoPlay loop muted className="overflow-hidden min-w-full min-h-full w-auto h-auto absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default BackgroundVideo;
