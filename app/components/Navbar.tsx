"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const NavMenu = () => (
    <>
      <li>
        <a
          onClick={() => {
            router.push("/");
          }}
          className='block px-4 py-2 text-white hover:text-blue-900 uppercase cursor-pointer'
        >
          Αρχικη
        </a>
      </li>
      <li>
        <a
          onClick={() => router.push("/projects")}
          className='block px-4 py-2 text-white hover:text-blue-900 uppercase cursor-pointer'
        >
          Projects
        </a>
      </li>
      <li>
        <a
          onClick={() => router.push("/jobs")}
          className='block px-4 py-2 text-white hover:text-blue-900 uppercase cursor-pointer'
        >
          Θεσεις εργασιας
        </a>
      </li>
      <li>
        <a
          onClick={() => router.push("/contact")}
          className='block w-full text-left px-4 py-2 bg-blue-900 text-white rounded hover:bg-blue-600 uppercase cursor-pointer'
        >
          Επικοινωνια
        </a>
      </li>
    </>
  );

  return (
    <nav className='bg-blue-600 border-b-2 border-blue-900 sticky top-0 z-50'>
      <div className='container mx-auto px-4 py-4 flex justify-between items-center'>
        <button
          className='text-lg font-bold text-white'
          onClick={() => {
            router.push("/");
          }}
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
