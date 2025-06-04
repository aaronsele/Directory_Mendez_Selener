import { useEffect, useState } from "react";
import PersonaCard from "../components/PersonaCard";

function Home() {
  const [personas, setPersonas] = useState([]);

  useEffect(() => {
    fetch('/people.json')
      .then(res => res.json())
      .then(data => setPersonas(data));
  }, []);

  return (
    <>
      <h1>Listado de Personas</h1>    
        {personas.map(p => <PersonaCard key={p.id} persona={p} />)}
    </>
  );
}

export default Home;
