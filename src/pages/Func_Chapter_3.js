// MathCurriculum.js
import React from 'react';
import SubjectCurriculum from '../components/SubjectCurriculum';  // Adjust the path accordingly

const chapters = [
  {
    title: 'Intro to Fractional Rational Functions',
    description: 'This subchapter introduces the concept of fractional rational functions and the basic terms associated with them.',
    videoLink: '/Func_Chapter_3_1',
    codeLink: 'https://github.com/Sophia-Edu-Labs/sophia-math/blob/main/scenes/Func/Func_3%3A%20Rational%20Functions%20I/Func3_1.py',
  },
  {
    title: 'Asymptotes of Fractional Rational Functions',
    description: 'Learn about asymptotes, which are lines that a function approaches but never touches, specifically for fractional rational functions.',
    videoLink: '/Func_Chapter_3_2',
    codeLink: 'https://github.com/Sophia-Edu-Labs/sophia-math/blob/main/scenes/Func/Func_3%3A%20Rational%20Functions%20I/Func3_2.py',
  },
  {
    title: 'Shifting and Scaling Fractional Rational Functions',
    description: 'This subchapter describes how fractional rational functions can be transformed through shifting and scaling.',
    videoLink: '/Func_Chapter_3_3',
    codeLink: 'https://github.com/Sophia-Edu-Labs/sophia-math/blob/main/scenes/Func/Func_3%3A%20Rational%20Functions%20I/Func3_3.py',
  },
];


const MathCurriculum = () => (
  <SubjectCurriculum
    title="Math Curriculum: Fractional Rational Functions"
    description="Math Curriculum Overview"
    chapters={chapters}
  />
);

export default MathCurriculum;
