import styles from '@styles/common.module.css';
import { useQuery } from 'react-query';
import { LeadInfo } from '@models/lead';
import KillsLeadList from './KillsLeadList';
import DeathsLeadList from './DeathsLeadList';
import AssistsLeadList from './AssistsLeadList';
import WinLeadList from './WinLeadList';
import LoseLeadList from './LoseLeadList';

const Lead = () => {
  const {data} = useQuery('leadInfo', () => []);
  const killsInfoList = data?.map((data: LeadInfo) => ({name: data.name, kills: data.info.kills})).sort((a, b) => b.kills - a.kills).slice(0, 3);
  const deathsInfoList = data?.map((data: LeadInfo) => ({name: data.name, deaths: data.info.deaths})).sort((a, b) => a.deaths - a.deaths).slice(0, 3);
  const assistsInfoList = data?.map((data: LeadInfo) => ({name: data.name, assists: data.info.assists})).sort((a, b) => b.assists - a.assists).slice(0, 3);
  const winInfoList = data?.map((data: LeadInfo) => ({name: data.name, win: data.info.win})).sort((a, b) => b.win - a.win).slice(0, 3);
  const loseInfoList = data?.map((data: LeadInfo) => ({name: data.name, lose: data.info.lose})).sort((a, b) => b.lose - a.lose).slice(0, 3);
  
  return (
    <div className={styles.leadWrap}>
      <ul className={styles.leadUL}>
        {killsInfoList && <KillsLeadList killsInfoList={killsInfoList} />}
        {deathsInfoList && <DeathsLeadList deathsInfoList={deathsInfoList} />}
        {assistsInfoList && <AssistsLeadList assistsInfoList={assistsInfoList} />}
        {winInfoList && <WinLeadList winInfoList={winInfoList} />}
        {loseInfoList && <LoseLeadList loseInfoList={loseInfoList} />}
      </ul>
    </div>
  );
};

export default Lead;
