import React from 'react';
import Layout from '@theme/Layout';
import { VerticalTimeline } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../components/player_styles.css'; // Import the styles
import CurriculumElement from '../components/CurriculumElement'; // Import the component


export default function MathCurriculum() {
  const curriculumElements = [
    {
      "title": "Representations of Quadratic Functions, Video I 1",
      "videoSources": [
        {
          "name": "Show Answer a",
          "url": "https://embed.api.video/vod/vi2DfW9bAfatMGIs4V9Bvwrg"
        },
        {
          "name": "Show Answer b",
          "url": "https://embed.api.video/vod/vi1EJrdYB6TSyjXinyKvxG4V"
        },
        {
          "name": "Show Answer c",
          "url": "https://embed.api.video/vod/vi48I0YeRquMcv2okeavT36H"
        },
        {
          "name": "Show Question",
          "url": "https://embed.api.video/vod/vi55PhAMUuhEKDMb5RpKivPM"
        }
      ]
    },
    {
      "title": "Representations of Quadratic Functions, Video I 2",
      "videoSources": [
        {
          "name": "Show Answer a",
          "url": "https://embed.api.video/vod/vi3cIqzUUnmH8ygJoQOeah4w"
        },
        {
          "name": "Show Answer b",
          "url": "https://embed.api.video/vod/vi6E7lErZh6l2FI5obBII8xg"
        },
        {
          "name": "Show Answer c",
          "url": "https://embed.api.video/vod/vi3KdAKunP27hcrf4d6t3VI5"
        },
        {
          "name": "Show Question",
          "url": "https://embed.api.video/vod/vi4YJNRYtF8VehPtc9U4yV3G"
        }
      ]
    },
    {
      "title": "Representations of Quadratic Functions, Video I 3",
      "videoSources": [
        {
          "name": "Show Answer a",
          "url": "https://embed.api.video/vod/vi4e6sG6SEfWwH7YQupUsqi4"
        },
        {
          "name": "Show Answer b",
          "url": "https://embed.api.video/vod/vi12h6vMvn6d7NDyT6TJeNFT"
        },
        {
          "name": "Show Answer c",
          "url": "https://embed.api.video/vod/vi3HNipSVC0q7qePeMUN1mJH"
        },
        {
          "name": "Show Answer d",
          "url": "https://embed.api.video/vod/vi48MDAdQNxwQz9HwPXL5RqO"
        },
        {
          "name": "Show Question",
          "url": "https://embed.api.video/vod/vi5yLiroUFNnxfranb5fUlCi"
        }
      ]
    },
    {
      "title": "Representations of Quadratic Functions, Video I 4",
      "videoSources": [
        {
          "name": "Show Answer a",
          "url": "https://embed.api.video/vod/vi4I0KWlLjP6cCFz23dQAG9x"
        },
        {
          "name": "Show Answer b",
          "url": "https://embed.api.video/vod/viszd9BrQIC5y2awiy3oWmr"
        },
        {
          "name": "Show Answer c",
          "url": "https://embed.api.video/vod/vi32r3VR8WFmNNV5hEywOooB"
        },
        {
          "name": "Show Answer d",
          "url": "https://embed.api.video/vod/vi3akQ1puMT2FJRspR42rh5Z"
        },
        {
          "name": "Show Question",
          "url": "https://embed.api.video/vod/vi7KepZtwdJKRtJevgBTQ4Br"
        }
      ]
    },
    {
      "title": "Representations of Quadratic Functions, Video I 5",
      "videoSources": [
        {
          "name": "Show Answer a",
          "url": "https://embed.api.video/vod/viXQe2yzfsOs3LgtsO2g0xk"
        },
        {
          "name": "Show Answer b",
          "url": "https://embed.api.video/vod/vi7j7rEw2psjSSI9hpIF0cfE"
        },
        {
          "name": "Show Answer c",
          "url": "https://embed.api.video/vod/vi25qnbvI3aypJhWsWNcGZpW"
        },
        {
          "name": "Show Question",
          "url": "https://embed.api.video/vod/vi2bGssKpX1daYizKtoJkqF4"
        }
      ]
    },
    {
      "title": "Representations of Quadratic Functions, Video I 6",
      "videoSources": [
        {
          "name": "Show Answer a",
          "url": "https://embed.api.video/vod/viyDHMUrgIUeFb0KNQ67FNs"
        },
        {
          "name": "Show Answer b",
          "url": "https://embed.api.video/vod/vi4XtA00Kpr1n9eP4fcETo8p"
        },
        {
          "name": "Show Answer c",
          "url": "https://embed.api.video/vod/vi2ULe7b58ueneJsmTsVa3q7"
        },
        {
          "name": "Show Answer d",
          "url": "https://embed.api.video/vod/vi3gBeiaTntn5gJTlK0lcvc6"
        },
        {
          "name": "Show Question",
          "url": "https://embed.api.video/vod/vi3VLce1nDxOHIIkoe0lUAvA"
        }
      ]
    },
    {
      "title": "Representations of Quadratic Functions, Video I 7",
      "videoSources": [
        {
          "name": "Show Answer a",
          "url": "https://embed.api.video/vod/vi3vVG6v9GfmYUNQIShoLRBg"
        },
        {
          "name": "Show Answer b",
          "url": "https://embed.api.video/vod/vi6vJkTIVOFCR1NVVuVYKZhV"
        },
        {
          "name": "Show Answer c",
          "url": "https://embed.api.video/vod/vitazr6pnDyD2eWo7mlJCBk"
        },
        {
          "name": "Show Answer d",
          "url": "https://embed.api.video/vod/vi6esKPv33CDmULLD4K0MKHW"
        },
        {
          "name": "Show Question",
          "url": "https://embed.api.video/vod/vi74mTONp87axsNMTuStcOWY"
        }
      ]
    },
    {
      "title": "Representations of Quadratic Functions, Video I 8",
      "videoSources": [
        {
          "name": "Show Video",
          "url": "https://embed.api.video/vod/viXhE3Dv3YjG39Wrpk0xF4m"
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
            <h1>Math Curriculum: Functions - Chapter 4.4: Representations of Quadratic Functions</h1>
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
