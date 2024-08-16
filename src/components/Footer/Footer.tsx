import './Footer.scss';

import modsen_logo from '@assets/images/modsen-logo.svg';
import museum_logo from '@assets/images/museum-logo-black.svg';

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <img src={museum_logo} alt="Museum logo" />
        <img src={modsen_logo} alt="Museum logo" />
      </footer>
    </>
  );
}
