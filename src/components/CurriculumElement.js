import React, { useState } from 'react';
import { VerticalTimelineElement } from 'react-vertical-timeline-component';
import './player_styles.css'; // Import the styles
import VideoPanel from './VideoPanel';

const CurriculumElement = ({ title, videoSources }) => {
  const [currentVideo, setCurrentVideo] = useState(videoSources[0].url);
  const [activeButton, setActiveButton] = useState(videoSources[0].name);

  const handleButtonClick = (videoSource, buttonName) => {
    setCurrentVideo(videoSource);
    setActiveButton(buttonName);
  };

  return (
    <VerticalTimelineElement
      className="timelineElementStyle vertical-timeline-element--work"
      iconStyle={{ background: 'rgb(255, 75, 70)', color: '#fff' }}
    >
      <h1 className="video-title">{title}</h1>
      <div className="twoColumnContainer">
        <div className="leftColumn">
          <div className="button-container">
            {videoSources.map(({ name, url }) => (
              <button
                key={name}
                onClick={() => handleButtonClick(url, name)}
                style={{ backgroundColor: activeButton === name ? '#0056b3' : 'rgb(255, 75, 70)' }}
              >
                {name}
              </button>
            ))}
          </div>
        </div>
        <div className="rightColumn">
          <VideoPanel currentVideo={currentVideo} />
        </div>
      </div>
    </VerticalTimelineElement>
  );
};

export default CurriculumElement;
