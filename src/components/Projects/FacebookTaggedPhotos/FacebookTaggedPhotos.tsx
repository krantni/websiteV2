import * as React from 'react';
import styles from '../Projects.module.css';
import { projectSections } from '../Projects';
import AnimateHeight from 'react-animate-height';
import { ReactComponent as Arrow } from 'images/downArrow.svg';
import FacebookCode from 'images/projects/facebookCode.png';
import FacebookGetImages from 'images/projects/facebookGetImages.png';

const FacebookTaggedPhotos = ({ isVisible, updateVisibleProject }: Props) => {
  const toggleProject = () => {
    if (isVisible) {
      updateVisibleProject('');
    } else {
      updateVisibleProject('facebookTaggedPhotos');
    }
  };
  return (
    <>
      <div className={styles.project}>
        <div className={styles.title} onClick={toggleProject}>
          <div className={styles.arrow}>
            <Arrow className={isVisible ? styles.rotateDown : styles.rotateUp} />
          </div>
          <span>Facebook Tagged Photos</span>
          <div />
        </div>
        <AnimateHeight duration={500} height={isVisible ? 'auto' : 0}>
          <div className={styles.text}>
            I no longer use social media all that often, only for it's event planning and
            the occasional link that friends send me. I have thought from time to time,
            what would I if I just deleted my accounts (which probably won't happen), but
            the first thing I think of is the pictures I would lose. So I set out to
            download them all. With all of the fantastic things happening revolving around
            your personal data, most sites now allow you to download all your information.
            As Facebook was the hit through high school and college, I started there.
            After some quick googling I found the hidden path to download all of my data,
            which turned out only to be 131 MB folder. I don't know why I thought it would
            be gigabytes but I was surprised by the size. After going through the pictures
            that were downloaded, I realized that none of the tagged photos were there.
            Some quick google searches later, I learned that is by design.
          </div>
          <div className={styles.text}>
            Not being the photographer in most situations, my tagged photos heavily out
            numbers the actual photos I uploaded to the site. So I set out a way to
            download all my tagged photos. There are some 3rd party applications that
            would do 400 photos at a time for free, or I could pay a service to do so. But
            allowing another 3rd party application access to my Facebook, isn't something
            I was after. Since all tagged pictures are viewable in a grid, a simple
            JavaScript command should be able to select all the image sources right?
          </div>
          <div className={styles.text}>
            Half right. All the images in the grid, use CSS background-image to display
            the image, not the hardest with JS but not the easiest. Now if you open a
            tagged photo, it opens in a larger overlay on your screen as an img tag and
            you are able to navigate the images with an arrow. The image tag on the page
            is the only element on the page that has 'spotlight' as a class. After adding
            an id in the HTML for the next button, all I had to do was make a simple loop,
            see if the image I am on is the last image, log the image source, trigger
            click event on the arrow element and repeat. Simply run it right inside the
            developer tools and export the console output to a text file.
          </div>
          <div className={styles.projectImageHolder}>
            <img src={FacebookCode} alt={'Facebook Looping Code'} />
          </div>
          <div className={styles.text}>
            Now the second part to this is to take all those URLs and download each image.
            Which when I started I thought was going to be hard with having to deal with
            having to deal with Facebook's authentication from the node script I wanted to
            run. It only took me all of 30 seconds to realize that the image URLs that I
            captured are hosted on a public CDN, with no authentication required. Which
            you would think would be a security issue, all my Facebook settings are set to
            friends only, so I was very surprised. Now granted all of the urls seem to be
            hashed in some way, there isn't a pattern (that I can tell), so I don't think
            someone would be able to see my photos by guessing the URL. So it's not
            something I'm losing sleep over, and you shouldn't either. It does however
            make my node script very simple! Read in the URL from the text file, download
            the image and repeat! I was able to download all 700 and some photos into
            their own folder in under a half hour.
          </div>
          <div className={styles.projectImageHolder}>
            <img src={FacebookGetImages} alt={'Facebook Get Images Code'} />
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

export default FacebookTaggedPhotos;
