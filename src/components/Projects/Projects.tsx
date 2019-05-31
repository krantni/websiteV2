import * as React from 'react';
import styles from './Projects.module.css';

import OldWebsite from 'images/projects/oldWebsite.png';

const Projects = () => {
  return (
    <div className={styles.holder}>
      <div className={styles.header}>
        <span className={styles.projects}>Projects</span>
      </div>
      <div className={styles.intro}>
        Every once and awhile I get some time to work on some projects that I'm interested
        in. I plan on explaining them here, mostly so I might remember them later. If
        they're code related, you can view the source code on my github!
      </div>
      <div className={styles.project}>
        <div className={styles.title}>This Website (The one you're on right now)</div>
        <div className={styles.text}>
          I've used these first two websites as ways for me to learn different topics of
          development that I don't necessarily use at work and want to dive into. Even
          though I've learned a ton through work and these off projects, it made me
          realize my old website was all around terrible. From the coding structure, data
          flow, and the design. Which is what made me want to undergo a full rewrite of
          the thing.{' '}
        </div>
        <div className={styles.text}>
          React is a very popular framework and happens to be one that I use regularly for
          development, so it was an obvious choice for me to go from Angular to React on
          this site. I've also wanted to work with a few different areas that I haven't
          touched much. React Hooks are fairly new and I used useEffect to fetch and
          useState to store all the data on this site. The individual components utilize
          Context from the provider to retrieve the data that they need. React Router is
          pretty slick and made navigation quite simple. If you were go to through my Git
          history on this project you'd see that I was at one point in time using the
          state and manually updating the location (bad practice in my opinion). For
          layout I went with CSS Grid, and for a majority of the component styles used
          Flexbox. Styling is something I believe I need some work on, especially when
          considering multiple devices sizes. I am pretty happy with the look and feel of
          this site though as the grid made it easy to make each component almost modular.{' '}
        </div>
        <div className={styles.text}>
          Lot of stuff I want to work on, mobile layouts, adding more burgers to the list,
          and hopefully more projects in general down the road. Will hopefully get to
          actually doing the with write ups here.{' '}
        </div>
      </div>
      <div className={styles.project}>
        <div className={styles.title}>Website #1</div>
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
          to animations. Which was a new way of thinking for me but I was proud of how it
          turned out. I has changed over the past two years and I think I was still
          getting the hang of good programming habits at the time. Don't go looking for it
          because this website is better.
        </div>
      </div>
    </div>
  );
};

export default Projects;
