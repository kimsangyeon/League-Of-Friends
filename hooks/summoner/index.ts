import { useQuery } from 'react-query';
import { apiGet } from '@utils/apiUtils';
import { GET_SUMMONER_BY_NAME_URL, GET_SUMMONER_RANK_BY_ID_URL } from '@consts/index';

export const fetchSummoner = async (summonerName = '') => {
  if (!summonerName) return await {data: {}, isLoading: false, isFetching: false};

  return await apiGet(`${GET_SUMMONER_BY_NAME_URL}/${summonerName}`);
};

export const useSummoner = (summonerName = '') => {
  const {
    data: summonerData,
    isLoading: isSummonerLoading,
    isFetching: isSummonerFetching
  } = useQuery(['summoner', summonerName], () => fetchSummoner(summonerName));
  return {
    summoner: summonerData?.data,
    isSummonerLoading,
    isSummonerFetching,
  };
};

export const fetchRank = async (summonerId = '') => {
  if (!summonerId) return await {data: {}, isLoading: false, isFetching: false};

  return await apiGet(`${GET_SUMMONER_RANK_BY_ID_URL}/${summonerId}`);
}

export const useRank = (summonerId = '') => {
  const {data: rankData, isLoading: isRankLoading, isFetching: isRankFetching} = useQuery(['rank', summonerId], () => fetchRank(summonerId));
  return {
    rank: rankData?.data,
    isRankLoading,
    isRankFetching,
  };
}

