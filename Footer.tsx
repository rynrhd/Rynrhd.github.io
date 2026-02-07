import React from 'react';
import { Logo } from './Logo';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-navy text-white pt-16 pb-8 border-t border-navy-light">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <Logo className="size-10" />
              <div>
                <h3 className="text-xl font-bold leading-tight">Reliance Travels</h3>
                <p className="text-xs text-gray-400 font-medium">Since 1998</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Bahrain's premier provider for comprehensive Travel, PRO, Studio, and specialized Corporate Solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6 border-l-4 border-primary pl-3">Quick Links</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Our Services</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Corporate Profile</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-lg mb-6 border-l-4 border-primary pl-3">Services</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><a href="#" className="hover:text-primary transition-colors">Travel & Tours</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Company Formation</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">PRO Services</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Studio & Printing</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-6 border-l-4 border-primary pl-3">Contact</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary text-lg mt-0.5">location_on</span>
                <span>Manama Center, Gov. Ave<br/>Manama, Kingdom of Bahrain</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-lg">call</span>
                <span dir="ltr">+973 1722 4455</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-lg">mail</span>
                <span>info@reliancetravels.bh</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>© 2024 Reliance Travels. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};