import './Navbar.css'
import {Link} from "react-router-dom"

function Navbar() {


  return (
    <>
     
     <Link to="/Home">Inicio</Link>
     <Link to="/Estadisticas">Estadisticas</Link>
     <Link to="/Contacto">Contacto</Link>
      
    </>
  )
}

export default Navbar
