import React, { useEffect, useState } from 'react';
import { useSummoner } from "@hooks/summoner";
import styles from '@styles/common.module.css';
import { getLocalStorageMyName, setLocalStorageMyName } from '@utils/storageUtils';
import Rank from '../Rank';
import ProfileIcon from '../ProfileIcon';
import ProfileChangeBtn from '../ProfileChangeBtn';
import { useMatchList } from '@hooks/match';

const MyInfo = () => {
  const [myName, setMyName] = useState('');
  const [newName, setNewName] = useState('');
  const [isModify, setIsModify] = useState(false);

  const { summoner, isSummonerLoading, isSummonerFetching } = useSummoner(myName);
  const { matchList, isMatchListLoading, isMatchListFetching} = useMatchList(summoner?.puuid);

  useEffect(() => {
    setMyName(getLocalStorageMyName());
  }, []);

  const onComplete = () => {
    if (isModify) {
      setIsModify(false);
      setMyName(newName);
      setLocalStorageMyName(newName);
    } else {
      setIsModify(true);
    }
  };

  return (
    <div className={styles.myWrap}>
      <div className={styles.tableWrap}>
        <table>
            <thead>
              <th>profile</th>
              <th>rank</th>
            </thead>
            <tbody>
              {summoner && (
                <tr>
                  <td className={styles.colWrap}>
                    <div>
                      <ProfileIcon profileIconId={summoner.profileIconId} />
                      <ProfileChangeBtn
                        name={summoner.name}
                        newName={newName}
                        isModify={isModify}
                        setNewName={setNewName}
                        setIsModify={setIsModify}
                        onComplete={onComplete}
                      />
                    </div>
                  </td>
                  <td  className={styles.colWrap}><Rank id={summoner.id} /></td>
                </tr>
              )}
            </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyInfo;
