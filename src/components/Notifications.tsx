import React from 'react';
import { Bell, Info, AlertCircle } from 'lucide-react';

const NOTIFICATIONS = [
  {
    id: 1,
    type: 'info',
    message: 'New lawyers have joined from Sylhet region.',
    time: '2 hours ago'
  },
  {
    id: 2,
    type: 'alert',
    message: 'Court holidays announced for next week.',
    time: '1 day ago'
  },
  {
    id: 3,
    type: 'success',
    message: 'Successfully resolved 50+ cases this month!',
    time: '2 days ago'
  }
];

export const Notifications = () => {
  return (
    <section className="py-8 bg-slate-50 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center mb-6">
          <Bell className="h-5 w-5 mr-2 text-amber-500" />
          <h2 className="text-xl font-bold text-slate-900">Latest Updates</h2>
        </div>
        
        <div className="space-y-4">
          {NOTIFICATIONS.map((notif) => (
            <div key={notif.id} className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-amber-500 flex items-start">
              <div className="mr-3 mt-0.5">
                {notif.type === 'alert' ? <AlertCircle className="h-5 w-5 text-red-500" /> : <Info className="h-5 w-5 text-blue-500" />}
              </div>
              <div>
                <p className="text-slate-800 font-medium">{notif.message}</p>
                <p className="text-xs text-slate-500 mt-1">{notif.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
