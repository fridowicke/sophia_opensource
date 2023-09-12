import React from 'react';
import Layout from '@theme/Layout';
import { VerticalTimeline } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../components/player_styles.css'; // Import the styles
import CurriculumElement from '../components/CurriculumElement'; // Import the component


export default function MathCurriculum() {
  const curriculumElements = [
    {
      "title": "Intro to Quadratic Functions, Video I 1",
      "videoSources": [
        {
          "name": "Show Answer a",
          "url": "https://embed.api.video/vod/vi1sTC36KTpu3idMuZgyHIGr"
        },
        {
          "name": "Show Answer b",
          "url": "https://embed.api.video/vod/vi7Qg8fLJB2irz2jP9jEzHIA"
        },
        {
          "name": "Show Answer c",
          "url": "https://embed.api.video/vod/vi6SG3QEo23vvk3Hgptm09jV"
        },
        {
          "name": "Show Question",
          "url": "https://embed.api.video/vod/vi4yO6JwLsDFiwimeFBtxqYS"
        }
      ]
    },
    {
      "title": "Intro to Quadratic Functions, Video I 2",
      "videoSources": [
        {
          "name": "Show Answer a",
          "url": "https://embed.api.video/vod/vi2BXh5xEJ5ktfl4dV97ZqxV"
        },
        {
          "name": "Show Answer b",
          "url": "https://embed.api.video/vod/vi3rV7bKNaYZUJgMzZLz5L0T"
        },
        {
          "name": "Show Answer c",
          "url": "https://embed.api.video/vod/vi6IXLYOpQs1b6S4DvEg4NmC"
        },
        {
          "name": "Show Question",
          "url": "https://embed.api.video/vod/vi1hZU6zpInbplVOoRluv900"
        }
      ]
    },
    {
      "title": "Intro to Quadratic Functions, Video I 3",
      "videoSources": [
        {
          "name": "Show Video",
          "url": "https://embed.api.video/vod/vi4cBnghoTpdXF7eT4ggBAU"
        }
      ]
    },
    {
      "title": "Intro to Quadratic Functions, Video I 4",
      "videoSources": [
        {
          "name": "Show Video",
          "url": "https://embed.api.video/vod/vi1FyK92GqLLF9lwImIccCf8"
        }
      ]
    },
    {
      "title": "Intro to Quadratic Functions, Video I 5",
      "videoSources": [
        {
          "name": "Show Video",
          "url": "https://embed.api.video/vod/vi4JnNBhCsfe0ruuwhNHcyHt"
        }
      ]
    },
    {
      "title": "Intro to Quadratic Functions, Video I 6",
      "videoSources": [
        {
          "name": "Show Answer a",
          "url": "https://embed.api.video/vod/vitb9czpxnyqUOP3WmQQFwc"
        },
        {
          "name": "Show Answer b",
          "url": "https://embed.api.video/vod/vi5fHEgBiD4aQvJ8CdkAka77"
        },
        {
          "name": "Show Answer c",
          "url": "https://embed.api.video/vod/vi2Q5QUP9Gp8YEnNaogg0K8I"
        },
        {
          "name": "Show Answer d",
          "url": "https://embed.api.video/vod/vi3GhiJ65nbviYTHTlstXwUP"
        },
        {
          "name": "Show Question",
          "url": "https://embed.api.video/vod/vi3D3bqUitHQKAZkMGnZXmdH"
        }
      ]
    },
    {
      "title": "Intro to Quadratic Functions, Video I 7",
      "videoSources": [
        {
          "name": "Show Answer a",
          "url": "https://embed.api.video/vod/vi4Lskq0uWXvua7dFGDeswa6"
        },
        {
          "name": "Show Answer b",
          "url": "https://embed.api.video/vod/vi1XSpErhhIhLgvYjuBJlqVs"
        },
        {
          "name": "Show Answer c",
          "url": "https://embed.api.video/vod/vi1li56zN0ymd6q92WVEiUG7"
        },
        {
          "name": "Show Answer d",
          "url": "https://embed.api.video/vod/vizvmmhS5CKmcJy5EojJA7X"
        },
        {
          "name": "Show Question",
          "url": "https://embed.api.video/vod/vi6stjmYwKRu2He2bNauegcX"
        }
      ]
    },
    {
      "title": "Intro to Quadratic Functions, Video I 8",
      "videoSources": [
        {
          "name": "Show Answer a",
          "url": "https://embed.api.video/vod/vi4D1OOorJixOYGp1ugHwF3b"
        },
        {
          "name": "Show Question",
          "url": "https://embed.api.video/vod/vi6EQF3vVJL6bzSvsQAJxXii"
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
            <h1>Math Curriculum: Functions - Chapter 4.1: Intro to Quadratic Functions</h1>
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
