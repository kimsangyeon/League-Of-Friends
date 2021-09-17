import React from 'react';
import { GetServerSideProps } from 'next';
import styles from '@styles/common.module.css';
import { fetchSummoner } from '@hooks/summoner';
import { SummonerInfo } from '@models/summoner';

import Info from '@components/info';

interface DetailPageProps {
  summoner: SummonerInfo;
}

const DetailPage = ({summoner}: DetailPageProps) => {
  return (
    <div className={styles.detailWrap}>
      <Info name={summoner?.name} key={summoner?.name}/>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const {query} = ctx;
  const summoner = await fetchSummoner(encodeURI(query?.name as string || ''), true);

  return {
    props: {
      summoner: summoner.data,
    }
  };
}

export default DetailPage;
