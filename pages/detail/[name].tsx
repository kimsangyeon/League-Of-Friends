import React from 'react';
import { GetServerSideProps } from 'next';
import styles from '@styles/common.module.css';
import { fetchSummoner } from '@hooks/summoner';
import { SummonerInfo } from '@models/summoner';
import { Participants } from '@models/match';

import Info from '@components/info';
import { fetchMatchIdList, fetchMatchList } from '@hooks/match';

interface DetailPageProps {
  summoner: SummonerInfo;
  matchList: Participants[];
}

const DetailPage = ({summoner, matchList}: DetailPageProps) => {

  return (
    <div className={styles.detailWrap}>
      <Info name={summoner?.name} key={summoner?.name}/>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const {query} = ctx;

  try {
    const summoner = await fetchSummoner(encodeURI(query?.name as string || ''), true);
    const matchIdList = await fetchMatchIdList(summoner?.data.puuid, true);
    const matchList = await fetchMatchList(matchIdList?.data, true);

    return {
      props: {
        summoner: summoner?.data,
        matchList: (matchList as any[]).map(match => {
          const detail = match?.value?.data?.info?.participants?.find((p: { puuid: string | undefined; }) => (
            p?.puuid === summoner?.data.puuid
          ));
          return detail;
        }),
      },
    };
  } catch (e) {
    console.warn('Server Error: ', e);
  }

  return {
    props: {},
  };
}

export default DetailPage;
