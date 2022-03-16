import React from 'react';
import styles from './table.module.css';
import useSummoner from '@hooks/summoner/useSummoner';
import TableData from './TableData';
import TableLoading from './TableLoading';

interface TalbeRowProps {
  name: string;
  index: number;
}

const TableRow = ({name, index}: TalbeRowProps) => {
  const [summoner] = useSummoner(name);

  if (!summoner) <TableLoading />;

  return (
    <>
      {summoner && (
        <tr className={styles.tbodyRow}>
          <TableData puuid={summoner.puuid} id={summoner.id} profileIconId={summoner.profileIconId} name={summoner.name} index={index} />
        </tr>
      )}
    </>
  )
};

export default TableRow;
