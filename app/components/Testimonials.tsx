"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

const Testimonials = () => {
  const [ref1, inView1] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref2, inView2] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref3, inView3] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className='py-12 px-4'>
      <div className='container mx-auto'>
        <h2 className='text-3xl font-bold text-center text-blue-900 mb-4'>
          Αξιολογήσεις
        </h2>
        <p className='text-gray-600 text-center mb-12'>
          Δείτε τι έγραψαν οι πελάτες μας για εμάς.
        </p>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          <motion.div
            ref={ref1}
            initial={{ opacity: 0, x: -100 }}
            animate={inView1 ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
            transition={{ duration: 1, delay: 0.2 }}
            className='bg-white p-6 rounded-lg shadow-lg'
          >
            <p className='text-gray-800 mb-4'>
              “Θα τους επέλεγα ξανά και ξανά!”
            </p>
            <div className='flex items-center'>
              <div className='w-10 h-10 rounded-full overflow-hidden'>
                <Image
                  src='/user.png'
                  alt='Avatar'
                  width={40}
                  height={40}
                  objectFit='cover'
                />
              </div>
              <div className='ml-4'>
                <p className='font-bold text-blue-900'>Dimitris</p>
                <p className='text-gray-600 text-sm'>
                  Authorized Coca-cola reseller
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            ref={ref2}
            initial={{ opacity: 0, x: -100 }}
            animate={inView2 ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
            transition={{ duration: 1, delay: 0.2 }}
            className='bg-white p-6 rounded-lg shadow-lg'
          >
            <p className='text-gray-800 mb-4'>
              “Άψογη συνεργασία, με σύνεση στον στόχο μας.”
            </p>
            <div className='flex items-center'>
              <div className='w-10 h-10 rounded-full overflow-hidden'>
                <Image
                  src='/user.png'
                  alt='Avatar'
                  width={40}
                  height={40}
                  objectFit='cover'
                />
              </div>
              <div className='ml-4'>
                <p className='font-bold text-blue-900'>Achilleas</p>
                <p className='text-gray-600 text-sm'>
                  Founder of &apos;ΑΦΟΙ ΛΑΜΠΟΥ&apos;
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            ref={ref3}
            initial={{ opacity: 0, x: -100 }}
            animate={inView3 ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
            transition={{ duration: 1, delay: 0.4 }}
            className='bg-white p-6 rounded-lg shadow-lg'
          >
            <p className='text-gray-800 mb-4'>“Σας ευχαριστώ για όλα!”</p>
            <div className='flex items-center'>
              <div className='w-10 h-10 rounded-full overflow-hidden'>
                <Image
                  src='/user.png'
                  alt='Avatar'
                  width={40}
                  height={40}
                  objectFit='cover'
                />
              </div>
              <div className='ml-4'>
                <p className='font-bold text-blue-900'>Pavlina</p>
                <p className='text-gray-600 text-sm'>Project Manager</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
