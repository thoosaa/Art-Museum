import './Footer.scss';

import { images } from '@assets/images/images';

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <img src={images.museum_logo_black} alt="Museum logo" />
        <img src={images.modsen_logo} alt="Museum logo" />
      </footer>
    </>
  );
}
