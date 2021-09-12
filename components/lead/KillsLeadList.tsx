import styles from '@styles/common.module.css';

interface KillInfo {
  name: string;
  kills: number;
}

const KillsLeadList = ({killsInfoList}: {killsInfoList: KillInfo[]}) => (
  <li>
    <div className={styles.leadTitle}>KILL</div>
    <div className={styles.leadSummoners}>
      {killsInfoList.map((info, index) => (
        <div key={info.name}>{index + 1}. {info.name} : {info.kills}</div>
      ))}
    </div>
  </li>
);

export default KillsLeadList;
