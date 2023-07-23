import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="py-3 border-b px-5 z-10">
      {/* Navigation */}
      <nav className="flex justify-between items-center font-semibold">
        <div className="order-1">
          <img className="w-40" src="/gocampus.png" alt="gocampus-logo" />
        </div>

        <div className="order-2">
          <ul className="hidden md:flex flex-col md:flex-row gap-3 xl:gap-5 md:text-lg uppercase">
            <li>Home</li>
            <li>Colleges</li>
            <li>Admission</li>
            <li>My College</li>
            <li>Blog</li>
          </ul>

          {/* Toggle nav */}
          <div
            className={`${
              isOpen
                ? 'absolute top-20 space-y-5 right-0 text-end bg-white h-screen pr-5 pl-20 mt-1 uppercase border-l translate-x-0 transition-transform duration-500 ease-out md:hidden'
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
            <ul className='space-y-5'>
              <li>Home</li>
              <li>Colleges</li>
              <li>Admission</li>
              <li>My College</li>
              <li>Blog</li>
            </ul>
          </div>
        </div>

        <div className="hidden md:flex order-3">
          <button className="btn btn-sm rounded-md uppercase font-bold bg-zinc-500 text-white hover:text-black">
            Sign up
          </button>
        </div>

        {/* Toggle bar */}
        <div onClick={handleToggle} className="md:hidden order-3">
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>
      </nav>

      {/* Search */}
      <div className="hidden md:flex justify-end items-center gap-2">
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
    </header>
  );
};

export default Header;
