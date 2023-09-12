import React from 'react';
import Layout from '@theme/Layout';
import { VerticalTimeline } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../components/player_styles.css'; // Import the styles
import CurriculumElement from '../components/CurriculumElement'; // Import the component


export default function MathCurriculum() {
  const curriculumElements = [
    {
      "title": "Linear functions: from Term to Graph, Video I 1",
      "videoSources": [
        {
          "name": "Show Answer a",
          "url": "https://embed.api.video/vod/vi20hpqUgysmwKKzL3dljOYI"
        },
        {
          "name": "Show Answer b",
          "url": "https://embed.api.video/vod/vi2dALu3lkJaezIRKak7iO09"
        },
        {
          "name": "Show Answer c",
          "url": "https://embed.api.video/vod/vi2AmTao033lG1BWtIn6gdp1"
        },
        {
          "name": "Show Question",
          "url": "https://embed.api.video/vod/vi7cku1AUT6XWK4zX5CrQXir"
        }
      ]
    },
    {
      "title": "Linear functions: from Term to Graph, Video I 2",
      "videoSources": [
        {
          "name": "Show Video",
          "url": "https://embed.api.video/vod/vi6grbnwTdSDosonaq1slKmW"
        }
      ]
    },
    {
      "title": "Linear functions: from Term to Graph, Video P 1",
      "videoSources": [
        {
          "name": "Show Answer a",
          "url": "https://embed.api.video/vod/vi4voUkuyVgxDzqUOnV48cc0"
        },
        {
          "name": "Show Answer b",
          "url": "https://embed.api.video/vod/viUIRw9u50pOtfCWM6wJvHm"
        },
        {
          "name": "Show Answer c",
          "url": "https://embed.api.video/vod/vi1OSk4hhPKMGg8Ui2XEtRhq"
        },
        {
          "name": "Show Question",
          "url": "https://embed.api.video/vod/vi2NBstYKETBiWQse9kY0P62"
        }
      ]
    },
    {
      "title": "Linear functions: from Term to Graph, Video P 2",
      "videoSources": [
        {
          "name": "Show Answer a",
          "url": "https://embed.api.video/vod/vi71TD12gorwe0f0j55wLVbU"
        },
        {
          "name": "Show Answer b",
          "url": "https://embed.api.video/vod/vi4ZOcTuTmHAAUxm2YQ6OUGG"
        },
        {
          "name": "Show Answer c",
          "url": "https://embed.api.video/vod/viux386dtx6EtQmfP0tQqiv"
        },
        {
          "name": "Show Question",
          "url": "https://embed.api.video/vod/vi5OmRSPEU4PBCpouEKoiGAe"
        }
      ]
    },
    {
      "title": "Linear functions: from Term to Graph, Video P 3",
      "videoSources": [
        {
          "name": "Show Answer a",
          "url": "https://embed.api.video/vod/vi4vtRLVrY4LmfePbHYXOusQ"
        },
        {
          "name": "Show Answer b",
          "url": "https://embed.api.video/vod/vi6DFIiFnwnKWy3vgE7XJeFb"
        },
        {
          "name": "Show Answer c",
          "url": "https://embed.api.video/vod/vi3qwJSW6yofDzsNE9TGzOzl"
        },
        {
          "name": "Show Question",
          "url": "https://embed.api.video/vod/vi7Mjf1vcNOBQVwU0HGPsT6r"
        }
      ]
    },
    {
      "title": "Linear functions: from Term to Graph, Video P 4",
      "videoSources": [
        {
          "name": "Show Answer a",
          "url": "https://embed.api.video/vod/vi2f1wgzbDD0LvKcwjXZnu5v"
        },
        {
          "name": "Show Answer b",
          "url": "https://embed.api.video/vod/vi6LtUSa0ja5rC4BPm6Z84XU"
        },
        {
          "name": "Show Answer c",
          "url": "https://embed.api.video/vod/vi72M2RiehqkbPKQ2uEkCpnQ"
        },
        {
          "name": "Show Question",
          "url": "https://embed.api.video/vod/vigpczpSttTLpwy2yAwGtZw"
        }
      ]
    }
  ];

  const BACK_URL = "/Func_Chapter_2";

  return (
    <Layout title="Math Curriculum" description="Math Curriculum Overview">
      <div className="pageStyle">
        <div className='twoColumnContainer'>
          <div className='LeftColumn'>
            <a href={BACK_URL} className="backButtonStyle">←</a>
          </div>
          <div className='RightColumn'>
            <h1>Math Curriculum: Functions - Chapter 2.2: Linear functions: from Term to Graph</h1>
          </div>
          <div></div>
          </div>
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
