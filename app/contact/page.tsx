"use client";

import { useState } from "react";
import { RiPhoneLine, RiMailLine, RiMapPinLine, RiTimeLine } from "react-icons/ri";
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log("Form submitted:", formData);
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
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
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
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
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
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
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
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
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
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full btn btn-primary mt-4"
              >
                Αποστολή Μηνύματος
              </button>
            </form>
          </div>
        </div>
        {/* Bottom Row: Map */}
        <div className="bg-white rounded-2xl shadow-lg p-0 flex flex-col overflow-hidden">
          <h2 className="text-2xl font-bold font-playfair text-gray-900 mb-0 px-8 pt-8">Βρείτε μας</h2>
          <div className="w-full h-[450px] mt-4">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12580.000000000002!2d22.1125!3d37.0375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDAyJzE1LjAiTiAyMsKwMDYnNDUuMCJF!5e0!3m2!1sen!2sgr!4v1234567890"
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
