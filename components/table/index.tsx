import React from 'react';
import styles from './table.module.css';
import TableRow from './TableRow';
import TableLoading from './TableLoading';
import useSummonerList from '@hooks/summoner/useSummonerList';
import useMatchList from '@hooks/match/useMatchList';
import useMatchScoreInfoList, {Info} from '@hooks/match/useMatchScoreInfoList';

interface TableProps {
  list: string[];
}

const sortByKDA = (arr: Info[], type = 'desc') => {
  return [...arr].sort((a, b) => (
    type === 'desc' ? (
      (((b.kills + b.assists) / b.deaths)) - ((a.kills + a.assists) / a.deaths)
    ) : (
      (((a.kills + a.assists) / a.deaths)) - ((b.kills + b.assists) / b.deaths)
    )
  ))
};

const Table = ({list}: TableProps) => {
  const {summonerList, isValidating: isSummonerListLoading} = useSummonerList(list);
  const {matchList, isValidating: isMatchListLoading} = useMatchList(
    summonerList?.map((summoner) => summoner.puuid) || []
  );

  const infoList = useMatchScoreInfoList(
    matchList?.map((list) => list.map(({info}) => info)),
    summonerList,
  );

  return (
    <div>
      <table className={styles.table}>
        <colgroup>
          <col style={{width: '15%'}} />
          <col />
          <col style={{width: '10%'}} />
          <col style={{width: '10%'}} />
          <col style={{width: '10%'}} />
          <col style={{width: '10%'}} />
          <col style={{width: '10%'}} />
          <col style={{width: '10%'}} />
        </colgroup>
        <thead>
          <tr className={styles.theadRow}>
            <th className={styles.th}>순위</th>
            <th className={styles.th}>랭크</th>
            <th className={styles.th}>KDA</th>
            <th className={styles.th}>킬</th>
            <th className={styles.th}>데스</th>
            <th className={styles.th}>어시스트</th>
            <th className={styles.th}>승리</th>
            <th className={styles.th}>패배</th>
            <th className={styles.th}>마지막 경기</th>
          </tr>
        </thead>
        <tbody>
          {isMatchListLoading || isSummonerListLoading && (
            <tr className={styles.tbodyRow}>
              <td className={styles.td}><TableLoading /></td>
            </tr>
          )}
          {infoList.length !== 0 && (
            sortByKDA(infoList).map((info) => <TableRow info={info} key={info?.name} />)
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
