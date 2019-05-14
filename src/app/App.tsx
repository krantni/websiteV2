import * as React from 'react';
import ProfileImage from '../components/ProfileImage';
import Experience from '../components/Experience';
import Education from '../components/Education';
import TopBurgers from '../components/TopBurgers';

import styles from './App.module.css';
import SideBarMenu from '../components/SideBarMenu';
import { Sections } from '../constants/sections';
import Projects from '../components/Projects';

const App = () => {
  const [visibleSection, openSection] = React.useState<Sections>('');

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
            <Experience />
            <Education />
          </>
        )}
        {visibleSection === 'burgers' && <TopBurgers />}
        {visibleSection === 'projects' && <Projects />}
      </div>
    </div>
  );
};

export default App;
