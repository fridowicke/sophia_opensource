// ChapterCurriculum.js
import React from 'react';
import Layout from '@theme/Layout';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../css/syllabus_styles.css';

const ChapterElement = ({ chapter }) => (
  <VerticalTimelineElement
    className="timelineElementStyle vertical-timeline-element--work"
    iconStyle={{ background: 'rgb(255, 75, 70)', color: '#fff' }}
  >
    <h3 className="vertical-timeline-element-title">{chapter.title}</h3>
    <p>{chapter.description}</p>
    <div className="buttonContainerStyle">
      <a href={chapter.chapterLink} className="buttonStyle">Show Chapter</a>
    </div>
  </VerticalTimelineElement>
);

const ChapterCurriculum = ({ title, description, chapters }) => (
  <Layout title={title} description={description}>
    <div className="pageStyle">
      <h1>{title}</h1>
      <div className="pageStyle">
        <div className="twoColumnContainer">
          <div className="leftColumn">
          </div>
          <div className="rightColumn">
            <div className="timelineContainerStyle">
              <VerticalTimeline layout='1-column-left'>
                {chapters.map((chapter, index) => (
                  <ChapterElement key={index} chapter={chapter} />
                ))}
              </VerticalTimeline>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
);

export default ChapterCurriculum;
