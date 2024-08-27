"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { FaBars, FaTimes } from "react-icons/fa";
import Image from "next/image";

const Navbar = () => {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const [iconColor, setIconColor] = useState("text-white"); // Default color

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const viewportHeight = window.innerHeight;
      const scrollPosition = window.scrollY;

      if (scrollPosition > viewportHeight) {
        setIconColor("text-black");
      } else {
        setIconColor("text-white");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const NavMenu = () => (
    <>
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
          className='block w-full text-left px-6 py-2 bg-[#8B0000] text-white rounded-lg hover:bg-[#A52A2A] transition duration-300 uppercase cursor-pointer'
        >
          Επικοινωνια
        </a>
      </li>
    </>
  );

  return (
    <nav className='sticky top-0 left-0 w-full z-50 bg-transparent'>
      <div className='container mx-auto px-4 py-4 flex justify-between items-center'>
        <Image
          src={"/logo.png"}
          alt='Logo of STPromotion'
          width={150}
          height={50}
          onClick={() => {
            router.push("/");
          }}
          className='cursor-pointer'
        />
        <div className='relative'>
          <button
            onClick={toggleMenu}
            className={`focus:outline-none ${iconColor}`}
          >
            {menuOpen ? (
              <FaTimes className='w-6 h-6' />
            ) : (
              <FaBars className='w-6 h-6' />
            )}
          </button>
          {menuOpen && (
            <ul className='absolute right-0 mt-2 w-48 bg-red-600 border border-red-900 rounded-md shadow-lg'>
              <NavMenu />
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
