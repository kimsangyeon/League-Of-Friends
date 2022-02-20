import { MouseEvent, useState } from 'react';
import { useQueryClient } from 'react-query';
import styles from './register.module.css';
import { checkExistSummoner } from '@hooks/summoner';
import { getLocalStorageByNameList, setLocalStorageByNameList } from '@utils/storageUtils';
import Search from '@components/input/search';
import Button from '@components/button';
import Text from '@components/text';

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
    <div className={styles.registerContainer}>
      <div className={styles.registerWrap}>
        <Search name={summonerName} setName={setSummonerName} />
        <Button onClick={onRegister} />
      </div>
    </div>
  )
};

export default RegisterSummoner;
