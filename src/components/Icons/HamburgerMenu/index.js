import React from 'react';
import styles from './hamburger-menu.module.scss';

const HamburgerMenu = () => (
  <div className={styles.wrapper}>
    <div className={styles.bar} />
    <div className={styles.bar} />
    <div className={styles.bar} />
  </div>
);

export default HamburgerMenu;
