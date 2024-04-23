import React from 'react';
import styles from './BarraAzul.module.css';

function BarraAzul() {
    return (
      <BarraAzul>
        <div className={styles.topBar}>
          <img src="navLogo.png" alt="Logo" className={styles.logo}></img>
          <input type="text" placeholder="Search..." className={styles.searchBar}></input>
        </div>
      </BarraAzul>
    );
  }
  
  export default BarraAzul;