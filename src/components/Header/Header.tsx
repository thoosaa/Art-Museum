import './Header.scss';
import museum_logo from '@assets/images/museum-logo.svg';
import bookmark from '@assets/images/bookmark.svg';
import { useBurgerMenu } from './useBurgerMenu';

export default function Header() {
  const [isOpen, isOverlay, toggle] = useBurgerMenu();

  return (
    <>
      <ul className={`header__burger-list ${isOverlay ? '' : 'overlay'}`}>
        <li className="header__item header__item--bigger">
          <img src={bookmark} alt="Bookmark" className="header__icon header__icon--bigger" />
          <a href="" className="header__link">
            Your favorites
          </a>
        </li>
      </ul>

      <header className="header">
        <img src={museum_logo} alt="Museum logo" className="header__logo" />

        <div className={`header__burger ${isOpen ? '' : 'close'}`} onClick={toggle}>
          <span></span>
        </div>

        <ul className="header__list">
          <li className="header__item">
            <img src={bookmark} alt="Bookmark" className="header__icon" />
            <a href="/favorites" className="header__link">
              Your favorites
            </a>
          </li>
        </ul>
      </header>
    </>
  );
}
