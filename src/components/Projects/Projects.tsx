import * as React from 'react';
import styles from './Projects.module.css';
import WebsiteV2 from './WebsiteV2';
import WebsiteV1 from './WebsiteV1';
import OnlyInYourStateMap from './OnlyInYourStateMap';
import FacebookTaggedPhotos from './FacebookTaggedPhotos';
import SleeperTradingBlock from './SleeperTradingBlock';

export type projectSections =
  | 'sleeperTradingBlock'
  | 'facebookTaggedPhotos'
  | 'onlyInYourState'
  | 'websiteV2'
  | 'webSiteV1'
  | '';

const Projects = () => {
  const [visibleProject, showProject] = React.useState<projectSections>('');
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
      <SleeperTradingBlock
        isVisible={visibleProject === 'sleeperTradingBlock'}
        updateVisibleProject={showProject}
      />
      <FacebookTaggedPhotos
        isVisible={visibleProject === 'facebookTaggedPhotos'}
        updateVisibleProject={showProject}
      />
      <OnlyInYourStateMap
        isVisible={visibleProject === 'onlyInYourState'}
        updateVisibleProject={showProject}
      />
      <WebsiteV2
        isVisible={visibleProject === 'websiteV2'}
        updateVisibleProject={showProject}
      />
      <WebsiteV1
        isVisible={visibleProject === 'webSiteV1'}
        updateVisibleProject={showProject}
      />
    </div>
  );
};

export default Projects;
