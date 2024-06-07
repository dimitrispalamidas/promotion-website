const Navbar = () => {
  return (
    <nav className='bg-white border-b border-gray-200 sticky top-0 z-50'>
      <div className='container mx-auto px-4 py-4 flex justify-between items-center'>
        <div className='text-lg font-bold'>MyPromotion</div>
        <div className='space-x-4'>
          <a href='#' className='text-gray-600 hover:text-gray-900 uppercase'>
            Αρχικη
          </a>
          <a href='#' className='text-gray-600 hover:text-gray-900 uppercase'>
            Projects
          </a>
          <a href='#' className='text-gray-600 hover:text-gray-900 uppercase'>
            Ευκαιριες καριερας
          </a>
          <button className='px-4 py-2 bg-blue-600 text-white rounded'>
            Επικοινωνια
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
