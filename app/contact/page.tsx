import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Contact = () => {
  return (
    <>
      <Navbar />
      <div className='container mx-auto my-8 p-4'>
        <h1 className='text-3xl font-bold text-center mb-8 text-blue-900'>
          Contact Us
        </h1>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          <div>
            <h2 className='text-2xl font-semibold text-blue-800 mb-4'>
              Our Office
            </h2>
            <p className='text-gray-700 mb-2'></p>
            <p className='text-gray-700 mb-2'>Βασιλέως Γεωργίου 63, Καλαμάτα</p>
            <p className='text-gray-700 mb-2'>
              Phone: 27213 02760 | 698 1279051
            </p>
            <p className='text-gray-700 mb-8'>Email: tampoureasl@gmail.com</p>
            <iframe
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093746!2d144.95373531531812!3d-37.816279179751604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf5775c19d30c6b0!2sVictoria%20Harbour!5e0!3m2!1sen!2sau!4v1597828372213!5m2!1sen!2sau'
              width='800'
              height='100%'
              style={{ border: 0 }}
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
