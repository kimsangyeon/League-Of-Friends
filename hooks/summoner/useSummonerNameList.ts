import useSWRImmutable from 'swr/immutable';
import {getLocalStorageByNameList} from '@utils/storageUtils';

const useSummonerNameList = (): {summonerList: string[]} => {
  const {data} = useSWRImmutable('summonerList', () =>
    getLocalStorageByNameList()
  );
  return {
    summonerList: data as string[],
  };
};

export default useSummonerNameList;
