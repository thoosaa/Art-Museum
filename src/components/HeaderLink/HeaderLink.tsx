import { Link } from 'react-router-dom';

interface HeaderListProps {
  src: string;
  link: string;
  title: string;
  isBurger: boolean;
}

export function HeaderLink({ src, link, title, isBurger }: HeaderListProps) {
  return (
    <li className={`header__item ${isBurger ? 'header__item--bigger' : ''}`}>
      <img src={src} alt="Bookmark" className={`header__icon ${isBurger ? 'header__icon--bigger' : ''}`} />
      <Link to={link} className="header__link">
        {title}
      </Link>
    </li>
  );
}
