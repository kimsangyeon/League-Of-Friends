import {apiGet} from '@utils/apiUtils';
import {
  GET_SUMMONER_BY_NAME_URL,
  API_SUMMONER_PREFIX_FOR_SERVER,
} from '@consts/index';
import {SummonerInfo} from '@models/summoner';

export const fetchSummoner = async (summonerName = '', isServer = false) => {
  if (!summonerName) return null;

  return await apiGet<SummonerInfo>(
    `${
      isServer ? API_SUMMONER_PREFIX_FOR_SERVER : ''
    }${GET_SUMMONER_BY_NAME_URL}/${summonerName}`
  );
};

export const checkExistSummoner = async (summonerName = '') => {
  if (!summonerName) return false;

  try {
    const result = await fetchSummoner(summonerName);
    return result?.status === 200;
  } catch (e) {
    alert('소환사를 찾을 수 없습니다.');
    console.warn(e);
  }
};
