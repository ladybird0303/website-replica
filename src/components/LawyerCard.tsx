import React from 'react';
import { Star, MapPin, Briefcase } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface LawyerProps {
  id: string;
  name: string;
  specialty: string;
  location: string;
  rating: number;
  reviewCount: number;
  imageUrl: string;
  experience: string;
  fee: string;
}

export const LawyerCard = ({ lawyer, onBookAppointment }: { lawyer: LawyerProps; onBookAppointment?: (lawyer: LawyerProps) => void }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow border border-slate-100 flex flex-col">
      <div className="relative h-48 bg-slate-200">
        <ImageWithFallback
          src={lawyer.imageUrl}
          alt={lawyer.name}
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute top-0 right-0 bg-amber-500 text-slate-900 text-xs font-bold px-3 py-1 m-2 rounded-full">
          Verified
        </div>
      </div>
      <div className="p-5 flex-1 flex flex-col">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-lg font-bold text-slate-900">{lawyer.name}</h3>
            <p className="text-amber-600 text-sm font-medium">{lawyer.specialty}</p>
          </div>
          <div className="flex items-center bg-slate-50 px-2 py-1 rounded">
            <Star className="h-4 w-4 text-yellow-400 fill-current" />
            <span className="ml-1 text-sm font-bold text-slate-700">{lawyer.rating}</span>
            <span className="ml-1 text-xs text-slate-400">({lawyer.reviewCount})</span>
          </div>
        </div>

        <div className="mt-4 space-y-2 text-sm text-slate-600 flex-1">
          <div className="flex items-center">
            <MapPin className="h-4 w-4 mr-2 text-slate-400" />
            {lawyer.location}
          </div>
          <div className="flex items-center">
            <Briefcase className="h-4 w-4 mr-2 text-slate-400" />
            {lawyer.experience} Experience
          </div>
          <div className="flex items-center">
             <span className="font-semibold text-slate-900 mr-2">Fee:</span> {lawyer.fee}
          </div>
        </div>

        <div className="mt-6 flex gap-2">
            <button className="flex-1 border border-slate-300 text-slate-700 py-2 px-4 rounded-lg text-sm font-medium hover:bg-slate-50 transition-colors">
                View Profile
            </button>
            <button
              onClick={() => onBookAppointment?.(lawyer)}
              className="flex-1 bg-amber-500 hover:bg-amber-600 text-white font-bold py-2 rounded-lg text-sm transition-colors"
            >
                Book Appointment
            </button>
        </div>
      </div>
    </div>
  );
};
