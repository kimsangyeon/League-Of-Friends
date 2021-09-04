import { useQuery } from 'react-query';
import { apiGet } from '@utils/apiUtils';
import { GET_MATCH_ID_LIST_BY_PUUID, GET_MATCH_BY_MATCHID } from '@consts/index';
import { MatchInfo } from '@models/match';

export const fetchMatchIdList = async (puuid = '') => {
  if (!puuid) return {data: {}, isLoading: false, isFetching: false};

  return await apiGet(`${GET_MATCH_ID_LIST_BY_PUUID}/${puuid}/ids?start=0&count=5`);
};

export const useMatchIdList = (puuid = ''): {matchIdList: string[], isMatchIdListLoading: boolean, isMatchIdListFetching: boolean} => {
  const {data: matchIdListData, isLoading: isMatchIdListLoading, isFetching: isMatchIdListFetching} = useQuery(['matchIdList', puuid], () => fetchMatchIdList(puuid));
  return {
    matchIdList: matchIdListData?.data,
    isMatchIdListLoading,
    isMatchIdListFetching
  };
};

export const fetchMatchList = async (matchIdList: string[] = []) => {
  if (matchIdList.length === 0) return {data: {}, isLoading: false, isFetching: false};

  const matchList = matchIdList.map(matchId => (
    apiGet(`${GET_MATCH_BY_MATCHID}/${matchId}`)
  ));
  return await Promise.all(matchList);
};

export const useMatchList = (matchIdList: string[] = []): {matchList: MatchInfo[], isMatchListLoading: boolean, isMatchListFetching: boolean} => {
  const {data: matchList, isLoading: isMatchListLoading, isFetching: isMatchListFetching} = useQuery(['matchList', matchIdList], () => fetchMatchList(matchIdList));
  return {
    matchList: (matchList as any[]).map(match => match?.data),
    isMatchListLoading,
    isMatchListFetching
  };
};