import React from 'react';
import styles from './table.module.css';
import TableRow from './TableRow';
import useSummonerList from '@hooks/summoner/useSummonerList';
import useMatchList from '@hooks/match/useMatchList';
import useMatchScoreInfoList from '@hooks/match/useMatchScoreInfoList';

interface TableProps {
  list: string[];
}

const Table = ({list}: TableProps) => {
  const summonerList = useSummonerList(list);
  const matchList = useMatchList(
    summonerList?.map((summoner) => summoner.puuid) || []
  );
  const infoList = useMatchScoreInfoList(matchList, summonerList);

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
          {infoList.length !== 0 &&
            infoList.map((info, index) => (
              <TableRow name={info?.name} key={info?.name} index={index + 1} />
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
