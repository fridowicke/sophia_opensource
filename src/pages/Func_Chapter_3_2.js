import React from 'react';
import Layout from '@theme/Layout';
import { VerticalTimeline } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../components/player_styles.css'; // Import the styles
import CurriculumElement from '../components/CurriculumElement'; // Import the component


export default function MathCurriculum() {
  const curriculumElements = [
    {
      "title": "Asymptotes of fractional rational functions, Video I 1",
      "videoSources": [
        {
          "name": "Show Video",
          "url": "https://embed.api.video/vod/vi2hosBqMcERqj5ypIPmNcRB"
        }
      ]
    },
    {
      "title": "Asymptotes of fractional rational functions, Video I 2",
      "videoSources": [
        {
          "name": "Show Answer a",
          "url": "https://embed.api.video/vod/vi1U5IYprgVVe58eAQ1nRFy1"
        },
        {
          "name": "Show Answer b",
          "url": "https://embed.api.video/vod/vi1Q7YrACSUCBMIDs0Ah7zW7"
        },
        {
          "name": "Show Answer c",
          "url": "https://embed.api.video/vod/vi1PCU7vXldMxrtw4HnTyV0d"
        },
        {
          "name": "Show Question",
          "url": "https://embed.api.video/vod/vi2iiyFQQPQvpNL4tfGeZ5Vl"
        }
      ]
    },
    {
      "title": "Asymptotes of fractional rational functions, Video I 3",
      "videoSources": [
        {
          "name": "Show Video",
          "url": "https://embed.api.video/vod/vi6joopAWfJ6O0aNDgDEEznd"
        }
      ]
    },
    {
      "title": "Asymptotes of fractional rational functions, Video P 1",
      "videoSources": [
        {
          "name": "Show Answer a",
          "url": "https://embed.api.video/vod/vi2Q2Loafhk6N2nQBGEVYjtq"
        },
        {
          "name": "Show Answer b",
          "url": "https://embed.api.video/vod/vi3oB3GacpVcjPI5WbidV8wr"
        },
        {
          "name": "Show Answer c",
          "url": "https://embed.api.video/vod/vi3k90OwfAh7jfaeGiN6Ws7O"
        },
        {
          "name": "Show Answer d",
          "url": "https://embed.api.video/vod/vi6NHaaeycbVPi5qO3Akqy79"
        },
        {
          "name": "Show Question",
          "url": "https://embed.api.video/vod/vi4PeDKRO1PE1OtOxG5sUs5h"
        }
      ]
    },
    {
      "title": "Asymptotes of fractional rational functions, Video P 2",
      "videoSources": [
        {
          "name": "Show Answer a",
          "url": "https://embed.api.video/vod/viJQwWDocsLkcEUXj4IHv3H"
        },
        {
          "name": "Show Answer b",
          "url": "https://embed.api.video/vod/vi5dV9GXViApNGUVfS4aTpxL"
        },
        {
          "name": "Show Answer c",
          "url": "https://embed.api.video/vod/vi6uaP45dEOlSpJrsACSX1m5"
        },
        {
          "name": "Show Answer d",
          "url": "https://embed.api.video/vod/vi47Arpo3AtJOmp9mjKJ05Iv"
        },
        {
          "name": "Show Question",
          "url": "https://embed.api.video/vod/vi7SHpOdzQgFRc8ltnC6zEG1"
        }
      ]
    },
    {
      "title": "Asymptotes of fractional rational functions, Video P 3",
      "videoSources": [
        {
          "name": "Show Answer a",
          "url": "https://embed.api.video/vod/vi1PC0XOfKS2N7lJS1JPwmNm"
        },
        {
          "name": "Show Answer b",
          "url": "https://embed.api.video/vod/vi5PRBoRP9NM4SWl7CKEJV1i"
        },
        {
          "name": "Show Answer c",
          "url": "https://embed.api.video/vod/vi6NGa2mXVd2VEAS3MXyrOsa"
        },
        {
          "name": "Show Answer d",
          "url": "https://embed.api.video/vod/vi4YjJuewCgYNn991FjdoLTP"
        },
        {
          "name": "Show Question",
          "url": "https://embed.api.video/vod/vi32ZQHjJvf50naxypdOt4eJ"
        }
      ]
    }
  ];
  const BACK_URL = "/Func_Chapter_3";

  return (
    <Layout title="Math Curriculum" description="Math Curriculum Overview">
      <div className="pageStyle">
        <div className='twoColumnContainer'>
          <div className='LeftColumn'>
            <a href={BACK_URL} className="backButtonStyle">←</a>
          </div>
          <div className='RightColumn'>
            <h1>Math Curriculum: Functions - Chapter 3.2: Asymptotes of fractional rational functions</h1>
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
