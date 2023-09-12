// MathCurriculum.js
import React from 'react';
import ChapterCurriculum from '../components/ChapterCurriculum';  // Adjust the path accordingly

const chapters = [
  {
    title: 'Introduction to Functions',
    description: 'In this chapter, we introduce the magical world of functions. Think of them like machines that turn one thing into another!',
    chapterLink: '/Func_Chapter_1',
  },
  {
    title: 'Linear Functions',
    description: 'Imagine a straight slide in a park; that\'s what linear functions are like! They’re the simplest types of functions.',
    chapterLink: '/Func_Chapter_2',
  },
  {
    title: 'Fractional Rational Functions',
    description: 'Ever shared pizza with friends? That’s when fractions come in! This chapter is all about functions that deal with fractions.',
    chapterLink: '/Func_Chapter_3',
  },
  {
    title: 'Quadratic Functions',
    description: 'Like the path of a basketball into the hoop, some things in life are not straight. Quadratic functions help us understand these curves!',
    chapterLink: '/Func_Chapter_4',
  },
  {
    title: 'Power Functions',
    description: 'Power up your math skills! In this chapter, we’ll look at functions where numbers are raised to all kinds of powers!',
    chapterLink: '/Func_Chapter_5',
  },
  {
    title: 'Exponential Functions',
    description: 'Ever noticed how your video game scores shoot up super fast? That\'s exponential growth for you!',
    chapterLink: '/Func_Chapter_6',
  },
  {
    title: 'Sine and Cosine Functions',
    description: 'These functions are like the swings in a park, going up and down smoothly. We’ll explore how they work and why they’re important.',
    chapterLink: '/Func_Chapter_7',
  }
];

const MathCurriculum = () => (
  <ChapterCurriculum
    title="Math Curriculum: Functions"
    description="Math Curriculum Overview"
    chapters={chapters}
  />
);

export default MathCurriculum;
