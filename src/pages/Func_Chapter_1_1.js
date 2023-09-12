import React from 'react';
import Layout from '@theme/Layout';
import { VerticalTimeline } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../components/player_styles.css'; // Import the styles
import CurriculumElement from '../components/CurriculumElement'; // Import the component

export default function MathCurriculum() {
  const curriculumElements = [
    {
      "title": "Intro to Functions, Video I 1",
      "videoSources": [
        {
          "name": "Show Answer a",
          "url": "https://embed.api.video/vod/vi4u4kEEDZj41Lz0A9P0RZis"
        },
        {
          "name": "Show Answer b",
          "url": "https://embed.api.video/vod/vi7BhA4Nb5vQtpXARLKYN2EB"
        },
        {
          "name": "Show Question",
          "url": "https://embed.api.video/vod/vi741RD4voOODPlPjoNulY0Y"
        }
      ]
    },
    {
      "title": "Intro to Functions, Video I 2",
      "videoSources": [
        {
          "name": "Show Video",
          "url": "https://embed.api.video/vod/vi3SgmVnguVrkwpTM08a8H1R"
        }
      ]
    },
    {
      "title": "Intro to Functions, Video I 3",
      "videoSources": [
        {
          "name": "Show Video",
          "url": "https://embed.api.video/vod/vi6OL4bjtsWi4yMpEcYJQSca"
        }
      ]
    },
    {
      "title": "Intro to Functions, Video P 1",
      "videoSources": [
        {
          "name": "Show Answer a",
          "url": "https://embed.api.video/vod/vi42k49BweB1QtGSS2BYsEaa"
        },
        {
          "name": "Show Answer b",
          "url": "https://embed.api.video/vod/viJyuoeaav6BtcaEgvWgNwu"
        },
        {
          "name": "Show Answer c",
          "url": "https://embed.api.video/vod/vi1a8p8e7soQJ3vjqRm8Mudi"
        },
        {
          "name": "Show Question",
          "url": "https://embed.api.video/vod/vi4Dgatyq0ZLVnyDEUZoFqoF"
        }
      ]
    },
    {
      "title": "Intro to Functions, Video P 2",
      "videoSources": [
        {
          "name": "Show Answer a",
          "url": "https://embed.api.video/vod/vi2q42hjzkYOWAmH3VHDaHkh"
        },
        {
          "name": "Show Answer b",
          "url": "https://embed.api.video/vod/viZVh9mGD24819SSJwbw3Eo"
        },
        {
          "name": "Show Answer c",
          "url": "https://embed.api.video/vod/vi55F9L71D0A8dfaW5VK0Yd7"
        },
        {
          "name": "Show Question",
          "url": "https://embed.api.video/vod/vi4J5gCfWnG74kwyP1UrHqkl"
        }
      ]
    },
    {
      "title": "Intro to Functions, Video P 3",
      "videoSources": [
        {
          "name": "Show Answer a",
          "url": "https://embed.api.video/vod/viKRjuBydegZ9pNPStvkwyc"
        },
        {
          "name": "Show Answer b",
          "url": "https://embed.api.video/vod/vi5nuL3zBRKyNU5TRA2S6L16"
        },
        {
          "name": "Show Answer c",
          "url": "https://embed.api.video/vod/vi249PKCQ37Kjc9X7YsRPFvr"
        },
        {
          "name": "Show Question",
          "url": "https://embed.api.video/vod/vi7jc5UEu2DOGYCz9fEKoNlj"
        }
      ]
    },
    {
      "title": "Intro to Functions, Video P 4",
      "videoSources": [
        {
          "name": "Show Answer a",
          "url": "https://embed.api.video/vod/vi7fF1WjevBZwSkzOUiXdjEs"
        },
        {
          "name": "Show Answer b",
          "url": "https://embed.api.video/vod/vi7aHqktb72SIJ2b9tSsbM8m"
        },
        {
          "name": "Show Answer c",
          "url": "https://embed.api.video/vod/vi4yIQz6XNFWuESZLKpX6ucg"
        },
        {
          "name": "Show Question",
          "url": "https://embed.api.video/vod/vi49fa2Isx5rYYk3a4w1Zpsg"
        }
      ]
    },
    {
      "title": "Intro to Functions, Video P 5",
      "videoSources": [
        {
          "name": "Show Answer a",
          "url": "https://embed.api.video/vod/vi60EFX2aZldRABTd0EiuTl0"
        },
        {
          "name": "Show Answer b",
          "url": "https://embed.api.video/vod/vi3iRY1M5h25ls506xDdQcq3"
        },
        {
          "name": "Show Answer c",
          "url": "https://embed.api.video/vod/vi4Pz1uJfdI4d3tualsG8aG4"
        },
        {
          "name": "Show Question",
          "url": "https://embed.api.video/vod/vi1SlL9I6gs20qu5Gwzm62yX"
        }
      ]
    },
    {
      "title": "Intro to Functions, Video P 6",
      "videoSources": [
        {
          "name": "Show Answer a",
          "url": "https://embed.api.video/vod/vi4PhM92Qr2D1FI7wiEawr1c"
        },
        {
          "name": "Show Answer b",
          "url": "https://embed.api.video/vod/vix6bLrMw2hVypRPoA31x6C"
        },
        {
          "name": "Show Answer c",
          "url": "https://embed.api.video/vod/vi2JF6QHmluRNQLXiaI8fYxr"
        },
        {
          "name": "Show Question",
          "url": "https://embed.api.video/vod/vi5ZUefwwefSXsCSoJqlcyvz"
        }
      ]
    },
    {
      "title": "Intro to Functions, Video P 7",
      "videoSources": [
        {
          "name": "Show Answer a",
          "url": "https://embed.api.video/vod/vi1SroDmkqWW4UqhYkvdKB9I"
        },
        {
          "name": "Show Answer b",
          "url": "https://embed.api.video/vod/vi206RT9yHm0kidZ9mGWWKkJ"
        },
        {
          "name": "Show Answer c",
          "url": "https://embed.api.video/vod/vi4kEKi17Fl06mbIsGxfhB1m"
        },
        {
          "name": "Show Question",
          "url": "https://embed.api.video/vod/vi5cNodYf60I4nlBeT3Z7t7N"
        }
      ]
    },
    {
      "title": "Intro to Functions, Video P 8",
      "videoSources": [
        {
          "name": "Show Answer a",
          "url": "https://embed.api.video/vod/vi6qNyr00xREwsenTt8Bd9Od"
        },
        {
          "name": "Show Answer b",
          "url": "https://embed.api.video/vod/vijtYXWOGvuISv6RoVCIfKO"
        },
        {
          "name": "Show Answer c",
          "url": "https://embed.api.video/vod/vi5fBKhi6ft0pSdcN1x55bw3"
        },
        {
          "name": "Show Question",
          "url": "https://embed.api.video/vod/visRa47Qpq4lnlmjdBeHZfj"
        }
      ]
    }
  ];

  return (
    <Layout title="Math Curriculum" description="Math Curriculum Overview">
      <div className="pageStyle">
        <h1>Math Curriculum: Functions - Chapter 1.1: Intro to Functions</h1>
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
