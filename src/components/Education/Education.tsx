import * as React from 'react';
import { School } from './School/School';
import SchoolElement from './School';
import styles from './Education.module.css';

import jsonData from 'data/data.json';

const Education = () => {
  const [education, setEducation] = React.useState<School[] | null>([]);

  React.useEffect(() => {
    setEducation(JSON.parse(JSON.stringify(jsonData)).schools);
    //   fetch('https://angular-b6d9c.firebaseio.com/schools.json')
    //     .then(results => results.json())
    //     .then((data: School[]) => {
    //       setEducation(data);
    //     });
  }, []);

  return (
    <>
      <div className={styles.education}>Education</div>
      {education &&
        education.map((school, index) => {
          return <SchoolElement details={school} key={`school${index}`} />;
        })}
    </>
  );
};

export default Education;
