import * as React from 'react';
import styles from '../Projects.module.css';
import { projectSections } from '../Projects';
import AnimateHeight from 'react-animate-height';
import { ReactComponent as Arrow } from 'images/downArrow.svg';
import TradingBlockImage from 'images/projects/sleeperTradingBlock.png';

const SleeperTradingBlock = ({ isVisible, updateVisibleProject }: Props) => {
  const toggleProject = () => {
    if (isVisible) {
      updateVisibleProject('');
    } else {
      updateVisibleProject('sleeperTradingBlock');
    }
  };
  return (
    <>
      <div className={styles.project}>
        <div className={styles.title} onClick={toggleProject}>
          <div className={styles.arrow}>
            <Arrow className={isVisible ? styles.rotateDown : styles.rotateUp} />
          </div>
          <span>Sleeper Trading Block</span>
          <div />
        </div>
        <AnimateHeight duration={500} height={isVisible ? 'auto' : 0}>
          <div className={styles.text}>
            This is probably a project I'm more proud of and have maintained regularly
            since I made it up public. Like many people, I get way involved in fantasy
            football. One of the leagues I'm in is a dynasty league, which moved from
            using the Yahoo Fantasy app to{' '}
            <a href="https://sleeper.app/" target="_blank" rel="noopener noreferrer">
              Sleeper
            </a>{' '}
            this year. An experience I heavily welcomed because I believe it is more
            intuitive than other fantasy apps.
          </div>
          <div className={styles.text}>
            Since this was a dynasty league there are a decent amount of transactions that
            occur throughout the year. I'm particularly proud of my trade of Antonio Brown
            for the first pick in the 2020 draft. But the lack of functionality within
            Sleeper is that you don't know who's willing to trade who. You're able to
            direct message other members of your league but then it becomes a back and
            forth negotiating to figure out if they're willing to part with a player. It
            was then asked if there was a trading block, but this isn't a functionality
            native to Sleeper.
          </div>
          <div className={styles.text}>
            Since this was a dynasty league there are a decent amount of transactions that
            occur throughout the year. I'm particularly proud of my trade of Antonio Brown
            for the first pick in the 2020 draft. But the lack of functionality within
            Sleeper is that you don't know who's willing to trade who. You're able to
            direct message other members of your league but then it becomes a back and
            forth negotiating to figure out if they're willing to part with a player. It
            was then asked if there was a trading block, but this isn't a functionality
            native to Sleeper.
          </div>
          <div className={styles.text}>
            With some spare time, on a Friday night, I set out to build one. Sleeper has
            read only APIs, which the only thing required is the LeagueID. While reading
            through them, I realized that the Roster API includes the nicknames assigned
            by each owner. The nickname key is received in the format: 'p_nick_playerId',
            which gave me a way to link between the nickname, the player id and the
            available master list of players. Thus if owners nickname their players 'OTB'
            (on the trade block), I could check for that and know that they're willing to
            part to that player.
          </div>
          <div className={styles.text}>
            Overall, the logic is:
            <ol>
              <li>Receive League ID via url path (ex: trandingblock.app/LeagueIdHere)</li>
              <li>Make Sleeper API call to receive all of the owners in that league</li>
              <li>
                For each owner, retrieve their roster of players along with nicknames.
              </li>
              <li>
                For each roster, check if nickname is 'OTB', if yes, then parse the
                nickname key to receive the playerID and retrieve that player's name,
                team, and position.
              </li>
              <li>Display all of the OTB players.</li>
            </ol>
            Quite simple for an app, luckily the calls are light weight so I don't cache
            any of the data. Each time the app is loaded I make the two API calls and
            parse the player information.
          </div>
          <div className={styles.text}>
            This has been a cool project for me because other people outside of my league
            are using it and I've iterated through different versions as people report
            bugs to me. As of writing this I've had 3,742 page views with a handful of
            users still using it in the off-season.
          </div>
          
          <div className={styles.projectImageHolder}>
            <img src={TradingBlockImage} alt={'Trading Block Screenshot'} />
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

export default SleeperTradingBlock;
