import React from 'react';
import Layout from '@theme/Layout';
import { VerticalTimeline } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../components/player_styles.css'; // Import the styles
import CurriculumElement from '../components/CurriculumElement'; // Import the component

export default function MathCurriculum() {
  const curriculumElements = [
    {
      "title": "Terms of Functions, Video I 1",
      "videoSources": [
        {
          "name": "Show Video",
          "url": "https://embed.api.video/vod/vi5JFJWDvsSe3PZJ0sR0zAe1"
        }
      ]
    },
    {
      "title": "Terms of Functions, Video I 2",
      "videoSources": [
        {
          "name": "Show Video",
          "url": "https://embed.api.video/vod/vi4jDLpOLndLKOyiaICZ8IoT"
        }
      ]
    },
    {
      "title": "Terms of Functions, Video I 3",
      "videoSources": [
        {
          "name": "Show Video",
          "url": "https://embed.api.video/vod/vi4JbE0W7SORLzjkoRLpljTy"
        }
      ]
    },
    {
      "title": "Terms of Functions, Video I 4",
      "videoSources": [
        {
          "name": "Show Video",
          "url": "https://embed.api.video/vod/vi6UHiZl1UGWJHdKQy1sdaWj"
        }
      ]
    },
    {
      "title": "Terms of Functions, Video P 11",
      "videoSources": [
        {
          "name": "Show Answer a",
          "url": "https://embed.api.video/vod/vi1eLbcI9HjiqWEc6GqTJNES"
        },
        {
          "name": "Show Answer b",
          "url": "https://embed.api.video/vod/vi5QLLPNXkvMExkGHcZ73L2w"
        },
        {
          "name": "Show Answer c",
          "url": "https://embed.api.video/vod/vi3fKAybwbFevXsqxWQRGuH1"
        },
        {
          "name": "Show Question",
          "url": "https://embed.api.video/vod/vi1bmpyvRHj2zgcBBldqL3R3"
        }
      ]
    },
    {
      "title": "Terms of Functions, Video P 12",
      "videoSources": [
        {
          "name": "Show Answer a",
          "url": "https://embed.api.video/vod/vi2HlShqFvA2EAniTMQruWC9"
        },
        {
          "name": "Show Answer b",
          "url": "https://embed.api.video/vod/vi43SXGns8MW3wXwQbLkzI4n"
        },
        {
          "name": "Show Answer c",
          "url": "https://embed.api.video/vod/viSWUCsTGZKTz4Aj55Cpxrk"
        },
        {
          "name": "Show Question",
          "url": "https://embed.api.video/vod/vi7aWrQ6qiFhNyaHZpkJkCx3"
        }
      ]
    },
    {
      "title": "Terms of Functions, Video P 13",
      "videoSources": [
        {
          "name": "Show Answer a",
          "url": "https://embed.api.video/vod/vi72RTrZYzD4SCNSiYEaY28b"
        },
        {
          "name": "Show Answer b",
          "url": "https://embed.api.video/vod/viSG71ENRpwxMpCl9dYRTF6"
        },
        {
          "name": "Show Answer c",
          "url": "https://embed.api.video/vod/vi23ahE0YRIXISGTMgKbpj2e"
        },
        {
          "name": "Show Question",
          "url": "https://embed.api.video/vod/vi6qmokE6xdWudVnDtI3qv8H"
        }
      ]
    },
    {
      "title": "Terms of Functions, Video P 14",
      "videoSources": [
        {
          "name": "Show Answer a",
          "url": "https://embed.api.video/vod/vi389rttiDFpYGs8juWlsZGq"
        },
        {
          "name": "Show Answer b",
          "url": "https://embed.api.video/vod/vi6uYyj5VwAYDNu95RHJnFpj"
        },
        {
          "name": "Show Answer c",
          "url": "https://embed.api.video/vod/vi6WYj9Ay5FYR2GaWa2vl8pC"
        },
        {
          "name": "Show Question",
          "url": "https://embed.api.video/vod/vi4WY5q2scn88fWWi7ntiVrz"
        }
      ]
    },
    {
      "title": "Terms of Functions, Video P 21",
      "videoSources": [
        {
          "name": "Show Question",
          "url": "https://embed.api.video/vod/vi5eYzLCW8yLIQJJChgWlDAp"
        },
        {
          "name": "Show Answer a",
          "url": "https://embed.api.video/vod/viSwMVD6hWLq0kHXlbRmuZk"
        },
        {
          "name": "Show Answer b",
          "url": "https://embed.api.video/vod/viHO1xnFhnQWFz9OKdRIsYr"
        },
        {
          "name": "Show Answer c",
          "url": "https://embed.api.video/vod/vi1kcu7KaMaj54k0SR9K0j6J"
        },
        {
          "name": "Show Answer d",
          "url": "https://embed.api.video/vod/vi5rWKPAErpBXh4xqVbd65rO"
        }
      ]
    },
    {
      "title": "Terms of Functions, Video P 22",
      "videoSources": [
        {
          "name": "Show Question",
          "url": "https://embed.api.video/vod/vi52PHiRfcwbhBlZJnGR03UF"
        },
        {
          "name": "Show Answer a",
          "url": "https://embed.api.video/vod/vi4cFROCQzGGcSU4RXpiyQbZ"
        },
        {
          "name": "Show Answer b",
          "url": "https://embed.api.video/vod/vi5Fe5JFKO3Iqc67plgRC4S8"
        },
        {
          "name": "Show Answer c",
          "url": "https://embed.api.video/vod/vi4vfG2Evc25ah6U7ov18hzP"
        },
        {
          "name": "Show Answer d",
          "url": "https://embed.api.video/vod/viBpuA1fd9ln650MzbfozKs"
        }
      ]
    },
    {
      "title": "Terms of Functions, Video P 23",
      "videoSources": [
        {
          "name": "Show Question",
          "url": "https://embed.api.video/vod/vi2PP0Rz5EmWTKAp83EwgODd"
        },
        {
          "name": "Show Answer a",
          "url": "https://embed.api.video/vod/viB3KRNuwkFYKczTuZp56sO"
        },
        {
          "name": "Show Answer b",
          "url": "https://embed.api.video/vod/vi2doxWgcNso1iXvNAbCcq8M"
        },
        {
          "name": "Show Answer c",
          "url": "https://embed.api.video/vod/vi1DVRyKWNyFwfbq1GOJOM00"
        },
        {
          "name": "Show Answer d",
          "url": "https://embed.api.video/vod/vi1T5uCN40RytUQOG5iPBWog"
        }
      ]
    },
    {
      "title": "Terms of Functions, Video P 24",
      "videoSources": [
        {
          "name": "Show Question",
          "url": "https://embed.api.video/vod/vi6mATeeIRATHRbMiBfTIX7R"
        },
        {
          "name": "Show Answer a",
          "url": "https://embed.api.video/vod/vi1SxYIRGlYtuV5w1zkVJ20V"
        },
        {
          "name": "Show Answer b",
          "url": "https://embed.api.video/vod/vi4rN8lRsobTid0YKTydQwBL"
        },
        {
          "name": "Show Answer c",
          "url": "https://embed.api.video/vod/vi6aVc5xMtzrij8d1GkP3AZa"
        },
        {
          "name": "Show Answer d",
          "url": "https://embed.api.video/vod/vi4ZBwJqUrQfODIIfIXZeD8o"
        }
      ]
    },
    {
      "title": "Terms of Functions, Video P 25",
      "videoSources": [
        {
          "name": "Show Question",
          "url": "https://embed.api.video/vod/viBs4zZexxzttZifK4ijtZ0"
        },
        {
          "name": "Show Answer a",
          "url": "https://embed.api.video/vod/vi2VpjI5pLM9dgKdDdEOOiGx"
        },
        {
          "name": "Show Answer b",
          "url": "https://embed.api.video/vod/viKyBDT3rUn5yoEsZFsgREy"
        },
        {
          "name": "Show Answer c",
          "url": "https://embed.api.video/vod/vi4yTvmHv2FheXehWoETGj6a"
        },
        {
          "name": "Show Answer d",
          "url": "https://embed.api.video/vod/vi5YjWg2elAGXwqdfIvbOAtM"
        }
      ]
    },
    {
      "title": "Terms of Functions, Video P 26",
      "videoSources": [
        {
          "name": "Show Question",
          "url": "https://embed.api.video/vod/vi5sDvB65JkDRt1ErILJS6HT"
        },
        {
          "name": "Show Answer a",
          "url": "https://embed.api.video/vod/vi2WHDQxQvc81B60J5UAzLhB"
        },
        {
          "name": "Show Answer b",
          "url": "https://embed.api.video/vod/vi4ky094NjeQLsYwg6EKGvtA"
        },
        {
          "name": "Show Answer c",
          "url": "https://embed.api.video/vod/vi6CZL6GsocwKnNa9LIXWsJo"
        },
        {
          "name": "Show Answer d",
          "url": "https://embed.api.video/vod/vi1DVEFZAtnqW0OvypFkhDwe"
        }
      ]
    }
  
  ];

const BACK_URL = "/Func_Chapter_1";

return (
  <Layout title="Math Curriculum" description="Math Curriculum Overview">
    <div className="pageStyle">
      <div className='twoColumnContainer'>
        <div className='LeftColumn'>
          <a href={BACK_URL} className="backButtonStyle">←</a>
        </div>
        <div className='RightColumn'>
            <h1>Math Curriculum: Functions - Chapter 1.2: Terms of functions</h1>
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
