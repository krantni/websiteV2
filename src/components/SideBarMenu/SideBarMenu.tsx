import * as React from 'react';
import styles from './SideBarMenu.module.css';

import burgerIcon from '../../images/icons/burger.svg';
import resumeIcon from '../../images/icons/resume.svg';
import codeIcon from '../../images/icons/code.svg';
import linkedInIcon from '../../images/icons/linkedin.svg';
import twitterIcon from '../../images/icons/twitter.svg';
import githubIcon from '../../images/icons/github.svg';
import links from '../../constants/links';
import { Sections } from '../../constants/sections';

export interface Props {
  openSection: (section: Sections) => void;
}

const SideBarMenu = ({ openSection }: Props) => {
  return (
    <div className={styles.menu}>
      <div className={styles.iconHolder} onClick={() => openSection('projects')}>
        <img className={styles.icon} src={codeIcon} alt="Projects" />
        <div className={styles.iconText}>Projects</div>
        <span className={styles.decorativeLine} />
      </div>
      <div className={styles.iconHolder} onClick={() => openSection('resume')}>
        <img className={styles.icon} src={resumeIcon} alt="Resume" />
        <div className={styles.iconText}>Resume</div>
        <span className={styles.decorativeLine} />
      </div>
      <div className={styles.iconHolder} onClick={() => openSection('burgers')}>
        <img className={styles.icon} src={burgerIcon} alt="Burgers" />
        <div className={styles.iconText}>Burgers</div>
        <span className={styles.decorativeLine} />
      </div>
      <div className={styles.iconHolder} onClick={() => window.open(links.linkedIn)}>
        <img className={styles.icon} src={linkedInIcon} alt="LinkedIn Icon" />
        <div className={styles.iconText}>LinkedIn</div>
        <span className={styles.decorativeLine} />
      </div>
      <div className={styles.iconHolder} onClick={() => window.open(links.github)}>
        <img className={styles.icon} src={githubIcon} alt="GitHub" />
        <div className={styles.iconText}>GitHub</div>
        <span className={styles.decorativeLine} />
      </div>
      <div className={styles.iconHolder} onClick={() => window.open(links.twitter)}>
        <img className={styles.icon} src={twitterIcon} alt="Twitter" />
        <div className={styles.iconText}>Twitter</div>
        <span className={styles.decorativeLine} />
      </div>
    </div>
  );
};

export default SideBarMenu;
