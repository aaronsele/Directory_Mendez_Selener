import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './paginas/Home';
import Estadisticas from './paginas/Estadisticas';
import Contacto from './paginas/Contacto';
import Layout from './components/Layout';
import DetallePersona from './paginas/DetallePersona';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="DetallePersona/:personaId" element={<DetallePersona />} />
          <Route path="Estadisticas" element={<Estadisticas />} />
          <Route path="Contacto" element={<Contacto />} />
          <Route path="*" element={<h2>No encontramos lo que buscás 😕</h2>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
