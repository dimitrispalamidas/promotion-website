"use client";

import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();

  const handleContactClick = () => {
    router.push("/contact"); // Navigate to the contact page
  };

  const handleMainPageClick = () => {
    router.push("/"); // Navigate to the contact page
  };

  return (
    <nav className='bg-blue-600 border-b-2 border-blue-900 sticky top-0 z-50'>
      <div className='container mx-auto px-4 py-4 flex justify-between items-center'>
        <button
          className='text-lg font-bold text-white'
          onClick={handleMainPageClick}
        >
          MyPromotion
        </button>
        <div className='space-x-4'>
          <a href='#' className='text-white hover:text-blue-900 uppercase'>
            Αρχικη
          </a>
          <a href='#' className='text-white hover:text-blue-900 uppercase'>
            Projects
          </a>
          <a href='#' className='text-white hover:text-blue-900 uppercase'>
            Ευκαιριες καριερας
          </a>
          <button
            onClick={handleContactClick}
            className='px-4 py-2 bg-blue-900 text-white rounded hover:bg-blue-600'
          >
            Επικοινωνια
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
