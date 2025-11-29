import React from 'react';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
import { Content } from '../types';

interface FooterProps {
  content: Content;
}

const Footer: React.FC<FooterProps> = ({ content }) => {
  return (
    <footer className="bg-oriental-dark text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <h2 className="text-2xl font-serif-tc font-bold mb-6 text-oriental-gold">Oriental Pro</h2>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              A sanctuary for the mind. Spreading wisdom, compassion, and inner peace through practice and community.
            </p>
            <div className="flex space-x-4">
              <Facebook size={20} className="text-gray-400 hover:text-white cursor-pointer" />
              <Twitter size={20} className="text-gray-400 hover:text-white cursor-pointer" />
              <Instagram size={20} className="text-gray-400 hover:text-white cursor-pointer" />
              <Youtube size={20} className="text-gray-400 hover:text-white cursor-pointer" />
            </div>
          </div>

          {/* Quick Links (Placeholder for WP widgets) */}
          <div className="col-span-1">
             <h3 className="text-lg font-serif-tc font-semibold mb-6">Discovery</h3>
             <ul className="space-y-3 text-gray-400 text-sm">
               <li><a href="#" className="hover:text-oriental-gold">Meditation Guide</a></li>
               <li><a href="#" className="hover:text-oriental-gold">Sutra Library</a></li>
               <li><a href="#" className="hover:text-oriental-gold">Master's Blog</a></li>
             </ul>
          </div>

          {/* Contact (Placeholder) */}
          <div className="col-span-1">
             <h3 className="text-lg font-serif-tc font-semibold mb-6">Support</h3>
             <ul className="space-y-3 text-gray-400 text-sm">
               <li><a href="#" className="hover:text-oriental-gold">Contact Us</a></li>
               <li><a href="#" className="hover:text-oriental-gold">Privacy Policy</a></li>
               <li><a href="#" className="hover:text-oriental-gold">Volunteer</a></li>
             </ul>
          </div>

          {/* WeChat */}
          <div className="col-span-1 flex flex-col items-center md:items-start">
             <div className="bg-white p-2 rounded-lg inline-block mb-3">
               <div className="w-24 h-24 bg-gray-200 flex items-center justify-center text-gray-400 text-xs text-center">
                 QR Code Placeholder
               </div>
             </div>
             <p className="text-sm text-gray-400">{content.footer.wechat}</p>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-gray-500 text-xs">
          <p>{content.footer.rights}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;