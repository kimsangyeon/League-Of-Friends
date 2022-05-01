import axios from 'axios';
import { useCallback, useEffect, useRef } from 'react';
import { Middleware, SWRHook } from 'swr';

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


export const laggy: Middleware = (useSWRNext: SWRHook) => {
  return (key: any, fetcher: any, config: any) => {
    // 이전에 반환된 데이터를 저장하기 위해 ref를 사용합니다.
    const laggyDataRef = useRef()

    // 실제 SWR hook.
    const swr = useSWRNext(key, fetcher, config)

    useEffect(() => {
      // 데이터가 undefined가 아니면 ref를 업데이트합니다.
      if (swr.data !== undefined && swr.data?.length !== 0) {
        laggyDataRef.current = swr.data
      }
    }, [swr.data])

    // 지연 데이터가 존재할 경우 이를 제거하기 위한 메서드를 노출합니다.
    const resetLaggy = useCallback(() => {
      laggyDataRef.current = undefined
    }, [])

    // 현재 데이터가 undefined인 경우에 이전 데이터로 폴백
    const dataOrLaggyData = swr.data === undefined ? laggyDataRef.current : swr.data

    // 이전 데이터를 보여주고 있나요?
    const isLagging = swr.data === undefined && laggyDataRef.current !== undefined

    // `isLagging` 필드 또한 SWR에 추가합니다.
    return Object.assign({}, swr, {
      data: dataOrLaggyData,
      isLagging,
      resetLaggy,
    })
  }
}