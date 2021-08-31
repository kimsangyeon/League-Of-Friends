import { useQuery } from 'react-query';
import { GET_SUMMONER_BY_NAME_URL, GET_SUMMONER_RANK_BY_ID_URL } from '@consts/index';
import { apiGet } from '@utils/apiUtils';

export const fetchSummoner = async (summonerName = '') => {
  if (!summonerName) return await {data: {}, isLoading: false, isFetching: false};

  return await apiGet(`${GET_SUMMONER_BY_NAME_URL}/${summonerName}`);
};

export const useSummoner = (summonerName = '') => {
  return useQuery(['myInfo', summonerName], () => fetchSummoner(summonerName));
};

export const fetchRank = async (summonerId = '') => {
  if (!summonerId) return await {data: {}, isLoading: false, isFetching: false};

  return await apiGet(`${GET_SUMMONER_RANK_BY_ID_URL}/${summonerId}`);
}

export const useRank = (summonerId = '') => {
  return useQuery(['myRank', summonerId], () => fetchRank(summonerId));
}

