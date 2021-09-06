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
    <div>
      {RANK_LIST.map((type: string, index: number) => (
        <div className={styles.imageInlineWrap} key={type}>
          <Image
            src={`/images/${rank[index]?.info?.tier || UNRANKED}.png`}
            alt="tier image"
            width={46}
            height={46}
          />
          <div>{rank[index]?.info?.rank}</div>
          <div>{RANK_TO_MAP[rank[index]?.info?.queueType] || UNRANKED}</div>
        </div>
      ))}
    </div>
  );
};

export default Rank;
