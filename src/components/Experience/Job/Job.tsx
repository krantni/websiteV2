import * as React from 'react';
import styles from './Job.module.css';
import Position from './Position';
import { IPosition } from './Position/Position';

export interface Job {
  companyName: string;
  startDate: string;
  endDate: string;
  imagePath: string;
  positions: IPosition[];
}
export interface JobProps {
  details: Job;
}

const Job: React.SFC<JobProps> = props => {
  const { endDate, startDate, companyName, positions } = props.details;

  return (
    <div className={styles.company}>
      <div className={styles.companyHeader}>
        <div className={styles.companyName}>{companyName}</div>
        <div className={styles.dates}>{` ${startDate} - ${endDate} `}</div>
      </div>
      <div className={styles.positions}>
        {positions.map((position, index) => {
          return <Position key={`position${index}`} position={position} />;
        })}
      </div>
    </div>
  );
};

export default Job;
