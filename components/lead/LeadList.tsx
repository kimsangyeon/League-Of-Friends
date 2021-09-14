import { LeadInfoList } from '@models/lead';
import styles from '@styles/common.module.css';


interface LeadListProps {
  infoList: LeadInfoList;
  infoKey: string;
}

const LeadList = ({infoList, infoKey}: LeadListProps) => (
  <li>
    <div className={styles.leadTitle}>{infoKey.toUpperCase()}</div>
    <div className={styles.leadSummoners}>
      {infoList?.map((info, index) => (
        <div key={info.name}>{index + 1}. {info.name} : {(info as any)[infoKey]}</div>
      ))}
    </div>
  </li>
);

export default LeadList;
