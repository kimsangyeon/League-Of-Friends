import useSWRImmutable from 'swr/immutable';
import {apiGet} from '@utils/apiUtils';
import {GET_SUMMONER_BY_NAME_URL} from '@consts/index';
import {SummonerInfo} from '@models/summoner';

const useSummonerList = (list: string[]) => {
  const {data} = useSWRImmutable(
    [`api/summoner/list`, list],
    async (_, list) => {
      return await Promise.all(
        list.map(
          async (name) =>
            await apiGet<SummonerInfo>(`${GET_SUMMONER_BY_NAME_URL}/${name}`)
        )
      );
    }
  );
  return data?.map(({data}) => data);
};

export default useSummonerList;
