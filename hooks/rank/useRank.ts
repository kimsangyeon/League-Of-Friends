import useSWRImmutable from 'swr/immutable';
import {apiGet} from '@utils/apiUtils';
import {GET_SUMMONER_RANK_BY_ID_URL} from '@consts/index';
import {RankInfo} from '@models/summoner';

const useRank = (summonerId: string) => {
  const {data} = useSWRImmutable(
    `${GET_SUMMONER_RANK_BY_ID_URL}/${summonerId}`,
    apiGet
  );
  return data?.data as RankInfo[];
};

export default useRank;
