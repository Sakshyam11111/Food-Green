import React from 'react';
import { Facebook, Twitter, Linkedin, MessageCircle, Instagram, MapPin, Phone, Mail } from 'lucide-react';
import Logo from "../assets/logo.png";

export default function Footer() {
  return (
    <footer className="bg-[#E5FFF5] py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div>
            <div className="flex items-center gap-2 mb-4">
                <img src= {Logo} />
            </div>
            <p className="text-gray-700 text-sm mb-6 leading-relaxed">
              We bring you pure, safe, and sustainable products straight to your home. From fresh organics to travel solutions, we are your trusted partner in living better every day.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 bg-[#AAFBDA] rounded-full flex items-center justify-center transition-colors">
                <Facebook className="w-5 h-5 text-[#05643D]" />
              </a>
              <a href="#" className="w-10 h-10 bg-[#AAFBDA] rounded-full flex items-center justify-center transition-colors">
                <Twitter className="w-5 h-5 text-[#05643D]" />
              </a>
              <a href="#" className="w-10 h-10 bg-[#AAFBDA] rounded-full flex items-center justify-center transition-colors">
                <Linkedin className="w-5 h-5 text-[#05643D]"/>
              </a>
              <a href="#" className="w-10 h-10 bg-[#AAFBDA] rounded-full flex items-center justify-center transition-colors">
                <MessageCircle className="w-5 h-5 text-[#05643D]" />
              </a>
              <a href="#" className="w-10 h-10 bg-[#AAFBDA] rounded-full flex items-center justify-center transition-colors">
                <Instagram className="w-5 h-5 text-[#05643D]" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'Shop', 'About Us', 'Blog', 'Contact Us'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-700 hover:text-teal-600 text-sm transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Support */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-4">Customer Support</h3>
            <ul className="space-y-2">
              {['Order Tracking', 'Privacy Policy', 'Terms & Conditions', 'Returns & Refunds'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-700 hover:text-teal-600 text-sm transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="w-5 h-5 text-[#05643D] mt-0.5 flex-shrink-0" />
                <span className="text-gray-700 text-sm">Kirtipur, Kathmandu, Nepal</span>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-5 h-5 text-[#05643D] mt-0.5 flex-shrink-0" />
                <span className="text-gray-700 text-sm">+977-984-565-8765</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-5 h-5 text-[#05643D] mt-0.5 flex-shrink-0" />
                <span className="text-gray-700 text-sm">info@organicmart.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-teal-200 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-md">
            © 2025 Organic Mart. All rights reserved.
          </p>
          <div className="flex gap-2">
            <div className="w-12 h-8 bg-white rounded border border-gray-200 flex items-center justify-center">
              <span className="text-blue-600 font-bold text-xs">VISA</span>
            </div>
            <div className="w-12 h-8 bg-white rounded border border-gray-200 flex items-center justify-center">
              <div className="flex gap-0.5">
                <div className="w-2 h-2 rounded-full bg-red-500"></div>
                <div className="w-2 h-2 rounded-full bg-orange-500"></div>
              </div>
            </div>
            <div className="w-12 h-8 bg-white rounded border border-gray-200 flex items-center justify-center">
              <span className="text-blue-700 font-bold text-xs">PayPal</span>
            </div>
            <div className="w-12 h-8 bg-white rounded border border-gray-200 flex items-center justify-center">
              <span className="text-blue-600 font-bold text-xs">AMEX</span>
            </div>
            <div className="w-12 h-8 bg-white rounded border border-gray-200 flex items-center justify-center">
              <span className="text-blue-700 font-bold text-xs">VISA</span>
            </div>
            <div className="w-12 h-8 bg-white rounded border border-gray-200 flex items-center justify-center">
              <div className="flex gap-0.5">
                <div className="w-2 h-2 rounded-full bg-red-600"></div>
                <div className="w-2 h-2 rounded-full bg-blue-600"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}