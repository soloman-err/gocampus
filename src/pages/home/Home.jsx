import Footer from '../../shared/footer/Footer';
import Header from '../../shared/header/Header';
import Hero from './Hero';

const Home = () => {
  return (
    <div className="md:relative">
      <Header />
      <Hero />
      <Footer />
    </div>
  );
};

export default Home;
