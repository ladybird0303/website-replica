import React, { useState } from 'react';
import { Menu, X, User, Search, MapPin, Phone, Mail, ChevronRight } from 'lucide-react';
import logoImage from '../image.png';

export const Navbar = ({ onNavigate, onProfileClick }: { onNavigate: (page: string) => void, onProfileClick?: () => void }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-slate-900 text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center cursor-pointer" onClick={() => onNavigate('home')}>
            <img src={logoImage} alt="Logo" className="h-8 w-8" />
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <button onClick={() => onNavigate('home')} className="hover:text-amber-500 px-3 py-2 rounded-md text-sm font-medium transition-colors">Home</button>
              <button onClick={() => onNavigate('find-lawyer')} className="hover:text-amber-500 px-3 py-2 rounded-md text-sm font-medium transition-colors">Find a Lawyer</button>
              <button onClick={() => onNavigate('templates')} className="hover:text-amber-500 px-3 py-2 rounded-md text-sm font-medium transition-colors">Templates</button>
              <button onClick={() => onNavigate('services')} className="hover:text-amber-500 px-3 py-2 rounded-md text-sm font-medium transition-colors">Services</button>
              <button onClick={() => onNavigate('about')} className="hover:text-amber-500 px-3 py-2 rounded-md text-sm font-medium transition-colors">About Us</button>
              <button onClick={onProfileClick} className="bg-amber-500 hover:bg-amber-600 text-slate-900 px-4 py-2 rounded-md text-sm font-bold transition-colors flex items-center gap-2"><User className="h-4 w-4" /> Profile</button>
            </div>
          </div>
          
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
            >
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-slate-800">
            <button onClick={() => { onNavigate('home'); setIsOpen(false); }} className="block w-full text-left hover:text-amber-500 px-3 py-2 rounded-md text-base font-medium">Home</button>
            <button onClick={() => { onNavigate('find-lawyer'); setIsOpen(false); }} className="block w-full text-left hover:text-amber-500 px-3 py-2 rounded-md text-base font-medium">Find a Lawyer</button>
            <button onClick={() => { onNavigate('templates'); setIsOpen(false); }} className="block w-full text-left hover:text-amber-500 px-3 py-2 rounded-md text-base font-medium">Templates</button>
            <button onClick={() => { onNavigate('services'); setIsOpen(false); }} className="block w-full text-left hover:text-amber-500 px-3 py-2 rounded-md text-base font-medium">Services</button>
            <button onClick={() => { onNavigate('about'); setIsOpen(false); }} className="block w-full text-left hover:text-amber-500 px-3 py-2 rounded-md text-base font-medium">About Us</button>
              <button onClick={() => { if(onProfileClick) onProfileClick(); setIsOpen(false); }} className="w-full text-left bg-amber-500 text-slate-900 px-3 py-2 rounded-md text-base font-bold mt-4 flex items-center gap-2"><User className="h-4 w-4" /> Profile</button>
          </div>
        </div>
      )}
    </nav>
  );
};
