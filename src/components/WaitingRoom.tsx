import React, { useState, useEffect } from 'react';
import { Clock, Users, Phone } from 'lucide-react';

interface WaitingRoomProps {
  booking: any;
  isOpen: boolean;
  onStartConsultation: () => void;
}

export const WaitingRoom = ({ booking, isOpen, onStartConsultation }: WaitingRoomProps) => {
  const [waitingTime, setWaitingTime] = useState(0);
  const [lawyerStatus, setLawyerStatus] = useState('Joining...');

  useEffect(() => {
    if (!isOpen) return;

    const timer = setInterval(() => {
      setWaitingTime((prev) => prev + 1);
    }, 1000);

    // Simulate lawyer joining after 3 seconds
    const joinTimer = setTimeout(() => {
      setLawyerStatus('Lawyer has joined the room');
    }, 3000);

    return () => {
      clearInterval(timer);
      clearTimeout(joinTimer);
    };
  }, [isOpen]);

  if (!isOpen || !booking) return null;

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const lawyerReady = lawyerStatus.includes('joined');

  return (
    <div className="fixed inset-0 bg-slate-900 flex items-center justify-center z-50">
      <div className="w-full max-w-2xl p-8 text-center">
        <h2 className="text-3xl font-bold text-white mb-8">Waiting Room</h2>

        <div className="space-y-8">
          {/* Waiting Time */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="bg-white/10 rounded-full p-6">
              <Clock className="h-12 w-12 text-amber-400" />
            </div>
            <div>
              <p className="text-white/70 text-lg">Waiting Time</p>
              <p className="text-4xl font-bold text-amber-400">{formatTime(waitingTime)}</p>
            </div>
          </div>

          {/* Lawyer Status */}
          <div className="bg-white/10 rounded-xl p-6 backdrop-blur">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div
                className={`h-3 w-3 rounded-full ${
                  lawyerReady ? 'bg-green-400 animate-pulse' : 'bg-yellow-400 animate-pulse'
                }`}
              ></div>
              <p className="text-white text-lg">{lawyerStatus}</p>
            </div>
            <p className="text-white/60 text-sm">
              {booking.lawyerName} - {booking.time}
            </p>
          </div>

          {/* Participant Info */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white/10 rounded-lg p-4">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Users className="h-5 w-5 text-blue-400" />
                <p className="text-white/70">You</p>
              </div>
              <p className="text-green-400 text-sm">Connected ✓</p>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Phone className="h-5 w-5 text-purple-400" />
                <p className="text-white/70">Lawyer</p>
              </div>
              <p className={lawyerReady ? 'text-green-400 text-sm' : 'text-yellow-400 text-sm'}>
                {lawyerReady ? 'Ready ✓' : 'Connecting...'}
              </p>
            </div>
          </div>

          {/* Join Button */}
          <button
            onClick={onStartConsultation}
            disabled={!lawyerReady}
            className="w-full bg-amber-500 hover:bg-amber-600 disabled:bg-slate-600 text-white py-4 rounded-lg font-bold text-lg transition-colors"
          >
            {lawyerReady ? 'Join Consultation' : 'Waiting for Lawyer...'}
          </button>

          {/* Info Message */}
          <p className="text-white/60 text-sm">
            Please ensure your camera and microphone are working properly
          </p>
        </div>
      </div>
    </div>
  );
};
