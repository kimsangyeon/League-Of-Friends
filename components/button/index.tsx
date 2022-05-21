import React, {MouseEvent} from 'react';
import styles from './button.module.css';

interface ButtonProps<T> {
  onClick: (e: MouseEvent<T>) => void;
}

export const RegisterButton = ({onClick}: ButtonProps<HTMLButtonElement>) => (
  <button className={styles.registerButton} onClick={onClick}>
    추가
  </button>
);

export const RemoveButton = ({onClick}: ButtonProps<SVGSVGElement>) => (
  <svg 
    className={styles.removeBtn}
    onClick={onClick}
    xmlns="http://www.w3.org/2000/svg"
    fill="#000000"
    viewBox="0 0 64 64"
    width="30px"
    height="30px"
  >
    <path d="M50.385,50.385c-10.153,10.153-26.616,10.153-36.77,0s-10.153-26.616,0-36.77s26.616-10.153,36.77,0 S60.538,40.231,50.385,50.385z M43.314,40.485L36.243,32l7.071-8.485l-2.828-2.828L32,27.757l-8.485-7.071l-2.828,2.828L27.757,32 l-7.071,8.485l2.828,2.828L32,36.243l8.485,7.071L43.314,40.485z"/>
  </svg>
)