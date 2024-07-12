import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className='bg-blue-900 py-12 px-4 text-white'>
      <div className='container mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          <div>
            <h3 className='font-bold text-lg'>My Promotion Company</h3>
            <div className='mt-4 flex space-x-4'>
              <a href='#' className='hover:text-blue-300'>
                <FaFacebook size={24} />
              </a>
              <a href='#' className='hover:text-blue-300'>
                <FaInstagram size={24} />
              </a>
              <a href='#' className='hover:text-blue-300'>
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>
          <div>
            <h3 className='font-bold text-lg'>Επικοινωνία</h3>
            <ul className='mt-4 space-y-2'>
              <li>
                <a href='#' className='hover:text-blue-300'>
                  Τηλ: 27210 27137
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-blue-300'>
                  Κιν: +30 6978916928
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-blue-300'>
                  email: mypromotion@gmail.com
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className='font-bold text-lg'>Πληροφορίες</h3>
            <ul className='mt-4 space-y-2'>
              <li>
                <a href='#' className='hover:text-blue-300'>
                  Ποιοί Είμαστε
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-blue-300'>
                  Οι Υπηρεσίες μας
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-blue-300'>
                  Χάρτες
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
