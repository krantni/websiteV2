import { Player } from './types';
import players from './players.json';

export const mapPlayersToNickname = (
  roster: string[],
  rosterMetaData: {
    [key: string]: string;
  } | null,
): Player[] => {
  return roster.map(playerID => {
    const nickNameKey = 'p_nick_' + playerID;
    let nickName = '';
    if (rosterMetaData && rosterMetaData[nickNameKey]) {
      nickName = rosterMetaData[nickNameKey];
    }
    const playerIDName = players as { [key: string]: string };
    const playerName = playerIDName[playerID] ? playerIDName[playerID] : '';

    return {
      id: playerID,
      name: playerName,
      nickname: nickName,
      isOnTradeBlock: nickName === 'OTB',
    };
  });
};
