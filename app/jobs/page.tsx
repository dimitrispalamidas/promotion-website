import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Jobs = () => {
  return (
    <div className='flex flex-col min-h-screen'>
      <Navbar />
      <div className='container mx-auto my-8 p-4 flex-grow'>
        <h1 className='text-3xl font-bold text-center text-[#800000] mb-6 font-merriweather'>
          Γίνε μέλος της ομάδας μας
        </h1>
        <p className='text-center text-gray-700 mb-8 text-lg font-roboto'>
          Εάν θα θέλατε να συμμετέχετε στις εκδηλώσεις και τα προγράμματα της
          εταιρείας μας, μπορείτε να στείλετε το βιογραφικό σας στο παρακάτω
          email:{" "}
          <a
            href='mailto:tampoureaspromo@gmail.com'
            className='text-blue-500 underline'
          >
            tampoureaspromo@gmail.com
          </a>{" "}
          ή να συμπληρώσετε την παρακάτω φόρμα και θα επικοινωνήσουμε μαζί σας
          το συντομότερο δυνατό.
        </p>
        <ContactForm />
      </div>
      <Footer />
    </div>
  );
};

export default Jobs;
