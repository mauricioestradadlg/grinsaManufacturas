import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 

import Header from './componentes/Header';
import Navegation from './componentes/Navegation';
import Footer from './componentes/Footer';
import WhatsApp from './componentes/WhatsApp';

import Inicio from './paginas/Inicio';
import AboutUs from './paginas/AboutUs';
import Producto from './paginas/Productos';
import Servicio from './paginas/Servicios';
import Calidad from './paginas/Calidad';
import Contacto from './paginas/Contacto';
import FormEnviado from './paginas/FormEnviado';


function App() {
  return (
    <Router>
    <div>
      <Header/><br />
      <Navegation />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/aboutus" element={<AboutUs/>} />
        <Route path="/productos" element={<Producto/>} />
        <Route path="/servicios" element={<Servicio/>} />
        <Route path="/calidad" element={<Calidad/>} />
        <Route path="/contacto" element={<Contacto/>} />
        <Route path="/formEnviado" element={<FormEnviado />} />
      </Routes>
      <WhatsApp/>
      <Footer/>
    

     </div>
  </Router>
  );
}

export default App;

