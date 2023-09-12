import React from 'react';
import Layout from '@theme/Layout';
import { VerticalTimeline } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../components/player_styles.css'; // Import the styles
import CurriculumElement from '../components/CurriculumElement'; // Import the component

export const BACK_URL = "/Func_Chapter_1";

export default function MathCurriculum() {
  const curriculumElements = [
    {
      "title": "Intro to Linear Functions, from Graph to Term, Video I 1",
      "videoSources": [
        {
          "name": "Show Answer c",
          "url": "https://embed.api.video/vod/vi2N5hutSm5YuIWBxWpyw7Ap"
        },
        {
          "name": "Show Question",
          "url": "https://embed.api.video/vod/vi4lF0YnYcMuRzkiH0idQIyD"
        },
        {
          "name": "Show Answer a",
          "url": "https://embed.api.video/vod/vi1WnsglzaQOpsogAzP124EA"
        },
        {
          "name": "Show Answer b",
          "url": "https://embed.api.video/vod/viGv6gxHxQLKoGp8dmCdlf1"
        }
      ]
    },
    {
      "title": "Intro to Linear Functions, from Graph to Term, Video I 10",
      "videoSources": [
        {
          "name": "Show Answer a",
          "url": "https://embed.api.video/vod/vi3pmfy7Da3Ma3L1Cz1ZS1mq"
        },
        {
          "name": "Show Answer b",
          "url": "https://embed.api.video/vod/vi44NPgn4p2nrSY6xsrGXzbg"
        },
        {
          "name": "Show Answer c",
          "url": "https://embed.api.video/vod/vi5IptkcY7N6lelY1dSPMVuE"
        },
        {
          "name": "Show Answer d",
          "url": "https://embed.api.video/vod/vi6CjHfMOAuB7H3Agm3zgaRt"
        },
        {
          "name": "Show Question",
          "url": "https://embed.api.video/vod/vi2szH90UaPcvtEWN4IBUfqO"
        }
      ]
    },
    {
      "title": "Intro to Linear Functions, from Graph to Term, Video I 11",
      "videoSources": [
        {
          "name": "Show Video",
          "url": "https://embed.api.video/vod/vi70i6ZbElrLNWu5NBdpGskV"
        }
      ]
    },
    {
      "title": "Intro to Linear Functions, from Graph to Term, Video I 12",
      "videoSources": [
        {
          "name": "Show Video",
          "url": "https://embed.api.video/vod/vi6dsCkGZ7PBh1LaX9b1XQf5"
        }
      ]
    },
    {
      "title": "Intro to Linear Functions, from Graph to Term, Video I 2",
      "videoSources": [
        {
          "name": "Show Video",
          "url": "https://embed.api.video/vod/vixgea3NwfpcXgbIRKRcHO0"
        }
      ]
    },
    {
      "title": "Intro to Linear Functions, from Graph to Term, Video I 3",
      "videoSources": [
        {
          "name": "Show Answer a",
          "url": "https://embed.api.video/vod/vi1JiNyNPFpOQXFh6NDLrcrQ"
        },
        {
          "name": "Show Answer b",
          "url": "https://embed.api.video/vod/vi26G7AyvqzUNC8TO3Pm8Nxd"
        },
        {
          "name": "Show Answer c",
          "url": "https://embed.api.video/vod/vi2NKQixZt3RS6ty7BskdUEj"
        },
        {
          "name": "Show Question",
          "url": "https://embed.api.video/vod/vi3wAVD5K1otuLPDFeCbOPqF"
        }
      ]
    },
    {
      "title": "Intro to Linear Functions, from Graph to Term, Video I 4",
      "videoSources": [
        {
          "name": "Show Answer a",
          "url": "https://embed.api.video/vod/vi1dmoStoL9t6GXzJyDAza2p"
        },
        {
          "name": "Show Answer b",
          "url": "https://embed.api.video/vod/vi1C1rcNnMiMAQM4jS88Kgwy"
        },
        {
          "name": "Show Answer c",
          "url": "https://embed.api.video/vod/vi1toXualHhYaH3jh7YFdfyS"
        },
        {
          "name": "Show Question",
          "url": "https://embed.api.video/vod/vi1Q2LZjTk0rdJcsPryN3p59"
        }
      ]
    },
    {
      "title": "Intro to Linear Functions, from Graph to Term, Video I 5",
      "videoSources": [
        {
          "name": "Show Answer a",
          "url": "https://embed.api.video/vod/vi5Q1CNDPkFJuwQ8o9tbN36j"
        },
        {
          "name": "Show Answer b",
          "url": "https://embed.api.video/vod/vi7UZSoPvEQ7T5R012WfOgGA"
        },
        {
          "name": "Show Answer c",
          "url": "https://embed.api.video/vod/vi6nA7f6lv3boC1UOSiq0BM1"
        },
        {
          "name": "Show Answer d",
          "url": "https://embed.api.video/vod/viTzA17BXDPg7cXB6PuNZSK"
        },
        {
          "name": "Show Question",
          "url": "https://embed.api.video/vod/vi108MCguVBULKjZP5PQStpr"
        }
      ]
    },
    {
      "title": "Intro to Linear Functions, from Graph to Term, Video I 6",
      "videoSources": [
        {
          "name": "Show Answer a",
          "url": "https://embed.api.video/vod/vi0FTvC9cSkKvQl7C5uxVBk"
        },
        {
          "name": "Show Answer b",
          "url": "https://embed.api.video/vod/vi6QHi78iq8bfpK3ERjZAqxx"
        },
        {
          "name": "Show Answer c",
          "url": "https://embed.api.video/vod/vi6NltQjf8fhfPs5gWoUGqeC"
        },
        {
          "name": "Show Answer d",
          "url": "https://embed.api.video/vod/vi4a8fO4VWRZkM3gHRRZXob3"
        },
        {
          "name": "Show Question",
          "url": "https://embed.api.video/vod/vi4KBLLoEiMRfAOQnrWZAQFe"
        }
      ]
    },
    {
      "title": "Intro to Linear Functions, from Graph to Term, Video I 7",
      "videoSources": [
        {
          "name": "Show Video",
          "url": "https://embed.api.video/vod/vi2RJa4sc3IRe4ZSIcGAxapB"
        }
      ]
    },
    {
      "title": "Intro to Linear Functions, from Graph to Term, Video I 8",
      "videoSources": [
        {
          "name": "Show Answer a",
          "url": "https://embed.api.video/vod/vi6hYvVALtkN7Kt4BRBxR9EF"
        },
        {
          "name": "Show Answer b",
          "url": "https://embed.api.video/vod/vimlGK5rwtaaHfPD0SGqdNQ"
        },
        {
          "name": "Show Answer c",
          "url": "https://embed.api.video/vod/vi3oQA6eAsbgSfolN3mszVOT"
        },
        {
          "name": "Show Question",
          "url": "https://embed.api.video/vod/vi2HzgNloshu9JSgOIG26IGv"
        }
      ]
    },
    {
      "title": "Intro to Linear Functions, from Graph to Term, Video I 9",
      "videoSources": [
        {
          "name": "Show Answer a",
          "url": "https://embed.api.video/vod/vi3oA0QrHj0SuSeQ1xanHHiO"
        },
        {
          "name": "Show Answer b",
          "url": "https://embed.api.video/vod/vi3k4PoTJH6Lxjg0atPKNczq"
        },
        {
          "name": "Show Answer c",
          "url": "https://embed.api.video/vod/vi1BSPxDtybvFvqHujxlOws4"
        },
        {
          "name": "Show Question",
          "url": "https://embed.api.video/vod/vi1zGOgqMfvPeIYvShYF23lA"
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
            <h1>Math Curriculum: Functions - Chapter 2.1: Intro to Linear Functions, from Graph to Term</h1>
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
