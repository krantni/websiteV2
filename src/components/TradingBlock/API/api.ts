import axios, { AxiosResponse } from 'axios';
import { ServiceLeagueData, TeamOwner, ServiceRosterData, Roster } from '../utils/types';
import { mapPlayersToNickname } from '../utils/mapPlayersToNickname';

export const fetchLeagueUsers = (): Promise<TeamOwner[]> => {
  return axios
    .get('https://api.sleeper.app/v1/league/423262970320003072/users')
    .then((serviceResponse: AxiosResponse<ServiceLeagueData[]>): TeamOwner[] => {
      return serviceResponse.data.map(user => {
        return {
          userName: user.display_name,
          userID: user.user_id,
          avatarID: user.avatar,
          teamName:
            user.metadata && user.metadata.team_name ? user.metadata.team_name : '',
          players: [],
        };
      });
    });
};

export const fetchLeagueRosters = (): Promise<Roster[]> => {
  return axios
    .get('https://api.sleeper.app/v1/league/423262970320003072/rosters')
    .then((serviceResponse: AxiosResponse<ServiceRosterData[]>): Roster[] => {
      return serviceResponse.data.map(roster => {
        return {
          players: mapPlayersToNickname(roster.players, roster.metadata),
          ownerID: roster.owner_id,
        };
      });
    });
};

export const fetchLeagueDetails = (): Promise<string> => {
  return axios
    .get(`https://api.sleeper.app/v1/league/423262970320003072`)
    .then((serviceResponse: AxiosResponse<{ name: string }>): string => {
      if (serviceResponse.data && serviceResponse.data) {
        return serviceResponse.data.name;
      }
      throw new Error(
        'Error finding league details. Did you enter the correct League ID?',
      );
    });
};
