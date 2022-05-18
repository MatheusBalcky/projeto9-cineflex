import './App.css' //& CONFIGURAÇÕES CSS GLOBAIS
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './Components/HomePage';
import HeaderApp from './Components/HeaderApp';
import MoviePage from './Components/MoviePage';

export default function App() {
  return (
    <BrowserRouter>
      <HeaderApp />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/sessoes/:idFilme' element={<MoviePage />} />
      </Routes>
    </BrowserRouter>
  );
}
