import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

const FeatureList = [
  {
    title: 'Codebase',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
      </>
    ),
    link: 'https://github.com/keychainmdip/kc'
  },
  {
    title: 'MDIP Scheme',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
      </>
    ),
    link: '/docs/mdip/scheme'
  },
  {
    title: 'User Manual',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
      </>
    ),
    link: '/docs/'
  },
];

function Feature({Svg, title, description, link}) {
  return (
    <div className={clsx('col')}>
      <div className="text--center">
        {/*<Svg className={styles.featureSvg} role="img" />*/}
      </div>
      <div className="text--center padding-horiz--md">
        <Link to={link}>
        <Heading as="h3" className={styles.button}>{title}</Heading>
        <p>{description}</p>
        </Link>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.row}>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
