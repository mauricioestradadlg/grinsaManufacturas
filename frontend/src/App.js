import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 

import Header from './componentes/Header';
import Footer from './componentes/Footer';
import WhatsApp from './componentes/WhatsApp';

import Inicio from './paginas/Inicio';
import Producto from './paginas/Productos';
import Servicio from './paginas/Servicios';
import Calidad from './paginas/Calidad';
import Contacto from './paginas/Contacto';
import FormEnviado from './paginas/FormEnviado';


function App() {
  return (
    <Router>
    <div>
      <Header/><br/>
      <Routes>
        <Route path="/" element={<Inicio />} />
   
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

