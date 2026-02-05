import React from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const PEOPLE = [
  {
    id: 1,
    name: 'Rahim Uddin',
    location: 'Dhaka',
    story: 'Found the best property lawyer in 2 days.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 2,
    name: 'Salma Begum',
    location: 'Chittagong',
    story: 'Resolved my family dispute smoothly.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 3,
    name: 'Karim Hasan',
    location: 'Sylhet',
    story: 'Great platform for corporate legal advice.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 4,
    name: 'Nusrat Jahan',
    location: 'Khulna',
    story: 'Very professional and quick response.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
  }
];

export const PeopleHelped = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-slate-900">People We Have Helped</h2>
          <p className="mt-4 text-lg text-slate-600">Real stories from our satisfied clients</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {PEOPLE.map((person) => (
            <div key={person.id} className="text-center group">
              <div className="relative inline-block mb-4">
                <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-slate-100 group-hover:border-amber-500 transition-colors mx-auto">
                   <ImageWithFallback
                     src={person.image}
                     alt={person.name}
                     className="w-full h-full object-cover"
                   />
                </div>
                <div className="absolute bottom-0 right-0 bg-amber-500 w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold border-2 border-white">
                  "
                </div>
              </div>
              <h3 className="text-lg font-bold text-slate-900">{person.name}</h3>
              <p className="text-sm text-slate-400 mb-2">{person.location}</p>
              <p className="text-slate-600 italic">"{person.story}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
