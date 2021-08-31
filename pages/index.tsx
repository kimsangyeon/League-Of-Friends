import type { NextPage } from 'next'
import Head from 'next/head'
import React from 'react';
import { QueryClient } from 'react-query';
import { dehydrate } from 'react-query/hydration';
import MyInfo from '@components/my';
import { fetchRank, fetchSummoner } from '@hooks/summoner';
import styles from '@styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="league of legends" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <MyInfo />
      </main>

      <footer className={styles.footer}>
        <div>footer</div>
      </footer>
    </div>
  );
};

export async function getServerSideProps () {
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery(['myInfo'], () => fetchSummoner(''))
  await queryClient.prefetchQuery(['myRank'], () => fetchRank(''))

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }
}

export default Home
