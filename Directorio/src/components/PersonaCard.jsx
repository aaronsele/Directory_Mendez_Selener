import { Link } from "react-router-dom";
import './PersonaCard.css';

function PersonaCard({ persona }) {
  return (
    <>
      <h3>{persona.nombre} {persona.apellido}</h3>
      <p>Edad: {persona.edad}</p>
      <Link to={`/persona/${persona.id}`}>Ver más</Link>  
      </>
  );
}

export default PersonaCard;
