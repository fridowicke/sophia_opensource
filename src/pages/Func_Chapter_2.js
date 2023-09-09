import React from 'react';
import Layout from '@theme/Layout';
import { VerticalTimeline } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../components/player_styles.css'; // Import the styles
import CurriculumElement from '../components/CurriculumElement'; // Import the component

export default function MathCurriculum() {
  const curriculumElements = [
    {
        title: 'Video 3: Intro to Linear Functions',
        videoSources: [
          { name: 'Show Question', url: 'https://embed.api.video/vod/vi2HovHuCSsfIhDi5JUtq9kI' },
          { name: 'See Answer A', url: 'https://embed.api.video/vod/viFGvWU6h5yfOlGfOufMf7g' },
          { name: 'See Answer B', url: 'https://embed.api.video/vod/vi4m5VylwzMEXbBBOsbaCzLJ' },
          { name: 'See Answer C', url: 'https://embed.api.video/vod/vi3vpEuShzbAUc1zWKuJ0bS0' },
          { name: 'See Answer D', url: 'https://embed.api.video/vod/vi7PC9SKcQLZ5xB962pUYUQz' },
        ],
      },
      {
        title: 'Video 3: Intro to Linear Functions',
        videoSources: [
          { name: 'Show Question', url: 'https://embed.api.video/vod/vi2HovHuCSsfIhDi5JUtq9kI' },
          { name: 'See Answer A', url: 'https://embed.api.video/vod/viFGvWU6h5yfOlGfOufMf7g' },
          { name: 'See Answer B', url: 'https://embed.api.video/vod/vi4m5VylwzMEXbBBOsbaCzLJ' },
          { name: 'See Answer C', url: 'https://embed.api.video/vod/vi3vpEuShzbAUc1zWKuJ0bS0' },
          { name: 'See Answer D', url: 'https://embed.api.video/vod/vi7PC9SKcQLZ5xB962pUYUQz' },
        ],
      },
    // ... add more Math curriculum elements
  ];

  return (
    <Layout title="Math Curriculum" description="Math Curriculum Overview">
      <div className="pageStyle">
        <h1>Math Curriculum: Functions</h1>
      </div>
      <div className="pageStyle">
        <div className="timelineContainerStyle">
          <VerticalTimeline layout="1-column-left">
            {curriculumElements.map((element, index) => (
              <CurriculumElement key={index} {...element} />
            ))}
          </VerticalTimeline>
        </div>
      </div>
    </Layout>
  );
}
