import React, {MouseEvent} from 'react';
import styles from './button.module.css';

interface ButtonProps {
  onClick: (e: MouseEvent<HTMLButtonElement>) => void;
}

const Button = ({onClick}: ButtonProps) => (
  <button className={styles.registerButton} onClick={onClick}>
    추가
  </button>
);

export default Button;
