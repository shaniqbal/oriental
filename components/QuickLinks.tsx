import React from 'react';
import { Book, Mic, Video, Coffee, HelpCircle, Mail } from 'lucide-react';
import { Content } from '../types';

interface QuickLinksProps {
  content: Content;
}

const QuickLinks: React.FC<QuickLinksProps> = ({ content }) => {
  const links = [
    { icon: Book, label: content.quickLinks.books },
    { icon: Mic, label: content.quickLinks.audio },
    { icon: Video, label: content.quickLinks.video },
    { icon: Coffee, label: content.quickLinks.recipes },
    { icon: HelpCircle, label: content.quickLinks.qa },
    { icon: Mail, label: content.quickLinks.contact },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {links.map((link, idx) => (
            <a 
              key={idx} 
              href="#" 
              className="flex flex-col items-center group cursor-pointer"
            >
              <div className="w-16 h-16 rounded-full bg-oriental-beige flex items-center justify-center text-oriental-green mb-4 group-hover:bg-oriental-gold group-hover:text-white transition-all duration-300 shadow-md group-hover:shadow-lg">
                <link.icon size={24} strokeWidth={1.5} />
              </div>
              <span className="text-gray-700 font-serif-tc font-medium group-hover:text-oriental-gold transition-colors">
                {link.label}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickLinks;