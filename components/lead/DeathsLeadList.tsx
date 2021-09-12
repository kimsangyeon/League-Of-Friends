import styles from '@styles/common.module.css';

interface DeathsInfo {
  name: string;
  deaths: number;
}

const DeathsLeadList = ({deathsInfoList}: {deathsInfoList: DeathsInfo[]}) => (
  <li>
    <div className={styles.leadTitle}>DEATH</div>
    <div className={styles.leadSummoners}>
      {deathsInfoList.map((info, index) => (
        <div key={info.name}>{index + 1}. {info.name} : {info.deaths}</div>
      ))}
    </div>
  </li>
);

export default DeathsLeadList;
