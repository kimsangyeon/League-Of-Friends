import React from 'react';
import Link from 'next/link';
import styles from './header.module.css';

const Header = () => (
  <header className={styles.header}>
    <nav className={styles.nav}>
      <div>
        <span className={styles.headerTitle}>
          <Link href='/'>
            <a>Leage-Of-Friends</a>
          </Link>
        </span>
      </div>
    </nav>
  </header>
);

export default Header;
