import './App.css' //& CONFIGURAÇÕES CSS GLOBAIS
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './Components/HomePage';
import HeaderApp from './Components/HeaderApp';
import MoviePage from './Components/MoviePage';
import SessionPage from './Components/SessionPage';

export default function App() {
  return (
    <BrowserRouter>
      <HeaderApp />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/sessoes/:idFilme' element={<MoviePage />} />
        <Route path='/assentos/:idSessao' element={<SessionPage />} /> // * fazer essa sessão
      </Routes>
    </BrowserRouter>
  );
}
