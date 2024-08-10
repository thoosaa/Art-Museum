import loader from '@assets/images/loader.svg';

export default function Loader() {
  return (
    <div className="loader">
      <img src={loader} className="loader-svg" />
    </div>
  );
}
