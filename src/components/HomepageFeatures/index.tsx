import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Math is a Visual Subject',
    Svg: () => <img src={require('@site/static/img/SineCurveUnitCircle.gif').default} alt="Easy to Use" className={styles.featureGif} />,
    description: (
      <>
      Mathematics isn't just about numbers and equations;
      it's a visual adventure that helps us understand the world around us.
      From geometry to calculus, our curriculum leverages interactive graphics
      and animations to bring abstract concepts to life. Experience the "aha"
      moment as you see mathematical theories visually unfold before your eyes.
      </>
    ),
  },
  {
    title: 'Embracing the Short-Video Revolution for Education',
    Svg: () => <img src={require('@site/static/img/swiping.gif').default} alt="Easy to Use" className={styles.featureGif} />,
    description: (
      <>
        In a world dominated by short, snappy videos, why should education be any different?
        Our bite-sized video tutorials are tailored to fit into the busy lives of today's youth.
        Engaging, quick, and packed with valuable insights, these videos make learning math not
        just convenient but also incredibly effective.
      </>
    ),
  },
  {
    title: 'Made for everyone.',
    Svg: () => <img src={require('@site/static/img/kids.png').default} alt="Easy to Use" className={styles.featureGif} />,
    description: (
      <>
        One size doesn't fit all, especially in education.
        Our platform offers unparalleled customization to suit the unique needs
        of both students and teachers. Whether you're looking to supplement classroom
        lessons or find an independent study plan, our adaptive learning pathways can
        be adjusted to meet your specific educational objectives.
      </>
    ),
  },
];



function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx(styles.feature)}>
      <div className={clsx(styles.featureSvgWrapper)}>
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className={clsx(styles.featureText)}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className={clsx('container', styles.featureListContainer)}>
        {FeatureList.map((props, idx) => (
          <Feature key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}
