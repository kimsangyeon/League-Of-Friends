import useSWRImmutable from 'swr/immutable';
import {apiGet} from '@utils/apiUtils';
import {GET_MATCH_ID_LIST_BY_PUUID, GET_MATCH_BY_MATCHID} from '@consts/index';
import {MatchIdListReponse, MatchResponse, MatchListResponse} from '@models/match';

const useMatchList = (puuidList: string[]) => {
  const {data: matchIdList} = useSWRImmutable(['api/match/id/list', puuidList], async (_, list) => {
    return await Promise.all(list.map(async puuid => await apiGet<MatchIdListReponse[]>(`${GET_MATCH_ID_LIST_BY_PUUID}/${puuid}/ids?start=0&count=5`)));
  });

  const {data} = useSWRImmutable(['api/match/list', matchIdList?.map(res => res.data)], async (_, list) => {
    if (!list) return {data: []};
    return await Promise.all(list.map(async idList => (
      await Promise.all(idList.map(async (matchid: any) => await apiGet<MatchListResponse>(`${GET_MATCH_BY_MATCHID}/${matchid}`)))
    )));
  });
  if (!Array.isArray(data)) return;
  return data?.map((list: { data: any; }[]) => list.map(({data}: {data: MatchResponse}) => data?.info));
};

export default useMatchList;
