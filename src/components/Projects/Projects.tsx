import * as React from 'react';
import styles from './Projects.module.css';
import WebsiteV2 from './WebsiteV2';
import WebsiteV1 from './WebsiteV1';
import OnlyInYourStateMap from './OnlyInYourStateMap';

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
      <OnlyInYourStateMap />
      <WebsiteV2 />
      <WebsiteV1 />
    </div>
  );
};

export default Projects;
