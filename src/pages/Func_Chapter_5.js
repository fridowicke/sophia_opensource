// MathCurriculum.js
import React from 'react';
import SubjectCurriculum from '../components/SubjectCurriculum';  // Adjust the path accordingly

const chapters = [
  {
    title: 'Intro to Power Functions',
    description: 'This subchapter introduces the concept of power functions and how they differ from other types of functions.',
    videoLink: '/Func_Chapter_5_1',
    codeLink: '/code5',
  },
  {
    title: 'Powers and Roots',
    description: 'Learn about the mathematical properties of powers and roots within the context of power functions.',
    videoLink: '/Func_Chapter_5_2',
    codeLink: '/code5',
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
