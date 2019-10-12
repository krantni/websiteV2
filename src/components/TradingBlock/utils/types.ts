export type ServiceLeagueData = {
  user_id: string;
  metadata: {
    team_name: string;
  };
  display_name: string;
  avatar: string;
};

export type TeamOwner = {
  userName: string;
  userID: string;
  avatarID: string;
  teamName: string;
  players: Player[];
};

export type ServiceRosterData = {
  players: string[];
  owner_id: string;
  metadata: {
    [key: string]: string;
  } | null;
};

export type Roster = {
  players: Player[];
  ownerID: string;
};

export type Player = {
  id: string;
  name: string;
  nickname: string;
  isOnTradeBlock: boolean;
  team: string;
  position: string;
};
