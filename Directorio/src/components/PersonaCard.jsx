import { Link } from 'react-router-dom';
import './PersonaCard.css'
function PersonaCard({ persona }) {
  return (
    <div>
      <h2>{persona.nombre} {persona.apellido}</h2>
      <p>Edad: {persona.edad}</p>
      <Link to={`/DetallePersona/${persona.id}`}><button>Ver más</button></Link>
    </div>
  );
}

export default PersonaCard;
