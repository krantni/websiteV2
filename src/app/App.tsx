import * as React from 'react';
import ProfieImage from '../components/ProfieImage';
import Experience from '../components/Experience';
import Education from '../components/Education';
import TopBurgers from '../components/TopBurgers';

import styles from './App.module.css';
import SideBarMenu from '../components/SideBarMenu';
import { Sections } from '../constants/sections';

const App = () => {
  const [visibleSection, openSection] = React.useState<Sections>('');

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <ProfieImage />
      </div>
      <div className={styles.sideBar}>
        <SideBarMenu
          openSection={(section: Sections) => openSection(section)}
          selected={visibleSection}
        />
      </div>
      <div className={styles.sectionContent}>
        {visibleSection === 'resume' && (
          <>
            <Experience />
            <Education />
          </>
        )}
        {visibleSection === 'burgers' && <TopBurgers />}
      </div>
    </div>
  );
};

export default App;
