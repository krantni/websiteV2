import * as React from 'react';
import { School } from './School/School';
import SchoolElement from './School';

const Education = () => {
  const [education, setEducation] = React.useState<School[] | null>([]);

  React.useEffect(() => {
    fetch('https://angular-b6d9c.firebaseio.com/schools.json')
      .then(results => results.json())
      .then((data: School[]) => {
        setEducation(data);
      });
  }, []);

  return (
    <>
      <div>Education</div>
      {education &&
        education.map((school, index) => {
          return <SchoolElement details={school} key={`school${index}`} />;
        })}
    </>
  );
};

export default Education;
