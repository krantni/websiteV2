import * as React from 'react';
import styles from './Projects.module.css';

import OldWebsite from '../../images/projects/oldWebsite.png';

const Projects = () => {
  return (
    <div className={styles.holder}>
      <div className={styles.header}>
        <span className={styles.projects}>Projects</span>
      </div>
      <div className={styles.intro}>
        Every once and awhile I get some time to work on some projects that I'm interested
        in. I plan on explaining them here, mostly so I might remember them later. If
        they're code related, you can view the source code on my github!
      </div>
      <div className={styles.project}>
        <div className={styles.title}>This Website (The one you're on right now)</div>
        <div className={styles.text}>Coming soon... once I finish this website..</div>
      </div>
      <div className={styles.project}>
        <div className={styles.title}>Website #1</div>
        <div className={styles.text}>
          I had a couple months between graduating college and starting my job, so I
          wanted to learn a new technology. From what I can remember I just found
          something prevalent at the time, which turned out to be Angular. I wanted a
          personal resume website (much like this one), so I figured I'd give it a shot.{' '}
        </div>
        <div className={styles.projectImageHolder}>
          <img
            src={OldWebsite}
            className={styles.projectImage}
            alt={'Website iteration #1'}
          />
        </div>
        <div className={styles.text}>
          {' '}
          I built that website using Angular and Firebase NoSQL database. It contained
          most of what I have in this website, minus the recipes. I was using those as a
          collection of some good recipes I found but I never referenced them like I
          hoped. Therefore they didn't make the cut this go around.
        </div>
        <div className={styles.text}>
          {' '}
          It was the first time that I thought about design from colors to mobile layout
          to animations. Which was a new way of thinking for me but I was proud of how it
          turned out. I has changed over the past two years and I think I was still
          getting the hang of good programming habits at the time. Don't go looking for it
          because this website is better.
        </div>
      </div>
    </div>
  );
};

export default Projects;
