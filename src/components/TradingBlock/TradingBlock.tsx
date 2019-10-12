import * as React from 'react';
import styles from './TradingBlock.module.css';
import LoadingSpinner from './LoadingSpinner';
import { fetchLeagueUsers, fetchLeagueRosters } from './API/api';

const TradingBlock = () => {
  const [isLoading, toggleLoading] = React.useState<boolean>(true);

  React.useEffect(() => {
    const leagueUserPromise = fetchLeagueUsers();
    const leagueRosterPromise = fetchLeagueRosters();

    Promise.all([leagueUserPromise, leagueRosterPromise]).then(
      ([teamOwners, rosters]) => {
        teamOwners.forEach(owner => {
          const roster = rosters.find(roster => {
            return roster.ownerID === owner.userID;
          });
          if (roster) {
            owner.players = roster.players;
          }
        });
        toggleLoading(false);
        console.log(teamOwners);
      },
    );
  }, []);

  return (
    <div className={styles.container}>
      {isLoading && <LoadingSpinner />}
      {!isLoading && <></>}
    </div>
  );
};

export default TradingBlock;
