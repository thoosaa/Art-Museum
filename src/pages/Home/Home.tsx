import Footer from '@components/Footer/Footer';
import Header from '@components/Header/Header';
import './Home.scss';

export default function Home() {
  return (
    <>
      <Header />
      <main className="main">
        <h1 className="page-title">
          Let's Find Some <span className="page-title-highlight">Art</span> Here!
        </h1>
      </main>
      <Footer />
    </>
  );
}
