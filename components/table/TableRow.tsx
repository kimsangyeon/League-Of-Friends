import React, { useState } from 'react';
import styles from './table.module.css';
import useSummoner from '@hooks/summoner/useSummoner';
import TableData from './TableData';
import TableLoading from './TableLoading';
import {MatchScoreInfo} from '@models/match';
import useSummonerNameList from '@hooks/summoner/useSummonerNameList';
import { getLocalStorageByNameList, removeLocalStorageByNameList } from '@utils/storageUtils';

interface TalbeRowProps {
  info: MatchScoreInfo;
}

const TableRow = ({info}: TalbeRowProps) => {
  const {summoner, isValidating} = useSummoner(info?.name);
  const {setSummonerList} = useSummonerNameList();
  const [isEnter, setIsEnter] = useState(false);

  if (!summoner || isValidating) return <tr className={styles.tbodyRow}><td className={styles.td}><TableLoading /></td></tr>;

  const onEnter = () => setIsEnter(true);
  const onLeave = () => setIsEnter(false);
  const onRemove = () => {
    removeLocalStorageByNameList(summoner.name);
    setSummonerList(getLocalStorageByNameList());
  };

  return (
    <tr
      className={styles.tbodyRow}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      style={isEnter ? {background: 'aliceblue'} : {}}
    >
      {summoner && (
        <TableData
          info={info}
          id={summoner.id}
          profileIconId={summoner.profileIconId}
          name={summoner.name}
        />
      )}
      {isEnter && (
        <td>
          <svg 
            className={styles.removeBtn}
            onClick={onRemove}
            xmlns="http://www.w3.org/2000/svg"
            fill="#000000"
            viewBox="0 0 64 64"
            width="30px"
            height="30px"
          >
            <path d="M50.385,50.385c-10.153,10.153-26.616,10.153-36.77,0s-10.153-26.616,0-36.77s26.616-10.153,36.77,0 S60.538,40.231,50.385,50.385z M43.314,40.485L36.243,32l7.071-8.485l-2.828-2.828L32,27.757l-8.485-7.071l-2.828,2.828L27.757,32 l-7.071,8.485l2.828,2.828L32,36.243l8.485,7.071L43.314,40.485z"/>
          </svg>
        </td>
      )}
    </tr>
  );
};

export default TableRow;
