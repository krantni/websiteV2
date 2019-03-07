import * as React from 'react';

export interface School {
  courses: string[];
  endYear: string;
  imagePath: string;
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
    <>
      <div>{name}</div>
      <div>{`${endYear} - ${startYear}`}</div>
    </>
  );
};

export default School;
