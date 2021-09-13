import { MouseEvent, useState } from 'react';
import Image from 'next/image';
import { useQueryClient } from 'react-query';
import styles from '@styles/common.module.css';
import { checkExistSummoner } from '@hooks/summoner';
import { getLocalStorageByNameList, setLocalStorageByNameList } from '@utils/storageUtils';

const RegisterSummoner = () => {
  const queryClient = useQueryClient();
  const [summonerName, setSummonerName] = useState('');

  const onRegister = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (await checkExistSummoner(summonerName)) {
      setLocalStorageByNameList(summonerName);
      setSummonerName('');
      queryClient.setQueryData('summonerList', () => getLocalStorageByNameList());
    }
  };

  return (
    <div className={styles.registerWrap}>
      <input
        className={styles.registerInput}
        value={summonerName}
        placeholder="소환사명, 소환사명, ..."
        onChange={(e) => setSummonerName(e.target.value)}
      />
      <button className={styles.registerButton} onClick={onRegister}>
        <Image src="/images/icon/search.png" alt="search_icon" width="30" height="30" />
      </button>
    </div>
  )
};

export default RegisterSummoner;
