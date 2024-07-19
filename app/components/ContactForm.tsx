"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import emailjs from "emailjs-com";

const ContactForm = () => {
  const initialState = {
    name: "",
    email: "",
    phone: "",
    message: "",
  };

  const [formData, setFormData] = useState(initialState);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone,
      message: formData.message,
    };

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Email sent successfully!");
          setFormData(initialState); // Reset form data
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send email. Please try again.");
        }
      );
  };

  return (
    <div className='max-w-screen-lg mx-auto my-8 p-6 bg-white shadow-md rounded-lg'>
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
            htmlFor='phone'
            className='block text-sm font-medium text-gray-700 font-roboto'
          >
            Τηλέφωνο
          </label>
          <input
            type='tel'
            id='phone'
            name='phone'
            value={formData.phone}
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
