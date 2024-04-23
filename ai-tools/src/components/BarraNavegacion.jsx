import React from 'react';
import styles from './BarraNavegacion.module.css';

function BarraNavegacion() {
    return (
      <BarraNavegacion>
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
      </BarraNavegacion>
    );
  }
  
  export default BarraNavegacion;