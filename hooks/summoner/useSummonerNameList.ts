import useSWRImmutable from 'swr/immutable';
import {getLocalStorageByNameList} from '@utils/storageUtils';
import { useEffect, useState } from 'react';

const useSummonerNameList = () => {
  const {data, mutate} = useSWRImmutable('summonerList', () =>
    getLocalStorageByNameList()
  );
  const [summonerList, setSummonerList] = useState<string[]>();

  useEffect(() => {
    console.log(data);
    setSummonerList(data);
  }, [data]);

  return {
    summonerList,
    setSummonerList: mutate,
  };
};

export default useSummonerNameList;
