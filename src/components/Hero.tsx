import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative bg-gradient-to-r from-[#003f8a] to-[#002a5c] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-6 sm:mb-8">
            Leading with Precision in Project Management
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-blue-100 mb-4 sm:mb-6">
            Officially Licensed by{' '}
            <a 
              href="https://x.com/MCgovSA" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-white underline"
            >
              @MCgovSA
            </a>{' '}
            | Supported by{' '}
            <a 
              href="https://x.com/AsharqiaChamber" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-white underline"
            >
              @AsharqiaChamber
            </a>
          </p>
          <p className="text-sm sm:text-base lg:text-lg text-blue-100 mb-8 sm:mb-12">
            at{' '}
            <a 
              href="https://x.com/acbincubator" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-white underline"
            >
              @acbincubator
            </a>
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 px-4">
            <button 
              onClick={() => scrollToSection('chat')}
              className="bg-white text-[#003f8a] px-6 sm:px-8 py-2 sm:py-3 rounded-lg text-sm sm:text-base font-semibold hover:bg-opacity-90 transition-colors inline-flex items-center justify-center gap-2"
            >
              Get Started
              <ArrowRight size={16} className="sm:w-5 sm:h-5" />
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="border-2 border-white px-6 sm:px-8 py-2 sm:py-3 rounded-lg text-sm sm:text-base font-semibold hover:bg-white/10 transition-colors"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-12 sm:h-16 bg-gradient-to-b from-transparent to-white"></div>
    </div>
  );
};

export default Hero;