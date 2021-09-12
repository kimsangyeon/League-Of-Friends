import styles from '@styles/common.module.css';

interface WinInfo {
  name: string;
  win: number;
}

const WinLeadList = ({winInfoList}: {winInfoList: WinInfo[]}) => (
  <li>
    <div className={styles.leadTitle}>WIN</div>
    <div className={styles.leadSummoners}>
      {winInfoList.map((info, index) => (
        <div key={info.name}>{index + 1}. {info.name} : {info.win}</div>
      ))}
    </div>
  </li>
);

export default WinLeadList;
