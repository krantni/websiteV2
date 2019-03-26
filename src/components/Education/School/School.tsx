import * as React from 'react';
import styles from './School.module.css';
import { ReactComponent as UMN } from '../../../images/schools/umn.svg';

export interface School {
  endYear: string;
  intro: string;
  link: string;
  major: string;
  name: string;
  startYear: string;
}
export interface SchoolProps {
  details: School;
}

const School: React.SFC<SchoolProps> = props => {
  const { endYear, name, startYear } = props.details;
  return (
    <div className={styles.container}>
      <div>
        <div className={styles.schoolName}>{name}</div>
        <div className={styles.schoolsDate}>{`${startYear} - ${endYear}`}</div>
      </div>
      {name === 'University of Minnesota - Twin Cities' && (<div>
        <UMN className={styles.schoolImages} />
      </div>)}
    </div>
  );
};

export default School;
