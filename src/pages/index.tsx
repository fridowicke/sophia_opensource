import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

import demoImage from '@site/static/img/demo.png';
import handsImage from '@site/static/img/hands_around_book.png';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container" style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <h1 className="hero__title">{siteConfig.title}</h1>

        <div className={styles.redCircle}>
          <img src={demoImage} alt="Demo Image" className={clsx(styles.demoImage, styles.imageOverCircle)} />
        </div>
        
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/syllabus">
            📚 Start Learning 🎬
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />

      <section className={styles.missionSection}>
      <h1 className={styles.headingTextbook}>What the Sophia Video Curriculum is</h1>
        <div className={styles.missionFlexContainer}>
          <img src={handsImage} alt="Sophia Video Curriculum" className={styles.missionImage} />
          <div>
            <p className={styles.missionContent}>
              We are an open-source resource committed to providing high-quality educational content to both educators and students around the globe. Our curriculum focuses on delivering animated math short videos, covering all high school topics, in a vertical format suitable for mobile learning.
            </p>
            <p className={styles.missionContent}>
              Available in multiple languages, we aim to make learning math more accessible, engaging, and understandable for students from all backgrounds. We hope you find this resource valuable and welcome any contributions to make it even better.
            </p>
          </div>
        </div>
    </section>

      <main className={styles.mainSection}>
      <h1 className={styles.whiteHeadingTextbook}>{"A textbook for the 21st century"}</h1>
      <div className={styles.mainFlexContainer}>
        <HomepageFeatures />
      </div>
      </main>
    </Layout>
  );
}



