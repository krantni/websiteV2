import * as React from 'react';
import { Route, withRouter, RouteComponentProps, Redirect, Switch } from 'react-router';

import ProfileImage from 'components/ProfileImage';
import Experience from 'components/Experience';
import Education from 'components/Education';
import TopBurgers from 'components/TopBurgers';
// import Home from 'components/Home';
import SideBarMenu from 'components/SideBarMenu';
import Projects from 'components/Projects';
import TradingBlock from 'components/TradingBlock';

import styles from './App.module.css';

class App extends React.Component<RouteComponentProps> {
  render() {
    const { location } = this.props;
    return (
      <>
        {location.pathname === '/tradingblock' && <TradingBlock />}
        {location.pathname === '/' && (
          <div className={styles.homeContainer}>
            <div className={styles.header}>
              <ProfileImage />
            </div>
            <div className={styles.name}>
              <span>Nick Krantz</span>
            </div>

            <div className={styles.sideBar}>
              <div className={styles.intro}>
                You're here, might as well stay awhile. Click below to learn more about
                me! Write ups for projects I've done, the best burgers I've had, my
                professional experience, and links to my GitHub, LinkedIn and Twitter!
              </div>
              <SideBarMenu />
            </div>
          </div>
        )}
        {location.pathname !== '/' && location.pathname !== '/tradingblock' && (
          <div className={styles.container}>
            <div className={styles.header}>
              <ProfileImage />
            </div>
            <div className={styles.name}>
              <span>Nick Krantz</span>
            </div>
            <div className={styles.sideBar}>
              <SideBarMenu />
            </div>
            <div className={styles.sectionContent}>
              <Switch>
                <Route
                  path="/experience"
                  render={() => (
                    <>
                      <Experience />
                      <Education />
                    </>
                  )}
                />
                <Route path="/burgers" component={TopBurgers} />
                <Route path="/projects" component={Projects} />
                <Redirect from="*" to="/" />
              </Switch>
            </div>
          </div>
        )}
      </>
    );
  }
}

export default withRouter(App);
