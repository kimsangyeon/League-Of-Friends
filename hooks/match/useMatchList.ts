import useSWRImmutable from 'swr/immutable';
import {apiGet, laggy} from '@utils/apiUtils';
import {MatchResponse} from '@models/match';
import { AxiosResponse } from 'axios';

const useMatchList = (puuidList: string[]) => {
  const {data, isValidating} = useSWRImmutable<AxiosResponse<MatchResponse[]>[]>(
    [puuidList],
    async (idList) => {
      return await Promise.all(
        idList.map(
          async (id: string) =>
            await apiGet(`/api/match/list/${id}`)
        )
      );
    },
    {use: [laggy]},
   );
  return {
    matchList: data?.map(({data}) => data),
    isValidating,
  };
};

export default useMatchList;
