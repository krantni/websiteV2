import * as React from 'react';
import ProfileImage from '../components/ProfileImage';
import Experience from '../components/Experience';
import Education from '../components/Education';
import TopBurgers from '../components/TopBurgers';

import styles from './App.module.css';
import SideBarMenu from '../components/SideBarMenu';
import { Sections } from '../constants/sections';
import Projects from '../components/Projects';
import { Burger } from '../components/TopBurgers/Burger/Burger';
import { Job } from '../components/Experience/Job/Job';
import { School } from '../components/Education/School/School';

const App = () => {
  const [visibleSection, openSection] = React.useState<Sections>('');
  const [burgers, setBurgers] = React.useState<Burger[] | null>([]);
  const [jobs, setExperience] = React.useState<Job[] | null>([]);
  const [schools, setEducation] = React.useState<School[] | null>([]);

  React.useEffect(() => {
    fetch('https://website-nk.firebaseio.com/burgers.json')
      .then(results => results.json())
      .then((data: Burger[]) => {
        setBurgers(data);
      });
    fetch('https://website-nk.firebaseio.com/jobs.json')
      .then(results => results.json())
      .then((data: Job[]) => {
        setExperience(data);
      });
    fetch('https://website-nk.firebaseio.com/schools.json')
      .then(results => results.json())
      .then((data: School[]) => {
        setEducation(data);
      });
  }, []);

  return (
    <div className={visibleSection === '' ? styles.homeContainer : styles.container}>
      <div className={styles.header}>
        <ProfileImage />
      </div>
      <div className={styles.name}>
        <span>Nick Krantz</span>
      </div>
      <div className={styles.sideBar}>
        {visibleSection === '' && (
          <div className={styles.intro}>
            You're here, might as well stay awhile. Click below to learn more about me!
            Write ups for projects I've done, the best burgers I've had, my professional
            experience, and links to my GitHub, LinkedIn and Twitter!
          </div>
        )}
        <SideBarMenu
          openSection={(section: Sections) => openSection(section)}
          selected={visibleSection}
        />
      </div>
      <div className={styles.sectionContent}>
        {visibleSection === 'experience' && (
          <>
            <Experience experiences={jobs} />
            <Education schools={schools} />
          </>
        )}
        {visibleSection === 'burgers' && <TopBurgers burgers={burgers} />}
        {visibleSection === 'projects' && <Projects />}
      </div>
    </div>
  );
};

export default App;
