import React from 'react';
import { Gavel, Clock, MapPin, CheckCircle } from 'lucide-react';

const MOCK_CASES = [
  {
    id: 1,
    title: 'Property Dispute in Dhaka',
    location: 'Dhaka, Gulshan',
    status: 'In Progress',
    lawyer: 'Adv. Sarah Ahmed',
    date: '2 Days ago'
  },
  {
    id: 2,
    title: 'Corporate Merger Consultation',
    location: 'Chittagong, Agrabad',
    status: 'New',
    lawyer: 'Looking for Lawyer',
    date: '5 Hours ago'
  },
  {
    id: 3,
    title: 'Divorce Settlement',
    location: 'Sylhet, Sadar',
    status: 'Resolved',
    lawyer: 'Adv. Rafiqul Islam',
    date: '1 Week ago'
  },
  {
    id: 4,
    title: 'Criminal Defense Consultation',
    location: 'Dhaka, Mirpur',
    status: 'In Progress',
    lawyer: 'Adv. Rahman Karim',
    date: '1 Day ago'
  }
];

export const ActiveCases = () => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-slate-900 flex items-center">
            <Gavel className="h-6 w-6 mr-2 text-amber-500" />
            Active Cases
          </h2>
          <button className="text-amber-600 font-bold hover:text-amber-700 text-sm">
            View All Cases &rarr;
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {MOCK_CASES.map((item) => (
            <div key={item.id} className="bg-slate-50 rounded-xl p-5 border border-slate-200 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-3">
                <span className={`text-xs font-bold px-2 py-1 rounded-full ${
                  item.status === 'Resolved' ? 'bg-green-100 text-green-700' : 
                  item.status === 'New' ? 'bg-blue-100 text-blue-700' : 
                  'bg-amber-100 text-amber-700'
                }`}>
                  {item.status}
                </span>
                <span className="text-slate-400 text-xs flex items-center">
                  <Clock className="h-3 w-3 mr-1" />
                  {item.date}
                </span>
              </div>
              <h3 className="font-bold text-slate-900 mb-2 line-clamp-1">{item.title}</h3>
              <div className="text-sm text-slate-500 space-y-2">
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-2 text-slate-400" />
                  {item.location}
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 mr-2 text-slate-400" />
                  {item.lawyer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
