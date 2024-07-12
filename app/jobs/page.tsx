import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Jobs = () => {
  return (
    <>
      <Navbar />
      <div className='container mx-auto my-8 p-4'>
        <h1 className='text-3xl font-bold text-center text-blue-800 mb-6'>
          Join Our Team
        </h1>
        <p className='text-center text-gray-700 mb-8 text-lg'>
          Εάν επιθυμείτε να συμμετάσχετε στην ομάδα μας, μπορείτε να αποστείλετε
          το βιογραφικό σας στο παρακατω email:{" "}
          <strong>mypromotionemail@gmail.com</strong> ή να συμπληρώσετε την
          παρακάτω φόρμα και θα επικοινωνήσουμε μαζί σας το συντομότερο δυνατό.
        </p>
        <div className='bg-white shadow-md rounded-lg p-6'>
          <ContactForm />
        </div>
      </div>
    </>
  );
};

export default Jobs;
