import React from 'react';
import styles from './text.module.css';

interface TextProps {
  text: string;
}

const Text = ({text}: TextProps) => (
  <div className={styles.text}>{text}</div>
);

export default Text;
