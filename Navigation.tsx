import React, { useState } from 'react';
import { ViewState } from '../types';
import { Logo } from './Logo';

interface NavigationProps {
  currentView: ViewState;
  setView: (view: ViewState) => void;
}

export const Navigation: React.FC<NavigationProps> = ({ currentView, setView }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', view: ViewState.HOME },
    { label: 'Corporate Services', view: ViewState.CORPORATE },
    { label: 'Studio & Printing', view: ViewState.STUDIO },
    { label: 'AI Trip Planner', view: ViewState.AI_PLANNER },
    { label: 'Contact', view: ViewState.CONTACT },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/95 dark:bg-navy/95 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div 
            className="flex items-center gap-3 cursor-pointer group" 
            onClick={() => setView(ViewState.HOME)}
          >
            <Logo className="size-10 shadow-md group-hover:scale-110 transition-transform duration-300" />
            <div className="flex flex-col">
              <span className="text-navy dark:text-white text-lg font-bold leading-tight tracking-tight">
                Reliance Travels
              </span>
              <span className="text-[10px] text-gray-500 dark:text-gray-400 font-medium tracking-widest uppercase">
                Since 1998
              </span>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => setView(item.view)}
                className={`text-sm font-semibold transition-colors ${
                  currentView === item.view
                    ? 'text-primary'
                    : 'text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button 
              onClick={() => setView(ViewState.CONTACT)}
              className="bg-primary hover:bg-primary-dark text-white px-6 py-2.5 rounded-lg text-sm font-bold transition-all shadow-md hover:shadow-lg flex items-center gap-2"
            >
              Get a Quote
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-2 text-gray-600 dark:text-gray-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="material-symbols-outlined text-2xl">
              {isMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-20 left-0 w-full bg-white dark:bg-navy border-b border-gray-200 dark:border-gray-800 shadow-xl">
          <div className="flex flex-col p-4 space-y-4">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => {
                  setView(item.view);
                  setIsMenuOpen(false);
                }}
                className={`text-left px-4 py-3 rounded-lg text-sm font-bold ${
                  currentView === item.view
                    ? 'bg-primary/10 text-primary'
                    : 'text-gray-600 dark:text-gray-300'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};