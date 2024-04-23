import React from 'react';
import styles from './AboutUs.module.css';

function AboutUs() {
    return (
        <AboutUs>
            <div>
                <div className={styles.topBar}>
                    <img src="navLogo.png" alt="Logo" class="logo"></img>
                </div>
                <div className={styles.secondBar}>
                    <nav className={styles.options}>
                        <a href="mainInterface.html">Home</a>
                    </nav>
                    <nav className={styles.options}>
                        <a href="#">Help</a>
                    </nav>
                </div>
                <h1 className={styles.title}>About Us</h1>
                <h3 className={styles.subtitle}>Meet the team </h3>

                <div className={styles.imageRow}></div>
                <div className={styles.column}>
                    <img src="foto1.jpg" alt="Team Member 1"></img>
                    <div className={styles.memberName}>Christian Aguilera</div>
                    <div className={styles.memberRole}>Líder del Proyecto y Desarrollador Web</div>
                    <ul>
                        <li>
                            <div className={styles.memberExperience}> <b>Experiencia:</b> 2 años de experiencia en desarrollo de páginas web.</div>
                        </li>
                    </ul>
                    <ul className={styles.memberExperience}>
                        <li><b>Habilidades:</b></li>
                        <ul>
                            <li>Conocimientos sólidos en c++ y python.</li>
                            <li>Experiencia usando framework para diseño de páginas web en tailwind css.</li>
                            <li>Experiencia usando c# para el desarrollo de aplicaciones.</li>
                        </ul>
                    </ul>
                </div>
                <div className={styles.column}>
                    <img src="foto2.jpg" alt="Team Member 2"></img>
                    <div className={styles.memberName}>Fernanda Díaz</div>
                    <div className={styles.memberRole}>Analista de datos</div><br> </br>
                    <ul>
                        <li>
                            <div className={styles.memberExperience}> <b>Experiencia:</b> 3 años de experiencia en desarrollo de aplicaciones móviles y web, más 2 años de experiencia en análisis de bases de datos.</div>
                        </li>
                    </ul>
                    <ul className={styles.memberExperience}>
                        <li><b>Habilidades:</b></li>
                        <ul>
                            <li>Conocimientos extensos en HTML, C++, Python y Javascript.</li>
                            <li>Experiencia en manejo de bases de datos usando PHP y consultas SQL.</li>
                        </ul>
                    </ul>
                </div>
                <div className={styles.column}>
                    <img src="foto3.jpg" alt="Team Member 3"></img>
                    <div className={styles.memberName}>Diego Vargas</div>
                    <div className={styles.memberRole}>Analista de requerimientos</div>
                    <ul>
                        <li>
                            <div className={styles.memberExperience}> <b>Experiencia:</b> Conocimientos en diseño web con uso de HTML, CSS y JavaScript, así como uso previo de diseño y construcción de bases de datos para sitios web.</div>
                        </li>
                    </ul>
                    <ul className={styles.memberExperience}>
                        <li><b>Habilidades:</b></li>
                        <ul>
                            <li>Conocimientos en CSS, HTML y JavaScript, al igual que Python como lenguaje complementario.</li>
                            <li>Conocimentos de programación orientada a objetos.</li>
                        </ul>
                    </ul>
                </div>
                <div className={styles.memberExperience}>
                    <img src="foto4.jpg" alt="Team Member 4"></img>
                    <div className={styles.memberName}>Luis Olmedo</div>
                    <div className={styles.memberRole}>Desarrollador Web</div>
                    <ul>
                        <li>
                            <div className={styles.memberExperience}> <b>Experiencia:</b> 2 años de experiencia en desarrollo de páginas web.</div>
                        </li>
                    </ul>
                    <ul className={styles.memberExperience}>
                        <li><b>Habilidades:</b></li>
                        <ul>
                            <li>Conocimientos en lenguajes como Python, Matlab, C++, R y JavaScript.</li>
                            <li>Experiencia en frontend.</li>
                            <li>Conocimientos utilizando C# para el desarrollo de juegos en unity.</li>
                        </ul>
                    </ul>
                </div>
                <div className={styles.column}>
                    <img src="foto5.jpg" alt="Team Member 5"></img>
                    <div className={styles.memberName}>Rodrigo Castellanos</div>
                    <div className={styles.memberRole}>Diseñador de Interfaz de Usuario UI</div>
                    <ul>
                        <li>
                            <div className={styles.memberExperience}> <b>Experiencia:</b> 1 año de experiencia en diseño web con  HTML, CSS y JavaScript.</div>
                        </li>
                    </ul>
                    <ul className={styles.memberExperience}>
                        <li><b>Habilidades:</b></li>
                        <ul>
                            <li>Conocimientos en lenguajes como Python, C++, JavaScript y R.</li>
                            <li>Experiencia en frontend.</li>
                        </ul>
                    </ul>
                </div>
            </div>
        </AboutUs >
    );
}

export default AboutUs;