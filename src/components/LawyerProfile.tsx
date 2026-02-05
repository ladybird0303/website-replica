import React from 'react';
import { Star, MapPin, Briefcase, Clock, GraduationCap, Award, Calendar, ArrowLeft, User } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface LawyerProfileProps {
  lawyer: any;
  onBack: () => void;
  onBookAppointment?: (lawyer: any) => void;
}

export const LawyerProfile = ({ lawyer, onBack, onBookAppointment }: LawyerProfileProps) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-in fade-in slide-in-from-bottom-4 duration-300">
      <button 
        onClick={onBack}
        className="flex items-center text-slate-500 hover:text-slate-900 mb-6 font-medium transition-colors"
      >
        <ArrowLeft className="h-4 w-4 mr-2" />
        Back to Search
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column - Info Card */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden sticky top-24">
            <div className="relative h-64 bg-slate-100">
               <ImageWithFallback
                 src={lawyer.imageUrl}
                 alt={lawyer.name}
                 className="w-full h-full object-cover object-top"
               />
               <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                 <div className="flex items-center text-white">
                   <div className="bg-amber-500 p-1 rounded-full mr-2">
                     <Star className="h-4 w-4 fill-white text-white" />
                   </div>
                   <span className="font-bold text-lg">{lawyer.rating}</span>
                   <span className="mx-2">•</span>
                   <span className="text-sm opacity-90">{lawyer.reviewCount} Reviews</span>
                 </div>
               </div>
            </div>
            
            <div className="p-6">
              <h1 className="text-2xl font-bold text-slate-900 mb-1">{lawyer.name}</h1>
              <p className="text-amber-600 font-medium mb-4">{lawyer.specialty}</p>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-center text-slate-600">
                  <MapPin className="h-5 w-5 mr-3 text-slate-400" />
                  {lawyer.location}
                </div>
                <div className="flex items-center text-slate-600">
                  <Briefcase className="h-5 w-5 mr-3 text-slate-400" />
                  {lawyer.experience} Experience
                </div>
                <div className="flex items-center text-slate-600">
                  <Clock className="h-5 w-5 mr-3 text-slate-400" />
                  Available: Mon - Fri
                </div>
              </div>

              <div className="border-t border-slate-100 pt-6">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-slate-500">Consultation Fee</span>
                  <span className="text-xl font-bold text-slate-900">{lawyer.fee}</span>
                </div>
                <button 
                  onClick={() => onBookAppointment?.(lawyer)}
                  className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-3 rounded-lg transition-colors flex items-center justify-center mb-3"
                >
                  <Calendar className="h-5 w-5 mr-2" />
                  Book Appointment
                </button>
                <button className="w-full border border-slate-200 rounded-lg hover:bg-slate-50 text-slate-700 font-medium py-2">
                  View Profile
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Details */}
        <div className="lg:col-span-2 space-y-8">
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200">
            <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center">
              <User className="h-5 w-5 mr-2 text-amber-500" />
              About Me
            </h2>
            <p className="text-slate-600 leading-relaxed">
              I am a dedicated legal professional with over {lawyer.experience} of experience in {lawyer.specialty}. 
              My approach is client-centered, ensuring that you understand your legal options at every step. 
              I have successfully handled hundreds of cases in {lawyer.location.split(',')[0]} courts and am committed to achieving the best possible outcome for my clients.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200">
            <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center">
              <GraduationCap className="h-5 w-5 mr-2 text-amber-500" />
              Education & Credentials
            </h2>
            <div className="space-y-6">
              <div className="flex">
                <div className="flex-shrink-0 mt-1">
                  <div className="h-3 w-3 rounded-full bg-slate-300"></div>
                </div>
                <div className="ml-4">
                  <h3 className="font-bold text-slate-900">LL.M in International Law</h3>
                  <p className="text-slate-500">University of Dhaka, 2012</p>
                </div>
              </div>
              <div className="flex">
                <div className="flex-shrink-0 mt-1">
                  <div className="h-3 w-3 rounded-full bg-slate-300"></div>
                </div>
                <div className="ml-4">
                  <h3 className="font-bold text-slate-900">LL.B (Honors)</h3>
                  <p className="text-slate-500">University of Dhaka, 2011</p>
                </div>
              </div>
              <div className="flex">
                <div className="flex-shrink-0 mt-1">
                  <div className="h-3 w-3 rounded-full bg-slate-300"></div>
                </div>
                <div className="ml-4">
                  <h3 className="font-bold text-slate-900">Bar Council Enrollment</h3>
                  <p className="text-slate-500">Bangladesh Bar Council, 2013</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200">
            <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center">
              <Award className="h-5 w-5 mr-2 text-amber-500" />
              Practice Areas
            </h2>
            <div className="flex flex-wrap gap-2">
              {[lawyer.specialty, 'Civil Litigation', 'Legal Advice', 'Documentation', 'Arbitration'].map((area, idx) => (
                <span key={idx} className="bg-slate-100 text-slate-700 px-4 py-2 rounded-full text-sm font-medium">
                  {area}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
