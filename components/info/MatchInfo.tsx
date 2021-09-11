import { useMatchIdList, useMatchList } from "@hooks/match";
import { useEffect, useMemo } from "react";
import styles from '@styles/common.module.css';
import { useQueryClient } from "react-query";
import { MatchScoreInfo } from "@models/match";

interface MatchInfoProps {
  puuid: string;
  name: string;
}

const MatchInfo = ({puuid, name}: MatchInfoProps) => {
  const queryClient = useQueryClient();
  const { matchIdList, isMatchIdListLoading, isMatchIdListFetching } = useMatchIdList(puuid);
  const { matchList, isMatchListLoading, isMatchListFetching } = useMatchList(matchIdList);
  const info: MatchScoreInfo = useMemo(() => matchList?.reduce((info, match) => {
    const index = match?.metadata?.participants?.findIndex((p: string) => p === puuid);

    if (index === undefined) return info;

    const {kills, deaths, assists, win} = match?.info?.participants[index];
    return {
      kills: info.kills + kills,
      deaths: info.deaths + deaths,
      assists: info.assists + assists,
      win: win ? ++info.win : info.win,
      lose: win ? info.lose : ++info.lose,
    };
  }, {kills: 0, deaths: 0, assists: 0, win: 0, lose: 0}), [matchList, puuid]);

  useEffect(() => {
    const leadInfo: {name: string, info : MatchScoreInfo}[] = queryClient.getQueryData('leadInfo') || [];
    const prevInfo = leadInfo.find(info => info.name === name);
    if (prevInfo) {
      prevInfo.info = info;
    } else {
      leadInfo.push({name, info});
    }

    queryClient.setQueryData('leadInfo', leadInfo);
  }, [info, name, queryClient]);

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
