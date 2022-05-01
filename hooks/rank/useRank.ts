import useSWRImmutable from 'swr/immutable';
import {apiGet, laggy} from '@utils/apiUtils';
import {RankInfo} from '@models/summoner';

const useRank = (summonerId: string) => {
  const {data, isValidating} = useSWRImmutable(
    `/api/rank/${summonerId}`,
    apiGet,
    {use: [laggy]},
  );
  return {
    rank: data?.data as RankInfo[],
    isValidating,
  };
};

export default useRank;
