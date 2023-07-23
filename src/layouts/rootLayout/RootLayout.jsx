import { Outlet } from 'react-router-dom';
import Footer from '../../shared/footer/Footer';
import Header from '../../shared/header/Header';

const RootLayout = () => {
  return (
    <div className="md:relative flex flex-col min-h-screen justify-between">
      <div>
        <Header />
        <div className="md:pt-28">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default RootLayout;
