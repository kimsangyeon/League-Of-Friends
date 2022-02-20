import React from 'react';
import styles from './table.module.css';
import {useSummoner} from '@hooks/summoner';
import TableData from './TableData';

interface TalbeRowProps {
  name: string;
  index: number;
}

const TableRow = ({name, index}: TalbeRowProps) => {
  const {summoner, isSummonerLoading, isSummonerFetching} = useSummoner(name);

  if (isSummonerLoading || isSummonerFetching) <div>Loading</div>;

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
