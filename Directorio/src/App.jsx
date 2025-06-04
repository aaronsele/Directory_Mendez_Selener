import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './paginas/Home';
import Estadisticas from './paginas/Estadisticas';
import Contacto from './paginas/Contacto';
import Layout from './components/Layout';
import NoEncontrado from './paginas/NoEncontrado';
import DetallePersona from './paginas/DetallePersona';

function App() {


  return (
    <>
     <BrowserRouter>
<Routes>
<Route path="/" element={<Layout/>} ></Route>
<Route path="/Home" element={<Home/>}></Route>
<Route path="/DetallePersona:personaId" element={<DetallePersona/>}></Route>
<Route path="/Estadisticas" element={<Estadisticas/>}></Route>
<Route path="/Contacto" element={<Contacto/>}></Route>
<Route path="*" element={<NoEncontrado/>}></Route>
</Routes>
     </BrowserRouter>
      
    </>
  )
}

export default App
