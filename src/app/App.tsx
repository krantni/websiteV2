import * as React from 'react';
import Header from '../components/Header';
import Experience from '../components/Experience';
import Education from '../components/Education';

import styles from './App.module.css';

class App extends React.Component {
  public render() {
    return (
      <div className={styles.container}>
        <div className={styles.header}>
          <Header />
        </div>
        <div className={styles.experience}>
          <Experience />
        </div>
        <div className={styles.education}>
          <Education />
        </div>
      </div>
    );
  }
}

export default App;
