// src/App.js
import React from 'react';
import Header from './components/BarraAzul';
import Footer from './components/Footer';
import Ruleta from './components/Ruleta';
import Slice from './components/Slice';
import Herramienta from './components/Herramienta';
import Body from './components/Body';
import BarraNavegacion from './components/BarraGris';
import BarraLateral from './components/BarraLateral';

function App() {
  return (
    <div>
      <Header />
      {/* Otros componentes */}
      <Footer />
    </div>
  );
}

export default App;
