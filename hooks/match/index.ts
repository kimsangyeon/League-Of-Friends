import { useQuery } from 'react-query';
import { apiGet } from '@utils/apiUtils';
import { GET_MATCH_LIST_BY_ACCOUNT } from '@consts/index';

export const fetchMatchList = async (accountId = '') => {
  if (!accountId) return await {data: {}, isLoading: false, isFetching: false};

  return await apiGet(`${GET_MATCH_LIST_BY_ACCOUNT}/${accountId}`);
};

export const useMatchList = (accountId = '') => {
  const {data: matchListData, isLoading: isMatchListLoading, isFetching: isMatchListFetching} = useQuery(['matchlist', accountId], () => fetchMatchList(accountId));
  return {
    matchList: matchListData?.data,
    isMatchListLoading,
    isMatchListFetching
  };
};