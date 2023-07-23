import Featured from './Featured';
import Graduates from './Graduates';
import Hero from './Hero';
import Research from './Research';
import Reviews from './Reviews';

const Home = () => {
  return (
    <div>
      <Hero />
      <Featured/>
      <Graduates/>
      <Research/>
      <Reviews/>
    </div>
  );
};

export default Home;
