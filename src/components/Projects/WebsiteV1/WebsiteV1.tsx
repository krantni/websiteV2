import * as React from 'react';
import styles from '../Projects.module.css';
import OldWebsite from 'images/projects/oldWebsite.png';
import { projectSections } from '../Projects';
import AnimateHeight from 'react-animate-height';
import { ReactComponent as Arrow } from 'images/downArrow.svg';

const WebsiteV1 = ({ isVisible, updateVisibleProject }: Props) => {
  const toggleProject = () => {
    if (isVisible) {
      updateVisibleProject('');
    } else {
      updateVisibleProject('webSiteV1');
    }
  };
  return (
    <>
      <div className={styles.project}>
        <div className={styles.title} onClick={toggleProject}>
          <div className={styles.arrow}>
            <Arrow className={isVisible ? styles.rotateDown : styles.rotateUp} />
          </div>
          <span>Website #1</span>
          <div />
        </div>
        <AnimateHeight duration={500} height={isVisible ? 'auto' : 0}>
          <div className={styles.text}>
            I had a couple months between graduating college and starting my job, so I
            wanted to learn a new technology. From what I can remember I just found
            something prevalent at the time, which turned out to be Angular. I wanted a
            personal resume website (much like this one), so I figured I'd give it a shot.{' '}
          </div>
          <div className={styles.projectImageHolder}>
            <img src={OldWebsite} alt={'Website iteration #1'} />
          </div>
          <div className={styles.text}>
            {' '}
            I built that website using Angular and Firebase NoSQL database. It contained
            most of what I have in this website, minus the recipes. I was using those as a
            collection of some good recipes I found but I never referenced them like I
            hoped. Therefore they didn't make the cut this go around.
          </div>
          <div className={styles.text}>
            {' '}
            It was the first time that I thought about design from colors to mobile layout
            to animations. Which was a new way of thinking for me but I was proud of how
            it turned out. I has changed over the past two years and I think I was still
            getting the hang of good programming habits at the time. Don't go looking for
            it because this website is better.
          </div>
        </AnimateHeight>
      </div>
    </>
  );
};

export interface Props {
  isVisible: boolean;
  updateVisibleProject: React.Dispatch<React.SetStateAction<projectSections>>;
}

export default WebsiteV1;
