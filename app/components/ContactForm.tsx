"use client";

import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className='container mx-auto my-8 p-6 bg-white shadow-md rounded-lg'>
      <h2 className='text-2xl font-semibold text-[#800000] mb-6 font-merriweather text-center'>
        Επικοινωνήστε Μαζί Μας
      </h2>
      <form onSubmit={handleSubmit} className='space-y-6'>
        <div>
          <label
            htmlFor='name'
            className='block text-sm font-medium text-gray-700 font-roboto'
          >
            Όνομα
          </label>
          <input
            type='text'
            id='name'
            name='name'
            value={formData.name}
            onChange={handleChange}
            required
            className='mt-1 block w-full rounded-lg border border-gray-300 focus:border-[#800000] focus:outline-none focus:ring-2 focus:ring-[#800000] font-roboto p-3'
          />
        </div>
        <div>
          <label
            htmlFor='email'
            className='block text-sm font-medium text-gray-700 font-roboto'
          >
            Email
          </label>
          <input
            type='email'
            id='email'
            name='email'
            value={formData.email}
            onChange={handleChange}
            required
            className='mt-1 block w-full rounded-lg border border-gray-300 focus:border-[#800000] focus:outline-none focus:ring-2 focus:ring-[#800000] font-roboto p-3'
          />
        </div>
        <div>
          <label
            htmlFor='message'
            className='block text-sm font-medium text-gray-700 font-roboto'
          >
            Μήνυμα
          </label>
          <textarea
            id='message'
            name='message'
            value={formData.message}
            onChange={handleChange}
            required
            rows={4}
            className='mt-1 block w-full rounded-lg border border-gray-300 focus:border-[#800000] focus:outline-none focus:ring-2 focus:ring-[#800000] font-roboto p-3'
          ></textarea>
        </div>
        <div className='flex justify-center'>
          <button
            type='submit'
            className='inline-flex items-center px-6 py-3 border border-transparent text-sm font-medium rounded-lg text-white bg-[#800000] hover:bg-[#A52A2A] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#800000] font-roboto'
          >
            Υποβολή
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
