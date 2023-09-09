import React from 'react';
import Layout from '@theme/Layout';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './syllabus_styles.css'; // Make sure to import your custom stylesheet

export default function MathCurriculum() {
  return (
    <Layout title="Math Curriculum" description="Math Curriculum Overview">
      <div className="pageStyle">
        <h1>Math Curriculum: Functions</h1>
      </div>
      <div className="pageStyle">
        <div className="twoColumnContainer">
          <div className="leftColumn">
          <h2>Why Functions Matter</h2>
          <p>Functions serve as the building blocks of modern mathematics and computational sciences. They provide a way to understand and model the world around us, from natural phenomena to artificial systems.</p>

          <h2>How to Use This Curriculum</h2>
          <p>This curriculum is designed to be both intuitive and comprehensive. Below are resources to get the most out of it.</p>
          <h3>Downloadable Resources</h3>
          <p><a href="/download-videos">Download Videos</a></p>
          <p><a href="/code">Access the Code</a></p>

          <h2>Licensing and Usage</h2>
          <p>All videos are available for educational purposes under the <strong>Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International (CC BY-NC-SA 4.0)</strong> license. This allows you to share and adapt the materials, as long as it's for non-commercial purposes and you give appropriate credit.</p>
          <p><a href="https://creativecommons.org/licenses/by-nc-sa/4.0/">Learn more about this license</a></p>

          <h2>Adapting from Source Code</h2>
          <p>If you wish to adapt or expand upon this curriculum, the source code is available for you to do so. Please refer to the official documentation for guidelines on how to make your adaptations.</p>
          <p><a href="/documentation">Read the Documentation</a></p>

          <h2>Join Our Community</h2>
          <p>Become part of a vibrant community of learners and educators. Participate in forums, contribute to open-source projects, and much more.</p>
          <p><a href="/community">Join Now</a></p>

          </div>
          <div className="rightColumn">
            <div className="timelineContainerStyle">
                <VerticalTimeline layout='1-column-left'>
                  <VerticalTimelineElement
                    className="timelineElementStyle vertical-timeline-element--work"
                    iconStyle={{ background: 'rgb(255, 75, 70)', color: '#fff' }}
                  >
                    <h3 className="vertical-timeline-element-title">Introduction to Functions</h3>
                    <p>In this chapter, we introduce the concept of functions. We are working with real-world examples to provide an intuitive understanding.</p>
                    <div className="buttonContainerStyle">
                      <a href="/videos" className="buttonStyle">Videos</a>
                      <a href="/code" className="buttonStyle">Code</a>
                    </div>
                  </VerticalTimelineElement>

                  <VerticalTimelineElement
                    className="timelineElementStyle vertical-timeline-element--work"
                    iconStyle={{ background: 'rgb(255, 75, 70)', color: '#fff' }}
                  >
                    <h3 className="vertical-timeline-element-title">Linear Functions</h3>
                    <p>In this chapter, we focus on linear functions, which have a constant rate of change. We'll explore their graphs, equations, and real-world applications.</p>
                    <div className="buttonContainerStyle">
                      <a href="/videos" className="buttonStyle">
                        Videos
                      </a>
                      <a href="/code" className="buttonStyle">
                        Code
                      </a>
                    </div>
                  </VerticalTimelineElement>

                  <VerticalTimelineElement
                    className="timelineElementStyle vertical-timeline-element--work"
                    iconStyle={{ background: 'rgb(255, 75, 70)', color: '#fff' }}
                  >
                    <h3 className="vertical-timeline-element-title">Fractional Rational Functions</h3>
                    <p>This chapter delves into fractional rational functions, which are ratios of polynomials. We'll discuss their characteristics and how to simplify them.</p>
                    <div className="buttonContainerStyle">
                      <a href="/videos" className="buttonStyle">
                        Videos
                      </a>
                      <a href="/code" className="buttonStyle">
                        Code
                      </a>
                    </div>
                  </VerticalTimelineElement>
                  <VerticalTimelineElement
                    className="timelineElementStyle vertical-timeline-element--work"
                    iconStyle={{ background: 'rgb(255, 75, 70)', color: '#fff' }}
                  >
                    <h3 className="vertical-timeline-element-title">Quadratic Functions</h3>
                    <p>This chapter introduces quadratic functions, characterized by a squared term. We'll explore their graphs, solutions, and applications.</p>
                    <div className="buttonContainerStyle">
                      <a href="/videos" className="buttonStyle">
                        Videos
                      </a>
                      <a href="/code" className="buttonStyle">
                        Code
                      </a>
                    </div>
                  </VerticalTimelineElement>
                  <VerticalTimelineElement
                    className="timelineElementStyle vertical-timeline-element--work"
                    iconStyle={{ background: 'rgb(255, 75, 70)', color: '#fff' }}
                  >
                    <h3 className="vertical-timeline-element-title">Power Functions</h3>
                    <p>In this chapter, we examine power functions, which involve variables raised to constant powers. We'll discuss their properties and uses.</p>
                    <div className="buttonContainerStyle">
                      <a href="/videos" className="buttonStyle">
                        Videos
                      </a>
                      <a href="/code" className="buttonStyle">
                        Code
                      </a>
                    </div>
                  </VerticalTimelineElement>

                  <VerticalTimelineElement
                    className="timelineElementStyle vertical-timeline-element--work"
                    iconStyle={{ background: 'rgb(255, 75, 70)', color: '#fff' }}
                  >
                    <h3 className="vertical-timeline-element-title">Exponential Functions</h3>
                    <p>This chapter focuses on exponential functions, which involve exponential growth and decay. We'll look into their graphs and applications.</p>
                    <div className="buttonContainerStyle">
                      <a href="/videos" className="buttonStyle">
                        Videos
                      </a>
                      <a href="/code" className="buttonStyle">
                        Code
                      </a>
                    </div>
                  </VerticalTimelineElement>

                  <VerticalTimelineElement
                    className="timelineElementStyle vertical-timeline-element--work"
                    iconStyle={{ background: 'rgb(255, 75, 70)', color: '#fff' }}
                  >
                    <h3 className="vertical-timeline-element-title">Sine and Cosine Functions</h3>
                    <p>This chapter covers trigonometric functions, specifically sine and cosine. We'll explore their periodic nature, graphs, and uses in real-world scenarios.</p>
                    <div className="buttonContainerStyle">
                      <a href="/videos" className="buttonStyle">
                        Videos
                      </a>
                      <a href="/code" className="buttonStyle">
                        Code
                      </a>
                    </div>
                  </VerticalTimelineElement>

                  <VerticalTimelineElement
                  className="timelineElementStyle vertical-timeline-element--work"
                  iconStyle={{ background: 'rgb(255, 75, 70)', color: '#fff' }}
                >
                  <h3 className="vertical-timeline-element-title">More Coming Soon!</h3>
                  <p>We're continually expanding this curriculum. Stay tuned for more topics and depth!</p>
                </VerticalTimelineElement>
                </VerticalTimeline>
              </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
