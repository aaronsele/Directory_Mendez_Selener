import { useEffect, useState } from 'react';
import PersonaCard from '../components/PersonaCard';
import './Home.css'

function Home() {
  const [personas, setPersonas] = useState([]);

  useEffect(() => {
    fetch('/people.json')
      .then(res => res.json())
      .then(data => setPersonas(data));
  }, []);

  return (
    <div>
      <h1>Personas</h1>
      <div className="lista">
      {personas.map(persona => <PersonaCard key={persona.id} persona={persona} />)}
      </div>
    </div>
  );
}

export default Home;