import './Header.scss';

import bookmark from '@assets/images/bookmark.svg';
import home from '@assets/images/home.svg';
import museum_logo from '@assets/images/museum-logo.svg';
import { Link } from 'react-router-dom';

import { useBurgerMenu } from './useBurgerMenu';

type HeaderProps = { id: number };

function FavoritesBurger() {
  return (
    <li className="header__item header__item--bigger">
      <img src={bookmark} alt="Bookmark" className="header__icon header__icon--bigger" />
      <Link to="/favorites" className="header__link">
        Your favorites
      </Link>
    </li>
  );
}

function HomeBurger() {
  return (
    <li className="header__item header__item--bigger">
      <img src={home} alt="Home" className="header__icon header__icon--bigger" />
      <Link to="/" className="header__link">
        Home
      </Link>
    </li>
  );
}

function Favorites() {
  return (
    <li className="header__item">
      <img src={bookmark} alt="Bookmark" className="header__icon" />
      <Link to="/favorites" className="header__link">
        Your favorites
      </Link>
    </li>
  );
}

function Home() {
  return (
    <li className="header__item">
      <img src={home} alt="Home" className="header__icon" />
      <Link to="/" className="header__link">
        Home
      </Link>
    </li>
  );
}

export default function Header({ id }: HeaderProps) {
  const [isOpen, isOverlay, toggle] = useBurgerMenu();

  return (
    <>
      <ul className={`header__burger-list ${isOverlay ? 'overlay' : ''}`}>
        {id === 1 ? (
          <FavoritesBurger />
        ) : (
          <>
            <HomeBurger /> <FavoritesBurger />
          </>
        )}
      </ul>

      <header className="header">
        <img src={museum_logo} alt="Museum logo" className="header__logo" />

        <div className={`header__burger ${isOpen ? 'close' : ''}`} onClick={toggle}>
          <span></span>
        </div>

        <ul className="header__list">
          {id === 1 ? (
            <Favorites />
          ) : (
            <>
              <Home /> <Favorites />
            </>
          )}
        </ul>
      </header>
    </>
  );
}
