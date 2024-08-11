import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
//import App from './App';
import '@assets/styles/index.scss';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Home from '@pages/Home/Home';
import Favorites from '@pages/Favorites/Favorites';
import ArtPiece from '@pages/ArtPiece/ArtPiece';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/art/:artId" element={<ArtPiece />} />
      </Routes>
    </HashRouter>
  </StrictMode>,
);
