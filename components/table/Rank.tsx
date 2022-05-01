import Image from 'next/image';
import {RANK_TO_MAP} from '@consts/index';
import useRank from '@hooks/rank/useRank';
import styles from '@styles/common.module.css';
import TableLoading from './TableLoading';

interface RankProps {
  id: string;
}

const UNRANKED = 'UNRANKED';
const RANK_LIST = ['RANKED_SOLO_5x5', 'RANKED_FLEX_SR'];

const Rank = ({id}: RankProps) => {
  const {rank, isValidating} = useRank(id);

  if (!rank || isValidating) return <TableLoading />;

  return (
    <>
      {rank &&
        RANK_LIST.map((type: string, index: number) => (
          <div className={styles.imageInlineWrap} key={type}>
            <Image
              src={`/images/${rank[index]?.tier || UNRANKED}.png`}
              alt='tier image'
              width={46}
              height={46}
            />
            <div>{rank[index]?.rank}</div>
            <div>{RANK_TO_MAP[rank[index]?.queueType] || UNRANKED}</div>
          </div>
        ))}
    </>
  );
};

export default Rank;
