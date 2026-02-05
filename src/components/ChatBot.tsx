import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot } from 'lucide-react';

const QA_PAIRS = [
  {
    question: "How do I find a lawyer?",
    answer: "You can find a lawyer by using the search bar on our homepage. You can search by name, specialization (e.g., divorce, criminal), or location. Browse through the profiles to find the best match for your needs."
  },
  {
    question: "Is this service free?",
    answer: "Searching for lawyers and viewing their profiles is completely free for clients. You only pay the consultation fees directly to the lawyer as per their stated charges."
  },
  {
    question: "How do I book an appointment?",
    answer: "Once you find a lawyer you like, click on their profile and select the 'Book Appointment' button. You can choose an available time slot and confirm your booking."
  },
  {
    question: "Are the lawyers verified?",
    answer: "Yes, all lawyers on Ukil Chai go through a verification process where we check their Bar Council enrollment and credentials to ensure you get professional legal help."
  }
];

interface Message {
  id: number;
  text: string;
  sender: 'bot' | 'user';
}

export const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, text: "Hi there! I'm your Ukil Chai assistant. How can I help you today?", sender: 'bot' }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleQuestionClick = (qa: typeof QA_PAIRS[0]) => {
    // Add user question
    const userMsgId = Date.now();
    setMessages(prev => [...prev, { id: userMsgId, text: qa.question, sender: 'user' }]);
    
    // Simulate bot thinking
    setIsTyping(true);
    
    setTimeout(() => {
      setIsTyping(false);
      setMessages(prev => [...prev, { id: Date.now(), text: qa.answer, sender: 'bot' }]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end font-sans">
      {/* Chat Window */}
      {isOpen && (
        <div className="bg-white rounded-2xl shadow-2xl w-80 sm:w-96 mb-4 overflow-hidden border border-slate-200 flex flex-col animate-in slide-in-from-bottom-10 fade-in duration-300 h-[500px]">
          {/* Header */}
          <div className="bg-slate-900 p-4 flex justify-between items-center text-white">
            <div className="flex items-center">
              <div className="bg-amber-500 p-1.5 rounded-full mr-3">
                <Bot className="h-5 w-5 text-slate-900" />
              </div>
              <div>
                <h3 className="font-bold text-sm">Ukil Chai Assistant</h3>
                <p className="text-xs text-slate-400 flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-1"></span>
                  Online
                </p>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-slate-400 hover:text-white transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 bg-slate-50 space-y-4">
            {messages.map((msg) => (
              <div 
                key={msg.id} 
                className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div 
                  className={`max-w-[80%] rounded-2xl p-3 text-sm ${
                    msg.sender === 'user' 
                      ? 'bg-amber-500 text-slate-900 rounded-tr-none font-medium' 
                      : 'bg-white text-slate-700 shadow-sm border border-slate-100 rounded-tl-none'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white p-3 rounded-2xl rounded-tl-none shadow-sm border border-slate-100 flex space-x-1">
                  <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                  <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                  <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Questions */}
          <div className="p-4 bg-white border-t border-slate-100">
             <p className="text-xs text-slate-400 mb-2 font-medium">Common Questions:</p>
             <div className="flex flex-wrap gap-2">
               {QA_PAIRS.map((qa, idx) => (
                 <button
                   key={idx}
                   onClick={() => handleQuestionClick(qa)}
                   disabled={isTyping}
                   className="text-xs bg-slate-100 hover:bg-slate-200 text-slate-700 py-2 px-3 rounded-full transition-colors border border-slate-200 text-left disabled:opacity-50 disabled:cursor-not-allowed"
                 >
                   {qa.question}
                 </button>
               ))}
             </div>
          </div>
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`p-4 rounded-full shadow-lg transition-all transform hover:scale-105 ${
          isOpen ? 'bg-amber-500 text-slate-900 rotate-90' : 'bg-slate-900 text-white'
        }`}
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageSquare className="h-6 w-6" />}
      </button>
    </div>
  );
};
