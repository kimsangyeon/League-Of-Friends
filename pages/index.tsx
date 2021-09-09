import type { NextPage } from 'next'
import Head from 'next/head'
import React from 'react';
import Info from '@components/info';
import styles from '@styles/Home.module.css'
import RegisterSummoner from '@components/RegisterSummoner';
import { useSummonerList } from '@hooks/summoner';
import Lead from '@components/lead';

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
        <Lead />
        <RegisterSummoner />
        {summonerList && summonerList?.map(name => (
          <Info name={name} key={name}/>
        ))}
      </main>

      <footer className={styles.footer}>
        <div>footer</div>
      </footer>
    </div>
  );
};

export default Home
