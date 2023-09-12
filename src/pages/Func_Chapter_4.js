// MathCurriculum.js
import React from 'react';
import SubjectCurriculum from '../components/SubjectCurriculum';  // Adjust the path accordingly

const chapters = [
  {
    title: 'Intro to Quadratic Functions',
    description: 'Introduction to quadratic functions, focusing on their structure and unique features.',
    videoLink: '/Func_Chapter_4_1',
    codeLink: '/code4',
  },
  {
    title: 'Shifting Quadratic Functions',
    description: 'Learn how to shift quadratic functions along the x and y axes.',
    videoLink: '/Func_Chapter_4_2',
    codeLink: '/code4',
  },
  {
    title: 'Scaling Quadratic Functions',
    description: 'This subchapter teaches how to scale quadratic functions to make them wider or narrower.',
    videoLink: '/Func_Chapter_4_3',
    codeLink: '/code4',
  },
  {
    title: 'Representations of Quadratic Functions',
    description: 'Learn the different forms of representing quadratic functions, including vertex form, factored form, and standard form.',
    videoLink: '/Func_Chapter_4_4',
    codeLink: '/code4',
  },
]


const MathCurriculum = () => (
  <SubjectCurriculum
    title="Math Curriculum: Functions"
    description="Math Curriculum Overview"
    chapters={chapters}
  />
);

export default MathCurriculum;
