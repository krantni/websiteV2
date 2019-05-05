import * as React from 'react';
import Header from '../components/Header';
import Experience from '../components/Experience';
import Education from '../components/Education';
import TopBurgers from '../components/TopBurgers';
import burgerIcon from '../images/icons/burger.svg';
import resumeIcon from '../images/icons/resume.svg';
import codeIcon from '../images/icons/code.svg';
import linkedInIcon from '../images/icons/linkedin.svg';
import twitterIcon from '../images/icons/twitter.svg';
import githubIcon from '../images/icons/github.svg';
import links from '../constants/links';

import styles from './App.module.css';

const App = () => {
  const [sectionInView, showSection] = React.useState<
    '' | 'projects' | 'resume' | 'burgers'
  >('');

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Header />
      </div>
      <div className={!sectionInView ? styles.contentGrid : styles.contentRow}>
        <div
          className={!sectionInView ? styles.sectionIconsGrid : styles.sectionIconsRow}
        >
          <div
            className={styles.iconHolder}
            onClick={() => showSection(sectionInView === 'projects' ? '' : 'projects')}
          >
            <img className={styles.icon} src={codeIcon} alt="Projects" />
            <div className={styles.iconText}>Projects</div>
          </div>
          <div
            className={styles.iconHolder}
            onClick={() => showSection(sectionInView === 'resume' ? '' : 'resume')}
          >
            <img className={styles.icon} src={resumeIcon} alt="Resume" />
            <div className={styles.iconText}>Resume</div>
          </div>
          <div
            className={styles.iconHolder}
            onClick={() => showSection(sectionInView === 'burgers' ? '' : 'burgers')}
          >
            <img className={styles.icon} src={burgerIcon} alt="Burgers" />
            <div className={styles.iconText}>Burgers</div>
          </div>
          <div className={styles.iconHolder} onClick={() => window.open(links.linkedIn)}>
            <img className={styles.icon} src={linkedInIcon} alt="LinkedIn Icon" />
            <div className={styles.iconText}>LinkedIn</div>
          </div>
          <div className={styles.iconHolder} onClick={() => window.open(links.github)}>
            <img className={styles.icon} src={githubIcon} alt="GitHub" />
            <div className={styles.iconText}>GitHub</div>
          </div>
          <div className={styles.iconHolder} onClick={() => window.open(links.twitter)}>
            <img className={styles.icon} src={twitterIcon} alt="Twitter" />
            <div className={styles.iconText}>Twitter</div>
          </div>
        </div>

        {sectionInView === 'resume' && (
          <div className={styles.sectionContent}>
            <Experience />
            <Education />
          </div>
        )}
        {sectionInView === 'burgers' && (
        <div className={styles.sectionContent}>
          <TopBurgers />
        </div>
        )}
      </div>
    </div>
  );
};

export default App;
