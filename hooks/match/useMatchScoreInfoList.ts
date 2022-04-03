import {useMemo} from 'react';
import {MatchInfo} from '@models/match';
import {SummonerInfo} from '@models/summoner';

const useMatchScoreInfoList = (
  matchList: MatchInfo[][] = [],
  summonerList: SummonerInfo[] = []
) => {
  const isCalcedIdList: string[] = [];
  return useMemo(
    () =>
      matchList?.map((matchs) => {
        const summoner = summonerList?.find((summoner) =>
          matchs.every(({participants}) =>
            participants.some(({puuid}) => summoner.puuid === puuid && !isCalcedIdList.includes(puuid))
          )
        );
        if (!summoner)
          return {
            name: '',
            kills: 0,
            deaths: 0,
            assists: 0,
            win: 0,
            lose: 0,
            end: 0,
          };

        const {puuid, name} = summoner;
        isCalcedIdList.push(puuid);
        return matchs.reduce(
          (info, match) => {
            const {participants, gameEndTimestamp} = match;
            const participant = participants.find((p) => p.puuid === puuid);

            if (!participant) return info;

            const {kills, deaths, assists, win} = participant;

            return {
              name,
              kills: info.kills + kills,
              deaths: info.deaths + deaths,
              assists: info.assists + assists,
              win: win ? ++info.win : info.win,
              lose: win ? info.lose : ++info.lose,
              end: info.end > gameEndTimestamp ? info.end : gameEndTimestamp,
            };
          },
          {name, kills: 0, deaths: 0, assists: 0, win: 0, lose: 0, end: 0}
        );
      }),
    [matchList, summonerList]
  );
};

export default useMatchScoreInfoList;
