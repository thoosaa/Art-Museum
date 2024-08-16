import { images } from '@assets/images/images';

export default function Loader() {
  return (
    <div className="loader">
      <img src={images.loader} className="loader-svg" />
    </div>
  );
}
