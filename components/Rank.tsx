import Image from 'next/image';
import { RANK_TO_MAP } from '@consts/index';
import { useRank } from "@hooks/summoner";
import { RankInfo } from '@models/summoner';
import styles from '@styles/common.module.css'

interface RankProps {
  id: string;
}

const Rank = ({id}: RankProps) => {
  const { data, isLoading, isFetching } = useRank(id);

  return (
    <div>
      {data?.data.length > 0 && 
        data?.data?.map((info: RankInfo) => (
          <div className={styles.imageInlineWrap} key={info.leagueId}>
            <Image
              src={`/images/${info.tier}.png`}
              alt="tier image"
              width={46}
              height={46}
            />
            <div>{info.rank}</div>
            <div>{RANK_TO_MAP[info.queueType]}</div>
          </div>
        ))}
    </div>
  );
};

export default Rank;
