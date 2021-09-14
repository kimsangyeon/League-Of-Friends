import styles from '@styles/common.module.css';
import { useQuery } from 'react-query';
import { LeadInfo, LeadInfoList } from '@models/lead';
import LeadList from './LeadList';

const LEAD_LIST_KEY = ['kills', 'deaths', 'assists', 'win', 'lose'];

const Lead = () => {
  const {data} = useQuery('leadInfo', () => []);
  const killsInfoList = data?.map((data: LeadInfo) => ({name: data.name, kills: data.info.kills})).sort((a, b) => b.kills - a.kills).slice(0, 3);
  const deathsInfoList = data?.map((data: LeadInfo) => ({name: data.name, deaths: data.info.deaths})).sort((a, b) => b.deaths - a.deaths).slice(0, 3);
  const assistsInfoList = data?.map((data: LeadInfo) => ({name: data.name, assists: data.info.assists})).sort((a, b) => b.assists - a.assists).slice(0, 3);
  const winInfoList = data?.map((data: LeadInfo) => ({name: data.name, win: data.info.win})).sort((a, b) => b.win - a.win).slice(0, 3);
  const loseInfoList = data?.map((data: LeadInfo) => ({name: data.name, lose: data.info.lose})).sort((a, b) => b.lose - a.lose).slice(0, 3);
  
  return (
    <div className={styles.leadWrap}>
      <ul className={styles.leadUL}>
        {[killsInfoList, deathsInfoList, assistsInfoList, winInfoList, loseInfoList].map(((infoList, index: number) => (
          <LeadList infoList={(infoList as LeadInfoList)} infoKey={LEAD_LIST_KEY[index]} key={LEAD_LIST_KEY[index]} />
        )))}
      </ul>
    </div>
  );
};

export default Lead;
