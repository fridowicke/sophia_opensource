// MathCurriculum.js
import React from 'react';
import SubjectCurriculum from '../components/SubjectCurriculum';  // Adjust the path accordingly

const chapters = [
  {
    title: 'Intro to Fractional Rational Functions',
    description: 'This subchapter introduces the concept of fractional rational functions and the basic terms associated with them.',
    videoLink: '/Func_Chapter_3_1',
    codeLink: '/code3',
  },
  {
    title: 'Asymptotes of Fractional Rational Functions',
    description: 'Learn about asymptotes, which are lines that a function approaches but never touches, specifically for fractional rational functions.',
    videoLink: '/Func_Chapter_3_2',
    codeLink: '/code3',
  },
  {
    title: 'Shifting and Scaling Fractional Rational Functions',
    description: 'This subchapter describes how fractional rational functions can be transformed through shifting and scaling.',
    videoLink: '/Func_Chapter_3_3',
    codeLink: '/code3',
  },
];


const MathCurriculum = () => (
  <SubjectCurriculum
    title="Math Curriculum: Functions"
    description="Math Curriculum Overview"
    chapters={chapters}
  />
);

export default MathCurriculum;
