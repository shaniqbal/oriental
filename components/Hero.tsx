import React from 'react';
import { Content, Language } from '../types';

interface HeroProps {
  content: Content;
  lang: Language;
}

const Hero: React.FC<HeroProps> = ({ content, lang }) => {
  return (
    <div className="relative h-screen min-h-[600px] w-full flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transform scale-105"
        style={{
          backgroundImage: 'url("https://picsum.photos/id/28/1920/1080")', // Forest/Nature vibe
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-oriental-dark/30 to-oriental-beige/10"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-16">
        <div className="mb-6 animate-fade-in-up">
           <svg className="w-16 h-16 mx-auto text-white/80 mb-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
             <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="currentColor" fillOpacity="0.2" />
           </svg>
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 font-serif-tc tracking-wide drop-shadow-lg leading-tight">
          {content.hero.title}
        </h1>
        
        <p className="text-lg md:text-2xl text-white/90 mb-10 font-light tracking-wider max-w-2xl mx-auto drop-shadow-md">
          {content.hero.subtitle}
        </p>
        
        <button className="bg-oriental-gold hover:bg-[#c29263] text-white px-8 py-4 rounded-full text-lg md:text-xl font-medium transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 transform border border-white/20">
          {content.hero.cta}
        </button>
      </div>
      
      {/* Decorative cloud bottom */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#f8f1f5] to-transparent z-10"></div>
    </div>
  );
};

export default Hero;