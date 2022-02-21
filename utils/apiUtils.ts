import axios from 'axios';
import {RIOT_KEY} from '@consts/index';

export const apiGet = async <T>(url = '') => {
  return await axios.get<T>(url, {
    headers: {
      'X-Riot-Token': RIOT_KEY,
    },
  });
};
