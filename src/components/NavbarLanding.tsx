import React, { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react'; // Import ikon

const NavbarLanding: React.FC = () => {
  // State untuk mengontrol status buka/tutup menu mobile
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  // Fungsi untuk toggle menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Logika untuk menutup menu saat klik di luar area navbar
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav ref={navRef} className="w-full backdrop-blur-[10px] fixed flex items-center justify-between px-6 py-4 bg-gray-50/80 z-50">
      {/* Logo */}
      <a href="/" className="text-2xl font-bold text-gray-800 z-20">
        Bebas<span className="text-[#AE70FF]">Blog</span>
      </a>

      {/* Menu untuk Desktop */}
      <div className="hidden md:flex items-center space-x-6">
        <a href="#features" className="font-semibold text-gray-800 hover:text-[#AE70FF] transition-all duration-200">
          Features
        </a>
        <a href="#testimonials" className="font-semibold text-gray-800 hover:text-[#AE70FF] transition-all duration-200">
          Testimonials
        </a>
      </div>

      {/* Tombol untuk Desktop */}
      <div className="hidden md:flex space-x-4">
        <a href="/login" className="px-4 py-2 text-sm font-medium text-primary bg-secondary hover:bg-primary transition-all duration-200 hover:text-white rounded-sm">
          Sign in
        </a>
        <a href="/feed" className="px-4 py-2 text-sm font-medium text-white bg-primary hover:bg-secondary transition-all duration-200 hover:text-primary rounded-sm">
          Get Started
        </a>
      </div>

      {/* Tombol Menu Mobile */}
      <div className="md:hidden z-20">
        <button onClick={toggleMenu} className="text-gray-800 focus:outline-none">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Panel Menu Mobile */}
      <div className={`absolute top-0 left-0 w-full h-screen bg-white transform transition-transform duration-300 ease-in-out md:hidden ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          <a href="#features" onClick={() => setIsOpen(false)} className="text-2xl font-semibold text-gray-800 hover:text-[#AE70FF]">
            Features
          </a>
          <a href="#testimonials" onClick={() => setIsOpen(false)} className="text-2xl font-semibold text-gray-800 hover:text-[#AE70FF]">
            Testimonials
          </a>

          <div className="w-full border-t border-gray-200 my-4"></div>

          <div className="flex flex-col items-center space-y-4 w-full px-6">
            <a href="/login" onClick={() => setIsOpen(false)} className="w-full text-center px-4 py-3 text-primary bg-secondary hover:bg-primary transition-all duration-200 hover:text-white rounded-sm">
              Sign in
            </a>
            <a href="/feed" onClick={() => setIsOpen(false)} className="w-full text-center px-4 py-3 text-white bg-primary hover:bg-secondary transition-all duration-200 hover:text-primary rounded-sm">
              Get Started
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavbarLanding;
