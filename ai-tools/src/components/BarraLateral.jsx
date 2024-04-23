import React from 'react';
import styles from './BarraLateral.module.css';

function BarraLateral() {
  return (
    <BarraLateral>
      {
        <div className="second-bar">
          <div className="menu" id="myMenu">
            <a href="#">Contact Us</a>

            <a href="aboutUs.html" target="_blank">About Us</a>
          </div>
          <img src="menuLines.png" alt="Tu Imagen" className="nav-image" id="hamburger"></img>

          <nav className="options">
            <a href="#">Contact Us</a>
            <a href="aboutUs.html" target="_blank">About Us</a>
          </nav>
        </div>
      }
    </BarraLateral>
  );
}

export default BarraLateral;