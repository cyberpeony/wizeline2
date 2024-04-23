import React from 'react';
import styles from './BarraGris.module.css';

function BarraGris() {
  return (
    <BarraGris>
        <div className="top-bar">
        <img src="navLogo.png" alt="Logo" class="logo"></img>
        <input type="text" placeholder="Search..." class="search-bar"></input>
    </div>
    </BarraGris>
    );
}
export default BarraGris;