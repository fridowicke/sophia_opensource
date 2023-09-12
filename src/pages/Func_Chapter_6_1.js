import React from 'react';
import Layout from '@theme/Layout';
import { VerticalTimeline } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../components/player_styles.css'; // Import the styles
import CurriculumElement from '../components/CurriculumElement'; // Import the component

export default function MathCurriculum() {
  const curriculumElements = [
    {
      "title": "Intro to Exponential Functions, Video I 1",
      "videoSources": [
        {
          "name": "Show Answer a",
          "url": "https://embed.api.video/vod/viJE1qvTqtjZKAyCdLO9FOU"
        },
        {
          "name": "Show Answer b",
          "url": "https://embed.api.video/vod/vi5Ld9cVPA1ga2wK1XA82Zlf"
        },
        {
          "name": "Show Question",
          "url": "https://embed.api.video/vod/vi5q9WHZRDsAWd5TKRPqbhsg"
        }
      ]
    },
    {
      "title": "Intro to Exponential Functions, Video I 2",
      "videoSources": [
        {
          "name": "Show Video",
          "url": "https://embed.api.video/vod/vi3im3Ot69kkpClqV22Zrndj"
        }
      ]
    },
    {
      "title": "Intro to Exponential Functions, Video I 3",
      "videoSources": [
        {
          "name": "Show Video",
          "url": "https://embed.api.video/vod/vi5xwT0ZkEEe9pjUce8ShXfK"
        }
      ]
    },
    {
      "title": "Intro to Exponential Functions, Video I 4",
      "videoSources": [
        {
          "name": "Show Video",
          "url": "https://embed.api.video/vod/vi1NkOEVASc6a9doBunCmNYA"
        }
      ]
    },
    {
      "title": "Intro to Exponential Functions, Video I 5",
      "videoSources": [
        {
          "name": "Show Answer a",
          "url": "https://embed.api.video/vod/vi32dCLratVliGJGjBHkTEDo"
        },
        {
          "name": "Show Answer b",
          "url": "https://embed.api.video/vod/vi6zsJoTPHkTcFbvgLDFK2kA"
        },
        {
          "name": "Show Question",
          "url": "https://embed.api.video/vod/vi7YpYuGaGv3Sbx3PvCxYuf"
        }
      ]
    },
    {
      "title": "Intro to Exponential Functions, Video I 6",
      "videoSources": [
        {
          "name": "Show Answer a",
          "url": "https://embed.api.video/vod/vi3wycDzIdXBdDnd2Mcdn0aN"
        },
        {
          "name": "Show Answer b",
          "url": "https://embed.api.video/vod/vi5RoKcmkBPeDnfkBY7T0XiI"
        },
        {
          "name": "Show Answer c",
          "url": "https://embed.api.video/vod/vi2FNGi3tcPvpohBmsegb26e"
        },
        {
          "name": "Show Question",
          "url": "https://embed.api.video/vod/vi4wAh071ucAR3K3Qp71rcI0"
        }
      ]
    },
    {
      "title": "Intro to Exponential Functions, Video I 7",
      "videoSources": [
        {
          "name": "Show Answer a",
          "url": "https://embed.api.video/vod/vi2ipNzN14PmBFVg2Mv1LXDs"
        },
        {
          "name": "Show Answer b",
          "url": "https://embed.api.video/vod/vi1gxWkbCYKB6PcXfAFTHAWl"
        },
        {
          "name": "Show Answer c",
          "url": "https://embed.api.video/vod/vi6LiZfHlq7aLtX00ba3WEbz"
        },
        {
          "name": "Show Question",
          "url": "https://embed.api.video/vod/vi2dVy7FMDfNv8Z0U58RMaJe"
        }
      ]
    }
  ];


  const BACK_URL = "/Func_Chapter_6";

  return (
    <Layout title="Math Curriculum" description="Math Curriculum Overview">
      <div className="pageStyle">
        <div className='twoColumnContainer'>
          <div className='LeftColumn'>
            <a href={BACK_URL} className="backButtonStyle">←</a>
          </div>
          <div className='RightColumn'>
            <h1>Math Curriculum: Functions - Chapter 6.1: Intro to Exponential Functions</h1>
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
