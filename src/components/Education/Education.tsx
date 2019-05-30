import * as React from 'react';
import SchoolElement from './School';
import styles from './Education.module.css';
import { useDataContext } from 'providers/DataProvider';

const Education = () => {
  const { schools } = useDataContext();

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
