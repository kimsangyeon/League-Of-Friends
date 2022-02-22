import useSWRImmutable from 'swr/immutable';
import {apiGet} from '@utils/apiUtils';
import {GET_MATCH_ID_LIST_BY_PUUID} from '@consts/index';

const useMatchIdList = (puuid: string) => {
  const {data} = useSWRImmutable(`${GET_MATCH_ID_LIST_BY_PUUID}/${puuid}/ids?start=0&count=5`, apiGet);
  return data;
};

export default useMatchIdList;
