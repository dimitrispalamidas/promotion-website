"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

const Testimonials = () => {
  const [ref1, inView1] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref2, inView2] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref3, inView3] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className='py-12 px-4 bg-gray-100'>
      <div className='container mx-auto'>
        <h2 className='text-3xl font-bold text-center text-red-900 mb-4'>
          Αξιολογήσεις
        </h2>
        <p className='text-gray-700 text-center mb-12'>
          Δείτε τι έγραψαν για εμάς :
        </p>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          <motion.div
            ref={ref1}
            initial={{ opacity: 0, x: -100 }}
            animate={inView1 ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
            transition={{ duration: 1, delay: 0.2 }}
            className='bg-white p-6 rounded-lg shadow-lg flex flex-col justify-between hover:shadow-2xl transition-shadow duration-300'
          >
            <p className='text-gray-800 mb-4'>
              “ Υπήρχε άψογη συνεργασία με τα παιδιά από το promotion !! Ηταν
              όλοι ευγενέστατοι και μας παρείχαν τα μέγιστα. Σας ευχαριστούμε
              πολύ για την συνεργασία!!! ”
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
                <p className='font-bold text-red-900'>Δημήτριος</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            ref={ref2}
            initial={{ opacity: 0, x: -100 }}
            animate={inView2 ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
            transition={{ duration: 1, delay: 0.2 }}
            className='bg-white p-6 rounded-lg shadow-lg flex flex-col justify-between hover:shadow-2xl transition-shadow duration-300'
          >
            <p className='text-gray-800 mb-4'>
              “ Πολύ καλή δουλειά απ&apos;το απαρτιζόμενο προσωπικό! Εκδηλώνουν
              πραγματικό ενδιαφέρον τους για το αντικείμενο! ”
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
                <p className='font-bold text-red-900'>Μαρία</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            ref={ref3}
            initial={{ opacity: 0, x: -100 }}
            animate={inView3 ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
            transition={{ duration: 1, delay: 0.4 }}
            className='bg-white p-6 rounded-lg shadow-lg flex flex-col justify-between hover:shadow-2xl transition-shadow duration-300'
          >
            <p className='text-gray-800 mb-4'>
              “ Άψογη εταιρεία... Αν είσαι φοιτητής και ψάχνεις για δουλειά
              είναι οτι καλύτερο! Εργάζομαι αρκετό καιρό και μονο τα καλύτερα
              εχω να πω! Σας ευχαριστώ πολύ όλους σας... ”
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
                <p className='font-bold text-red-900'>Δήμητρα</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
