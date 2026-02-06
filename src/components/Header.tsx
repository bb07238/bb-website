'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Phone, Mail } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Products', href: '/products' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' }
  ];

  return (
    <header className="bg-gradient-to-r from-blue-600 to-amber-500 text-white sticky top-0 z-50 shadow-xl">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-xl">ब</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-white">Banke Bihari Creations</h1>
              <p className="text-sm text-amber-100">Divine Items & Spiritual Essentials</p>
            </div>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex space-x-6">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-white/90 hover:text-white font-medium transition-colors duration-200"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
            <div className="flex items-center space-x-4 text-sm">
              <div className="flex items-center space-x-1 text-amber-100">
                <Phone className="w-4 h-4" />
                <span className="hidden lg:inline">+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-1 text-amber-100">
                <Mail className="w-4 h-4" />
                <span className="hidden lg:inline">info@bankebihari.com</span>
              </div>
            </div>
          </div>

          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/20">
            <nav className="flex flex-col space-y-3">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-white/90 hover:text-white font-medium transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-3 border-t border-white/20 space-y-2">
                <div className="flex items-center space-x-2 text-sm text-amber-100">
                  <Phone className="w-4 h-4" />
                  <span>+91 98765 43210</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-amber-100">
                  <Mail className="w-4 h-4" />
                  <span>info@bankebihari.com</span>
                </div>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
