import React, { useState, useRef, useEffect } from 'react';
import { generateTravelAdvice } from '../services/geminiService';
import { ChatMessage } from '../types';

export const AIChat: React.FC = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: 'model',
      text: 'Hello! I am your Reliance Travels smart assistant. Ask me about holiday packages, Bahrain visa rules, or corporate setup services!',
      timestamp: new Date()
    }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMsg: ChatMessage = { role: 'user', text: input, timestamp: new Date() };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    const responseText = await generateTravelAdvice(input);
    
    const aiMsg: ChatMessage = { role: 'model', text: responseText, timestamp: new Date() };
    setMessages(prev => [...prev, aiMsg]);
    setIsLoading(false);
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-12">
      <div className="bg-white dark:bg-navy-light rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden flex flex-col h-[600px]">
        {/* Header */}
        <div className="bg-primary p-6 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="size-12 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-sm">
              <span className="material-symbols-outlined text-white text-2xl">smart_toy</span>
            </div>
            <div>
              <h2 className="text-white font-bold text-xl">Reliance Smart Assistant</h2>
              <p className="text-blue-100 text-xs">Powered by Gemini AI</p>
            </div>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-gray-50 dark:bg-navy">
          {messages.map((msg, idx) => (
            <div 
              key={idx} 
              className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} animate-message-appear`}
            >
              <div 
                className={`max-w-[80%] p-4 rounded-2xl shadow-sm ${
                  msg.role === 'user' 
                    ? 'bg-primary text-white rounded-br-none' 
                    : 'bg-white dark:bg-navy-lighter text-gray-800 dark:text-gray-100 rounded-bl-none border border-gray-100 dark:border-gray-700'
                }`}
              >
                <div className="whitespace-pre-wrap text-sm leading-relaxed">{msg.text}</div>
                <div className={`text-[10px] mt-2 opacity-70 ${msg.role === 'user' ? 'text-blue-100' : 'text-gray-400'}`}>
                  {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </div>
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start animate-message-appear">
              <div className="bg-white dark:bg-navy-lighter p-4 rounded-2xl rounded-bl-none shadow-sm flex gap-2 items-center border border-gray-100 dark:border-gray-700">
                <span className="w-2 h-2 bg-primary rounded-full animate-bounce"></span>
                <span className="w-2 h-2 bg-primary rounded-full animate-bounce delay-75"></span>
                <span className="w-2 h-2 bg-primary rounded-full animate-bounce delay-150"></span>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="p-4 bg-white dark:bg-navy-light border-t border-gray-200 dark:border-gray-700">
          <form onSubmit={handleSend} className="relative flex gap-4">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about visas, packages, or CR formation..."
              className="flex-1 bg-gray-100 dark:bg-navy border-0 rounded-xl px-4 py-4 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary outline-none"
            />
            <button 
              type="submit"
              disabled={isLoading || !input.trim()}
              className="bg-primary disabled:bg-gray-400 text-white rounded-xl px-6 font-bold hover:bg-primary-dark transition-colors flex items-center justify-center"
            >
              <span className="material-symbols-outlined">send</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};