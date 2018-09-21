import React from 'react';
import HamburgerMenu from 'components/Icons/HamburgerMenu';
import styles from './navbar.module.scss';

const Navbar = () => (
  <div className={styles['navbar-container']}>
    <div className={styles.wrapper}>
      <h1>NAVBAR</h1>
      <div className={styles.icons}>
        <HamburgerMenu />
      </div>
    </div>
  </div>
);

export default Navbar;
