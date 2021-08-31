import React from 'react';
import styles from '@styles/common.module.css'

interface ProfileChangeBtn {
  name: string;
  newName: string;
  isModify: boolean;
  setIsModify: React.Dispatch<React.SetStateAction<boolean>>;
  setNewName: React.Dispatch<React.SetStateAction<string>>;
  onComplete: (e: React.MouseEvent) => void;
}

const ProfileChangeBtn = ({name, isModify, newName, setIsModify, setNewName, onComplete}: ProfileChangeBtn) => (
  <div>
    {isModify ? (
      <input value={newName} onChange={(e) => setNewName(e.target.value)} />
    ) : (
      name
    )}
    <button className={styles.btn} onClick={onComplete}>
      {isModify ? '완료' : '변경'}
    </button>
    {isModify && (
      <button className={styles.btn} onClick={() => setIsModify(false)}>
      취소
      </button>
    )}
  </div>
);

export default ProfileChangeBtn;
