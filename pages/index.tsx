import React from 'react';
import type { NextPage } from 'next'
import Head from 'next/head'

import Info from '@components/info';
import Lead from '@components/lead';
import RegisterSummoner from '@components/register';
import styles from '@styles/Home.module.css';
import { useSummonerList } from '@hooks/summoner';

const Home: NextPage = () => {
  const {summonerList} = useSummonerList();

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="league of legends" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <RegisterSummoner />
        <Lead />
        {summonerList && summonerList?.map(name => (
          <Info name={name} key={name}/>
        ))}
      </main>
    </div>
  );
};

export default Home
