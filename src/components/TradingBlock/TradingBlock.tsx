import * as React from 'react';
import styles from './TradingBlock.module.css';
import LoadingSpinner from './components/LoadingSpinner';
import Team from './components/Team';
import { fetchLeagueUsers, fetchLeagueRosters, fetchLeagueDetails } from './API/api';
import { TeamOwner } from './utils/types';
import Modal from './components/Modal';
import { sortTeamOwners } from './utils/sortTeamOwners';

const TradingBlock = () => {
  const [leagueName, setLeagueName] = React.useState<string>('');
  const [teamOwners, setTeamOwners] = React.useState<TeamOwner[]>([]);
  const [isLoading, toggleLoading] = React.useState<boolean>(false);
  const [errorMessage, setError] = React.useState<string>('');

  React.useEffect(() => {
    const leagueDetailsPromise = fetchLeagueDetails().catch(() => {
      setError('Error retrieving team owners.');
    });
    const leagueUserPromise = fetchLeagueUsers().catch(() => {
      setError('Error retrieving team owners.');
    });
    const leagueRosterPromise = fetchLeagueRosters().catch(() => {
      setError('Error retrieving team rosters.');
    });
    Promise.all([leagueDetailsPromise, leagueUserPromise, leagueRosterPromise]).then(
      ([leagueName, teamOwners, rosters]) => {
        if (teamOwners && rosters) {
          teamOwners.forEach(owner => {
            const roster = rosters.find(roster => {
              return roster.ownerID === owner.userID;
            });
            if (roster) {
              owner.players = roster.players;
            }
          });
          // this causes a triple render.. I think I'd have to move to React.useReducer to update three things at once.
          setTeamOwners(teamOwners.sort(sortTeamOwners));
          setLeagueName(leagueName || '');
          toggleLoading(false);
        }
      },
    );
  }, []);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        {leagueName ? (
          <div className={styles.title}>
            <h1>{leagueName}</h1>
            <h3>Trading Block</h3>
          </div>
        ) : (
          <h1>The Trading Block</h1>
        )}
      </div>
      <div className={styles.teams}>
        {teamOwners.map(teamOwner => {
          return (
            <div className={styles.teamContainer} key={teamOwner.userID}>
              <Team owner={teamOwner} />
            </div>
          );
        })}
      </div>
      {errorMessage && (
        <Modal
          message={errorMessage}
          closeModal={() => {
            setError('');
            window.location.reload();
          }}
        />
      )}
    </div>
  );
};

export default TradingBlock;
