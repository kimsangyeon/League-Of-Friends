import axios from 'axios';
import { RIOT_KEY } from '@consts/index';

export const apiGet = async (url = '') => {
  return await axios.get(url, {
    headers: {
      'X-Riot-Token': RIOT_KEY,
    },
  });
};
