import './Header.scss';

import { images } from '@assets/images/images';
import { HeaderLink } from '@components/HeaderLink/HeaderLink';
import { useBurgerMenu } from '@hooks/useBurgerMenu';
import { HeaderProps } from 'types/types';

export default function Header({ amountOfLinks }: HeaderProps) {
  const [isOpen, isOverlay, toggle] = useBurgerMenu();

  return (
    <>
      <ul className={`header__burger-list ${isOverlay ? 'overlay' : ''}`}>
        {amountOfLinks === 2 ? <HeaderLink src={images.home} link="/" title="Home" isBurger={true} /> : ''}
        <HeaderLink src={images.bookmark} link="/favorites" title="Your favorites" isBurger={true} />
      </ul>

      <header className="header">
        <img src={images.museum_logo} alt="Museum logo" className="header__logo" />

        <div className={`header__burger ${isOpen ? 'close' : ''}`} onClick={toggle}>
          <span></span>
        </div>

        <ul className="header__list">
          {amountOfLinks === 2 ? <HeaderLink src={images.home} link="/" title="Home" isBurger={false} /> : ''}
          <HeaderLink src={images.bookmark} link="/favorites" title="Your favorites" isBurger={false} />
        </ul>
      </header>
    </>
  );
}
