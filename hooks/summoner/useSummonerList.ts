import useSWRImmutable from 'swr/immutable';
import {apiGet, laggy} from '@utils/apiUtils';
import {SummonerInfo} from '@models/summoner';

const useSummonerList = (list: string[]) => {
  const {data, isValidating} = useSWRImmutable(
    [`api/summoner/list`, list],
    async (_, list) => {
      return await Promise.all(
        list.map(
          async (name) =>
            await apiGet<SummonerInfo>(`/api/summoner/${name}`)
        )
      );
    },
    {use: [laggy]},
  );
  return {
    summonerList: data?.map(({data}) => data),
    isValidating,
  };
};

export default useSummonerList;
