import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Perfil from './pages/Perfil';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<Home />}/>
        <Route path="perfil" element={<Perfil />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
