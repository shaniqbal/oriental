import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Events from './components/Events';
import Recipe from './components/Recipe';
import QuickLinks from './components/QuickLinks';
import Footer from './components/Footer';
import { CONTENT } from './constants';
import { Language } from './types';

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('zh'); // Default to Chinese as per requirement
  const content = CONTENT[lang];

  return (
    <div className="min-h-screen bg-[#f8f1f5] font-sans selection:bg-oriental-gold selection:text-white">
      {/* Decorative Mandala Background (CSS only) */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-[0.03] bg-pattern"></div>
      
      <Header lang={lang} setLang={setLang} content={content} />
      
      <main className="relative z-10">
        <Hero content={content} lang={lang} />
        <Features content={content} />
        <Events content={content} />
        
        {/* Parallax Divider */}
        <div 
          className="h-64 bg-fixed bg-cover bg-center flex items-center justify-center"
          style={{ backgroundImage: 'url("https://picsum.photos/id/116/1920/600")' }}
        >
          <div className="bg-black/40 p-8 rounded-xl backdrop-blur-sm text-white text-center max-w-2xl mx-4">
             <p className="text-xl md:text-2xl font-serif-tc italic">
               "{lang === 'zh' ? '诸恶莫作，众善奉行，自净其意，是诸佛教。' : 'To avoid all evil, to cultivate good, and to cleanse one\'s mind — this is the teaching of the Buddhas.'}"
             </p>
          </div>
        </div>

        <Recipe content={content} />
        <QuickLinks content={content} />
      </main>

      <Footer content={content} />
    </div>
  );
};

export default App;