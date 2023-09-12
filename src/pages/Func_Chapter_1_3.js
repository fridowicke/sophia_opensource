import React from 'react';
import Layout from '@theme/Layout';
import { VerticalTimeline } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../components/player_styles.css'; // Import the styles
import CurriculumElement from '../components/CurriculumElement'; // Import the component

export default function MathCurriculum() {
  const curriculumElements = [
    {
      "title": "Intersections with the Axes, Video I 1",
      "videoSources": [
        {
          "name": "Show Question",
          "url": "https://embed.api.video/vod/vi6STBBVpg0gKwRNBwc8VaBB"
        },
        {
          "name": "Show Answer a",
          "url": "https://embed.api.video/vod/vi3CqzAWh6OwUEXBUNsZkSBk"
        },
        {
          "name": "Show Answer b",
          "url": "https://embed.api.video/vod/viLiianWd9xHH7wiN4xkh76"
        },
        {
          "name": "Show Answer c",
          "url": "https://embed.api.video/vod/viqEBiObtmKLe1BSuFobtSX"
        },
        {
          "name": "Show Answer d",
          "url": "https://embed.api.video/vod/vi01kGR9S8YO4xitlexU2rmh"
        }
      ]
    },
    {
      "title": "Intersections with the Axes, Video I 2",
      "videoSources": [
        {
          "name": "Show Video",
          "url": "https://embed.api.video/vod/vi3AWpUCXMJmnr34QdHQ5MqE"
        }
      ]
    },
    {
      "title": "Intersections with the Axes, Video I 3",
      "videoSources": [
        {
          "name": "Show Video",
          "url": "https://embed.api.video/vod/vi2SKPW4V7DMgYNG2QieA3t8"
        }
      ]
    },
    {
      "title": "Intersections with the Axes, Video I 4",
      "videoSources": [
        {
          "name": "Show Question",
          "url": "https://embed.api.video/vod/vi6KEyCtQrMvDzn7AfgvCb3q"
        },
        {
          "name": "Show Answer a",
          "url": "https://embed.api.video/vod/viTZEk0RAXsHLzAI7iCqTuH"
        },
        {
          "name": "Show Answer b",
          "url": "https://embed.api.video/vod/vi1j4KXCnLvRYzQtwyasR16q"
        },
        {
          "name": "Show Answer c",
          "url": "https://embed.api.video/vod/vi2XifyPjkYd5qBv4WXFXgSE"
        },
        {
          "name": "Show Answer d",
          "url": "https://embed.api.video/vod/vi4JN8ZTDKCzFKciaF6PXaq3"
        }
      ]
    },
    {
      "title": "Intersections with the Axes, Video I 5",
      "videoSources": [
        {
          "name": "Show Video",
          "url": "https://embed.api.video/vod/vi3VnHuye5w34h00DkowUQ2u"
        }
      ]
    },
    {
      "title": "Intersections with the Axes, Video P 11",
      "videoSources": [
        {
          "name": "Show Question",
          "url": "https://embed.api.video/vod/vi3hXjemqcUjtAkE0g53UMv8"
        },
        {
          "name": "Show Answer a",
          "url": "https://embed.api.video/vod/vi3ijgidUf5dSKgfcnhdS8fn"
        },
        {
          "name": "Show Answer b",
          "url": "https://embed.api.video/vod/vickIMibFYCxlcQfmQ66Lc9"
        },
        {
          "name": "Show Answer c",
          "url": "https://embed.api.video/vod/viDHwgpKv9WUjn1cochghaz"
        },
        {
          "name": "Show Answer d",
          "url": "https://embed.api.video/vod/vi6IEeqZdZXjUSOY1UR4WsjB"
        }
      ]
    },
    {
      "title": "Intersections with the Axes, Video P 12",
      "videoSources": [
        {
          "name": "Show Question",
          "url": "https://embed.api.video/vod/viqVwNXeHWfyVtMGA9eHbsX"
        },
        {
          "name": "Show Answer a",
          "url": "https://embed.api.video/vod/vi5xfj5UZG4ubixSo9iEMdjS"
        },
        {
          "name": "Show Answer b",
          "url": "https://embed.api.video/vod/vi3RXYNFcBNqmA0xGUfNbcbL"
        },
        {
          "name": "Show Answer c",
          "url": "https://embed.api.video/vod/vi45nfB6WHOyIc2zO9rzedGe"
        },
        {
          "name": "Show Answer d",
          "url": "https://embed.api.video/vod/vi1AYB34LJoVyZwBSXyRmmqT"
        }
      ]
    },
    {
      "title": "Intersections with the Axes, Video P 13",
      "videoSources": [
        {
          "name": "Show Question",
          "url": "https://embed.api.video/vod/vi5eHqM95bCQjVMBYh25RnCY"
        },
        {
          "name": "Show Answer a",
          "url": "https://embed.api.video/vod/viFHIQqIlJtFdSC3role7Ih"
        },
        {
          "name": "Show Answer b",
          "url": "https://embed.api.video/vod/vi1wGzc8dlvSOGbkxx5QCXKx"
        },
        {
          "name": "Show Answer c",
          "url": "https://embed.api.video/vod/vi1hJEhOXz24Gs04EupRtb4L"
        },
        {
          "name": "Show Answer d",
          "url": "https://embed.api.video/vod/vi2C3nPDvqNDhXqABS1zeCCE"
        }
      ]
    },
    {
      "title": "Intersections with the Axes, Video P 14",
      "videoSources": [
        {
          "name": "Show Question",
          "url": "https://embed.api.video/vod/viZEcZrGSh63ctCT7sE2lBm"
        },
        {
          "name": "Show Answer a",
          "url": "https://embed.api.video/vod/vi1L2WDF7cV3BDcyl7hEiGis"
        },
        {
          "name": "Show Answer b",
          "url": "https://embed.api.video/vod/vi6lTR38CHlX6sdUzmd1PiPP"
        },
        {
          "name": "Show Answer c",
          "url": "https://embed.api.video/vod/vi48OX3u4DT197NhqI4Vkdl8"
        },
        {
          "name": "Show Answer d",
          "url": "https://embed.api.video/vod/vi71ms0ZWxm7ZGe95ZaczOv5"
        }
      ]
    },
    {
      "title": "Intersections with the Axes, Video P 15",
      "videoSources": [
        {
          "name": "Show Question",
          "url": "https://embed.api.video/vod/viTzQu8qMcIB47O3rBpqjBr"
        },
        {
          "name": "Show Answer a",
          "url": "https://embed.api.video/vod/vi6KPruwd3sGh3DPYqpUJ3IK"
        },
        {
          "name": "Show Answer b",
          "url": "https://embed.api.video/vod/vi5rBxIfvTs81aY6hPgjaF9"
        },
        {
          "name": "Show Answer c",
          "url": "https://embed.api.video/vod/vi4jrOdxd3Zjx2ZOvtNnR7FP"
        },
        {
          "name": "Show Answer d",
          "url": "https://embed.api.video/vod/vi2raRt2uvZKslTGTAtoYDnP"
        }
      ]
    },
    {
      "title": "Intersections with the Axes, Video P 16",
      "videoSources": [
        {
          "name": "Show Question",
          "url": "https://embed.api.video/vod/vi5ajHPQdm0wbxyA4Uz5fENo"
        },
        {
          "name": "Show Answer a",
          "url": "https://embed.api.video/vod/vi2imKxEOdVUqEaEaeVNcG4I"
        },
        {
          "name": "Show Answer b",
          "url": "https://embed.api.video/vod/vi4rUZaXeVviHN9QL97sbzsC"
        },
        {
          "name": "Show Answer c",
          "url": "https://embed.api.video/vod/vi7RxB1LZSmoMvGZQKKZkPq2"
        },
        {
          "name": "Show Answer d",
          "url": "https://embed.api.video/vod/vi2lIgEXKrBka4dOd7YCEF14"
        }
      ]
    },
    {
      "title": "Intersections with the Axes, Video P 17",
      "videoSources": [
        {
          "name": "Show Question",
          "url": "https://embed.api.video/vod/vi5I9Y1BEKw7Gn1JElh4LFWw"
        },
        {
          "name": "Show Answer a",
          "url": "https://embed.api.video/vod/vi6D8nzK1QXG67NsCUaZDvwn"
        },
        {
          "name": "Show Answer b",
          "url": "https://embed.api.video/vod/vi3lU0boEU07gQPkf6qjGem6"
        },
        {
          "name": "Show Answer c",
          "url": "https://embed.api.video/vod/vi6KJeLOAzFDPaVZH9s0JHa4"
        },
        {
          "name": "Show Answer d",
          "url": "https://embed.api.video/vod/vi4o3YsntNuSH9ACDdFqcFEc"
        }
      ]
    },
    {
      "title": "Intersections with the Axes, Video P 21",
      "videoSources": [
        {
          "name": "Show Question",
          "url": "https://embed.api.video/vod/vi7NHte6br9AJYFYBwB5Ndw4"
        },
        {
          "name": "Show Answer a",
          "url": "https://embed.api.video/vod/vi5lNlOCMnbxKPz1md0gpKC5"
        },
        {
          "name": "Show Answer b",
          "url": "https://embed.api.video/vod/vi6Lc0bQQPbKRfowCmhQWOJS"
        },
        {
          "name": "Show Answer c",
          "url": "https://embed.api.video/vod/vi7Qi2wjzIegfJN9n5KSjclQ"
        },
        {
          "name": "Show Answer d",
          "url": "https://embed.api.video/vod/vi6VTN0fGVdEVyu6Zet54VRn"
        }
      ]
    },
    {
      "title": "Intersections with the Axes, Video P 22",
      "videoSources": [
        {
          "name": "Show Question",
          "url": "https://embed.api.video/vod/vi7Us7jbNQzO3arLzWkH6d54"
        },
        {
          "name": "Show Answer a",
          "url": "https://embed.api.video/vod/vi3TwZR1URcLm2Oqr4layfhM"
        },
        {
          "name": "Show Answer b",
          "url": "https://embed.api.video/vod/vi1pYXlLXvbu1YXdd6JAWFql"
        },
        {
          "name": "Show Answer c",
          "url": "https://embed.api.video/vod/vi65MEhTITzhleuIEpGdsyMO"
        },
        {
          "name": "Show Answer d",
          "url": "https://embed.api.video/vod/vi4k67LSuTezMI3srDrQT3qO"
        }
      ]
    },
    {
      "title": "Intersections with the Axes, Video P 23",
      "videoSources": [
        {
          "name": "Show Question",
          "url": "https://embed.api.video/vod/vi3n2FPpPBUoSj3kUgPFdxyE"
        },
        {
          "name": "Show Answer a",
          "url": "https://embed.api.video/vod/vi5ax7XwDG2VkPNokD1sc9o2"
        },
        {
          "name": "Show Answer b",
          "url": "https://embed.api.video/vod/vi2zXqiyA8vuKEEezRRtnMWc"
        },
        {
          "name": "Show Answer c",
          "url": "https://embed.api.video/vod/vi4ThQrfSQOJlkStFge5pNQT"
        },
        {
          "name": "Show Answer d",
          "url": "https://embed.api.video/vod/vi4CuzZqZAb0XlTq5b5JSefS"
        }
      ]
    },
    {
      "title": "Intersections with the Axes, Video P 24",
      "videoSources": [
        {
          "name": "Show Question",
          "url": "https://embed.api.video/vod/vi1HYjVksOy1G9KnN3SstHzU"
        },
        {
          "name": "Show Answer a",
          "url": "https://embed.api.video/vod/vimpg02ZCcaKOylgD4oeIAn"
        },
        {
          "name": "Show Answer b",
          "url": "https://embed.api.video/vod/vi1twMJ32exgpeVsDpL6IOJ3"
        },
        {
          "name": "Show Answer c",
          "url": "https://embed.api.video/vod/vi48fQdw0SOF3fWHbqh8wSd5"
        },
        {
          "name": "Show Answer d",
          "url": "https://embed.api.video/vod/vi3cE7iHOr4VMc3k5eyGlAj3"
        }
      ]
    },
    {
      "title": "Intersections with the Axes, Video P 25",
      "videoSources": [
        {
          "name": "Show Question",
          "url": "https://embed.api.video/vod/vi2ZDTQP52dQzgszkbAF9glC"
        },
        {
          "name": "Show Answer a",
          "url": "https://embed.api.video/vod/viQsvPeAIxwcPRg3UqJKdwj"
        },
        {
          "name": "Show Answer b",
          "url": "https://embed.api.video/vod/vi72HKIqxQ6pyCPr4bIIPd0A"
        },
        {
          "name": "Show Answer c",
          "url": "https://embed.api.video/vod/vi7XJN3QkM0wlAsfYG1lK1eA"
        },
        {
          "name": "Show Answer d",
          "url": "https://embed.api.video/vod/vi63jlSBRVIEBuEQeYfPebVR"
        }
      ]
    },
    {
      "title": "Intersections with the Axes, Video P 26",
      "videoSources": [
        {
          "name": "Show Question",
          "url": "https://embed.api.video/vod/vi3P6UBz0FQ5sYLprLvgdhqT"
        },
        {
          "name": "Show Answer a",
          "url": "https://embed.api.video/vod/vi5RDYAxwkAErKE5JaMLGzmZ"
        },
        {
          "name": "Show Answer b",
          "url": "https://embed.api.video/vod/vi10bhvcKbD8WfwEatIUX1fA"
        },
        {
          "name": "Show Answer c",
          "url": "https://embed.api.video/vod/vi1takX6btcucQx5zzzVbTE1"
        },
        {
          "name": "Show Answer d",
          "url": "https://embed.api.video/vod/vi19WqyIf5J0myUnURtRIHfy"
        }
      ]
    },
    {
      "title": "Intersections with the Axes, Video P 27",
      "videoSources": [
        {
          "name": "Show Question",
          "url": "https://embed.api.video/vod/vi5XpforJshnRczL9Pemy1a2"
        },
        {
          "name": "Show Answer a",
          "url": "https://embed.api.video/vod/vit3mwIS6xMKThPUbfSaJR2"
        },
        {
          "name": "Show Answer b",
          "url": "https://embed.api.video/vod/viZyih2UVUKNDYlU6ePsLIS"
        },
        {
          "name": "Show Answer c",
          "url": "https://embed.api.video/vod/vi1zC2RvRXNjooQE9mXbzHxC"
        },
        {
          "name": "Show Answer d",
          "url": "https://embed.api.video/vod/vi2aCOodrHd2RpWjtKHf9Xqw"
        }
      ]
    }
  ];

  return (
    <Layout title="Math Curriculum" description="Math Curriculum Overview">
      <div className="pageStyle">
        <h1>Math Curriculum: Functions - Chapter 1.3: Intersections with the Axes</h1>
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
