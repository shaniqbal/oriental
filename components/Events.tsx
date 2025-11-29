import React from 'react';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { Content } from '../types';

interface EventsProps {
  content: Content;
}

const Events: React.FC<EventsProps> = ({ content }) => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-center bg-oriental-beige rounded-2xl overflow-hidden shadow-sm border border-oriental-gold/20">
          {/* Date Box */}
          <div className="bg-oriental-green text-white p-8 md:w-1/4 text-center h-full flex flex-col justify-center items-center min-h-[200px]">
            <span className="text-5xl font-bold font-serif-tc block mb-2">18</span>
            <span className="uppercase tracking-widest text-sm opacity-80">May</span>
          </div>

          {/* Info */}
          <div className="p-8 md:w-1/2 flex-grow">
            <h4 className="text-oriental-gold font-bold tracking-widest text-xs uppercase mb-2">
              {content.events.title}
            </h4>
            <h3 className="text-2xl md:text-3xl font-serif-tc font-bold text-oriental-dark mb-4">
              {content.events.nextSession}
            </h3>
            <div className="flex items-center text-gray-600 mb-1">
              <Calendar size={16} className="mr-2 text-oriental-green" />
              <span className="text-sm">{content.events.dateLabel}</span>
            </div>
            <div className="flex items-center text-gray-600">
              <Clock size={16} className="mr-2 text-oriental-green" />
              <span className="text-sm">2 Hours Duration</span>
            </div>
          </div>

          {/* Action */}
          <div className="p-8 md:w-1/4 flex items-center justify-center">
             <button className="flex items-center text-oriental-dark font-bold hover:text-oriental-gold transition-colors group">
               {content.events.joinBtn} <ArrowRight size={18} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
             </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;