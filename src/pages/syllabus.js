// MathCurriculum.js
import React from 'react';
import SubjectCurriculum from '../components/SubjectCurriculum';  // Adjust the path accordingly

const chapters = [
  {
    title: 'Introduction to Functions',
    description: 'In this chapter, we introduce the concept of functions.',
    videoLink: '/Func_Chapter_1',
    codeLink: '/code1',
  }
];

const MathCurriculum = () => (
  <SubjectCurriculum
    title="Math Curriculum: Functions"
    description="Math Curriculum Overview"
    chapters={chapters}
  />
);

export default MathCurriculum;
