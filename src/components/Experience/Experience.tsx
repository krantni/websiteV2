import * as React from 'react';
import { Job } from './Job/Job';
import JobElement from './Job';
import styles from './Experience.module.css';

export interface Props {
  experiences: Job[] | null;
}

const Experience = ({ experiences }: Props) => {
  return (
    <div className={styles.holder}>
      <div className={styles.header}>
        <span className={styles.experience}>Experience</span>
      </div>
      {experiences &&
        experiences.map((job, index) => {
          return <JobElement details={job} key={`job${index}`} />;
        })}
    </div>
  );
};

export default Experience;
