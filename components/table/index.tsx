import React from 'react';
import styles from './table.module.css';
import TableRow from './TableRow';

interface TableProps {
  list: string[];
}

const Table = ({list}: TableProps) => {
  return (
    <div>
      <table className={styles.table}>
        <thead>
          <tr className={styles.theadRow}>
            <th className={styles.th}>순위</th>
            <th className={styles.th}>랭크</th>
            <th className={styles.th}>KDA</th>
            <th className={styles.th}>킬</th>
            <th className={styles.th}>데스</th>
            <th className={styles.th}>어시스트</th>
            <th className={styles.th}>승리</th>
            <th className={styles.th}>패배</th>
          </tr>
        </thead>
        <tbody>
          {list.map((name, index) => <TableRow name={name} key={name} index={index + 1} />)}
        </tbody>
      </table>
    </div>
  )
};

export default Table;
