import Image from 'next/image';
import { RANK_TO_MAP } from '@consts/index';
import { useRank } from "@hooks/summoner";
import styles from '@styles/common.module.css'

interface RankProps {
  id: string;
}

const UNRANKED = 'UNRANKED';
const RANK_LIST = ['RANKED_SOLO_5x5', 'RANKED_FLEX_SR'];

const Rank = ({id}: RankProps) => {
  const { rank, isRankLoading, isRankFetching } = useRank(id);

  if (isRankLoading || isRankFetching) return <div>Loading</div>;

  return (
    <>
      {rank && RANK_LIST.map((type: string, index: number) => (
        <div className={styles.imageInlineWrap} key={type}>
          <Image
            src={`/images/${rank[index]?.tier || UNRANKED}.png`}
            alt="tier image"
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
