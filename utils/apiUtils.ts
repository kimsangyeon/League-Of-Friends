import axios from 'axios';

const apiInstance = () => {
  const axiosInstance = axios.create();
  const onFulfilled = (res: any) => res;

  const retry = (config: any) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log('retry');
        resolve(axiosInstance.request(config));
      }, 5000);
    });
  };

  const onRejected = (err: any) => {
    if (err.response.status === 429 && err.config) {
      return retry(err.config);
    }
    return Promise.reject(err);
  }

  axiosInstance.interceptors.response.use(
    onFulfilled,
    onRejected,
  );
  return axiosInstance;
};

const api = apiInstance();

export const apiGet = async <T>(url = '', options = {}) => {
  return await api.get<T>(url, {
    ...options,
    headers: {
      'X-Riot-Token': process.env.NEXT_PUBLIC_RIOT_KEY,
    },
  });
};
