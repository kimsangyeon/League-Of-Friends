import useSWRImmutable from 'swr/immutable';
import {apiGet} from '@utils/apiUtils';
import {RankInfo} from '@models/summoner';

const useRank = (summonerId: string) => {
  const {data} = useSWRImmutable(
    `/api/rank/${summonerId}`,
    apiGet
  );
  return data?.data as RankInfo[];
};

export default useRank;
