import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './DetallePersona.css'

function DetallePersona() {
  const { personaId } = useParams();
  const [persona, setPersona] = useState(null);

  useEffect(() => {
    fetch('/people.json')
      .then(res => res.json())
      .then(data => {
        const encontrada = data.find(p => p.id === parseInt(personaId));
        setPersona(encontrada);
      });
  }, [personaId]);

  if (!persona) return <p>No se encontró la persona</p>;

  return (
    <div>
      <h1>{persona.nombre} {persona.apellido}</h1>
      <p>Edad: {persona.edad}</p>
      <p>Email: {persona.email}</p>
      <p>{persona.edad >= 18 ? 'Mayor de edad' : 'Menor de edad'}</p>
    </div>
  );
}

export default DetallePersona;