"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleContactClick = () => {
    router.push("/contact"); // Navigate to the contact page
  };

  const handleMainPageClick = () => {
    router.push("/"); // Navigate to the main page
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const NavMenu = () => (
    <>
      <li>
        <a
          href='#'
          className='block px-4 py-2 text-white hover:text-blue-900 uppercase'
        >
          Αρχικη
        </a>
      </li>
      <li>
        <a
          href='#'
          className='block px-4 py-2 text-white hover:text-blue-900 uppercase'
        >
          Projects
        </a>
      </li>
      <li>
        <a
          href='#'
          className='block px-4 py-2 text-white hover:text-blue-900 uppercase'
        >
          Θεσεις εργασιας
        </a>
      </li>
      <li>
        <button
          onClick={handleContactClick}
          className='block w-full text-left px-4 py-2 bg-blue-900 text-white rounded hover:bg-blue-600 uppercase'
        >
          Επικοινωνια
        </button>
      </li>
    </>
  );

  return (
    <nav className='bg-blue-600 border-b-2 border-blue-900 sticky top-0 z-50'>
      <div className='container mx-auto px-4 py-4 flex justify-between items-center'>
        <button
          className='text-lg font-bold text-white'
          onClick={handleMainPageClick}
        >
          MyPromotion
        </button>
        <div className='relative md:hidden'>
          <button
            onClick={toggleMenu}
            className='text-white focus:outline-none'
          >
            {menuOpen ? (
              <FaTimes className='w-6 h-6' />
            ) : (
              <FaBars className='w-6 h-6' />
            )}
          </button>
          {menuOpen && (
            <ul className='absolute right-0 mt-2 w-48 bg-blue-600 border border-blue-900 rounded-md shadow-lg'>
              <NavMenu />
            </ul>
          )}
        </div>
        <ul className='hidden md:flex md:space-x-4 items-center'>
          <NavMenu />
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
