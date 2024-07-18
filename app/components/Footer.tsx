"use client";

import {
  FaInstagram,
  FaLinkedin,
  FaPhone,
  FaEnvelope,
  FaConciergeBell,
  FaProjectDiagram,
  FaBriefcase,
  FaMap,
} from "react-icons/fa";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Footer = () => {
  const router = useRouter();

  return (
    <footer className='bg-gray-800 py-12 px-4 text-white'>
      <div className='container mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          <div>
            <Image
              src={"/logowhite.png"}
              alt='Logo of STPromotion'
              width={200}
              height={50}
              onClick={() => {
                router.push("/");
              }}
              className='cursor-pointer'
            />
            <div className='mt-4 flex space-x-4 ml-6'>
              <a href='#' className='hover:text-gray-400'>
                <FaInstagram size={24} />
              </a>
              <a href='#' className='hover:text-gray-400'>
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>
          <div>
            <h3 className='font-bold text-lg text-red-300'>Επικοινωνία</h3>
            <ul className='mt-4 space-y-2'>
              <li>
                <a
                  href='tel:6981279051'
                  className='hover:text-red-300 flex items-center text-white'
                >
                  <FaPhone size={12} />
                  &nbsp;6981279051
                </a>
              </li>
              <li>
                <a
                  href='tel:6949106979'
                  className='hover:text-red-300 flex items-center text-white'
                >
                  <FaPhone size={12} />
                  &nbsp;6949106979
                </a>
              </li>
              <li>
                <a
                  href='mailto:tampoureaspromo@gmail.com'
                  className='hover:text-red-300 flex items-center text-white text-sm'
                >
                  <FaEnvelope size={12} />
                  &nbsp;tampoureaspromo@gmail.com
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className='font-bold text-lg text-red-300'>Πληροφορίες</h3>
            <ul className='mt-4 space-y-2'>
              <li>
                <a
                  href='#about-us'
                  className='hover:text-red-300 flex items-center text-white'
                >
                  <FaConciergeBell size={12} />
                  &nbsp; Οι Υπηρεσίες μας
                </a>
              </li>
              <li>
                <a
                  onClick={() => router.push("/projects")}
                  className='hover:text-red-300 cursor-pointer flex items-center text-white'
                >
                  <FaProjectDiagram size={12} />
                  &nbsp; Τα Project μας
                </a>
              </li>
              <li>
                <a
                  onClick={() => router.push("/jobs")}
                  className='hover:text-red-300 cursor-pointer flex items-center text-white'
                >
                  <FaBriefcase size={12} />
                  &nbsp; Θεσεις εργασιας
                </a>
              </li>
              <li>
                <a
                  onClick={() => router.push("/contact")}
                  className='hover:text-red-300 cursor-pointer flex items-center text-white'
                >
                  <FaMap size={12} />
                  &nbsp; Χάρτες
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
