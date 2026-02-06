import Link from 'next/link';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 text-gray-900">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">ब</span>
              </div>
              <h3 className="text-xl font-bold">Banke Bihari Creations</h3>
            </div>
            <p className="text-gray-600 mb-6 max-w-md leading-relaxed">
              Your trusted destination for divine idols, spiritual essentials, and traditional pooja items. 
              Bringing sacred traditions to your home with authentic craftsmanship.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-purple-600" />
                <div>
                  <p className="font-medium">Business Hours</p>
                  <p className="text-sm text-gray-600">Mon-Sat: 9:00 AM - 8:00 PM</p>
                  <p className="text-sm text-gray-600">Sunday: 10:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-6 text-lg">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-600 hover:text-purple-600 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-gray-600 hover:text-purple-600 transition-colors">
                  All Products
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-600 hover:text-purple-600 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-purple-600 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-6 text-lg">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-purple-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium">Phone</p>
                  <p className="text-sm text-gray-600">+91 98765 43210</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-purple-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-sm text-gray-600">info@bankebiharicreations.com</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-purple-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium">Address</p>
                  <p className="text-sm text-gray-600">
                    Shop No. 123, Main Market<br />
                    Vrindavan, Mathura<br />
                    Uttar Pradesh - 281121
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 text-sm">
              © 2024 Banke Bihari Creations. All rights reserved.
            </p>
            <p className="text-gray-600 text-sm mt-2 md:mt-0">
              Bringing divinity to your home 🕉️
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
