import * as React from 'react';
import styles from './SideBarMenu.module.css';

import burgerIcon from 'images/icons/burger.svg';
import experienceIcon from 'images/icons/experience.svg';
import codeIcon from 'images/icons/code.svg';
import linkedInIcon from 'images/icons/linkedin.svg';
import twitterIcon from 'images/icons/twitter.svg';
import githubIcon from 'images/icons/github.svg';
import links from 'constants/links';
import { Link, withRouter, RouteComponentProps } from 'react-router-dom';
import { Sections } from 'constants/sections';

class SideBarMenu extends React.Component<RouteComponentProps> {
  private isSelected = (section: Sections) => {
    const { location } = this.props;
    return section === (location.pathname.slice(1) as Sections);
  };

  render() {
    return (
      <div className={styles.menu}>
        <div
          className={
            styles.iconHolder + ' ' + (this.isSelected('projects') ? styles.selected : '')
          }
        >
          <Link to={'/projects'} className={styles.link}>
            <img className={styles.icon} src={codeIcon} alt="Projects" />
            <div className={styles.iconText}>Projects</div>
            <span className={styles.decorativeLine} />
          </Link>
        </div>
        <div
          className={
            styles.iconHolder + ' ' + (this.isSelected('burgers') ? styles.selected : '')
          }
        >
          <Link to={'/burgers'} className={styles.link}>
            <img className={styles.icon} src={burgerIcon} alt="Burgers" />
            <div className={styles.iconText}>Burgers</div>
            <span className={styles.decorativeLine} />
          </Link>
        </div>
        <div
          className={
            styles.iconHolder +
            ' ' +
            (this.isSelected('experience') ? styles.selected : '')
          }
        >
          <Link to={'/experience'} className={styles.link}>
            <img className={styles.icon} src={experienceIcon} alt="Experience" />
            <div className={styles.iconText}>Experience</div>
            <span className={styles.decorativeLine} />
          </Link>
        </div>
        <div className={styles.iconHolder} onClick={() => window.open(links.github)}>
          <img className={styles.icon} src={githubIcon} alt="GitHub" />
          <div className={styles.iconText}>GitHub</div>
          <span className={styles.decorativeLine} />
        </div>
        <div className={styles.iconHolder} onClick={() => window.open(links.linkedIn)}>
          <img className={styles.icon} src={linkedInIcon} alt="LinkedIn Icon" />
          <div className={styles.iconText}>LinkedIn</div>
          <span className={styles.decorativeLine} />
        </div>
        <div className={styles.iconHolder} onClick={() => window.open(links.twitter)}>
          <img className={styles.icon} src={twitterIcon} alt="Twitter" />
          <div className={styles.iconText}>Twitter</div>
          <span className={styles.decorativeLine} />
        </div>
      </div>
    );
  }
}

export default withRouter(SideBarMenu);
