import React from 'react';
import Layout from '@theme/Layout';
import { VerticalTimeline } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../components/player_styles.css'; // Import the styles
import CurriculumElement from '../components/CurriculumElement'; // Import the component


export default function MathCurriculum() {
  const curriculumElements = [
    {
      "title": "Intro to Fractional Rational Functions, Video I 1",
      "videoSources": [
        {
          "name": "Show Video",
          "url": "https://embed.api.video/vod/vi5AAXo8KvMzx71lMmWzCSnI"
        }
      ]
    },
    {
      "title": "Intro to Fractional Rational Functions, Video I 2",
      "videoSources": [
        {
          "name": "Show Video",
          "url": "https://embed.api.video/vod/vi2devSTMjXlvgydvK2QTr0T"
        }
      ]
    },
    {
      "title": "Intro to Fractional Rational Functions, Video I 3",
      "videoSources": [
        {
          "name": "Show Answer a",
          "url": "https://embed.api.video/vod/vi73s6tKoOsr6YHZWHUfTVVp"
        },
        {
          "name": "Show Answer b",
          "url": "https://embed.api.video/vod/vi56qOgzuthiNMKvo18HcktP"
        },
        {
          "name": "Show Answer c",
          "url": "https://embed.api.video/vod/vi6NcQUZYakZOeIK2YzaskP4"
        },
        {
          "name": "Show Answer d",
          "url": "https://embed.api.video/vod/vi1fXPDSQQij5Hkd08ht46WA"
        },
        {
          "name": "Show Question",
          "url": "https://embed.api.video/vod/vii7bK9Gj7wY2fCbMouqqKf"
        }
      ]
    },
    {
      "title": "Intro to Fractional Rational Functions, Video I 4",
      "videoSources": [
        {
          "name": "Show Answer a",
          "url": "https://embed.api.video/vod/vi44mfoSGgAqwpsfOsxW6FcZ"
        },
        {
          "name": "Show Answer b",
          "url": "https://embed.api.video/vod/viqKOsn90ICLzQmusg68YE9"
        },
        {
          "name": "Show Answer c",
          "url": "https://embed.api.video/vod/vi7liH9g0nkAVNcAmPfdHEMc"
        },
        {
          "name": "Show Answer d",
          "url": "https://embed.api.video/vod/vi3F17pFRuDIYjntMPSf0GJ4"
        },
        {
          "name": "Show Question",
          "url": "https://embed.api.video/vod/vi2pDUc31zUgMy7dXWNA8FR4"
        }
      ]
    },
    {
      "title": "Intro to Fractional Rational Functions, Video I 5",
      "videoSources": [
        {
          "name": "Show Video",
          "url": "https://embed.api.video/vod/vi3fTNZlv2zeFqfydGopWWlr"
        }
      ]
    },
    {
      "title": "Intro to Fractional Rational Functions, Video I 6",
      "videoSources": [
        {
          "name": "Show Answer a",
          "url": "https://embed.api.video/vod/vi7PexRuux7nb2ZoI7h6YRN0"
        },
        {
          "name": "Show Answer b",
          "url": "https://embed.api.video/vod/vi5iXwUcQFJgBW2CRG2uxelE"
        },
        {
          "name": "Show Answer c",
          "url": "https://embed.api.video/vod/vi1Wsvmd0FuEa0RHvQoxiN1k"
        },
        {
          "name": "Show Answer d",
          "url": "https://embed.api.video/vod/vi6DoTLMPn9ql7XrqghXv8Uz"
        },
        {
          "name": "Show Question",
          "url": "https://embed.api.video/vod/vi6kqm7QrCkTF7SgrUQI5wJw"
        }
      ]
    },
    {
      "title": "Intro to Fractional Rational Functions, Video I 7",
      "videoSources": [
        {
          "name": "Show Video",
          "url": "https://embed.api.video/vod/vipkJn5quGJfIQSebtqQc5y"
        }
      ]
    },
    {
      "title": "Intro to Fractional Rational Functions, Video I 8",
      "videoSources": [
        {
          "name": "Show Answer a",
          "url": "https://embed.api.video/vod/vi6qYAcluxD2TLKulOxSSh4v"
        },
        {
          "name": "Show Answer b",
          "url": "https://embed.api.video/vod/vi20WeFTjjUfqjCm2TvNLg9m"
        },
        {
          "name": "Show Answer c",
          "url": "https://embed.api.video/vod/vi4EBaroBQLULRlnY1RlLVY1"
        },
        {
          "name": "Show Answer d",
          "url": "https://embed.api.video/vod/viuzCRxCDlvPZzZPppvIObv"
        },
        {
          "name": "Show Question",
          "url": "https://embed.api.video/vod/vi2fTAVaMck3Ks4qrieIYf92"
        }
      ]
    },
    {
      "title": "Intro to Fractional Rational Functions, Video I 9",
      "videoSources": [
        {
          "name": "Show Video",
          "url": "https://embed.api.video/vod/vi7agRxva1ipqcDHyK2a4jpY"
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
            <h1>Math Curriculum: Functions - Chapter 3.1: Intro to Fractional Rational Functions</h1>
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
