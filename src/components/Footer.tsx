import React from 'react';
import { Gavel, Phone, Mail, Facebook, Twitter, Instagram, Linkedin, MapPin } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center mb-6">
              <Gavel className="h-8 w-8 text-amber-500" />
              <span className="ml-2 text-xl font-bold tracking-wider">UKIL<span className="text-amber-500">CHAI</span></span>
            </div>
            <p className="text-gray-400 mb-6">
              Bangladesh's most trusted online platform for finding and hiring expert lawyers. 
              Making legal services accessible to everyone.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors"><Facebook className="h-5 w-5" /></a>
              <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors"><Twitter className="h-5 w-5" /></a>
              <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors"><Instagram className="h-5 w-5" /></a>
              <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors"><Linkedin className="h-5 w-5" /></a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 border-b border-gray-700 pb-2 inline-block">Quick Links</h3>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#" className="hover:text-amber-500 transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Find a Lawyer</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Submit a Case</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Legal Blog</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 border-b border-gray-700 pb-2 inline-block">Practice Areas</h3>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#" className="hover:text-amber-500 transition-colors">Criminal Defense</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Family Law</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Property Disputes</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Corporate Law</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Immigration</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 border-b border-gray-700 pb-2 inline-block">Contact Us</h3>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 text-amber-500 flex-shrink-0 mt-0.5" />
                <span>Level 4, Khan Plaza, Dhanmondi 27, Dhaka-1209, Bangladesh</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-amber-500 flex-shrink-0" />
                <span>+880 1712 345 678</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-amber-500 flex-shrink-0" />
                <span>support@ukilchai.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} UkilChai. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
