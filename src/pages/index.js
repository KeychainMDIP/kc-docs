import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';
import mdipLogo from '@site/static/img/mdip-logo.png'
import keychainLogoDark from '@site/static/img/keychain-logo-dark.png'


function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          <img src={mdipLogo} /><br/>
          MDIP
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          MDIP stands for Multi Dimensional Identity Protocol.
          It is an open-source protocol and W3C-compliant DID scheme,
          designed to create an identity layer for the internet.
          <br/>
          With MDIP, entities on the internet (people, organizations, etc),
          can create and manage individual aspects of their digital identity.
          {/*<Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Docusaurus Tutorial - 5min ⏱️
          </Link>*/}
        </div>
        <br/>
        <Heading as="h1" className="hero__title">
          <img src={keychainLogoDark} /><br/>
        </Heading>
        <div className={styles.buttons}>
          Keychain is a proof of concept tool to demonstrate how the MDIP protocol can be used.
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
