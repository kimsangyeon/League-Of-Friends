import React, {useEffect, useMemo} from 'react';
import useMatchList from '@hooks/match/useMatchList';
import styles from './table.module.css';
import {MatchScoreInfo} from '@models/match';
import {LeadInfo} from '@models/lead';
import Rank from './Rank';
import ProfileIcon from './ProfileIcon';
import TableLoading from './TableLoading';
import {formatYYYYMMDD} from '@utils/dateUtils';

interface TalbeDataProps {
  info: MatchScoreInfo;
  id: string;
  profileIconId: number;
  name: string;
}

const TableData = ({info, profileIconId, id, name}: TalbeDataProps) => {
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
      <td className={styles.td}>{formatYYYYMMDD(info.end)}</td>
    </>
  );
};

export default TableData;
