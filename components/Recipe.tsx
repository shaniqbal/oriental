import React from 'react';
import { Utensils } from 'lucide-react';
import { Content } from '../types';

interface RecipeProps {
  content: Content;
}

const Recipe: React.FC<RecipeProps> = ({ content }) => {
  return (
    <section className="py-16 px-4 bg-oriental-dark/5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <Utensils className="mx-auto text-oriental-green mb-4 opacity-50" size={32} />
          <h2 className="text-3xl font-serif-tc font-bold text-oriental-dark">{content.recipe.sectionTitle}</h2>
          <div className="w-16 h-1 bg-oriental-gold mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-12">
           <div className="w-full md:w-1/2">
             <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
               <img 
                 src="https://picsum.photos/id/292/800/600" 
                 alt="Vegetarian Food" 
                 className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
               />
               <div className="absolute inset-0 border-8 border-white/20 rounded-2xl pointer-events-none"></div>
             </div>
           </div>
           
           <div className="w-full md:w-1/2 space-y-6">
             <div className="inline-block bg-oriental-green text-white px-3 py-1 text-xs font-bold rounded-full uppercase tracking-wider">
               Vegan
             </div>
             <h3 className="text-4xl font-serif-tc font-bold text-oriental-dark">
               {content.recipe.title}
             </h3>
             <p className="text-lg text-gray-600 leading-relaxed font-light">
               {content.recipe.desc}
             </p>
             <button className="border-b-2 border-oriental-gold text-oriental-dark pb-1 hover:text-oriental-gold transition-colors font-medium">
               {content.recipe.readMore}
             </button>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Recipe;