import React, { useState, useEffect } from 'react';
import { Mic, MicOff, Video, VideoOff, Phone, PhoneOff, MessageSquare } from 'lucide-react';

interface VideoConsultationProps {
  booking: any;
  isOpen: boolean;
  onEndCall: () => void;
}

export const VideoConsultation = ({ booking, isOpen, onEndCall }: VideoConsultationProps) => {
  const [callDuration, setCallDuration] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [isVideoOn, setIsVideoOn] = useState(true);
  const [messages, setMessages] = useState([
    { sender: 'lawyer', text: 'Hello! How can I help you today?' },
    { sender: 'you', text: 'I have a question about family law' },
    { sender: 'lawyer', text: 'Sure, I can help with that. Please tell me more details.' },
  ]);
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    if (!isOpen) return;

    const timer = setInterval(() => {
      setCallDuration((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [isOpen]);

  if (!isOpen || !booking) return null;

  const formatDuration = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      setMessages([...messages, { sender: 'you', text: newMessage }]);
      setNewMessage('');
    }
  };

  return (
    <div className="fixed inset-0 bg-slate-900 z-50 flex flex-col">
      {/* Header */}
      <div className="bg-slate-800 border-b border-slate-700 p-4 flex justify-between items-center">
        <div>
          <h2 className="text-white font-bold">{booking.lawyerName}</h2>
          <p className="text-white/60 text-sm">{booking.specialty}</p>
        </div>
        <div className="text-white font-mono text-lg">{formatDuration(callDuration)}</div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex overflow-hidden">
        {/* Video Area */}
        <div className="flex-1 bg-slate-900 relative flex items-center justify-center">
          <div className="grid grid-cols-2 gap-4 w-full h-full p-4">
            {/* Your Video */}
            <div className="bg-slate-800 rounded-lg overflow-hidden relative">
              <div className="w-full h-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                {isVideoOn ? (
                  <Video className="h-12 w-12 text-white/50" />
                ) : (
                  <VideoOff className="h-12 w-12 text-white/50" />
                )}
              </div>
              <div className="absolute bottom-4 left-4 bg-black/50 text-white px-3 py-1 rounded text-sm">
                You
              </div>
            </div>

            {/* Lawyer Video */}
            <div className="bg-slate-800 rounded-lg overflow-hidden relative">
              <div className="w-full h-full bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center">
                <Video className="h-12 w-12 text-white/50" />
              </div>
              <div className="absolute bottom-4 left-4 bg-black/50 text-white px-3 py-1 rounded text-sm">
                {booking.lawyerName}
              </div>
            </div>
          </div>
        </div>

        {/* Chat Area */}
        <div className="w-80 bg-slate-800 border-l border-slate-700 flex flex-col">
          <div className="border-b border-slate-700 p-4">
            <h3 className="text-white font-bold">Chat</h3>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.sender === 'you' ? 'justify-end' : 'justify-start'}`}>
                <div
                  className={`max-w-xs px-4 py-2 rounded-lg ${
                    msg.sender === 'you'
                      ? 'bg-amber-500 text-white'
                      : 'bg-slate-700 text-white/90'
                  }`}
                >
                  <p className="text-sm">{msg.text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Message Input */}
          <div className="border-t border-slate-700 p-4 space-y-2">
            <div className="flex gap-2">
              <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Type a message..."
                className="flex-1 bg-slate-700 text-white px-3 py-2 rounded text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
              <button
                onClick={handleSendMessage}
                className="bg-amber-500 hover:bg-amber-600 text-white px-3 py-2 rounded"
              >
                <MessageSquare className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="bg-slate-800 border-t border-slate-700 p-4 flex justify-center gap-4">
        <button
          onClick={() => setIsMuted(!isMuted)}
          className={`p-3 rounded-full ${
            isMuted ? 'bg-red-500 hover:bg-red-600' : 'bg-slate-700 hover:bg-slate-600'
          } text-white transition-colors`}
        >
          {isMuted ? <MicOff className="h-6 w-6" /> : <Mic className="h-6 w-6" />}
        </button>

        <button
          onClick={() => setIsVideoOn(!isVideoOn)}
          className={`p-3 rounded-full ${
            !isVideoOn ? 'bg-red-500 hover:bg-red-600' : 'bg-slate-700 hover:bg-slate-600'
          } text-white transition-colors`}
        >
          {isVideoOn ? <Video className="h-6 w-6" /> : <VideoOff className="h-6 w-6" />}
        </button>

        <button
          onClick={onEndCall}
          className="p-3 rounded-full bg-red-500 hover:bg-red-600 text-white transition-colors"
        >
          <PhoneOff className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
};
