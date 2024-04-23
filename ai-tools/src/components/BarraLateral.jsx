import React from 'react';
import styles from './BarraLateral.module.css';

function BarraLateral() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <BarraLateral>
      {
        <div className={styles.secondBar}>
          <div className={styles.menu} id="myMenu">
            <a href="#">Contact Us</a>
            <a href="aboutUs.html" target="_blank">About Us</a>
          </div>
          <img src="menuLines.png" alt="Tu Imagen" className={styles.navImage} id="hamburger"></img>

          <nav className={styles.options}>
            <a href="#">Contact Us</a>
            <a href="aboutUs.html" target="_blank">About Us</a>
          </nav>
        </div>
      }
    </BarraLateral>
  );
}

export default BarraLateral;