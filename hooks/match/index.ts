import { useQuery } from 'react-query';
import { apiGet } from '@utils/apiUtils';
import { GET_MATCH_ID_LIST_BY_PUUID, GET_MATCH_BY_MATCHID, API_MATCH_PREFIX_FOR_SERVER } from '@consts/index';
import { MatchIdList, MatchInfo } from '@models/match';

const delay = (time = 5000) => {
  return new Promise((r) => setTimeout(r, time))
};

export const fetchMatchIdList = async (puuid = '', isServer = false) => {
  if (!puuid) return null;

  return await apiGet<MatchIdList>(`${isServer ? API_MATCH_PREFIX_FOR_SERVER : ''}${GET_MATCH_ID_LIST_BY_PUUID}/${puuid}/ids?start=0&count=5`);
};

export const useMatchIdList = (puuid = ''): { matchIdList: string[] | undefined, isMatchIdListLoading: boolean, isMatchIdListFetching: boolean } => {
  const {
    data: matchIdListData,
    isLoading: isMatchIdListLoading,
    isFetching: isMatchIdListFetching,
  } = useQuery(['matchIdList', puuid], () => {
    delay();
    return fetchMatchIdList(puuid)
  }, {
    retry: 5,
    retryDelay: 5000,
  });

  return {
    matchIdList: matchIdListData?.data,
    isMatchIdListLoading,
    isMatchIdListFetching
  };
};

export const fetchMatchList = async (matchIdList: string[] = [], isServer = false) => {
  if (matchIdList.length === 0) return [];

  const matchList = matchIdList.map(matchId => (
    apiGet<MatchInfo[]>(`${isServer ? API_MATCH_PREFIX_FOR_SERVER : ''}${GET_MATCH_BY_MATCHID}/${matchId}`)
  ));
  return await Promise.allSettled(matchList);
};

export const useMatchList = (matchIdList: string[] = []): { matchList: MatchInfo[], isMatchListLoading: boolean, isMatchListFetching: boolean } => {
  const {
    data: matchList,
    isLoading: isMatchListLoading,
    isFetching: isMatchListFetching
  } = useQuery(['matchList', matchIdList], () => {
    delay();
    return fetchMatchList(matchIdList)
  }, {
    retry: 5,
    retryDelay: 5000,
  });

  return {
    matchList: matchList ? (matchList as any[]).map(match => match?.value?.data) : [],
    isMatchListLoading,
    isMatchListFetching
  };
};