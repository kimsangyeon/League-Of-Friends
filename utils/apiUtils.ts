import axios from 'axios';
import {RIOT_KEY} from '@consts/index';

export const apiGet = async <T>(url = '', options = {}) => {
  return await axios.get<T>(url, {
    ...options,
    headers: {
      'X-Riot-Token': RIOT_KEY,
    },
  });
};
