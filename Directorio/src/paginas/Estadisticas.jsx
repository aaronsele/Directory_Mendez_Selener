import { useEffect, useState } from 'react';



function Estadisticas() {
  const [personas, setPersonas] = useState([]);

  useEffect(() => {
    fetch('/people.json')
      .then(res => res.json())
      .then(data => setPersonas(data));
  }, []);

  const total = personas.length;
  const mayores35 = personas.filter(p => p.edad > 35).length;
  const maxEdad = Math.max(...personas.map(p => p.edad));
  const minEdad = Math.min(...personas.map(p => p.edad));
  const mayore = personas.filter(p => p.edad === maxEdad);
  const menore = personas.filter(p => p.edad === minEdad);
 let edades = 0;
 personas.forEach(p => {
 edades += p.edad;
 });
 const promedio = edades/total;

  return (
    <div>
      <h1>Estadísticas</h1>
      <p>Total de personas: {total}</p>
      <p>Mayores de 35 años: {mayores35}</p>
      <p>Promedio de edad: {promedio.toFixed(2)}</p>
      <h3>Personas de mayor edad:</h3>
      <ul>{mayore.map(p => <li key={p.id}>{p.nombre} {p.apellido} ({p.edad})</li>)}</ul>
      <h3>Personas de menor edad:</h3>
      <ul>{menore.map(p => <li key={p.id}>{p.nombre} {p.apellido} ({p.edad})</li>)}</ul>
    </div>
  );
}

export default Estadisticas;