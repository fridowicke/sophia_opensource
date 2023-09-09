// components/ChapterElement.js
import React from 'react';
import { VerticalTimelineElement } from 'react-vertical-timeline-component';

const ChapterElement = ({ title, description, videoLink, codeLink }) => (
  <VerticalTimelineElement
    className="timelineElementStyle vertical-timeline-element--work"
    iconStyle={{ background: 'rgb(255, 75, 70)', color: '#fff' }}
  >
    <h3 className="vertical-timeline-element-title">{title}</h3>
    <p>{description}</p>
    <div className="buttonContainerStyle">
      <a href={videoLink} className="buttonStyle">Videos</a>
      <a href={codeLink} className="buttonStyle">Code</a>
    </div>
  </VerticalTimelineElement>
);

export default ChapterElement;
