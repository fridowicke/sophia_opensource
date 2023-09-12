import React from 'react';
import Layout from '@theme/Layout';
import { VerticalTimeline } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../components/player_styles.css'; // Import the styles
import CurriculumElement from '../components/CurriculumElement'; // Import the component


export default function MathCurriculum() {
  const curriculumElements = [
    {
      "title": "Powers and Roots, Video I 1",
      "videoSources": [
        {
          "name": "Show Answer a",
          "url": "https://embed.api.video/vod/vi6EDdzuZV117TaM7mKHZtWK"
        },
        {
          "name": "Show Answer b",
          "url": "https://embed.api.video/vod/vi1sWoPNRVHOapaTWYzyQoI7"
        },
        {
          "name": "Show Answer c",
          "url": "https://embed.api.video/vod/vi7dfa8F3vs6NclKiEqKyckD"
        },
        {
          "name": "Show Answer d",
          "url": "https://embed.api.video/vod/vi3wsuZG2wiTBTtO6ykzTY8T"
        },
        {
          "name": "Show Question",
          "url": "https://embed.api.video/vod/vi6Div77A9GNBo7cFSEiWu1u"
        }
      ]
    },
    {
      "title": "Powers and Roots, Video I 2",
      "videoSources": [
        {
          "name": "Show Answer a",
          "url": "https://embed.api.video/vod/vi1Y3NMMsbOT8ngGE1TlLqml"
        },
        {
          "name": "Show Answer b",
          "url": "https://embed.api.video/vod/viHONeFyyl9r3GLszA2agaL"
        },
        {
          "name": "Show Answer c",
          "url": "https://embed.api.video/vod/vi3ZLo7GnNVHqx5t3Pp56lcs"
        },
        {
          "name": "Show Answer d",
          "url": "https://embed.api.video/vod/vi6ZFlvU7J4xjic0uVm3FeXE"
        },
        {
          "name": "Show Question",
          "url": "https://embed.api.video/vod/vi2Eq7EiAewU7njtUvYWs4aw"
        }
      ]
    },
    {
      "title": "Powers and Roots, Video I 3",
      "videoSources": [
        {
          "name": "Show Video",
          "url": "https://embed.api.video/vod/vi3CLRmh50Yd18raaAg3zOG3"
        }
      ]
    },
    {
      "title": "Powers and Roots, Video I 4",
      "videoSources": [
        {
          "name": "Show Answer a",
          "url": "https://embed.api.video/vod/vimskMqqoBIj0u8fuU1RvIK"
        },
        {
          "name": "Show Answer b",
          "url": "https://embed.api.video/vod/vi35XjfOcuePGSizbvQq54rN"
        },
        {
          "name": "Show Answer c",
          "url": "https://embed.api.video/vod/vi4NXZlrurYtyYUf8C6tSqwJ"
        },
        {
          "name": "Show Answer d",
          "url": "https://embed.api.video/vod/vi7ZIG4Dyz35OFqx11zpZP8o"
        },
        {
          "name": "Show Question",
          "url": "https://embed.api.video/vod/vib3efkoFaKb5KXDs8kzEOV"
        }
      ]
    },
    {
      "title": "Powers and Roots, Video I 5",
      "videoSources": [
        {
          "name": "Show Answer a",
          "url": "https://embed.api.video/vod/viC9syfYxybtTDSJzGggBtb"
        },
        {
          "name": "Show Answer b",
          "url": "https://embed.api.video/vod/vi6yzw0rBwDPo4KOfSRHWyC2"
        },
        {
          "name": "Show Answer c",
          "url": "https://embed.api.video/vod/vi1j35el5m6dVqgJASIlQlXS"
        },
        {
          "name": "Show Answer d",
          "url": "https://embed.api.video/vod/vidpBnp3vIIoAlMpiHU2igG"
        },
        {
          "name": "Show Question",
          "url": "https://embed.api.video/vod/vi2q8owNGLc7vP9GZeRHTnwZ"
        }
      ]
    },
    {
      "title": "Powers and Roots, Video I 6",
      "videoSources": [
        {
          "name": "Show Video",
          "url": "https://embed.api.video/vod/vi2TJeI8OqUDaO5zefC22jfh"
        }
      ]
    }
  ];


  const BACK_URL = "/Func_Chapter_5";

  return (
    <Layout title="Math Curriculum" description="Math Curriculum Overview">
      <div className="pageStyle">
        <div className='twoColumnContainer'>
          <div className='LeftColumn'>
            <a href={BACK_URL} className="backButtonStyle">←</a>
          </div>
          <div className='RightColumn'>
            <h1>Math Curriculum: Functions - Chapter 5.2: Powers and Roots</h1>
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
