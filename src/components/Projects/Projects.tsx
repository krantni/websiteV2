import * as React from 'react';
import styles from './Projects.module.css';
import WebsiteV2 from './WebsiteV2';
import WebsiteV1 from './WebsiteV1';

const Projects = () => {
  return (
    <div className={styles.holder}>
      <div className={styles.header}>
        <span className={styles.projects}>Projects</span>
      </div>
      <WebsiteV2 />
      <WebsiteV1 />
    </div>
  );
};

export default Projects;
