import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <>
      <Navbar />
      <h1 className='text-3xl font-bold text-center my-8 text-[#800000] font-merriweather'>
        Επικοινωνία
      </h1>
      <div className='max-w-screen-lg mx-auto my-8 p-4'>
        <div>
          <h2 className='text-2xl font-semibold text-[#800000] mb-4 font-merriweather'>
            Τα Γραφεία Μας
          </h2>
          <div className='space-y-4 mb-8'>
            <div className='flex items-center text-gray-700 font-roboto'>
              <FaMapMarkerAlt className='text-[#800000] mr-2' />
              <a
                href='https://www.google.com/maps/place/Βασιλέως+Γεωργίου+63,+Καλαμάτα+24100'
                target='_blank'
                rel='noopener noreferrer'
                className='hover:underline'
              >
                Βασιλέως Γεωργίου 63, Καλαμάτα 24100
              </a>
            </div>
            <div className='flex items-center text-gray-700 font-roboto'>
              <FaPhoneAlt className='text-[#800000] mr-2' />
              <a href='tel:+306981279051' className='hover:underline'>
                6981279051
              </a>
              <span className='mx-2'>|</span>
              <a href='tel:+306949106979' className='hover:underline'>
                6949106979
              </a>
            </div>
            <div className='flex items-center text-gray-700 font-roboto'>
              <FaEnvelope className='text-[#800000] mr-2' />
              <a
                href='mailto:tampoureaspromo@gmail.com'
                className='hover:underline'
              >
                tampoureaspromo@gmail.com
              </a>
            </div>
          </div>
          <div className='flex justify-center'>
            <iframe
              src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d796.2208430293165!2d22.120387831517554!3d37.03642706156529!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1361b0a294bdff23%3A0x9d3e708ed602fe30!2zzpLOsc-DLiDOk861z4nPgc6zzq_Ov8-FIDYz!5e0!3m2!1sel!2sus!4v1720547204500!5m2!1sel!2sus'
              className='w-full h-80 md:h-96 lg:h-[450px] border-0'
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
      <ContactForm />
      <Footer />
    </>
  );
};

export default Contact;
