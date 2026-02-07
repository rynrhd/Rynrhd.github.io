import React, { useState, useEffect } from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { AIChat } from './components/AIChat';
import { Footer } from './components/Footer';
import { ViewState, PackageItem } from './types';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewState>(ViewState.HOME);

  // Scroll to top on view change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentView]);

  const featuredPackages: PackageItem[] = [
    {
      id: 1,
      title: 'Maldives Luxury Retreat',
      price: 'BHD 650',
      tag: 'Leisure',
      description: '5 Days, 4 Nights all-inclusive luxury resort stay including direct flights.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDQZkf1VGP7eR0B1Gl3n_6_dZKcZHP-aiw3CTt9eNtmwtnFokwQVcAUaPvwOiiUW4U34WOSFv34UGnnpRqtB1-x4LX4RwceWJOFlwASyucjC9n0JOW-0gb-n4Cf1JHPae-5D45Uo78dttLtDjvCk1drUa1nCr2klc9obxSNfvIcR3qxLacgMr7f-IQ-PPbeK9XW3WGFBnbmjvMH9FbZiOMV7zWY546tX3CZNHDxSrsEgPD2m_1LlrQ3Q22gGlp4jthxJmWrAiMGUVws'
    },
    {
      id: 2,
      title: 'Paris Getaway',
      price: 'BHD 450',
      tag: 'City Break',
      description: 'Experience the city of lights with curated guided tours and luxury stays.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA0x_ucFTXYdXicADChJEwuX9Xnsxrt6C-ZefrEDzW-BIgE6YXY5TNT3RQ6z4DHLmXzRNpS-UBX8Yv70yhCELs3GSjkdNutcZqZhnkCoAOvs7mCUnAFbWc-Sih5jF4Rqo61CddPZbQXKJsfslonk5FyR-LlMmlQd5TOYY6Acgvq6X1BOFLmR78I2x1YGR5UL0oSv3fgArND5r-gAPrO6-iuewxI9-LpVoCEJh5SRkQXy3bBsK6bcZ0XCqot8RnAr7ep9dgvVuBweRel'
    },
    {
      id: 3,
      title: 'VIP Umrah Package',
      price: 'BHD 280',
      tag: 'Religious',
      description: 'All-inclusive package featuring 5-star hotels near Haram and private transport.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC-92P_poEsCZwtxxVzRUdRz6hQPJpoqHD87tCiVM7OkQN_S95zJiHvUbD_CBtcWBENXUm0Y9o7yd1lb2Csu_LLaw62tXHa-kFTBgBCCfKg8-zB2gCqr-PDSIpCrDq6pKV4Bx6QiJOtN02V8MD78Luep0EtJUofOmJ2AjH1sUY0SQqIQeD1OxlP6XnAY5KqGShERZlONGajrXtEYETO1XUDRyJS2fEmBusHsTWv5LQCewYct4qPfnH0p-0dlpHnY4EB8RX9WrxeEdMu'
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-navy">
      <Navigation currentView={currentView} setView={setCurrentView} />

      <main className="flex-grow">
        {currentView === ViewState.HOME && (
          <>
            <Hero setView={setCurrentView} />
            
            {/* Stats Section */}
            <section className="relative z-20 -mt-16 px-4">
              <div className="max-w-6xl mx-auto bg-white dark:bg-navy-light rounded-xl shadow-xl border border-gray-100 dark:border-gray-700 p-8 grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-100 dark:divide-gray-700">
                {[
                  { icon: 'schedule', val: '25+', label: 'Years Experience' },
                  { icon: 'groups', val: '10k+', label: 'Happy Clients' },
                  { icon: 'public', val: '50+', label: 'Global Partners' }
                ].map((stat, i) => (
                  <div key={i} className="flex flex-col items-center justify-center py-6 md:py-0 text-center group">
                    <div className="flex items-center justify-center size-12 rounded-full bg-blue-50 dark:bg-primary/20 text-primary mb-3">
                      <span className="material-symbols-outlined">{stat.icon}</span>
                    </div>
                    <h3 className="text-3xl font-black text-navy dark:text-white">{stat.val}</h3>
                    <p className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Featured Packages */}
            <section className="py-24 px-4 bg-gray-50 dark:bg-navy">
              <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
                  <div>
                    <span className="text-primary font-bold tracking-wider uppercase text-xs mb-2 block">Premium Selection</span>
                    <h2 className="text-3xl md:text-4xl font-black text-navy dark:text-white">Featured Destinations</h2>
                  </div>
                  <button className="text-primary font-bold flex items-center gap-2 hover:gap-3 transition-all text-sm">
                    View All Packages <span className="material-symbols-outlined">arrow_right_alt</span>
                  </button>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {featuredPackages.map((pkg) => (
                    <div key={pkg.id} className="group bg-white dark:bg-navy-light rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700">
                      <div className="relative h-64 overflow-hidden">
                        <img src={pkg.image} alt={pkg.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                        <div className="absolute top-4 left-4 bg-white/95 backdrop-blur text-navy text-[10px] font-bold px-3 py-1.5 rounded uppercase tracking-wider shadow-sm">
                          {pkg.tag}
                        </div>
                      </div>
                      <div className="p-6">
                        <div className="flex justify-between items-start mb-3">
                          <h3 className="text-lg font-bold text-navy dark:text-white">{pkg.title}</h3>
                          <span className="text-primary font-black">{pkg.price}</span>
                        </div>
                        <p className="text-gray-500 dark:text-gray-400 text-sm mb-6 line-clamp-2">{pkg.description}</p>
                        <button className="w-full py-3 rounded-lg border border-primary/20 text-primary font-bold text-sm hover:bg-primary hover:text-white transition-colors">
                          View Details
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </>
        )}

        {currentView === ViewState.AI_PLANNER && <AIChat />}

        {currentView === ViewState.CORPORATE && (
          <div className="py-20 px-4 bg-navy-light relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 -skew-x-12"></div>
            <div className="max-w-7xl mx-auto relative z-10">
               <div className="text-center max-w-3xl mx-auto mb-16">
                 <h2 className="text-4xl font-black text-white mb-6">Corporate Solutions</h2>
                 <p className="text-gray-400 text-lg">Navigating Bahrain's regulatory landscape since 1999. We handle the complexity so you can focus on growth.</p>
               </div>
               
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                 {[
                   { icon: 'domain_add', title: 'Company Registration', desc: 'End-to-end CR registration, legal structuring, and Ministry of Industry compliance.' },
                   { icon: 'badge', title: 'Visa Assistance', desc: 'Fast-track processing for investor, employment, and family residency permits.' },
                   { icon: 'gavel', title: 'PRO Services', desc: 'Expert Public Relations Officers managing all government documentation.' },
                   { icon: 'support_agent', title: 'Office Solutions', desc: 'Finding prime commercial spaces and virtual office addresses.' },
                   { icon: 'account_balance', title: 'Corporate Banking', desc: 'Strategic guidance for opening business accounts with top-tier institutions.' },
                   { icon: 'history_edu', title: 'Document Clearance', desc: 'Swift clearance for all ministry related documents and approvals.' }
                 ].map((service, i) => (
                   <div key={i} className="bg-navy/50 backdrop-blur border border-white/10 p-8 rounded-xl hover:bg-white/5 transition-colors group">
                     <div className="size-12 rounded-lg bg-primary/20 text-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                       <span className="material-symbols-outlined text-2xl">{service.icon}</span>
                     </div>
                     <h3 className="text-white text-xl font-bold mb-3">{service.title}</h3>
                     <p className="text-gray-400 text-sm leading-relaxed">{service.desc}</p>
                   </div>
                 ))}
               </div>
            </div>
          </div>
        )}

        {currentView === ViewState.STUDIO && (
           <div className="py-20 px-4 bg-white dark:bg-navy">
             <div className="max-w-7xl mx-auto">
               <div className="grid lg:grid-cols-2 gap-16 items-center">
                 <div>
                    <span className="text-primary font-bold tracking-wider uppercase text-xs mb-2 block">Our Studio</span>
                    <h2 className="text-4xl font-black text-navy dark:text-white mb-6">Professional Photography & Printing</h2>
                    <p className="text-gray-600 dark:text-gray-400 text-lg mb-8 leading-relaxed">
                      Capturing moments and crafting professional images for individuals and businesses. Our Manama studio is equipped with state-of-the-art lighting and backdrops.
                    </p>
                    <ul className="space-y-4 mb-8">
                      {['Passport & Visa Photos (Instant)', 'Corporate Headshots', 'Large Format Printing', 'Event Photography'].map(item => (
                        <li key={item} className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                          <span className="material-symbols-outlined text-green-500">check_circle</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                    <button className="btn-primary bg-primary text-white px-8 py-3 rounded-lg font-bold shadow-lg">Book Session</button>
                 </div>
                 <div className="grid grid-cols-2 gap-4">
                   <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAnqEsSgU7UDn_MqT0ugjYOZNjYefnrPN6niBZaC5jUvc1XqZKiGB1YxluQNS-VqGU4lF23hCYKUl5EMnUwM1_WGA-U1SfJQKe_J9bkx2dyaHyLHDSp5pvP6W3LPhKySgyqneq5lb5PYUtHrYfY1SsA8mfgsbfIJLLPjjZLtUBlXiVk72crnYDYDI8OtF0wWaNR8CJmEtDyeoS2udOtmZurCJA0OwR0gXWx1rOr-44_x_-dkjZ_fQqU8Por_B4x5XdRCp9cRxVYz6aY" alt="Studio" className="rounded-2xl w-full h-64 object-cover" />
                   <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAN1YLW6-p1IXJiFs1ECbz6JkrUBixckrFm-zFATTfyCpd7YDyNTZOThH1ez8k3V1mO8uR3qia74Z_-vm_Cmibgz5q-fad7WLrdbNzSUutKoWfz3pTLK_BQDyYIT6E7OucsQr7iQh7GH_EeYPStjtO0EBJLkPMkii4ZeVgPib4B4E9V9dZGzUH-xslPVQVr6dtcpMpLIQ4x6YdKFraBawnUSifDMThkpkLE5JP7e98YCKWsngFz7KmKN8W76reqz6KO5NX3VvyuUMB3" alt="Equipment" className="rounded-2xl w-full h-64 object-cover mt-8" />
                 </div>
               </div>
             </div>
           </div>
        )}

        {currentView === ViewState.CONTACT && (
          <div className="py-20 px-4 bg-gray-50 dark:bg-navy-light">
             <div className="max-w-4xl mx-auto bg-white dark:bg-navy rounded-2xl shadow-xl overflow-hidden border border-gray-100 dark:border-gray-800">
               <div className="grid md:grid-cols-2">
                 <div className="p-10">
                   <h2 className="text-2xl font-bold text-navy dark:text-white mb-6">Send us a Message</h2>
                   <form className="space-y-4">
                     <div>
                       <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">Full Name</label>
                       <input type="text" className="w-full rounded-lg border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-navy-light p-3 text-sm" placeholder="John Doe" />
                     </div>
                     <div>
                       <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">Email</label>
                       <input type="email" className="w-full rounded-lg border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-navy-light p-3 text-sm" placeholder="john@example.com" />
                     </div>
                     <div>
                       <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">Message</label>
                       <textarea className="w-full rounded-lg border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-navy-light p-3 text-sm h-32" placeholder="How can we help?"></textarea>
                     </div>
                     <button className="w-full bg-primary text-white font-bold py-3 rounded-lg hover:bg-primary-dark transition-colors">Send Inquiry</button>
                   </form>
                 </div>
                 <div className="bg-primary p-10 text-white flex flex-col justify-between">
                   <div>
                     <h3 className="text-xl font-bold mb-6">Contact Information</h3>
                     <ul className="space-y-6">
                       <li className="flex items-start gap-4">
                         <span className="material-symbols-outlined">location_on</span>
                         <span className="text-sm leading-relaxed">Bldg 123, Road 456, Block 304<br/>Manama, Kingdom of Bahrain</span>
                       </li>
                       <li className="flex items-center gap-4">
                         <span className="material-symbols-outlined">call</span>
                         <span className="text-sm">+973 1700 0000</span>
                       </li>
                       <li className="flex items-center gap-4">
                         <span className="material-symbols-outlined">mail</span>
                         <span className="text-sm">info@reliance.bh</span>
                       </li>
                     </ul>
                   </div>
                   <div className="mt-10">
                     <p className="text-xs opacity-70">Business Hours</p>
                     <p className="text-sm font-bold mt-1">Sun - Thu: 8:00 AM - 6:00 PM</p>
                     <p className="text-sm font-bold">Sat: 9:00 AM - 1:00 PM</p>
                   </div>
                 </div>
               </div>
             </div>
          </div>
        )}
      </main>

      <Footer />

      {/* WhatsApp Floating Button */}
      <a 
        href="https://wa.me/97317000000" 
        target="_blank" 
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center"
      >
        <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"></path>
        </svg>
      </a>
    </div>
  );
};

export default App;