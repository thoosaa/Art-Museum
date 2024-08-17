import ArtPiece from '@pages/ArtPiece/ArtPiece'
import Favorites from '@pages/Favorites/Favorites'
import Home from '@pages/Home/Home'

export const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/favorites',
    component: Favorites,
  },
  {
    path: '/art/:artId',
    component: ArtPiece,
  },
]
