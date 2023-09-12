import React from 'react';
import Layout from '@theme/Layout';
import { VerticalTimeline } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../components/player_styles.css'; // Import the styles
import CurriculumElement from '../components/CurriculumElement'; // Import the component


export default function MathCurriculum() {
  const curriculumElements = [
    {
      "title": "Shifting Quadratic Functions, Video I 1",
      "videoSources": [
        {
          "name": "Show Answer a",
          "url": "https://embed.api.video/vod/vi16J89jms2KwRC8YtAvlTd5"
        },
        {
          "name": "Show Answer b",
          "url": "https://embed.api.video/vod/vi6jWV8mtDBO3KLNCsFloAq7"
        },
        {
          "name": "Show Answer c",
          "url": "https://embed.api.video/vod/vikZhuBhBPvFevhX3pES7bq"
        },
        {
          "name": "Show Answer d",
          "url": "https://embed.api.video/vod/vi6CMYo8xiTsatACRFcX94dH"
        },
        {
          "name": "Show Question",
          "url": "https://embed.api.video/vod/vi4pHFINqkB6G9Bs7tI9iH4s"
        }
      ]
    },
    {
      "title": "Shifting Quadratic Functions, Video I 2",
      "videoSources": [
        {
          "name": "Show Answer a",
          "url": "https://embed.api.video/vod/viGktYBcUZ3ufHe4wZH0NNV"
        },
        {
          "name": "Show Answer b",
          "url": "https://embed.api.video/vod/vi4SiZINRQRslLm90AQ5a8MC"
        },
        {
          "name": "Show Answer c",
          "url": "https://embed.api.video/vod/vi1VkIxA5Bc83Ib4Psk78xbr"
        },
        {
          "name": "Show Answer d",
          "url": "https://embed.api.video/vod/vi6zVOWsQl9eP7PDIhSVBI2y"
        },
        {
          "name": "Show Question",
          "url": "https://embed.api.video/vod/vi2AK6SygixwMUTcj15ErlKG"
        }
      ]
    },
    {
      "title": "Shifting Quadratic Functions, Video I 3",
      "videoSources": [
        {
          "name": "Show Video",
          "url": "https://embed.api.video/vod/vi6GBe9UDZjz3CvkblOLxcoT"
        }
      ]
    },
    {
      "title": "Shifting Quadratic Functions, Video I 4",
      "videoSources": [
        {
          "name": "Show Answer a",
          "url": "https://embed.api.video/vod/vi3r84dptHsQoOjxsXD0bnPT"
        },
        {
          "name": "Show Answer b",
          "url": "https://embed.api.video/vod/vi5CiaqeaAjtRrNd9jXgQMiI"
        },
        {
          "name": "Show Answer c",
          "url": "https://embed.api.video/vod/vi7OsSSwEGAkQng5RwVYXADk"
        },
        {
          "name": "Show Answer d",
          "url": "https://embed.api.video/vod/vi5bxnPSAU6og5eA4huQSTji"
        },
        {
          "name": "Show Question",
          "url": "https://embed.api.video/vod/vi7jmO3iVGegwekMhtDlsj9A"
        }
      ]
    },
    {
      "title": "Shifting Quadratic Functions, Video I 5",
      "videoSources": [
        {
          "name": "Show Answer a",
          "url": "https://embed.api.video/vod/vi1IpK97iFUoUZ2A4BoFD4cM"
        },
        {
          "name": "Show Answer b",
          "url": "https://embed.api.video/vod/vi3k1tpmo8CZ6t0dP5zNaKwF"
        },
        {
          "name": "Show Answer c",
          "url": "https://embed.api.video/vod/vi7Y56TFhJV9ccnWQHpRNQPp"
        },
        {
          "name": "Show Answer d",
          "url": "https://embed.api.video/vod/vi4mBhtTavXJimTMK5GSr119"
        },
        {
          "name": "Show Question",
          "url": "https://embed.api.video/vod/vi51G2WBgIvbmsYzNCxDzVKb"
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
            <h1>Math Curriculum: Functions - Chapter 4.2: Shifting Quadratic Functions</h1>
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
