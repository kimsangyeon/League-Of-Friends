import styles from '@styles/common.module.css';

interface LoseInfo {
  name: string;
  lose: number;
}

const LoseLeadList = ({loseInfoList}: {loseInfoList: LoseInfo[]}) => (
  <li>
    <div className={styles.leadTitle}>LOSE</div>
    <div className={styles.leadSummoners}>
      {loseInfoList.map((info, index) => (
        <div key={info.name}>{index + 1}. {info.name} : {info.lose}</div>
      ))}
    </div>
  </li>
);

export default LoseLeadList;
