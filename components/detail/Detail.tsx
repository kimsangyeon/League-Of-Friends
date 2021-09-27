import React from 'react';
import Image from 'next/image';

import { Participants } from '@models/match';
import styles from '@styles/common.module.css';

interface Detail {
  match: Participants;
}

const Detail: React.FC<Detail> = ({match}) => {
  const {kills, deaths, assists, win, championName, champLevel} = match;
  const items = [match.item0, match.item1, match.item2, match.item3, match.item4, match.item5, match.item6].filter(i => i !== 0);
  const onHandledError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.onerror = () => {};
    e.currentTarget.src = '';
  };

  return (
    <div className={styles.detail}>
      <div className={win ? styles.win : styles.lose}>
        <div className={styles.championIcon}>
          <Image
            src={`http://ddragon.leagueoflegends.com/cdn/11.19.1/img/champion/${championName}.png`}
            width={45}
            height={45}
            alt="champion name"
            onError={onHandledError}
          />
          <span className={styles.championLevel}>{champLevel}</span>
        </div>
        <span>{kills}</span> / <span className={styles.detahs}>{deaths}</span> / <span>{assists}</span>
        <div className={styles.itemWrap}>
          {items.map(i => (
            <div className={styles.imgIcon} key={i}>
              <Image
                src={`http://ddragon.leagueoflegends.com/cdn/11.19.1/img/item/${i}.png`}
                width={25}
                height={25}
                alt="item"
                onError={onHandledError}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Detail;
