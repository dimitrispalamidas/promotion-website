import ContactForm from "../components/ContactForm";
import Navbar from "../components/Navbar";

const Contact = () => {
  return (
    <>
      <Navbar />
      <h1 className='text-3xl font-bold text-center my-8 text-blue-900'>
        Επικοινωνία
      </h1>
      <div className='container mx-auto my-8 p-4 border'>
        <div>
          <div>
            <h2 className='text-2xl font-semibold text-blue-800 mb-4'>
              Τα Γραφεία Μας
            </h2>
            <p className='text-gray-700 mb-2'>Βασιλέως Γεωργίου 63, Καλαμάτα</p>
            <p className='text-gray-700 mb-2'>
              Phone: 27213 02760 | 698 1279051
            </p>
            <p className='text-gray-700 mb-8'>Email: tampoureasl@gmail.com</p>
            <div className='flex justify-center'>
              <iframe
                src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d796.2208430293165!2d22.120387831517554!3d37.03642706156529!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1361b0a294bdff23%3A0x9d3e708ed602fe30!2zzpLOsc-DLiDOk861z4nPgc6zzq_Ov8-FIDYz!5e0!3m2!1sel!2sus!4v1720547204500!5m2!1sel!2sus'
                className='w-full h-80 md:h-96 lg:h-[450px] border-0'
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <ContactForm />
    </>
  );
};

export default Contact;
