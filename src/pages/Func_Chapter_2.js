// MathCurriculum.js
import React from 'react';
import SubjectCurriculum from '../components/SubjectCurriculum';  // Adjust the path accordingly

const chapters = [
  {
    title: 'Intro to Linear Functions, from Graph to Term',
    description: 'Learn how to understand linear functions starting from their graphical representation, and how to translate that into a mathematical term.',
    videoLink: '/Func_Chapter_2_1',
    codeLink: '/code2',
  },
  {
    title: 'Linear Functions: from Term to Graph',
    description: 'This subchapter shows how to plot a graph based on the mathematical term of a linear function.',
    videoLink: '/Func_Chapter_2_2',
    codeLink: '/code2',
  },
  {
    title: 'Functions and Linear Equalities',
    description: 'Learn how to use linear functions to solve problems related to linear equalities.',
    videoLink: '/Func_Chapter_2_3',
    codeLink: '/code2',
  },
];


const MathCurriculum = () => (
  <SubjectCurriculum
    title="Math Curriculum: Linear Functions"
    description="Math Curriculum Overview"
    chapters={chapters}
  />
);

export default MathCurriculum;


