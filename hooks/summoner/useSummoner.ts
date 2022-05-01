import useSWRImmutable from 'swr/immutable';
import {apiGet, laggy} from '@utils/apiUtils';
import { AxiosResponse } from 'axios';
import { SummonerInfo } from '@models/summoner';

const useSummoner = (name: string) => {
  const {data, isValidating} = useSWRImmutable<AxiosResponse<SummonerInfo>>(
    `/api/league/${name}`,
    apiGet,
    {use: [laggy]},
  );
  return {
    summoner: data?.data,
    isValidating,
  };
};

export default useSummoner;
