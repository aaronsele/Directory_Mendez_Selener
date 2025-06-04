import './App.css'
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import Home from './paginas/Home';
import Estadisticas from './paginas/Estadisticas';
import Contacto from './paginas/Contacto';
import Layout from './components/Layout';
import DetallePersona from './paginas/DetallePersona';

function App() {


  return (
    <>
     <BrowserRouter>
<Routes>
<Route path="/" element={<Layout/>} ></Route>
<Route index element={<Home/>}></Route>
<Route path="persona/:id" element={<DetallePersona/>}></Route>
<Route path="Estadisticas" element={<Estadisticas/>}></Route>
<Route path="Contacto" element={<Contacto/>}></Route>
<Route path="*" element={<h2>No encontramos lo que buscás 😕</h2>}></Route>
</Routes>
     </BrowserRouter>
      
    </>
  )
}

export default App
