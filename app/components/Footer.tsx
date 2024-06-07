import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className='bg-white py-12 px-4'>
      <div className='container mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          <div>
            <h3 className='font-bold text-lg'>My Promotion Company</h3>
            <div className='mt-4 flex space-x-4'>
              <a href='#' className='text-gray-600 hover:text-gray-900'>
                <FaFacebook size={24} />
              </a>
              <a href='#' className='text-gray-600 hover:text-gray-900'>
                <FaTwitter size={24} />
              </a>
              <a href='#' className='text-gray-600 hover:text-gray-900'>
                <FaInstagram size={24} />
              </a>
              <a href='#' className='text-gray-600 hover:text-gray-900'>
                <FaLinkedin size={24} />
              </a>
              <a href='#' className='text-gray-600 hover:text-gray-900'>
                <FaYoutube size={24} />
              </a>
            </div>
          </div>
          <div>
            <h3 className='font-bold text-lg'>Επικοινωνία</h3>
            <ul className='mt-4 space-y-2 text-gray-600'>
              <li>
                <a href='#' className='hover:text-gray-900'>
                  Τηλ:27210 27137
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-gray-900'>
                  Κιν:+30 6978916928
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-gray-900'>
                  email:mypromotion@gmail.com
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className='font-bold text-lg'>Πληροφορίες</h3>
            <ul className='mt-4 space-y-2 text-gray-600'>
              <li>
                <a href='#' className='hover:text-gray-900'>
                  Ποιοί Είμαστε
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-gray-900'>
                  Οι Υπηρεσίες μας
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-gray-900'>
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
