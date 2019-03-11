import * as React from 'react';
import styles from './Job.module.css';

export interface Job {
  companyName: string;
  startDate: string;
  endDate: string;
  imagePath: string;
  positions: Position[];
}
export interface JobProps {
  details: Job;
}

export interface Position {
  title: string;
  startDate: string;
  endDate: string;
  intro: string;
  descriptions: string[];
}

const Job: React.SFC<JobProps> = props => {
  const { endDate, startDate, companyName, positions } = props.details;
  return (
    <>
      <div className={styles.company}>
        <div className={styles.companyHeader}>
          <div className={styles.companyName}>{companyName}</div>
          <div className={styles.dates}>{` ${startDate} - ${endDate} `}</div>
        </div>

        <br />
        <div className={styles.positions}>
          {positions.map((position, index) => {
            return (
              <div key={`position${index}`} className={styles.position}>
                {position.title}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Job;
