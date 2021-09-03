import { useQuery } from 'react-query';
import { apiGet } from '@utils/apiUtils';
import { GET_MATCH_LIST_BY_PUUID } from '@consts/index';

export const fetchMatchList = async (puuid = '') => {
  if (!puuid) return await {data: {}, isLoading: false, isFetching: false};

  return await apiGet(`${GET_MATCH_LIST_BY_PUUID}/${puuid}/ids`);
};

export const useMatchList = (puuid = '') => {
  const {data: matchListData, isLoading: isMatchListLoading, isFetching: isMatchListFetching} = useQuery(['matchlist', puuid], () => fetchMatchList(puuid));
  return {
    matchList: matchListData?.data,
    isMatchListLoading,
    isMatchListFetching
  };
};