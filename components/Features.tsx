import React from 'react';
import { BookOpen, Flower, Download } from 'lucide-react';
import { Content } from '../types';

interface FeaturesProps {
  content: Content;
}

const Features: React.FC<FeaturesProps> = ({ content }) => {
  const cards = [
    { 
      icon: BookOpen, 
      title: content.features.learn.title, 
      desc: content.features.learn.desc,
      color: 'text-oriental-green'
    },
    { 
      icon: Flower, 
      title: content.features.practice.title, 
      desc: content.features.practice.desc,
      color: 'text-oriental-gold'
    },
    { 
      icon: Download, 
      title: content.features.resources.title, 
      desc: content.features.resources.desc,
      color: 'text-oriental-dark'
    },
  ];

  return (
    <section className="relative -mt-20 z-20 px-4 max-w-7xl mx-auto pb-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {cards.map((card, idx) => (
          <div 
            key={idx} 
            className="bg-white rounded-xl shadow-xl p-8 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl border-t-4 border-oriental-gold flex flex-col items-center text-center group"
          >
            <div className={`mb-6 p-4 rounded-full bg-oriental-beige/50 group-hover:bg-oriental-beige transition-colors ${card.color}`}>
              <card.icon size={32} strokeWidth={1.5} />
            </div>
            <h3 className="text-2xl font-serif-tc font-bold text-gray-800 mb-4">{card.title}</h3>
            <p className="text-gray-600 leading-relaxed font-light">{card.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;