import React, {useEffect, useMemo} from 'react';
import {useQueryClient} from 'react-query';
import {useMatchIdList, useMatchList} from '@hooks/match';
import styles from './table.module.css';
import {MatchScoreInfo} from '@models/match';
import {LeadInfo} from '@models/lead';
import Rank from './Rank';
import ProfileIcon from './ProfileIcon';
import TableLoading from './TableLoading';

interface TalbeDataProps {
  puuid: string;
  id: string;
  profileIconId: number;
  name: string;
  index: number;
}

const TableData = ({puuid, profileIconId, id, name}: TalbeDataProps) => {
  const queryClient = useQueryClient();
  const {matchIdList, isMatchIdListLoading, isMatchIdListFetching} =
    useMatchIdList(puuid);
  const {matchList, isMatchListLoading, isMatchListFetching} =
    useMatchList(matchIdList);

  const info: MatchScoreInfo = useMemo(
    () =>
      matchList?.reduce(
        (info, match) => {
          const index = match?.metadata?.participants?.findIndex(
            (p: string) => p === puuid
          );

          if (index === undefined) return info;

          const {kills, deaths, assists, win} =
            match?.info?.participants[index];
          return {
            name,
            kills: info.kills + kills,
            deaths: info.deaths + deaths,
            assists: info.assists + assists,
            win: win ? ++info.win : info.win,
            lose: win ? info.lose : ++info.lose,
          };
        },
        {kills: 0, deaths: 0, assists: 0, win: 0, lose: 0, name}
      ),
    [matchList, puuid, name]
  );

  useEffect(() => {
    const leadInfo: LeadInfo[] = queryClient.getQueryData('leadInfo') || [];
    const prevInfo = leadInfo.find((info) => info.name === name);
    if (prevInfo) {
      prevInfo.info = info;
    } else {
      leadInfo.push({name, info});
    }

    queryClient.setQueryData('leadInfo', leadInfo);
  }, [info, name, queryClient]);

  if (
    isMatchIdListLoading ||
    isMatchIdListFetching ||
    isMatchListLoading ||
    isMatchListFetching
  )
    return <TableLoading />;

  return (
    <>
      <td className={styles.td}>
        <ProfileIcon profileIconId={profileIconId} />
        {name}
      </td>
      <td className={styles.td}>
        <Rank id={id} />
      </td>
      <td className={styles.td}>
        {((info.kills + info.assists) / info.deaths).toFixed(2)}
      </td>
      <td className={styles.td}>{info.kills}</td>
      <td className={styles.td}>{info.deaths}</td>
      <td className={styles.td}>{info.assists}</td>
      <td className={styles.td}>{info.win}</td>
      <td className={styles.td}>{info.lose}</td>
    </>
  );
};

export default TableData;
