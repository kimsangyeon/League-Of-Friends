import { useMatchIdList, useMatchList } from "@hooks/match";
import { useMemo } from "react";
import styles from '@styles/common.module.css';

interface MatchInfoProps {
  puuid: string;
}

const MatchInfo = ({puuid}: MatchInfoProps) => {
  const { matchIdList, isMatchIdListLoading, isMatchIdListFetching } = useMatchIdList(puuid);
  const { matchList, isMatchListLoading, isMatchListFetching } = useMatchList(matchIdList);
  const info = useMemo(() => matchList?.reduce((info, match) => {
    const index = match?.metadata?.participants?.findIndex((p: string) => p === puuid);
    const {kills, deaths, assists, win} = match?.info?.participants[index];
    return {
      kills: info.kills + kills,
      deaths: info.deaths + deaths,
      assists: info.assists + assists,
      win: win ? ++info.win : info.win,
      lose: win ? info.lose: info.lose++,
    };
  }, {kills: 0, deaths: 0, assists: 0, win: 0, lose: 0}), [matchList, puuid]);

  if (
    isMatchIdListLoading || isMatchIdListFetching ||
    isMatchListLoading || isMatchListFetching
  ) return <div className={styles.matchInfoWrap}>Loading</div>

  return (
    <div className={styles.matchInfoWrap}>
      <div>
        KILLS: {info.kills} / DEATHS: {info.deaths} / ASSITS: {info.assists} / WIN: {info.win} / LOSE: {info.lose}
      </div>
    </div>
  );
};

export default MatchInfo;
