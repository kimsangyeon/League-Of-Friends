import useSWR from 'swr';
import {apiGet} from '@utils/apiUtils';
import {GET_SUMMONER_BY_NAME_URL} from '@consts/index';

const useSummonerList = (list: string[]) => {
  const {data} = useSWR([`api/summoner/list`, list], async (_, list) => {
    return await Promise.all(list.map(async name => await apiGet(`${GET_SUMMONER_BY_NAME_URL}/${name}`)));
    ;
  });
  return data?.map(({data}) => data);
};

export default useSummonerList;
