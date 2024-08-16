import ArtPiece from '@pages/ArtPiece/ArtPiece';
import Favorites from '@pages/Favorites/Favorites';
import Home from '@pages/Home/Home';
import { Route, Routes } from 'react-router-dom';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/favorites" element={<Favorites />} />
      <Route path="/art/:artId" element={<ArtPiece />} />
    </Routes>
  );
}
