import React from 'react';
import { User, Mail, Phone, MapPin, Calendar, Settings, LogOut, Edit2, Heart, Download, MessageSquare, Clock, Award, ChevronRight } from 'lucide-react';

interface UserProfileProps {
  onSwitchToCorporate: () => void;
}

export const UserProfile = ({ onSwitchToCorporate }: UserProfileProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <div className="bg-gradient-to-r from-amber-500 to-amber-600 h-40 relative"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="bg-white rounded-2xl shadow-xl -mt-24 p-8 relative z-10 mb-8">
          {/* Profile Header */}
          <div className="flex flex-col md:flex-row gap-8 mb-12">
            {/* Avatar & Basic Info */}
            <div className="md:w-1/3">
              <div className="flex flex-col items-center md:items-start">
                <div className="w-32 h-32 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white mb-4 border-4 border-white shadow-lg">
                  <User className="h-16 w-16" />
                </div>
                <h1 className="text-3xl font-bold text-slate-900">Rafiq Ahmed</h1>
                <p className="text-amber-600 font-medium">Consumer Account</p>
                <div className="mt-4 space-y-2 w-full">
                  <div className="flex items-center text-slate-600">
                    <Mail className="h-4 w-4 mr-3" />
                    <span className="text-sm">rafiq@example.com</span>
                  </div>
                  <div className="flex items-center text-slate-600">
                    <Phone className="h-4 w-4 mr-3" />
                    <span className="text-sm">+880 1234 567890</span>
                  </div>
                  <div className="flex items-center text-slate-600">
                    <MapPin className="h-4 w-4 mr-3" />
                    <span className="text-sm">Dhaka, Bangladesh</span>
                  </div>
                  <div className="flex items-center text-slate-600">
                    <Calendar className="h-4 w-4 mr-3" />
                    <span className="text-sm">Member since Jan 2024</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="md:w-2/3">
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <Award className="h-6 w-6 text-blue-600 mb-2" />
                  <p className="text-2xl font-bold text-slate-900">12</p>
                  <p className="text-sm text-slate-600">Consultations</p>
                </div>
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <MessageSquare className="h-6 w-6 text-green-600 mb-2" />
                  <p className="text-2xl font-bold text-slate-900">8</p>
                  <p className="text-sm text-slate-600">Cases</p>
                </div>
                <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                  <Heart className="h-6 w-6 text-purple-600 mb-2" />
                  <p className="text-2xl font-bold text-slate-900">24</p>
                  <p className="text-sm text-slate-600">Saved Lawyers</p>
                </div>
                <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                  <Clock className="h-6 w-6 text-orange-600 mb-2" />
                  <p className="text-2xl font-bold text-slate-900">15</p>
                  <p className="text-sm text-slate-600">Hours Spent</p>
                </div>
              </div>

              {/* Account Status */}
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-6">
                <p className="text-sm font-medium text-amber-900 mb-2">Account Status</p>
                <p className="text-sm text-amber-700">Your account is active and in good standing</p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8 pb-8 border-b border-slate-200">
            <button className="flex items-center justify-center gap-2 p-4 border border-slate-300 rounded-lg text-slate-700 font-medium hover:bg-slate-50 transition-colors">
              <Edit2 className="h-4 w-4" />
              Edit Profile
            </button>

            <button className="flex items-center justify-center gap-2 p-4 border border-slate-300 rounded-lg text-slate-700 font-medium hover:bg-slate-50 transition-colors">
              <Download className="h-4 w-4" />
              Download History
            </button>

            <button className="flex items-center justify-center gap-2 p-4 border border-slate-300 rounded-lg text-slate-700 font-medium hover:bg-slate-50 transition-colors">
              <Settings className="h-4 w-4" />
              Settings
            </button>

            <button className="flex items-center justify-center gap-2 p-4 border border-slate-300 rounded-lg text-slate-700 font-medium hover:bg-slate-50 transition-colors">
              <Heart className="h-4 w-4" />
              Saved Lawyers
            </button>

            <button className="flex items-center justify-center gap-2 p-4 border border-slate-300 rounded-lg text-slate-700 font-medium hover:bg-slate-50 transition-colors">
              <MessageSquare className="h-4 w-4" />
              Messages
            </button>

            <button className="flex items-center justify-center gap-2 p-4 border border-red-300 rounded-lg text-red-700 font-medium hover:bg-red-50 transition-colors">
              <LogOut className="h-4 w-4" />
              Logout
            </button>
          </div>

          {/* Switch Account Button */}
          <button
            onClick={onSwitchToCorporate}
            className="w-full bg-amber-500 hover:bg-amber-600 text-white font-bold py-4 rounded-lg transition-colors flex items-center justify-center gap-2 text-lg"
          >
            <ChevronRight className="h-5 w-5" />
            Switch to Corporate Account
          </button>
        </div>
      </div>
    </div>
  );
};
