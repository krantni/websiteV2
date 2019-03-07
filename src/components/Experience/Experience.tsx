import * as React from 'react';
import { Job } from './Job/Job';
import JobElement from './Job';

const Experience = () => {
  const [experiences, setExperience] = React.useState<Job[] | null>([]);

  React.useEffect(() => {
    fetch('https://angular-b6d9c.firebaseio.com/jobs.json')
      .then(results => results.json())
      .then((data: Job[]) => {
        setExperience(data);
      });
  }, []);

  return (
    <>
      <div>Experience</div>
      {experiences &&
        experiences.map((job, index) => {
          return <JobElement details={job} key={`job${index}`} />;
        })}
    </>
  );
};

export default Experience;
