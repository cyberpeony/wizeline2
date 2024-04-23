import React from 'react';
import styles from './Header.module.css';

function Header() {
    return (
        <header>
            <div class="top-bar">
                <img src="navLogo.png" alt="Logo" class="logo"></img>
                <input type="text" placeholder="Search..." class="search-bar"></input>
            </div>
        </header>
    );
}

export default Header;