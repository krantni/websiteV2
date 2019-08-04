import * as React from 'react';
import styles from '../Projects.module.css';
import { projectSections } from '../Projects';
import AnimateHeight from 'react-animate-height';
import { ReactComponent as Arrow } from 'images/downArrow.svg';

const WebsiteV2 = ({ isVisible, updateVisibleProject }: Props) => {
  const toggleProject = () => {
    if (isVisible) {
      updateVisibleProject('');
    } else {
      updateVisibleProject('websiteV2');
    }
  };

  return (
    <>
      <div className={styles.project}>
        <div className={styles.title} onClick={toggleProject}>
          <div className={styles.arrow}>
            <Arrow className={isVisible ? styles.rotateDown : styles.rotateUp} />
          </div>
          <span>This Website</span>
          <div />
        </div>
        <AnimateHeight duration={500} height={isVisible ? 'auto' : 0}>
          <div className={styles.text}>
            I've used these first two websites as ways for me to learn different topics of
            development that I don't necessarily use at work and want to dive into. Even
            though I've learned a ton through work and these off projects, it made me
            realize my old website was all around terrible. From the coding structure,
            data flow, and the design. Which is what made me want to undergo a full
            rewrite of the thing.{' '}
          </div>
          <div className={styles.text}>
            React is a very popular framework and happens to be one that I use regularly
            for development, so it was an obvious choice for me to go from Angular to
            React on this site. I've also wanted to work with a few different areas that I
            haven't touched much. React Hooks are fairly new and I used useEffect to fetch
            and useState to store all the data on this site. The individual components
            utilize Context from the provider to retrieve the data that they need. React
            Router is pretty slick and made navigation quite simple. If you were go to
            through my Git history on this project you'd see that I was at one point in
            time using the state and manually updating the location (bad practice in my
            opinion). For layout I went with CSS Grid, and for a majority of the component
            styles used Flexbox. Styling is something I believe I need some work on,
            especially when considering multiple devices sizes. I am pretty happy with the
            look and feel of this site though as the grid made it easy to make each
            component almost modular.{' '}
          </div>
          <div className={styles.text}>
            Lot of stuff I want to work on, mobile layouts, adding more burgers to the
            list, and hopefully more projects in general down the road. Will hopefully get
            to actually doing the with write ups here.{' '}
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

export default WebsiteV2;
