import * as React from 'react';
import classNames from 'classnames';
import Header from '../components/Header';
import Experience from '../components/Experience';
import Education from '../components/Education';

const styles = classNames.bind(require('./App.css'));

class App extends React.Component {
  public render() {
    return (
      <div className={styles('container')}>
        <div className={styles('header')}>
          <Header />
        </div>
        <div className={styles('experience')}>
          <Experience />
        </div>
        <div className={styles('education')}>
          <Education />
        </div>
      </div>
    );
  }
}

export default App;
