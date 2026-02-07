import React from 'react';
import { ViewState } from '../types';

interface HeroProps {
  setView: (view: ViewState) => void;
}

export const Hero: React.FC<HeroProps> = ({ setView }) => {
  return (
    <section className="relative w-full min-h-[600px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat transition-transform duration-[10s] hover:scale-105"
          style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCvqZtV49R8m3JNEuLHyy4-HAe1FKH1rxDJGRe7gUcJus6nG2UETEx-t2i_UYZWboxadop_mUigoz5TOTYW1s7cpHNwox4eXPgd0v0vVNfB2GyZ3f6ggOZGKJ2iN1v3NIdAbMXrR-TbASwlT5e5XWk4fxALFI40htDWGfGGDAfXZXv001m3srFmn_kljtjU_vsJBKRf0sBfyt42j2OlYbdR7bi3Sojc-vb92DHkD5O54-UGru5foU6yiWuIinXpwc2ULJl2U-kL8l0m")' }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/70 to-navy/30"></div>
      </div>
      
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-20">
        <div className="max-w-3xl animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-8">
            <span className="material-symbols-outlined text-accent text-sm">verified</span>
            <span className="text-white text-xs font-bold uppercase tracking-wider">Trusted Since 1998</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-tight mb-6">
            25+ Years of <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-white">
              Excellence in Bahrain
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl text-gray-200 mb-10 max-w-xl font-light leading-relaxed">
            Your trusted partner for corporate travel, business management, and document clearance services. Experience the legacy of trust.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={() => setView(ViewState.AI_PLANNER)}
              className="flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white h-14 px-8 rounded-lg text-base font-bold transition-all shadow-lg shadow-primary/30 active:scale-95"
            >
              <span className="material-symbols-outlined">auto_awesome</span>
              Plan with AI
            </button>
            <button 
              onClick={() => setView(ViewState.CONTACT)}
              className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/30 h-14 px-8 rounded-lg text-base font-semibold backdrop-blur-sm transition-all active:scale-95"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};