import React from 'react';
import { CheckCircle, Calendar, Clock, User, X } from 'lucide-react';

interface ConfirmBookingProps {
  booking: any;
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

export const ConfirmBooking = ({ booking, isOpen, onClose, onConfirm }: ConfirmBookingProps) => {
  if (!isOpen || !booking) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-8 animate-in fade-in">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-slate-900">Confirm Your Booking</h2>
          <button onClick={onClose} className="text-slate-400 hover:text-slate-600">
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="space-y-4 mb-8">
          <div className="flex items-center p-4 bg-slate-50 rounded-lg">
            <User className="h-5 w-5 text-amber-500 mr-3" />
            <div>
              <p className="text-sm text-slate-600">Lawyer</p>
              <p className="font-bold text-slate-900">{booking.lawyerName}</p>
            </div>
          </div>

          <div className="flex items-center p-4 bg-slate-50 rounded-lg">
            <Calendar className="h-5 w-5 text-amber-500 mr-3" />
            <div>
              <p className="text-sm text-slate-600">Date</p>
              <p className="font-bold text-slate-900">
                {new Date(booking.date).toLocaleDateString('en-US', {
                  weekday: 'long',
                  month: 'long',
                  day: 'numeric',
                })}
              </p>
            </div>
          </div>

          <div className="flex items-center p-4 bg-slate-50 rounded-lg">
            <Clock className="h-5 w-5 text-amber-500 mr-3" />
            <div>
              <p className="text-sm text-slate-600">Time</p>
              <p className="font-bold text-slate-900">{booking.time}</p>
            </div>
          </div>

          <div className="flex items-center p-4 bg-amber-50 border border-amber-200 rounded-lg">
            <CheckCircle className="h-5 w-5 text-amber-600 mr-3" />
            <div>
              <p className="text-sm text-slate-600">Amount to Pay</p>
              <p className="font-bold text-amber-600">{booking.fee}</p>
            </div>
          </div>
        </div>

        <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <p className="text-sm text-blue-700">
            ℹ️ After confirming, you'll proceed to payment. Your consultation link will be sent after payment is confirmed.
          </p>
        </div>

        <div className="flex gap-3">
          <button
            onClick={onClose}
            className="flex-1 border border-slate-300 text-slate-700 py-3 rounded-lg font-medium hover:bg-slate-50 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="flex-1 bg-amber-500 hover:bg-amber-600 text-white py-3 rounded-lg font-bold transition-colors"
          >
            Proceed to Payment
          </button>
        </div>
      </div>
    </div>
  );
};
