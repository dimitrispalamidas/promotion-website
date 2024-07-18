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
          Εάν επιθυμείτε να συμμετάσχετε στην ομάδα μας, μπορείτε να στείλετε το
          βιογραφικό σας στο παρακατω email:{" "}
          <strong>tampoureaspromo@gmail.com</strong> ή να συμπληρώσετε την
          παρακάτω φόρμα και θα επικοινωνήσουμε μαζί σας το συντομότερο δυνατό.
        </p>
      </div>
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Jobs;
