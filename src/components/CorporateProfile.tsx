import React from 'react';
import { Building, Mail, Phone, MapPin, Calendar, Settings, LogOut, Edit2, Users, TrendingUp, Award, BarChart, FileText, CheckCircle, ChevronRight } from 'lucide-react';

interface CorporateProfileProps {
  onSwitchToConsumer: () => void;
}

export const CorporateProfile = ({ onSwitchToConsumer }: CorporateProfileProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 h-40 relative"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="bg-white rounded-2xl shadow-xl -mt-24 p-8 relative z-10 mb-8">
          {/* Profile Header */}
          <div className="flex flex-col md:flex-row gap-8 mb-12">
            {/* Company Logo & Basic Info */}
            <div className="md:w-1/3">
              <div className="flex flex-col items-center md:items-start">
                <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center text-white mb-4 border-4 border-white shadow-lg">
                  <Building className="h-16 w-16" />
                </div>
                <h1 className="text-3xl font-bold text-slate-900">Legal Solutions Ltd</h1>
                <p className="text-blue-600 font-medium">Corporate Account</p>
                <div className="mt-4 space-y-2 w-full">
                  <div className="flex items-center text-slate-600">
                    <Mail className="h-4 w-4 mr-3" />
                    <span className="text-sm">contact@legalsolutions.bd</span>
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
                    <span className="text-sm">Partner since Jan 2023</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="md:w-2/3">
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <Users className="h-6 w-6 text-blue-600 mb-2" />
                  <p className="text-2xl font-bold text-slate-900">45</p>
                  <p className="text-sm text-slate-600">Active Lawyers</p>
                </div>
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <TrendingUp className="h-6 w-6 text-green-600 mb-2" />
                  <p className="text-2xl font-bold text-slate-900">₹2.5K</p>
                  <p className="text-sm text-slate-600">Monthly Revenue</p>
                </div>
                <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                  <Award className="h-6 w-6 text-purple-600 mb-2" />
                  <p className="text-2xl font-bold text-slate-900">189</p>
                  <p className="text-sm text-slate-600">Cases Handled</p>
                </div>
                <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                  <BarChart className="h-6 w-6 text-orange-600 mb-2" />
                  <p className="text-2xl font-bold text-slate-900">4.8/5</p>
                  <p className="text-sm text-slate-600">Average Rating</p>
                </div>
              </div>

              {/* Account Status */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-blue-900 mb-1">Account Status</p>
                    <p className="text-sm text-blue-700">Your corporate account is verified and active</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8 pb-8 border-b border-slate-200">
            <button className="flex items-center justify-center gap-2 p-4 border border-slate-300 rounded-lg text-slate-700 font-medium hover:bg-slate-50 transition-colors">
              <Edit2 className="h-4 w-4" />
              Edit Company Info
            </button>

            <button className="flex items-center justify-center gap-2 p-4 border border-slate-300 rounded-lg text-slate-700 font-medium hover:bg-slate-50 transition-colors">
              <Users className="h-4 w-4" />
              Manage Lawyers
            </button>

            <button className="flex items-center justify-center gap-2 p-4 border border-slate-300 rounded-lg text-slate-700 font-medium hover:bg-slate-50 transition-colors">
              <BarChart className="h-4 w-4" />
              Analytics
            </button>

            <button className="flex items-center justify-center gap-2 p-4 border border-slate-300 rounded-lg text-slate-700 font-medium hover:bg-slate-50 transition-colors">
              <FileText className="h-4 w-4" />
              Billing
            </button>

            <button className="flex items-center justify-center gap-2 p-4 border border-slate-300 rounded-lg text-slate-700 font-medium hover:bg-slate-50 transition-colors">
              <Settings className="h-4 w-4" />
              Settings
            </button>

            <button className="flex items-center justify-center gap-2 p-4 border border-red-300 rounded-lg text-red-700 font-medium hover:bg-red-50 transition-colors">
              <LogOut className="h-4 w-4" />
              Logout
            </button>
          </div>

          {/* Switch Account Button */}
          <button
            onClick={onSwitchToConsumer}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-lg transition-colors flex items-center justify-center gap-2 text-lg"
          >
            <ChevronRight className="h-5 w-5" />
            Switch to Consumer Account
          </button>
        </div>
      </div>
    </div>
  );
};
