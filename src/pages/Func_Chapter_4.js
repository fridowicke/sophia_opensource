// MathCurriculum.js
import React from 'react';
import SubjectCurriculum from '../components/SubjectCurriculum';  // Adjust the path accordingly

const chapters = [
  {
    title: 'Intro to Quadratic Functions',
    description: 'Introduction to quadratic functions, focusing on their structure and unique features.',
    videoLink: '/Func_Chapter_4_1',
    codeLink: 'https://github.com/Sophia-Edu-Labs/sophia-math/blob/main/scenes/Func/Func_4%3A%20Quadratic%20Functions/Func_4_1.py',
  },
  {
    title: 'Shifting Quadratic Functions',
    description: 'Learn how to shift quadratic functions along the x and y axes.',
    videoLink: '/Func_Chapter_4_2',
    codeLink: 'https://github.com/Sophia-Edu-Labs/sophia-math/blob/main/scenes/Func/Func_4%3A%20Quadratic%20Functions/Func_4_2.py',
  },
  {
    title: 'Scaling Quadratic Functions',
    description: 'This subchapter teaches how to scale quadratic functions to make them wider or narrower.',
    videoLink: '/Func_Chapter_4_3',
    codeLink: 'https://github.com/Sophia-Edu-Labs/sophia-math/blob/main/scenes/Func/Func_4%3A%20Quadratic%20Functions/Func_4_3.py',
  },
  {
    title: 'Representations of Quadratic Functions',
    description: 'Learn the different forms of representing quadratic functions, including vertex form, factored form, and standard form.',
    videoLink: '/Func_Chapter_4_4',
    codeLink: 'https://github.com/Sophia-Edu-Labs/sophia-math/blob/main/scenes/Func/Func_4%3A%20Quadratic%20Functions/Func_4_5.py',
  },
]


const MathCurriculum = () => (
  <SubjectCurriculum
    title="Math Curriculum: Quadratic Functions"
    description="Math Curriculum Overview"
    chapters={chapters}
  />
);

export default MathCurriculum;
