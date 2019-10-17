import * as React from 'react';
import styles from './TradingBlock.module.css';
import LoadingSpinner from './components/LoadingSpinner';
import Team from './components/Team';
import { fetchLeagueUsers, fetchLeagueRosters } from './API/api';
import { TeamOwner } from './utils/types';
import Modal from './components/Modal';

const TradingBlock = () => {
  const [teamOwners, setTeamOwners] = React.useState<TeamOwner[]>([]);
  const [isLoading, toggleLoading] = React.useState<boolean>(false);
  const [errorMessage, setError] = React.useState<string>('');

  React.useEffect(() => {
    const leagueUserPromise = fetchLeagueUsers().catch(() => {
      setError('Error retrieving team owners.');
    });
    const leagueRosterPromise = fetchLeagueRosters().catch(() => {
      setError('Error retrieving team rosters.');
    });
    Promise.all([leagueUserPromise, leagueRosterPromise]).then(
      ([teamOwners, rosters]) => {
        if (teamOwners && rosters) {
          teamOwners.forEach(owner => {
            const roster = rosters.find(roster => {
              return roster.ownerID === owner.userID;
            });
            if (roster) {
              owner.players = roster.players;
            }
          });
          // this causes a double render.. I think I'd have to move to React.useReducer to update two things at once.
          toggleLoading(false);
          setTeamOwners(teamOwners);
        }
      },
    );
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>The Trading Block</h1>
      </div>
      {isLoading && <LoadingSpinner />}
      {!isLoading && (
        <div className={styles.teams}>
          {teamOwners.map(teamOwner => {
            return (
              <div className={styles.teamContainer} key={teamOwner.userID}>
                <Team owner={teamOwner} />
              </div>
            );
          })}
        </div>
      )}
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
