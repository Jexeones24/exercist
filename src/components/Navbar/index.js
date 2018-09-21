import React from 'react';
import styles from './navbar.module.scss';

const Navbar = () => (
  <div className={styles['navbar-container']}>
    <div className={styles.wrapper}>
      <h1>NAVBAR</h1>
      <div className={styles.icons}>
        <div className={styles.menu}>
          <div className={styles.bar} />
          <div className={styles.bar} />
          <div className={styles.bar} />
        </div>
      </div>
    </div>
  </div>
);

export default Navbar;
