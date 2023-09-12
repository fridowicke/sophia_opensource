// MathCurriculum.js
import React from 'react';
import SubjectCurriculum from '../components/SubjectCurriculum';  // Adjust the path accordingly

const chapters = [
  {
    title: 'Introduction to Functions',
    description: 'This subchapter introduces the concept of function using examples that are easy to understand.',
    videoLink: '/Func_Chapter_1_1',
    codeLink: '/code1',
  },
  {
    title: 'Terms of Functions',
    description: 'This subchapter introduces terms as a way to describe a function.',
    videoLink: '/Func_Chapter_1_2',
    codeLink: '/code1',
  },
  {
    title: 'Intersections with the Axes',
    description: 'This subchapter explains how to determine intersections of functions with the x-axis and y-axis..',
    videoLink: '/Func_Chapter_1_3',
    codeLink: '/code1',
  },
];

const MathCurriculum = () => (
  <SubjectCurriculum
    title="Math Curriculum: Intro to Functions"
    description="Math Curriculum Overview"
    chapters={chapters}
  />
);

export default MathCurriculum;
