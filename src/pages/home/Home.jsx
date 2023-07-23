import Footer from '../../shared/footer/Footer';
import Header from '../../shared/header/Header';
import Featured from './Featured';
import Hero from './Hero';

const Home = () => {
  return (
    <div className="md:relative">
      <Header />
      <Hero />
      <Featured/>
      <Footer />
    </div>
  );
};

export default Home;
