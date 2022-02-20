import React, {Dispatch, SetStateAction} from 'react';
import styles from './input.module.css';

interface SearchProps {
  name: string;
  setName: Dispatch<SetStateAction<string>>
}

const Search = ({name, setName}: SearchProps) => (
  <input
    className={styles.input}
    value={name}
    placeholder="소환사명 ..."
    onChange={(e) => setName(e.target.value)}
  />
);

export default Search;
