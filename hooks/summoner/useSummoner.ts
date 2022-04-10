import useSWRImmutable from 'swr/immutable';
import {apiGet} from '@utils/apiUtils';

const useSummoner = (name: string) => {
  const {data, error} = useSWRImmutable(
    `/api/league/${name}`,
    apiGet
  );
  return [data?.data, error];
};

export default useSummoner;
