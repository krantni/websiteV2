import * as React from 'react';
import { School } from './School/School';
import SchoolElement from './School';
import styles from './Education.module.css';

export interface Props {
  schools: School[] | null;
}

const Education = ({ schools }: Props) => {
  return (
    <div className={styles.holder}>
      <div className={styles.education}>Education</div>
      {schools &&
        schools.map((school, index) => {
          return <SchoolElement details={school} key={`school${index}`} />;
        })}
    </div>
  );
};

export default Education;
