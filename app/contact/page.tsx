"use client";

import { useState, useEffect } from "react";
import { RiPhoneLine, RiMailLine, RiMapPinLine, RiTimeLine } from "react-icons/ri";
import emailjs from '@emailjs/browser';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState("");

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '');
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitStatus('idle');
    setErrorMessage("");

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        from_phone: formData.phone,
        subject: formData.subject,
        message: formData.message,
        to_email: "palamidas.dim@gmail.com",
      };

      const result = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '',
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '',
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ''
      );

      if (result.status === 200) {
        setSubmitStatus('success');
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      } else {
        setSubmitStatus('error');
        setErrorMessage("Προέκυψε σφάλμα κατά την αποστολή του μηνύματος. Παρακαλώ δοκιμάστε ξανά.");
      }
    } catch (error) {
      console.error('EmailJS Error:', error);
      setSubmitStatus('error');
      setErrorMessage("Προέκυψε σφάλμα κατά την αποστολή του μηνύματος. Παρακαλώ δοκιμάστε ξανά.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      <main className="flex-1 w-full max-w-6xl mx-auto px-4 py-10 flex flex-col gap-10">
        {/* Section Title */}
        <div className="mb-2 text-center">
          <h1 className="text-3xl md:text-4xl font-bold font-playfair text-gray-900 mb-2">Επικοινωνία</h1>
          <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">Είμαστε πάντα στη διάθεσή σας για να απαντήσουμε σε ερωτήσεις ή να συζητήσουμε τις ανάγκες σας. Συμπληρώστε τη φόρμα ή επικοινωνήστε απευθείας μαζί μας.</p>
        </div>
        {/* Top Row: Contact Info & Form */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-10 w-full">
          {/* Contact Info */}
          <div className="flex-1 bg-white rounded-2xl shadow-lg p-8 flex flex-col justify-between min-h-[420px]">
            <h2 className="text-2xl font-bold font-playfair text-gray-900 mb-6">Στοιχεία Επικοινωνίας</h2>
            <div className="space-y-6 flex-1">
              <div className="flex items-start space-x-4">
                <div className="text-primary mt-1">
                  <RiPhoneLine size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Τηλέφωνα</h3>
                  <div className="mt-2 space-y-1">
                    <a href="tel:6981279051" className="text-gray-600 hover:text-primary transition-colors">
                      6981279051
                    </a>
                    <br />
                    <a href="tel:6949106979" className="text-gray-600 hover:text-primary transition-colors">
                      6949106979
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="text-primary mt-1">
                  <RiMailLine size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Email</h3>
                  <a 
                    href="mailto:tampoureaspromo@gmail.com"
                    className="text-gray-600 hover:text-primary transition-colors"
                  >
                    tampoureaspromo@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="text-primary mt-1">
                  <RiMapPinLine size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Περιοχή</h3>
                  <p className="text-gray-600">
                    Καλαμάτα - Σπάρτη - Πύργος - Τρίπολη - Ναύπλιο
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="text-primary mt-1">
                  <RiTimeLine size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Ωράριο Λειτουργίας</h3>
                  <p className="text-gray-600">
                    Δευτέρα - Παρασκευή: 09:00 - 18:00
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Contact Form */}
          <div className="flex-1 bg-white rounded-2xl shadow-lg p-8 flex flex-col justify-between min-h-[420px]">
            <h2 className="text-2xl font-bold font-playfair text-gray-900 mb-6">Στείλτε μας μήνυμα</h2>
            
            {/* Success Message */}
            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                <p className="text-green-800 font-medium">Το μήνυμά σας στάλθηκε επιτυχώς! Θα επικοινωνήσουμε μαζί σας σύντομα.</p>
              </div>
            )}

            {/* Error Message */}
            {submitStatus === 'error' && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-red-800 font-medium">{errorMessage}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6 flex flex-col justify-between flex-1">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Ονοματεπώνυμο *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    disabled={isLoading}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors disabled:bg-gray-100 disabled:cursor-not-allowed"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    disabled={isLoading}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors disabled:bg-gray-100 disabled:cursor-not-allowed"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Τηλέφωνο
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    disabled={isLoading}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors disabled:bg-gray-100 disabled:cursor-not-allowed"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Θέμα *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    disabled={isLoading}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors disabled:bg-gray-100 disabled:cursor-not-allowed"
                  >
                    <option value="">Επιλέξτε θέμα</option>
                    <option value="promotion">Προώθηση</option>
                    <option value="events">Events</option>
                    <option value="marketing">Marketing</option>
                    <option value="other">Άλλο</option>
                  </select>
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Μήνυμα *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  disabled={isLoading}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors disabled:bg-gray-100 disabled:cursor-not-allowed"
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={isLoading}
                className="w-full btn btn-primary mt-4 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              >
                {isLoading ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Αποστολή...
                  </>
                ) : (
                  "Αποστολή Μηνύματος"
                )}
              </button>
            </form>
          </div>
        </div>
        {/* Bottom Row: Map */}
        <div className="bg-white rounded-2xl shadow-lg p-0 flex flex-col overflow-hidden">
          <h2 className="text-2xl font-bold font-playfair text-gray-900 mb-0 px-8 pt-8">Βρείτε μας</h2>
          <div className="w-full h-[450px] mt-4">
            <iframe
              src={`https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&q=%CE%92%CE%B1%CF%83.+%CE%93%CE%B5%CF%89%CF%81%CE%B3%CE%AF%CE%BF%CF%85+63,+%CE%9A%CE%B1%CE%BB%CE%B1%CE%BC%CE%AC%CF%84%CE%B1+241+00,+Greece`}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-b-2xl w-full h-full"
            ></iframe>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
