"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { RiMenuLine, RiCloseLine } from "react-icons/ri";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const navLinks = [
    { href: "/", label: "Αρχική" },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      scrolled ? "bg-white shadow-lg" : "bg-transparent"
    }`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="relative z-10">
            <Image
              src={"/logo.png"}
              alt="S.T.Promotion Logo"
              width={175}
              height={50}
              className="transition-opacity duration-300"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors duration-200 ${
                  scrolled ? "text-gray-800 hover:text-primary" : "text-white hover:text-gray-200"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="btn btn-primary"
            >
              Επικοινωνία
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className={`md:hidden relative z-10 ${
              scrolled ? "text-gray-800" : "text-white"
            }`}
          >
            {menuOpen ? (
              <RiCloseLine className="w-6 h-6" />
            ) : (
              <RiMenuLine className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {menuOpen && (
          <div className="md:hidden fixed inset-0 z-50 bg-black/40 flex flex-col">
            <div className="bg-white shadow-lg w-full max-w-md mx-auto mt-0 rounded-b-2xl overflow-hidden">
              <div className="flex flex-col items-center py-6 px-6">
                <Image
                  src={"/logo.png"}
                  alt="S.T.Promotion Logo"
                  width={140}
                  height={40}
                  className="mb-4"
                />
                <button
                  onClick={toggleMenu}
                  className="absolute top-4 right-4 text-2xl text-gray-700"
                  aria-label="Κλείσιμο μενού"
                >
                  <RiCloseLine />
                </button>
              </div>
              <hr className="border-gray-200" />
              <div className="flex flex-col space-y-2 py-4 px-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="flex justify-center items-center bg-gray-100 text-gray-800 hover:text-primary font-medium py-3 px-2 rounded-lg transition-colors mb-2"
                    style={{ marginLeft: 0, marginRight: 0 }}
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  href="/contact"
                  className="btn btn-primary w-full text-center mt-2"
                  onClick={() => setMenuOpen(false)}
                >
                  Επικοινωνία
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
