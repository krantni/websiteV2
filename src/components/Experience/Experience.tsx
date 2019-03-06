import * as React from 'react';

const Experience = () => {
  const [experiences, setExperience] = React.useState<ExperienceResponse[] | null>([]);

  React.useEffect(() => {
    fetch('https://angular-b6d9c.firebaseio.com/jobs.json')
      .then(results => results.json())
      .then((data:ExperienceResponse[]) => {
        setExperience(data);
      });
  }, []);

  return (
    <>
      {experiences && (
        experiences.map(job => {
          return (
            <h2>{job.jobTitle}</h2>
          )
        })
      )}
    </>
  )
}

interface ExperienceResponse {
  descriptions: string[],
  endDate: string,
  imagePath: string,
  intro: string,
  jobTitle: string,
  name: string,
  startDate: string,
}

export default Experience;