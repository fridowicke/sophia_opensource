// MathCurriculum.js
import React from 'react';
import SubjectCurriculum from '../components/SubjectCurriculum';  // Adjust the path accordingly

const chapters = [
  {
    title: 'Intro to Exponential Functions',
    description: 'Introduction to exponential functions and how they can be used to model various real-world phenomena.',
    videoLink: '/Func_Chapter_6_1',
    codeLink: '/code6',
  },
  {
    title: 'Exponential Functions: Terms and Graphs',
    description: 'Learn how to read and interpret the terms and graphs of exponential functions.',
    videoLink: '/Func_Chapter_6_2',
    codeLink: '/code6',
  },
  {
    title: 'Logarithms',
    description: 'Understand logarithms as the inverse operations of exponentiation, and their role in solving exponential equations.',
    videoLink: '/Func_Chapter_6_3',
    codeLink: '/code6',
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
