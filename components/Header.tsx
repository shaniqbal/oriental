import React, { useState, useEffect } from 'react';
import { Menu, X, Globe, ChevronDown } from 'lucide-react';
import { Language, Content } from '../types';

interface HeaderProps {
  lang: Language;
  setLang: (lang: Language) => void;
  content: Content;
}

const Header: React.FC<HeaderProps> = ({ lang, setLang, content }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLang = () => {
    setLang(lang === 'zh' ? 'en' : 'zh');
  };

  const navLinks = [
    { 
      key: 'beginners', 
      label: content.nav.beginners, 
      children: content.nav.sub_beginners 
    },
    { 
      key: 'practice', 
      label: content.nav.practice, 
      children: content.nav.sub_practice 
    },
    { 
      key: 'resources', 
      label: content.nav.resources, 
      children: content.nav.sub_resources 
    },
    { key: 'sharing', label: content.nav.sharing },
    { key: 'about', label: content.nav.about },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white shadow-md text-oriental-dark py-3' 
          : 'bg-transparent text-white py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center border-2 ${isScrolled ? 'border-oriental-green text-oriental-green' : 'border-white text-white'}`}>
              <span className="font-serif-tc font-bold">心</span>
            </div>
            <span className={`text-xl font-serif-tc font-bold tracking-wide ${isScrolled ? 'text-oriental-dark' : 'text-white'}`}>
              Oriental Pro
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <div 
                key={link.key} 
                className="relative group"
                onMouseEnter={() => setActiveDropdown(link.key)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button 
                  className={`flex items-center space-x-1 font-medium hover:text-oriental-gold transition-colors ${isScrolled ? 'text-gray-700' : 'text-white/90'}`}
                >
                  <span className={lang === 'zh' ? 'font-serif-tc text-lg' : 'font-sans'}>{link.label}</span>
                  {link.children && <ChevronDown size={14} />}
                </button>
                
                {/* Dropdown */}
                {link.children && (
                  <div className={`absolute left-0 mt-0 w-48 bg-white rounded-lg shadow-xl py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top-left`}>
                    {link.children.map((child, idx) => (
                      <a 
                        key={idx} 
                        href="#" 
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-oriental-beige hover:text-oriental-green font-serif-tc"
                      >
                        {child}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Language Switcher & Mobile Toggle */}
          <div className="flex items-center space-x-4">
            <button 
              onClick={toggleLang}
              className={`flex items-center space-x-2 px-3 py-1.5 rounded-full border transition-all ${
                isScrolled 
                  ? 'border-oriental-green text-oriental-green hover:bg-oriental-green hover:text-white' 
                  : 'border-white/50 text-white hover:bg-white/20'
              }`}
            >
              <Globe size={16} />
              <span className="text-sm font-semibold">{lang === 'zh' ? 'English' : '中文'}</span>
            </button>

            <button 
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen 
                ? <X size={24} className={isScrolled ? 'text-gray-800' : 'text-white'} /> 
                : <Menu size={24} className={isScrolled ? 'text-gray-800' : 'text-white'} />
              }
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white absolute top-full left-0 w-full shadow-lg border-t border-gray-100 animate-fadeIn">
          <div className="px-4 py-4 space-y-2">
            {navLinks.map((link) => (
              <div key={link.key}>
                <button className="w-full text-left py-3 px-2 text-oriental-dark font-serif-tc font-medium border-b border-gray-50 flex justify-between items-center">
                  {link.label}
                  {link.children && <ChevronDown size={16} className="text-gray-400" />}
                </button>
                {link.children && (
                  <div className="pl-6 bg-gray-50/50">
                    {link.children.map((child, idx) => (
                      <a key={idx} href="#" className="block py-2 text-sm text-gray-600 font-serif-tc">{child}</a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;