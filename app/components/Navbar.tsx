"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { FaBars, FaTimes } from "react-icons/fa";
import Image from "next/image";

const Navbar = () => {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  interface NavMenuProps {
    className?: string;
  }

  const NavMenu: React.FC<NavMenuProps> = ({ className }) => (
    <ul className={`flex flex-col md:flex-row ${className}`}>
      <li>
        <a
          onClick={() => {
            router.push("/");
          }}
          className='block px-4 py-2 text-white hover:text-red-900 uppercase cursor-pointer'
        >
          Αρχικη
        </a>
      </li>
      <li>
        <a
          onClick={() => router.push("/projects")}
          className='block px-4 py-2 text-white hover:text-red-900 uppercase cursor-pointer'
        >
          Projects
        </a>
      </li>
      <li>
        <a
          onClick={() => router.push("/jobs")}
          className='block px-4 py-2 text-white hover:text-red-900 uppercase cursor-pointer'
        >
          Θεσεις εργασιας
        </a>
      </li>
      <li>
        <a
          onClick={() => router.push("/contact")}
          className='block w-full md:w-auto text-left md:text-center px-6 py-2 bg-[#8B0000] text-white rounded-lg hover:bg-[#A52A2A] transition duration-300 uppercase cursor-pointer'
        >
          Επικοινωνια
        </a>
      </li>
    </ul>
  );

  return (
    <nav className='sticky top-0 left-0 w-full z-50 bg-[#F70100]'>
      <div className='mx-auto px-4 py-2 flex justify-between items-center'>
        <Image
          src={"/logowhite.png"}
          alt='Logo of STPromotion'
          width={175}
          height={50}
          onClick={() => {
            router.push("/");
          }}
          className='cursor-pointer'
        />
        <div className='flex md:hidden'>
          <button onClick={toggleMenu} className='text-white'>
            {menuOpen ? (
              <FaTimes className='w-6 h-6' />
            ) : (
              <FaBars className='w-6 h-6' />
            )}
          </button>
        </div>
        <NavMenu className='hidden md:flex md:items-center md:space-x-4' />
        {menuOpen && (
          <div className='absolute top-16 right-0 mt-2 w-48 bg-red-600 border border-red-900 rounded-md shadow-lg md:hidden z-50'>
            <NavMenu className='flex flex-col' />
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
