import { Link } from 'react-router-dom';
import './NavBar.css'


function Navbar() {
  return (
    <nav>
      <Link to="/">Inicio</Link>
      <Link to="/Estadisticas">Estadísticas</Link>
      <Link to="/Contacto">Contacto</Link>
    </nav>
  );
}

export default Navbar;