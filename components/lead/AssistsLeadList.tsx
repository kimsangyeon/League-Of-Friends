import styles from '@styles/common.module.css';

interface AssistsInfo {
  name: string;
  assists: number;
}

const AssistsLeadList = ({assistsInfoList}: {assistsInfoList: AssistsInfo[]}) => (
  <li>
    <div className={styles.leadTitle}>ASSIST</div>
    <div className={styles.leadSummoners}>
      {assistsInfoList.map((info, index) => (
        <div key={info.name}>{index + 1}. {info.name} : {info.assists}</div>
      ))}
    </div>
  </li>
);

export default AssistsLeadList;
