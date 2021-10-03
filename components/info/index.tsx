import React from 'react';
import Link from 'next/link';
import { useSummoner } from '@hooks/summoner';
import styles from '@styles/common.module.css';
import Rank from './Rank';
import ProfileIcon from './ProfileIcon';
import MatchInfo from '@components/info/MatchInfo';

interface InfoProps {
  name: string;
}

const Info = ({ name }: InfoProps) => {
  const { summoner, isSummonerLoading, isSummonerFetching } = useSummoner(name);

  return (
    <Link href={`/detail/${name}`}>
      <a className={styles.infoWrap}>
        <div className={styles.tableWrap}>
          <table>
            <tbody>
              {isSummonerLoading || isSummonerFetching ? (
                <tr><td>Loading</td></tr>
              ) : (
                summoner && (
                  <tr>
                    <td className={styles.colWrap}>
                      <ProfileIcon profileIconId={summoner.profileIconId} name={summoner.name} />
                    </td>
                    <td className={styles.colWrap}>
                      <Rank id={summoner.id} />
                    </td>
                    <td className={styles.colWrap}>
                      <MatchInfo puuid={summoner?.puuid} name={summoner.name} />
                    </td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        </div>
      </a>
    </Link>
  );
};

export default Info;
