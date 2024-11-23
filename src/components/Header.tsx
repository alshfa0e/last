import React from 'react';

const Header = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 sm:h-16 flex items-center justify-between">
        <div className="flex items-center gap-2 sm:gap-4">
          <img 
            src="https://raw.githubusercontent.com/alshfa0e/fa-ain-chatbot/main/IMG_0207_transparent.png"
            alt="FA Logo"
            className="h-12 w-12 sm:h-16 sm:w-16"
          />
          <div className="flex flex-col">
            <span className="text-xl sm:text-2xl font-bold text-[#003f8a] arabic-text">فاء عين للمشاريع</span>
            <span className="text-xl sm:text-2xl font-bold text-[#003f8a]">FA For Projects</span>
          </div>
        </div>
        
        <div className="flex items-center gap-4 sm:gap-6">
          <div id="google_translate_element" className="translate-dropdown"></div>
          <div className="hidden sm:flex items-center space-x-6 lg:space-x-8">
            <button 
              onClick={() => scrollToSection('chat')} 
              className="text-sm lg:text-base text-gray-600 hover:text-[#003f8a] transition-colors"
            >
              Chat
            </button>
            <button 
              onClick={() => scrollToSection('about')} 
              className="text-sm lg:text-base text-gray-600 hover:text-[#003f8a] transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="text-sm lg:text-base text-gray-600 hover:text-[#003f8a] transition-colors"
            >
              Contact
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;