import * as React from 'react';
import JobElement from './Job';
import styles from './Experience.module.css';
import { useDataContext } from 'providers/DataProvider';

const Experience = () => {
  const { jobs } = useDataContext();

  return (
    <div className={styles.holder}>
      <div className={styles.header}>
        <span className={styles.experience}>Experience</span>
      </div>
      {jobs &&
        jobs.map((job, index) => {
          return <JobElement details={job} key={`job${index}`} />;
        })}
    </div>
  );
};

export default Experience;
