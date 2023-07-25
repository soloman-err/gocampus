import Featured from './Featured';
import Graduates from './Graduates';
import Hero from './Hero';
import Reviews from './Reviews';
import Research from './research/Research';

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
