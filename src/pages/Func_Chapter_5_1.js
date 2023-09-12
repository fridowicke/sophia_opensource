import React from 'react';
import Layout from '@theme/Layout';
import { VerticalTimeline } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../components/player_styles.css'; // Import the styles
import CurriculumElement from '../components/CurriculumElement'; // Import the component


export default function MathCurriculum() {
  const curriculumElements = [
    {
      "title": "Intro to Power Functions, Video I 1",
      "videoSources": [
        {
          "name": "Show Video",
          "url": "https://embed.api.video/vod/vi34CBv7kAVg74jGxLNm5XuV"
        }
      ]
    },
    {
      "title": "Intro to Power Functions, Video I 2",
      "videoSources": [
        {
          "name": "Show Answer a",
          "url": "https://embed.api.video/vod/vi3XBEahREmknZF3BTY1BT6F"
        },
        {
          "name": "Show Answer b",
          "url": "https://embed.api.video/vod/vi41lYzU30uMZq2Be92w5UV5"
        },
        {
          "name": "Show Answer c",
          "url": "https://embed.api.video/vod/vi3oAu5fQNRg5uzt2Dn2gouN"
        },
        {
          "name": "Show Answer d",
          "url": "https://embed.api.video/vod/vi1IFWujrmBBoNfL7glvJKIR"
        },
        {
          "name": "Show Question",
          "url": "https://embed.api.video/vod/vi4JJZhcBBSSRIohJCv4Au5Y"
        }
      ]
    },
    {
      "title": "Intro to Power Functions, Video I 3",
      "videoSources": [
        {
          "name": "Show Answer a",
          "url": "https://embed.api.video/vod/vi6EnLwZRfem0r7VTSsy1Mn6"
        },
        {
          "name": "Show Answer b",
          "url": "https://embed.api.video/vod/vi5QV30ZgMGzMfjGhlDVd1Et"
        },
        {
          "name": "Show Answer c",
          "url": "https://embed.api.video/vod/vijOdfE97Cdv0DGXx5UUwgL"
        },
        {
          "name": "Show Answer d",
          "url": "https://embed.api.video/vod/vi5Zt2CLsVraHmpioEJq4lEG"
        },
        {
          "name": "Show Question",
          "url": "https://embed.api.video/vod/viSnv27rC01VFF7cu2ibF49"
        }
      ]
    },
    {
      "title": "Intro to Power Functions, Video I 4",
      "videoSources": [
        {
          "name": "Show Answer a",
          "url": "https://embed.api.video/vod/vi5DEjXdIDZ5seH0KjeWRVp1"
        },
        {
          "name": "Show Answer b",
          "url": "https://embed.api.video/vod/vi2dNkNNJYkChVqa45PaOseT"
        },
        {
          "name": "Show Answer c",
          "url": "https://embed.api.video/vod/vi6dwdXuJu6tObbJHUOOahoe"
        },
        {
          "name": "Show Answer d",
          "url": "https://embed.api.video/vod/vi7D6lNHjc9LKwo2UCJ9sLG2"
        },
        {
          "name": "Show Question",
          "url": "https://embed.api.video/vod/vi6ZwXiX4yaXGd3AQn8pJ3Fi"
        }
      ]
    },
    {
      "title": "Intro to Power Functions, Video I 5",
      "videoSources": [
        {
          "name": "Show Video",
          "url": "https://embed.api.video/vod/vi3ctHyJeYxYT2CqY9kDTn9e"
        }
      ]
    },
    {
      "title": "Intro to Power Functions, Video I 6",
      "videoSources": [
        {
          "name": "Show Video",
          "url": "https://embed.api.video/vod/vizbPHMcE1lVB0ObUc7yzmL"
        }
      ]
    },
    {
      "title": "Intro to Power Functions, Video I 7",
      "videoSources": [
        {
          "name": "Show Video",
          "url": "https://embed.api.video/vod/vi6SQmWutM62uYEuI70XN64D"
        }
      ]
    },
    {
      "title": "Intro to Power Functions, Video P 1",
      "videoSources": [
        {
          "name": "Show Answer a",
          "url": "https://embed.api.video/vod/vind6gJJkiEzhiMcugJI9qa"
        },
        {
          "name": "Show Answer b",
          "url": "https://embed.api.video/vod/vi19ARhOafLZAuqJW7jTq7TZ"
        },
        {
          "name": "Show Answer c",
          "url": "https://embed.api.video/vod/viD6qqGIXLHMKUGiZqsnTSw"
        },
        {
          "name": "Show Answer d",
          "url": "https://embed.api.video/vod/vi6Nw9Fl7jGpMtIjlLEeEnMp"
        },
        {
          "name": "Show Question",
          "url": "https://embed.api.video/vod/vi7FmwlBEADmu3T6ssqcvivj"
        }
      ]
    },
    {
      "title": "Intro to Power Functions, Video P 2",
      "videoSources": [
        {
          "name": "Show Answer a",
          "url": "https://embed.api.video/vod/vi37GKSnM8TxHRb0HH35XuwA"
        },
        {
          "name": "Show Answer b",
          "url": "https://embed.api.video/vod/vi5vGXbmdHdEgq6BxYOTixTd"
        },
        {
          "name": "Show Answer c",
          "url": "https://embed.api.video/vod/vi5pMTZ9eO6Edev67d5Ad1WE"
        },
        {
          "name": "Show Answer d",
          "url": "https://embed.api.video/vod/viDGdmDAFKXbUvQZowh9eWe"
        },
        {
          "name": "Show Question",
          "url": "https://embed.api.video/vod/vi7bF57AkFP0V3br46vEyKny"
        }
      ]
    },
    {
      "title": "Intro to Power Functions, Video P 3",
      "videoSources": [
        {
          "name": "Show Answer a",
          "url": "https://embed.api.video/vod/vi2bRb3WK9Ol2Fva9Cy9sOBC"
        },
        {
          "name": "Show Answer b",
          "url": "https://embed.api.video/vod/vi6ywLMbYc1h9km8jHkqAa4B"
        },
        {
          "name": "Show Answer c",
          "url": "https://embed.api.video/vod/vi2XhtTdCCAwgx2rbyQf2mi5"
        },
        {
          "name": "Show Answer d",
          "url": "https://embed.api.video/vod/vi5DmnUhV6KWyyLgTmHMp2PI"
        },
        {
          "name": "Show Question",
          "url": "https://embed.api.video/vod/vi1XXapbUolbXuNAixwzaoMO"
        }
      ]
    },
    {
      "title": "Intro to Power Functions, Video P 4",
      "videoSources": [
        {
          "name": "Show Answer a",
          "url": "https://embed.api.video/vod/vi57gopxokK2uzJowKwaioIv"
        },
        {
          "name": "Show Answer b",
          "url": "https://embed.api.video/vod/vi5LOQ08eAXKiqw3pLCH5yps"
        },
        {
          "name": "Show Answer c",
          "url": "https://embed.api.video/vod/vi4KjOWO5OreH75iqKWhEGCe"
        },
        {
          "name": "Show Answer d",
          "url": "https://embed.api.video/vod/vi5a1raCmZQdr9ezSmchIvCm"
        },
        {
          "name": "Show Question",
          "url": "https://embed.api.video/vod/vi3Agw5zJ61xb6zOIcCPs3ia"
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
            <h1>Math Curriculum: Functions - Chapter 5.1: Intro to Power Functions</h1>
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
