import React from 'react';
import Layout from '@theme/Layout';
import { VerticalTimeline } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../components/player_styles.css'; // Import the styles
import CurriculumElement from '../components/CurriculumElement'; // Import the component


export default function MathCurriculum() {
  const curriculumElements = [
    {
      "title": "Functions and Linear Equalities, Video I 1",
      "videoSources": [
        {
          "name": "Show Answer a",
          "url": "https://embed.api.video/vod/vi71w9oir6lQSPxmOGyDN8G6"
        },
        {
          "name": "Show Answer b",
          "url": "https://embed.api.video/vod/vikTMDFo02NxnZkWGCuybAU"
        },
        {
          "name": "Show Answer c",
          "url": "https://embed.api.video/vod/vi2t3WQvNMeByiSkcMTFoVGJ"
        },
        {
          "name": "Show Answer d",
          "url": "https://embed.api.video/vod/vi01oG5stkBjVfx5ynDBOHdz"
        },
        {
          "name": "Show Question",
          "url": "https://embed.api.video/vod/vi5wbDUzBTo8TbL1T5GHkwib"
        }
      ]
    },
    {
      "title": "Functions and Linear Equalities, Video I 2",
      "videoSources": [
        {
          "name": "Show Video",
          "url": "https://embed.api.video/vod/vi65YEseiToaCDqKVEzauEJd"
        }
      ]
    },
    {
      "title": "Functions and Linear Equalities, Video I 3",
      "videoSources": [
        {
          "name": "Show Video",
          "url": "https://embed.api.video/vod/vi64HpKUt2KrdZSFpdFg4dci"
        }
      ]
    },
    {
      "title": "Functions and Linear Equalities, Video I 4",
      "videoSources": [
        {
          "name": "Show Video",
          "url": "https://embed.api.video/vod/vi6Y4hqY3TyvB3BEVKkUkg9"
        }
      ]
    },
    {
      "title": "Functions and Linear Equalities, Video I 5",
      "videoSources": [
        {
          "name": "Show Video",
          "url": "https://embed.api.video/vod/vi3eVxcWtyvOCHhnWwA7n2IG"
        }
      ]
    },
    {
      "title": "Functions and Linear Equalities, Video I 6",
      "videoSources": [
        {
          "name": "Show Answer a",
          "url": "https://embed.api.video/vod/vizirPWLt9wksRYZFQ0o71p"
        },
        {
          "name": "Show Answer b",
          "url": "https://embed.api.video/vod/vi6pUKXFUEVsOPuVs7depFkJ"
        },
        {
          "name": "Show Answer c",
          "url": "https://embed.api.video/vod/vi6R8mFvCdMrn7CWeYabXljH"
        },
        {
          "name": "Show Answer d",
          "url": "https://embed.api.video/vod/vi75WKUOuY29KHOt7KzajOJA"
        },
        {
          "name": "Show Question",
          "url": "https://embed.api.video/vod/vi1cjesQgcgATWXoigofA92H"
        }
      ]
    },
    {
      "title": "Functions and Linear Equalities, Video P 1",
      "videoSources": [
        {
          "name": "Show Answer a",
          "url": "https://embed.api.video/vod/vi3H74bliPUUD27fTsH3EJLo"
        },
        {
          "name": "Show Answer b",
          "url": "https://embed.api.video/vod/vi4F3WjVstoKE4eQbRQNwz47"
        },
        {
          "name": "Show Answer c",
          "url": "https://embed.api.video/vod/vi35nLi0qVm9uwQqZargVrXW"
        },
        {
          "name": "Show Answer d",
          "url": "https://embed.api.video/vod/vi2QNUuStqTdsIpZQ5JyQf7B"
        },
        {
          "name": "Show Question",
          "url": "https://embed.api.video/vod/vijQgkIA44WsbQ2AYh9Ud90"
        }
      ]
    },
    {
      "title": "Functions and Linear Equalities, Video P 2",
      "videoSources": [
        {
          "name": "Show Answer a",
          "url": "https://embed.api.video/vod/vi67yetyvDf2RA52jPY8NQ1N"
        },
        {
          "name": "Show Answer b",
          "url": "https://embed.api.video/vod/vi6mFkggRxNuV9vyZzjEQpVo"
        },
        {
          "name": "Show Answer c",
          "url": "https://embed.api.video/vod/vi2wZ3QpwFw7rDfPGQwVxPGp"
        },
        {
          "name": "Show Answer d",
          "url": "https://embed.api.video/vod/vi5r4IbmgM3oumFmP9bqcl10"
        },
        {
          "name": "Show Question",
          "url": "https://embed.api.video/vod/vi6siWSZiME4w6KbmyB810AH"
        }
      ]
    },
    {
      "title": "Functions and Linear Equalities, Video P 3",
      "videoSources": [
        {
          "name": "Show Answer a",
          "url": "https://embed.api.video/vod/vi7hMyfbNZmUaFZUMbJVY0Vd"
        },
        {
          "name": "Show Answer b",
          "url": "https://embed.api.video/vod/vi4LSgqqNf5DP4TQ3kj4gzcy"
        },
        {
          "name": "Show Answer c",
          "url": "https://embed.api.video/vod/vilmkrRCjYl3JvKQBnUIn4m"
        },
        {
          "name": "Show Answer d",
          "url": "https://embed.api.video/vod/vi30rYHs7xQm9VDwneAJzKSK"
        },
        {
          "name": "Show Question",
          "url": "https://embed.api.video/vod/vi3nMbAldh0dzG5ZwVaRhAaq"
        }
      ]
    },
    {
      "title": "Functions and Linear Equalities, Video P 4",
      "videoSources": [
        {
          "name": "Show Answer a",
          "url": "https://embed.api.video/vod/vi52O17j6xcMzRies5HVyFko"
        },
        {
          "name": "Show Answer b",
          "url": "https://embed.api.video/vod/vi3FkQIga9LZFKZRkdW1eamx"
        },
        {
          "name": "Show Answer c",
          "url": "https://embed.api.video/vod/vigksiJIklvCrHkKOxNc6S8"
        },
        {
          "name": "Show Answer d",
          "url": "https://embed.api.video/vod/vi54Lmxx3hdoX6P35GReeFtT"
        },
        {
          "name": "Show Question",
          "url": "https://embed.api.video/vod/vi5xMkhTmAFR2sr7IwyhJOor"
        }
      ]
    },
    {
      "title": "Functions and Linear Equalities, Video P 5",
      "videoSources": [
        {
          "name": "Show Answer a",
          "url": "https://embed.api.video/vod/vi3q51gnOaLQ6Qkd4itNf5JE"
        },
        {
          "name": "Show Answer b",
          "url": "https://embed.api.video/vod/vi3LnBpzE5zJjs1Z9eNS4yYM"
        },
        {
          "name": "Show Answer c",
          "url": "https://embed.api.video/vod/vi2ZB5Tmf7bgxwDeI5Qw6iO1"
        },
        {
          "name": "Show Answer d",
          "url": "https://embed.api.video/vod/vi11OeQvGD6edlF55JBg2gXT"
        },
        {
          "name": "Show Question",
          "url": "https://embed.api.video/vod/viEn7EEvXimMdmb1XZt7i9U"
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
            <h1>Math Curriculum: Functions - Chapter 2.3: Functions and Linear Equalities</h1>
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
