import * as React from 'react';
import ProfieImage from '../components/ProfieImage';
import Experience from '../components/Experience';
import Education from '../components/Education';
import TopBurgers from '../components/TopBurgers';

import styles from './App.module.css';
import SideBarMenu from '../components/SideBarMenu';

const App = () => {
  const [sectionInView, showSection] = React.useState<
    '' | 'projects' | 'resume' | 'burgers'
  >('');

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <ProfieImage />
      </div>
      <div className={styles.sideBar}>
        <SideBarMenu />
      </div>

      {sectionInView === 'resume' && (
        <div className={styles.sectionContent}>
          <Experience />
          <Education />
        </div>
      )}
      {sectionInView === 'burgers' && (
        <div className={styles.sectionContent}>
          <TopBurgers />
        </div>
      )}
    </div>
  );
};

export default App;
