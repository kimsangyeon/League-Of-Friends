import useSWRImmutable from 'swr/immutable';
import {apiGet} from '@utils/apiUtils';
import {GET_MATCH_BY_MATCHID, GET_MATCH_ID_LIST_BY_PUUID} from '@consts/index';
import {MatchResponse} from '@models/match';
import {AxiosResponse} from 'axios';

const useMatchList = (puuidList: string[]) => {
  const {data} = useSWRImmutable(
    [GET_MATCH_ID_LIST_BY_PUUID, puuidList],
    async (url, idList) => {
      const matchIdList: AxiosResponse<string[]>[] = await Promise.all(
        idList.map(
          async (id) =>
            await apiGet<string[]>(`${url}/${id}/ids?start=0&count=3`)
        )
      );

      return await Promise.all(
        matchIdList.map(
          async ({data}) =>
            await Promise.all(
              data.map(
                async (matchId: string) =>
                  await apiGet<MatchResponse>(
                    `${GET_MATCH_BY_MATCHID}/${matchId}`
                  )
              )
            )
        )
      );
    }
  );

  return data?.map((d) => d.map(({data}) => data));
};

export default useMatchList;
