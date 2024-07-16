

import { Link } from 'react-router-dom';


export default function Navegation(){

    
    return(<>

        <nav className='navbar'>
            <ul>
                <li><Link to = "/">Inicio</Link></li>
                <li><Link to = "/aboutus">Sobre Nosotros</Link></li>
                <li><Link to = "/productos">Productos</Link></li>
                <li><Link to = "/servicios">Servicios</Link></li>
                <li><Link to = "/calidad">Calidad</Link></li>
                <li><Link to = "/contacto">Contacto</Link></li>
            </ul>
        </nav>
    
        </>);

}
