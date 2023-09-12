import React from 'react';
import Layout from '@theme/Layout';
import { VerticalTimeline } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../components/player_styles.css'; // Import the styles
import CurriculumElement from '../components/CurriculumElement'; // Import the component


export default function MathCurriculum() {
  const curriculumElements = [
    {
      "title": "Logarithms, Video I 1",
      "videoSources": [
        {
          "name": "Show Answer a",
          "url": "https://embed.api.video/vod/vi1W1ZGbqj3Au8ITsRrJF2XQ"
        },
        {
          "name": "Show Answer b",
          "url": "https://embed.api.video/vod/vi7XJJIYxMHoFfveKYjSQe6V"
        },
        {
          "name": "Show Answer c",
          "url": "https://embed.api.video/vod/viTLrJcsKIzknb7Jd8oPnyq"
        },
        {
          "name": "Show Answer d",
          "url": "https://embed.api.video/vod/vi3MVdlMvlmV0W8M6oONxYjs"
        },
        {
          "name": "Show Question",
          "url": "https://embed.api.video/vod/vi26MgbdFkaXKGEko0GePMZd"
        }
      ]
    },
    {
      "title": "Logarithms, Video I 2",
      "videoSources": [
        {
          "name": "Show Video",
          "url": "https://embed.api.video/vod/vi2aYahZeaKi188RrwtVq7ie"
        }
      ]
    },
    {
      "title": "Logarithms, Video I 3",
      "videoSources": [
        {
          "name": "Show Video",
          "url": "https://embed.api.video/vod/vi1dqzurJbCmS4aPGIgH5gVL"
        }
      ]
    },
    {
      "title": "Logarithms, Video I 4",
      "videoSources": [
        {
          "name": "Show Answer a",
          "url": "https://embed.api.video/vod/vi1rSQ0RcDjRtRnMbRlfwifp"
        },
        {
          "name": "Show Answer b",
          "url": "https://embed.api.video/vod/vi2nylHCkafiE79f0NZAUVHG"
        },
        {
          "name": "Show Answer c",
          "url": "https://embed.api.video/vod/vi2vr35K8nhd6e2Tvzhz3mbc"
        },
        {
          "name": "Show Answer d",
          "url": "https://embed.api.video/vod/viCNBhipaeBIwspziWeDjIH"
        },
        {
          "name": "Show Question",
          "url": "https://embed.api.video/vod/vi4K8JrvfkPsqxDlP9NrpviQ"
        }
      ]
    },
    {
      "title": "Logarithms, Video I 5",
      "videoSources": [
        {
          "name": "Show Video",
          "url": "https://embed.api.video/vod/vi7lFRFPs7dI3shG6uJuNYcr"
        }
      ]
    },
    {
      "title": "Logarithms, Video P 1",
      "videoSources": [
        {
          "name": "Show Answer a",
          "url": "https://embed.api.video/vod/vi5v58pfeDviFmAX3HHqXPjZ"
        },
        {
          "name": "Show Answer b",
          "url": "https://embed.api.video/vod/vi3Klh3usqo0N7EXeFVjBRXo"
        },
        {
          "name": "Show Answer c",
          "url": "https://embed.api.video/vod/viiK0cXCyXKqeLatTJVZl0E"
        },
        {
          "name": "Show Answer d",
          "url": "https://embed.api.video/vod/vi4AP0ujm8ObiBBwpNp2dINX"
        },
        {
          "name": "Show Question",
          "url": "https://embed.api.video/vod/vi6zrR8ZADXQLRhOW6sPjrXW"
        }
      ]
    },
    {
      "title": "Logarithms, Video P 2",
      "videoSources": [
        {
          "name": "Show Answer a",
          "url": "https://embed.api.video/vod/viFGvWU6h5yfOlGfOufMf7g"
        },
        {
          "name": "Show Answer b",
          "url": "https://embed.api.video/vod/vi4m5VylwzMEXbBBOsbaCzLJ"
        },
        {
          "name": "Show Answer c",
          "url": "https://embed.api.video/vod/vi3vpEuShzbAUc1zWKuJ0bS0"
        },
        {
          "name": "Show Answer d",
          "url": "https://embed.api.video/vod/vi7PC9SKcQLZ5xB962pUYUQz"
        },
        {
          "name": "Show Question",
          "url": "https://embed.api.video/vod/vi2HovHuCSsfIhDi5JUtq9kI"
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
            <h1>Math Curriculum: Functions - Chapter 6.3: Logarithms</h1>
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
