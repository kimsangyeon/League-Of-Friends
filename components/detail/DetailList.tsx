import React from 'react';
import {Participants} from '@models/match';
import Detail from './Detail';
import styles from '@styles/common.module.css';

interface DetailList {
  matchList: Participants[];
}

const DetailList: React.FC<DetailList> = ({matchList}) => (
  <div className={styles.detailListWrap}>
    {matchList.map((match, idx) => (
      <Detail match={match} key={`${match.participantId}_${idx}`} />
    ))}
  </div>
);

export default DetailList;
