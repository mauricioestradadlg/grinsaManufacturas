import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 

import Header from './componentes/Header';
import Navegation from './componentes/Navegation';
import Footer from './componentes/Footer';
import WhatsApp from './componentes/WhatsApp';

import Inicio from './paginas/Inicio';
import AboutUs from './paginas/AboutUs';
import Catalogo from './paginas/Catalogo';
import Contacto from './paginas/Contacto';


function App() {
  return (
    <Router>
    <div>
      <Header/><br />
      <Navegation />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/aboutus" element={<AboutUs/>} />
        <Route path="/catalogo" element={<Catalogo/>} />
        <Route path="/contacto" element={<Contacto/>} />
      </Routes>
      <WhatsApp/>
      <Footer/>
    

     </div>
  </Router>
  );
}

export default App;

