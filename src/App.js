import './App.css' //& CONFIGURAÇÕES CSS GLOBAIS
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './Components/HomePage';
import HeaderApp from './Components/HeaderApp';

export default function App() {
  return (
    <BrowserRouter>
      <HeaderApp />
      <Routes>
        <Route path='/' element={<HomePage />}/>
      </Routes>
    </BrowserRouter>
  );
}
