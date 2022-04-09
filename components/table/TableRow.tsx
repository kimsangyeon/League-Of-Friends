import React from 'react';
import styles from './table.module.css';
import useSummoner from '@hooks/summoner/useSummoner';
import TableData from './TableData';
import TableLoading from './TableLoading';
import {MatchScoreInfo} from '@models/match';

interface TalbeRowProps {
  info: MatchScoreInfo;
}

const TableRow = ({info}: TalbeRowProps) => {
  const [summoner] = useSummoner(info?.name);

  if (!summoner) <tr className={styles.tbodyRow}><td className={styles.td}><TableLoading /></td></tr>;

  return (
    <tr className={styles.tbodyRow}>
      {summoner && (
        <TableData
          info={info}
          id={summoner.id}
          profileIconId={summoner.profileIconId}
          name={summoner.name}
        />
      )}
    </tr>
  );
};

export default TableRow;
