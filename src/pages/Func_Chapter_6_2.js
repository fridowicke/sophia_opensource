import React from 'react';
import Layout from '@theme/Layout';
import { VerticalTimeline } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../components/player_styles.css'; // Import the styles
import CurriculumElement from '../components/CurriculumElement'; // Import the component


export default function MathCurriculum() {
  const curriculumElements = [
    {
      "title": "Exponential Functions: Terms and Graphs, Video I 1",
      "videoSources": [
        {
          "name": "Show Video",
          "url": "https://embed.api.video/vod/vi77Ol3fpkgNOO9ZkMLmKJUi"
        }
      ]
    },
    {
      "title": "Exponential Functions: Terms and Graphs, Video I 2",
      "videoSources": [
        {
          "name": "Show Answer a",
          "url": "https://embed.api.video/vod/vi5RGLJK0vBIPaYUsxIjTDle"
        },
        {
          "name": "Show Answer b",
          "url": "https://embed.api.video/vod/vi7MvZcW3A4cS6CndumCZaED"
        },
        {
          "name": "Show Answer c",
          "url": "https://embed.api.video/vod/vi3by1hkWJLQ2ukDyfflLEFy"
        },
        {
          "name": "Show Answer d",
          "url": "https://embed.api.video/vod/vi3CSQwvcppsLqVpR0Dgu4Gt"
        },
        {
          "name": "Show Question",
          "url": "https://embed.api.video/vod/vi7Mc1VZwXs0z6kGVfsSLd0y"
        }
      ]
    },
    {
      "title": "Exponential Functions: Terms and Graphs, Video I 3",
      "videoSources": [
        {
          "name": "Show Video",
          "url": "https://embed.api.video/vod/vi3QPRWs5R3bs4BtfLkI3nqd"
        }
      ]
    },
    {
      "title": "Exponential Functions: Terms and Graphs, Video P 1",
      "videoSources": [
        {
          "name": "Show Answer a",
          "url": "https://embed.api.video/vod/vi3s53O9QrxiOoDxx0yC4RaL"
        },
        {
          "name": "Show Answer b",
          "url": "https://embed.api.video/vod/vi70ck1SRMupy7YURHPYaMoE"
        },
        {
          "name": "Show Answer c",
          "url": "https://embed.api.video/vod/vi6oiiOCEYpPvOo5NRAaj0a8"
        },
        {
          "name": "Show Answer d",
          "url": "https://embed.api.video/vod/vi7e0cNv0H5yDKhNz1HH8Byc"
        },
        {
          "name": "Show Question",
          "url": "https://embed.api.video/vod/vi3vbWuyhJARpKCf6kuFzVjt"
        }
      ]
    },
    {
      "title": "Exponential Functions: Terms and Graphs, Video P 2",
      "videoSources": [
        {
          "name": "Show Answer a",
          "url": "https://embed.api.video/vod/vimwApOFYHwl7BsoBtWmzhK"
        },
        {
          "name": "Show Answer b",
          "url": "https://embed.api.video/vod/vi79qYIx7sLcwoHzOgUz783F"
        },
        {
          "name": "Show Answer c",
          "url": "https://embed.api.video/vod/vi1lAtEGxkekb9IATnvArVCe"
        },
        {
          "name": "Show Question",
          "url": "https://embed.api.video/vod/vi5ZlXW4yFD23YwBbP2BcIPL"
        }
      ]
    },
    {
      "title": "Exponential Functions: Terms and Graphs, Video P 3",
      "videoSources": [
        {
          "name": "Show Answer a",
          "url": "https://embed.api.video/vod/vi1QDDAZfBAKC2olF4iHXwNG"
        },
        {
          "name": "Show Answer b",
          "url": "https://embed.api.video/vod/vihU7rzCGKQd39jewO8DGct"
        },
        {
          "name": "Show Answer c",
          "url": "https://embed.api.video/vod/vi6pGfAcQC9gOOfxn4PLxZW0"
        },
        {
          "name": "Show Answer d",
          "url": "https://embed.api.video/vod/vi5auYIb0XIHiypOsYgNuthv"
        },
        {
          "name": "Show Question",
          "url": "https://embed.api.video/vod/vi6FlizNZh0MZSbOTKDCMkZP"
        }
      ]
    },
    {
      "title": "Exponential Functions: Terms and Graphs, Video P 4",
      "videoSources": [
        {
          "name": "Show Answer a",
          "url": "https://embed.api.video/vod/vi5miXhPh7DWvJ1LD9giWG5S"
        },
        {
          "name": "Show Answer b",
          "url": "https://embed.api.video/vod/vi48zfzxArvcC4imYTotQhIy"
        },
        {
          "name": "Show Answer c",
          "url": "https://embed.api.video/vod/vi2xi2kmPgT0d0DphcsowFnq"
        },
        {
          "name": "Show Question",
          "url": "https://embed.api.video/vod/vi4NC2G6cdUKCaNZF1DPLTGo"
        }
      ]
    },
    {
      "title": "Exponential Functions: Terms and Graphs, Video P 5",
      "videoSources": [
        {
          "name": "Show Answer a",
          "url": "https://embed.api.video/vod/vi5eED8UO7YQs6Rh7bbglWCq"
        },
        {
          "name": "Show Answer b",
          "url": "https://embed.api.video/vod/vi77uDaoYmA91AE8Squ62M8z"
        },
        {
          "name": "Show Answer c",
          "url": "https://embed.api.video/vod/vi6s0QoHdSxUYz0VY5EhxJEp"
        },
        {
          "name": "Show Answer d",
          "url": "https://embed.api.video/vod/vi7lzONaoWPHFN2xSvUtCUKj"
        },
        {
          "name": "Show Question",
          "url": "https://embed.api.video/vod/vi2h3MMRAd3ey8STP9HjFAcd"
        }
      ]
    },
    {
      "title": "Exponential Functions: Terms and Graphs, Video P 6",
      "videoSources": [
        {
          "name": "Show Answer a",
          "url": "https://embed.api.video/vod/vi5nIjkzSpx299f1CE70IfFd"
        },
        {
          "name": "Show Answer b",
          "url": "https://embed.api.video/vod/vi75LjAGyhprOJgbwjFsgoRF"
        },
        {
          "name": "Show Answer c",
          "url": "https://embed.api.video/vod/vi6PNtFToX96tAfMKcuDbut3"
        },
        {
          "name": "Show Question",
          "url": "https://embed.api.video/vod/vi7jfC7ccKFLPLa9g9IQh1un"
        }
      ]
    }
  ]


  const BACK_URL = "/Func_Chapter_6";

  return (
    <Layout title="Math Curriculum" description="Math Curriculum Overview">
      <div className="pageStyle">
        <div className='twoColumnContainer'>
          <div className='LeftColumn'>
            <a href={BACK_URL} className="backButtonStyle">←</a>
          </div>
          <div className='RightColumn'>
            <h1>Math Curriculum: Functions - Chapter 6.2: Exponential Functions: Terms and Graphs</h1>
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
