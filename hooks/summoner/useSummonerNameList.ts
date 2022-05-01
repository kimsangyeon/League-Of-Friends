import useSWRImmutable from 'swr/immutable';
import {getLocalStorageByNameList} from '@utils/storageUtils';

const useSummonerNameList = () => {
  const {data: summonerList, mutate} = useSWRImmutable('summonerList', () =>
    getLocalStorageByNameList()
  );
  return {
    summonerList,
    setSummonerList: mutate,
  };
};

export default useSummonerNameList;
