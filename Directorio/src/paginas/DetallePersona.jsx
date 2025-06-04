import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function DetallePersona() {
  const { id } = useParams();
  const [persona, setPersona] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch('/people.json')
      .then(res => res.json())
      .then(data => {
        const encontrada = data.find(p => p.id === parseInt(id));
        if (encontrada) {
          setPersona(encontrada);
        } else {
          setError(true);
        }
      });
  }, [id]);

  if (error) return <h2>El id de la persona que buscas no existe ❌</h2>;

  return (
    <div>
      <h2>{persona.nombre} {persona.apellido}</h2>
      <p>Edad: {persona.edad}</p>
      <p>Email: {persona.email}</p>
      <p>{persona.edad >= 18 ? "Es mayor de edad" : "Es menor de edad"}</p>
    </div>
  );
}

export default DetallePersona;
