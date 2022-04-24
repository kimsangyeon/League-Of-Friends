import useSWRImmutable from 'swr/immutable';
import {apiGet} from '@utils/apiUtils';
import {MatchResponse} from '@models/match';

const useMatchList = (puuidList: string[]) => {
  const {data} = useSWRImmutable(
    [puuidList],
    async (idList) => {
      return await Promise.all(
        idList.map(
          async (id) =>
            await apiGet<MatchResponse[]>(`/api/match/list/${id}`)
        )
      );
    }
  );
  return data?.map(({data}) => data);
};

export default useMatchList;
