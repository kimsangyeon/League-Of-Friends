import {MouseEvent, useState} from 'react';
import styles from './register.module.css';
import {checkExistSummoner} from '@hooks/summoner';
import {
  getLocalStorageByNameList,
  setLocalStorageByNameList,
} from '@utils/storageUtils';
import Search from '@components/input/search';
import Button from '@components/button';
import useSummonerNameList from '@hooks/summoner/useSummonerNameList';

const RegisterSummoner = () => {
  const [summonerName, setSummonerName] = useState('');
  const {setSummonerList} = useSummonerNameList();

  const onRegister = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (await checkExistSummoner(summonerName)) {
      setLocalStorageByNameList(summonerName);
      setSummonerList(getLocalStorageByNameList());
      setSummonerName('');
    }
  };

  return (
    <div className={styles.registerContainer}>
      <div className={styles.registerWrap}>
        <Search name={summonerName} setName={setSummonerName} />
        <Button onClick={onRegister} />
      </div>
    </div>
  );
};

export default RegisterSummoner;
