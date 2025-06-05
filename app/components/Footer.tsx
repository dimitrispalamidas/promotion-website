"use client";

import {
  RiInstagramLine,
  RiLinkedinLine,
  RiPhoneLine,
  RiMailLine,
  RiHome4Line,
  RiMapPinLine,
} from "react-icons/ri";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Footer = () => {
  const router = useRouter();

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <Link href="/" className="inline-block">
              <Image
                src="/logo.png"
                alt="S.T.Promotion Logo"
                width={150}
                height={50}
                className="brightness-0 invert"
              />
            </Link>
            <p className="text-gray-400">
              Επαγγελματικές υπηρεσίες προώθησης στην Πελοπόννησο. Δημιουργούμε αξέχαστες εμπειρίες και επιτυχημένα events.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-200"
                aria-label="Instagram"
              >
                <RiInstagramLine size={24} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <RiLinkedinLine size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Γρήγοροι Σύνδεσμοι</h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/"
                  className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center space-x-2"
                >
                  <RiHome4Line size={16} />
                  <span>Αρχική</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center space-x-2"
                >
                  <RiMapPinLine size={16} />
                  <span>Επικοινωνία</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Επικοινωνία</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:6981279051"
                  className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center space-x-2"
                >
                  <RiPhoneLine size={16} />
                  <span>6981279051</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:6949106979"
                  className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center space-x-2"
                >
                  <RiPhoneLine size={16} />
                  <span>6949106979</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:tampoureaspromo@gmail.com"
                  className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center space-x-2"
                >
                  <RiMailLine size={16} />
                  <span>tampoureaspromo@gmail.com</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} S.T.Promotion. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
