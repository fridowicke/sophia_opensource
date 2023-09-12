import React from 'react';
import Layout from '@theme/Layout';
import { VerticalTimeline } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../components/player_styles.css'; // Import the styles
import CurriculumElement from '../components/CurriculumElement'; // Import the component


export default function MathCurriculum() {
  const curriculumElements = [
    {
      "title": "Shifting and scaling fractional rational functions, Video I 1",
      "videoSources": [
        {
          "name": "Show Video",
          "url": "https://embed.api.video/vod/vi2Xc8t2S65xXK43R9ykCuks"
        }
      ]
    },
    {
      "title": "Shifting and scaling fractional rational functions, Video I 2",
      "videoSources": [
        {
          "name": "Show Answer a",
          "url": "https://embed.api.video/vod/vi1UfFKcauI6MdzR1NTKFkaq"
        },
        {
          "name": "Show Answer b",
          "url": "https://embed.api.video/vod/vi7NMD9Kv2AfeWMM4VjHgUor"
        },
        {
          "name": "Show Answer c",
          "url": "https://embed.api.video/vod/vi1BIq2ehcfVq2Okyu8JL32z"
        },
        {
          "name": "Show Answer d",
          "url": "https://embed.api.video/vod/vi28Nd03Zh26SRW6xJaxa1fm"
        },
        {
          "name": "Show Question",
          "url": "https://embed.api.video/vod/vi7QRlLvQ99Z2LVbCVoP9AyC"
        }
      ]
    },
    {
      "title": "Shifting and scaling fractional rational functions, Video I 3",
      "videoSources": [
        {
          "name": "Show Answer a",
          "url": "https://embed.api.video/vod/vi2fyFYBrUetvSZjPsOYJDKi"
        },
        {
          "name": "Show Answer b",
          "url": "https://embed.api.video/vod/vi2gFT3ruGmr1mhOinr53P2X"
        },
        {
          "name": "Show Answer c",
          "url": "https://embed.api.video/vod/vi5YHI8wPmm25LqRGoe88fZK"
        },
        {
          "name": "Show Answer d",
          "url": "https://embed.api.video/vod/vi3p7k8NzzeRKFGqOxThxz1v"
        },
        {
          "name": "Show Question",
          "url": "https://embed.api.video/vod/vi3oT8Z78C9rPAZgUIOaoAjT"
        }
      ]
    },
    {
      "title": "Shifting and scaling fractional rational functions, Video I 4",
      "videoSources": [
        {
          "name": "Show Video",
          "url": "https://embed.api.video/vod/vi6E1YFeRV7IHtzptFNdpG3h"
        }
      ]
    },
    {
      "title": "Shifting and scaling fractional rational functions, Video I 4",
      "videoSources": [
        {
          "name": "Show Answer a",
          "url": "https://embed.api.video/vod/vi5CkG1XKTv1fam7ydBEDu67"
        },
        {
          "name": "Show Answer b",
          "url": "https://embed.api.video/vod/vi2pUp4tbyuDIm7bhKJhfZb7"
        },
        {
          "name": "Show Answer c",
          "url": "https://embed.api.video/vod/vi5cIWqBvRegLWHraBxNbNa6"
        },
        {
          "name": "Show Answer d",
          "url": "https://embed.api.video/vod/vi2eq2SMDZW2URGkHnkb4CMB"
        },
        {
          "name": "Show Question",
          "url": "https://embed.api.video/vod/vi13o0MsQ0AIEDjUnQvQtOPC"
        }
      ]
    },
    {
      "title": "Shifting and scaling fractional rational functions, Video I 5",
      "videoSources": [
        {
          "name": "Show Answer a",
          "url": "https://embed.api.video/vod/vi3hDVGiC6TY3FUAIkdkLzbk"
        },
        {
          "name": "Show Answer b",
          "url": "https://embed.api.video/vod/vi1truCzh7nRPvDciQjySBGr"
        },
        {
          "name": "Show Answer c",
          "url": "https://embed.api.video/vod/vi5f3z1adaXvc6F5BBn6oMCh"
        },
        {
          "name": "Show Answer d",
          "url": "https://embed.api.video/vod/vi1NwdGhcJ19vIA3EgIXDhyv"
        },
        {
          "name": "Show Question",
          "url": "https://embed.api.video/vod/vi3O1ocofOIACGgkf8A7CwyO"
        }
      ]
    },
    {
      "title": "Shifting and scaling fractional rational functions, Video I 6",
      "videoSources": [
        {
          "name": "Show Answer a",
          "url": "https://embed.api.video/vod/vi4VUsVpTvr5DxLJJxBDS6yc"
        },
        {
          "name": "Show Answer b",
          "url": "https://embed.api.video/vod/vi325UZ9XG1myckcrhh6w35M"
        },
        {
          "name": "Show Answer c",
          "url": "https://embed.api.video/vod/vi1frE8X72MkMLH6b3tV8LzI"
        },
        {
          "name": "Show Answer d",
          "url": "https://embed.api.video/vod/vi2DLZwFshPVLIy9o4eXU1QZ"
        },
        {
          "name": "Show Question",
          "url": "https://embed.api.video/vod/vi1FIVNxqGZltAbVAVPkuQvp"
        }
      ]
    },
    {
      "title": "Shifting and scaling fractional rational functions, Video I 7",
      "videoSources": [
        {
          "name": "Show Video",
          "url": "https://embed.api.video/vod/vi7CQXpuNfGi4RrgLCbUqsOy"
        }
      ]
    },
    {
      "title": "Shifting and scaling fractional rational functions, Video I 8",
      "videoSources": [
        {
          "name": "Show Answer a",
          "url": "https://embed.api.video/vod/vi01LUxAplYc95kVTBy3we1x"
        },
        {
          "name": "Show Answer b",
          "url": "https://embed.api.video/vod/vi3olOwHCEuSxlD8rOAEX6WB"
        },
        {
          "name": "Show Answer c",
          "url": "https://embed.api.video/vod/vi7iqY7yIe0Ol6qLFnaWsWkh"
        },
        {
          "name": "Show Answer d",
          "url": "https://embed.api.video/vod/vi5jiHJ9aguNfhlyaaLHroPK"
        },
        {
          "name": "Show Question",
          "url": "https://embed.api.video/vod/vi1YxYUVDmKEXi0LIrsDlPEQ"
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
            <h1>Math Curriculum: Functions - Chapter 3.3: Shifting and scaling fractional rational functions</h1>
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
