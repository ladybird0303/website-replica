import React from 'react';
import { Search, MapPin } from 'lucide-react';

export const Hero = ({ onSearch }) => {
  return (
    <div className="relative bg-slate-900 overflow-hidden">
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover opacity-30"
          src="https://images.unsplash.com/photo-1714150458873-715e134901a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBsYXclMjBmaXJtJTIwb2ZmaWNlfGVufDF8fHx8MTc3MDE0NjM1OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Law Office"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent"></div>
      </div>

      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8 flex flex-col justify-center min-h-[600px]">
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl mb-6">
          Find the Right <span className="text-amber-500">Legal Help</span><br />
          For Your Needs
        </h1>
        <p className="mt-4 text-xl text-gray-300 max-w-3xl mb-10">
          Ukil Chai connects you with verified legal professionals across the country. 
          Expert advice is just a click away.
        </p>

        <div className="bg-white p-4 rounded-lg shadow-xl max-w-4xl flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-amber-500 focus:border-amber-500 sm:text-sm"
              placeholder="Search by name, expertise (e.g. Divorce, Criminal)..."
            />
          </div>
          <button 
            onClick={() => onSearch()}
            className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold py-3 px-8 rounded-md transition-colors"
          >
            Find Lawyer
          </button>
        </div>
        
        <div className="mt-8 flex gap-4 text-sm text-gray-400">
          <span>Popular:</span>
          <span className="text-amber-400 hover:underline cursor-pointer">Divorce</span>
          <span className="text-amber-400 hover:underline cursor-pointer">Property</span>
          <span className="text-amber-400 hover:underline cursor-pointer">Criminal Defense</span>
          <span className="text-amber-400 hover:underline cursor-pointer">Corporate</span>
        </div>
      </div>
    </div>
  );
};
