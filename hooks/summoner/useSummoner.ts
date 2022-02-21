import useSWR from 'swr';
import {apiGet} from '@utils/apiUtils';
import {GET_SUMMONER_BY_NAME_URL} from '@consts/index';

const useSummoner = (name: string) => {
  const {data} = useSWR(`${GET_SUMMONER_BY_NAME_URL}/${name}`, apiGet);
  return data;
};

export default useSummoner;
