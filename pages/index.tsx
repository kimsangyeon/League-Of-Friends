import React from 'react';
import type {NextPage} from 'next';
import Head from 'next/head';

import RegisterSummoner from '@components/register';
import styles from '@styles/Home.module.css';
import useSummonerNameList from '@hooks/summoner/useSummonerNameList';
import Table from '@components/table';

const Home: NextPage = () => {
  const {summonerList} = useSummonerNameList();

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='league of legends' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <RegisterSummoner />
        {summonerList && <Table list={summonerList} />}
      </main>
    </div>
  );
};

export default Home;
