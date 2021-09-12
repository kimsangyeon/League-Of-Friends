import { useQuery } from 'react-query';
import { apiGet } from '@utils/apiUtils';
import { GET_SUMMONER_BY_NAME_URL, GET_SUMMONER_RANK_BY_ID_URL } from '@consts/index';
import { getLocalStorageByNameList } from '@utils/storageUtils';

export const fetchSummoner = async (summonerName = '') => {
  if (!summonerName) return await { data: {}, isLoading: false, isFetching: false, status: 400 };

  return await apiGet(`${GET_SUMMONER_BY_NAME_URL}/${summonerName}`);
};

export const fetchSummonerList = async (nameList = []) => {
  if (nameList.length === 0) return await { data: {}, isLoading: false, isFetching: false, status: 400 };

  const summonerList = nameList.map(name => (
    apiGet(`${GET_SUMMONER_BY_NAME_URL}/${name}`)
  ));

  return await Promise.allSettled(summonerList);
};

export const checkExistSummoner = async (summonerName = '') => {
  if (!summonerName) return false;

  try {
    const result = await fetchSummoner(summonerName);
    return result.status === 200;
  } catch (e) {
    alert('소환사를 찾을 수 없습니다.');
    console.warn(e);
  }
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
  if (!summonerId) return await { data: {}, isLoading: false, isFetching: false };

  return await apiGet(`${GET_SUMMONER_RANK_BY_ID_URL}/${summonerId}`);
}

export const useRank = (summonerId = '') => {
  const { data: rankData, isLoading: isRankLoading, isFetching: isRankFetching } = useQuery(['rank', summonerId], () => fetchRank(summonerId));
  return {
    rank: rankData?.data,
    isRankLoading,
    isRankFetching,
  };
}

export const useSummonerList = (): { summonerList: string[] } => {
  const { data } = useQuery('summonerList', () => getLocalStorageByNameList());
  return {
    summonerList: data as string[],
  };
};
