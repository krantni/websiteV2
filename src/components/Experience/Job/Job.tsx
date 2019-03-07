import * as React from 'react';

export interface Job {
  descriptions: string[];
  endDate: string;
  imagePath: string;
  intro: string;
  jobTitle: string;
  name: string;
  startDate: string;
}
export interface JobProps {
  details: Job;
}

const Job: React.SFC<JobProps> = props => {
  const { endDate, jobTitle, startDate } = props.details;
  return (
    <>
      <div>{jobTitle}</div>
      <div>{`${startDate} - ${endDate}`}</div>
    </>
  );
};

export default Job;
