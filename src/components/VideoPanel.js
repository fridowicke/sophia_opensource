import React from 'react';
import './player_styles.css'; // Import the styles

const VideoPanel = ({ currentVideo }) => (
  <div
    style={{
      position: 'relative',
      paddingTop: '177.78%',
    }}
  >
    <iframe
      src={currentVideo}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
      }}
      frameBorder="0"
      scrolling="no"
      allowFullScreen={true}
      title="Math Video"
    ></iframe>
  </div>
);

export default VideoPanel;
