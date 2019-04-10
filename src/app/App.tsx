import * as React from 'react';
import Header from '../components/Header';
import Experience from '../components/Experience';
import Education from '../components/Education';
import burgerIcon from '../images/icons/burger.svg';
import resumeIcon from '../images/icons/resume.svg';
import laptopIcon from '../images/icons/laptop.svg';
import linkedInIcon from '../images/icons/linkedin.svg';
import twitterIcon from '../images/icons/twitter.svg';
import githubIcon from '../images/icons/github.svg';
import links from '../constants/links';

import styles from './App.module.css';

class App extends React.Component {
  public render() {
    return (
      <div className={styles.container}>
        <div className={styles.header}>
          <Header />
        </div>
        <div className={styles.sectionIcons}>
          <div className={styles.iconHolder}>
            <img className={styles.icon} src={laptopIcon} alt="Projects" />
            <div className={styles.iconText}>Projects</div>
          </div>
          <div className={styles.iconHolder}>
            <img className={styles.icon} src={resumeIcon} alt="Resume" />
            <div className={styles.iconText}>Resume</div>
          </div>
          <div className={styles.iconHolder}>
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

        <div className={styles.experience}>
          <Experience />
        </div>
        <div className={styles.education}>
          <Education />
        </div>
      </div>
    );
  }
}

export default App;
