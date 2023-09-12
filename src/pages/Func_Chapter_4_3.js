import React from 'react';
import Layout from '@theme/Layout';
import { VerticalTimeline } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../components/player_styles.css'; // Import the styles
import CurriculumElement from '../components/CurriculumElement'; // Import the component

export default function MathCurriculum() {
  const curriculumElements = [
    {
      "title": "Scaling Quadratic Functions, Video P 1",
      "videoSources": [
        {
          "name": "Show Answer a",
          "url": "https://embed.api.video/vod/vi5nkzTQbvmAdhQF6EkgDp3r"
        },
        {
          "name": "Show Answer b",
          "url": "https://embed.api.video/vod/vi2nPWmLArcSXCStRyn8iBoJ"
        },
        {
          "name": "Show Answer c",
          "url": "https://embed.api.video/vod/vi6pHjuQWO53wf8TVaw1gri2"
        },
        {
          "name": "Show Answer d",
          "url": "https://embed.api.video/vod/vi7dt4Dm8NQyao2iEXvT571T"
        },
        {
          "name": "Show Question",
          "url": "https://embed.api.video/vod/vi6tG0latjlscAOuo4db0If4"
        },
        {
          "name": "Show Answer a",
          "url": "https://embed.api.video/vod/vi6ncC3WPGLMupKWnw0ODj4M"
        },
        {
          "name": "Show Answer b",
          "url": "https://embed.api.video/vod/vi6ferIS5w4ate97fz4rLJS8"
        },
        {
          "name": "Show Answer c",
          "url": "https://embed.api.video/vod/vi6wWPiEPviZ2uZLH62YBm9v"
        },
        {
          "name": "Show Answer d",
          "url": "https://embed.api.video/vod/vi3lWU6yddDX6vbwO9iNzVSC"
        },
        {
          "name": "Show Question",
          "url": "https://embed.api.video/vod/vi4ZRcnXQ1lR4SJs4bFG1vpX"
        }
      ]
    },
    {
      "title": "Scaling Quadratic Functions, Video P 2",
      "videoSources": [
        {
          "name": "Show Answer a",
          "url": "https://embed.api.video/vod/vi3UInqRNrzij0QkKCplPA17"
        },
        {
          "name": "Show Answer b",
          "url": "https://embed.api.video/vod/vi1hpROgMFKnryu82vcMgju7"
        },
        {
          "name": "Show Answer c",
          "url": "https://embed.api.video/vod/viwL67RKy1dNu6Z8qW2Qfm0"
        },
        {
          "name": "Show Answer d",
          "url": "https://embed.api.video/vod/vi3LgcysfPF0RNkl4HqC4al4"
        },
        {
          "name": "Show Question",
          "url": "https://embed.api.video/vod/vi5Ocr8D1RsfhMePTAXSAjJU"
        }
      ]
    },
    {
      "title": "Scaling Quadratic Functions, Video P 3",
      "videoSources": [
        {
          "name": "Show Answer a",
          "url": "https://embed.api.video/vod/vi3oPnfB7jI9bbW5T1Bq0IzH"
        },
        {
          "name": "Show Answer b",
          "url": "https://embed.api.video/vod/vi2vepp3M4RMWXpESAXovD7t"
        },
        {
          "name": "Show Answer c",
          "url": "https://embed.api.video/vod/vi2LhsP9eF0fBHKSgB4MZrLp"
        },
        {
          "name": "Show Answer d",
          "url": "https://embed.api.video/vod/vi5mNOm0QXV7LcoyVl3ZbtaJ"
        },
        {
          "name": "Show Question",
          "url": "https://embed.api.video/vod/vi1MHq1SsMF2L7NWbbFJx28D"
        }
      ]
    }
  ];


  const BACK_URL = "/Func_Chapter_4";

  return (
    <Layout title="Math Curriculum" description="Math Curriculum Overview">
      <div className="pageStyle">
        <div className='twoColumnContainer'>
          <div className='LeftColumn'>
            <a href={BACK_URL} className="backButtonStyle">←</a>
          </div>
          <div className='RightColumn'>
            <h1>Math Curriculum: Functions - Chapter 4.3: Scaling Quadratic Functions</h1>
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
