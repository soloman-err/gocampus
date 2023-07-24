import { useState } from 'react';
import { FaBars, FaSearch, FaTimes } from 'react-icons/fa';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAuth from '../../hooks/useAuth';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logOut } = useAuth();

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };


  const navigate = useNavigate();

  // user logout:
  const handleLogOut = () => {
    try {
      Swal.fire({
        title: 'Are you sure?',
        text: "You'll be logged out!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, Log Out!',
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Logged Out',
            'Thank you for being with oldschool',
            'success'
          );
          logOut();
        }
      });
    } catch (error) {
      console.log(error?.message);
    }
    navigate('');
  };


  return (
    <header className="md:absolute bg-slate-500 w-full bg-opacity-70 py-2 px-5 z-10 text-white">
      {/* Navigation */}
      <nav className="flex justify-between items-center font-semibold">
        <div className="order-1">
          <img
            className="w-24 md:w-32"
            src="/gocampus.png"
            alt="gocampus-logo"
          />
        </div>

        <div className="order-2">
          <ul className="hidden md:flex flex-col md:flex-row gap-3 xl:gap-5 xl:text-lg uppercase">
            <NavLink to={'/'}>Home</NavLink>
            <NavLink to={'colleges'}>Colleges</NavLink>
            <NavLink to={'admission'}>Admission</NavLink>
            <NavLink>My College</NavLink>
            <NavLink>Blog</NavLink>
          </ul>

          {/* Toggle nav */}
          <div
            className={`${
              isOpen
                ? 'absolute top-12 space-y-5 right-0 text-end bg-white h-screen pr-5 pl-20 mt-1 uppercase border-l translate-x-0 transition-transform duration-500 ease-out md:hidden pt-2 text-black font-bold'
                : 'hidden'
            }`}
          >
            {/* Search */}
            <div className="flex justify-end items-center gap-2">
              <input
                className="outline-none px-1 border-2 border-black rounded-xl"
                type="search"
                name=""
                id="search"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>

            {/* Nav-links */}
            <ul className="space-y-5">
              <li>Home</li>
              <li>Colleges</li>
              <li>Admission</li>
              <li>My College</li>
              <li>Blog</li>
            </ul>
          </div>
        </div>

        <div className="order-4 hidden md:flex items-center space-x-1">
        {user ? (
          <div className="gap-1 md:flex items-center">
            <Link to={'/dashboard/profile'}>
              <img
                src={user?.photoURL || '/user-demo.png'}
                title={user?.displayName}
                alt="user-image"
                className="w-8 h-8 rounded-full m-1"
              />
            </Link>
            <span className="w-[2px] h-6 bg-slate-400"></span>
            <Link to={''}>
              <button onClick={handleLogOut} className="btn btn-sm rounded">
                Logout
              </button>
            </Link>
          </div>
        ) : (
          <>
            <div className="hidden md:flex">
              <Link to={'/login'}>
                <button className="btn btn-sm btn-ghost rounded">login</button>
              </Link>
              <span className="w-[2px] h-6 bg-slate-400"></span>
              <Link to={'/register'}>
                <button className="btn btn-sm btn-ghost rounded">
                  Register
                </button>
              </Link>
            </div>
            <div className="md:hidden">
              <h2 className="font-bold text-xl uppercase">oldschool</h2>
            </div>
          </>
        )}
      </div>

        {/* Toggle bar */}
        <div onClick={handleToggle} className="md:hidden order-3">
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>
      </nav>

      {/* Search */}
      <div className="hidden md:flex justify-center items-center gap-2 border-t border-slate-300 mt-2 pt-2">
        <input
          className="w-80 text-sm outline-none px-1 border-2 rounded-xl text-black"
          type="search"
          name=""
          id="search"
        />
        <FaSearch size={20} />
      </div>
    </header>
  );
};

export default Header;
