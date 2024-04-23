import React from 'react';
import styles from './Header.module.css';

function Header() {
    return (
      <Header>
        <div className={styles.topBar}>
          <img src="navLogo.png" alt="Logo" className={styles.logo}></img>
          <input type="text" placeholder="Search..." className={styles.searchBar}></input>
        </div>
      </Header>
    );
  }
  
  export default Header;