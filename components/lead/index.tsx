import React from 'react';
import styles from '@styles/common.module.css';

const Lead = () => {

  return (
    <div className={styles.leadWrap}>
      <ul className={styles.leadUL}>
        <li>
          <div className={styles.leadTitle}>KILL</div>
          <div className={styles.leadSummoners}>
            <div>1. Piza : 100</div>
            <div>2. 나안추 : 10</div>
            <div>3. 맛과멋 : 1</div>
          </div>
        </li>
        <li>
          <div className={styles.leadTitle}>DEATH</div>
          <div className={styles.leadSummoners}>
            <div>1. Piza : 100</div>
            <div>2. 나안추 : 10</div>
            <div>3. 맛과멋 : 1</div>
          </div>
        </li>
        <li>
          <div className={styles.leadTitle}>ASIST</div>
          <div className={styles.leadSummoners}>
            <div>1. Piza : 100</div>
            <div>2. 나안추 : 10</div>
            <div>3. 맛과멋 : 1</div>
          </div>
        </li>
        <li>
          <div className={styles.leadTitle}>WIN</div>
          <div className={styles.leadSummoners}>
            <div>1. Piza : 100</div>
            <div>2. 나안추 : 10</div>
            <div>3. 맛과멋 : 1</div>
          </div>
        </li>
        <li>
          <div className={styles.leadTitle}>LOSE</div>
          <div className={styles.leadSummoners}>
            <div>1. Piza : 100</div>
            <div>2. 나안추 : 10</div>
            <div>3. 맛과멋 : 1</div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Lead;
