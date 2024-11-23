import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ChatBox from './components/ChatBox';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Hero />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <section id="chat" className="mb-12 sm:mb-16 lg:mb-24">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Chat with Our AI Assistant
            </h2>
            <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
              Get instant answers about our services, project management solutions,
              and how we can help transform your ideas into reality.
            </p>
          </div>
          <ChatBox />
        </section>

        <section id="about" className="mb-12 sm:mb-16 lg:mb-24">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              About FA
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Arabic Content */}
            <div className="bg-white p-6 rounded-lg shadow-lg" dir="rtl">
              <h3 className="text-xl font-bold text-[#003f8a] mb-4 arabic-text">المهمة:</h3>
              <p className="text-gray-700 mb-6 leading-relaxed arabic-text">
                "فاء عين" ملتزمة بتطوير وإدارة المشاريع بكفاءة عالية، مركزة على تحقيق متطلبات العملاء ومواعيدهم بمنهجية "ماذا تريد ومتى؟". تقدم المؤسسة خدماتها للأفراد، المنشئات، والحكومات، مع الحفاظ على إدارة محاسبية دقيقة وتحليل استثماري شامل، مع التزام بالوضوح، المرونة وتحقيق النتائج.
              </p>
              
              <h3 className="text-xl font-bold text-[#003f8a] mb-4 arabic-text">الرؤية:</h3>
              <p className="text-gray-700 leading-relaxed arabic-text">
                "فاء عين" تسعى لتكون رائدة في قطاع المشاريع بمحفظة متنوعة وقدرة على بناء شراكات مستدامة. تركز على الابتكار والنمو لتحقيق رؤيتها المستقبلية والتأثير بفعالية في السوق، موجهة بشعار "ماذا تريد ومتى؟"
              </p>
            </div>

            {/* English Content */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-[#003f8a] mb-4">Mission:</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                FA is committed to developing and managing projects with high efficiency, focusing on meeting client requirements and deadlines with the methodology of "What do you want and when?". The organization provides services to individuals, establishments, and governments, while maintaining accurate accounting management and comprehensive investment analysis, with a commitment to clarity, flexibility, and achieving results.
              </p>
              
              <h3 className="text-xl font-bold text-[#003f8a] mb-4">Vision:</h3>
              <p className="text-gray-700 leading-relaxed">
                FA strives to be a leader in the project sector with a diverse portfolio and the ability to build sustainable partnerships. It focuses on innovation and growth to achieve its future vision and effectively influence the market, guided by the slogan "What do you want and when?"
              </p>
            </div>
          </div>
        </section>

        <section id="contact" className="mb-12 sm:mb-16 lg:mb-24">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Contact Us
            </h2>
            <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
              Get in touch with us for any inquiries or project discussions.
            </p>
          </div>
          
          <div className="max-w-xl mx-auto bg-white p-6 rounded-lg shadow-lg">
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b pb-4">
                <span className="font-semibold">Email:</span>
                <a href="mailto:F@F3.SA" className="text-[#003f8a] hover:underline">F@F3.SA</a>
              </div>
              <div className="flex items-center justify-between border-b pb-4">
                <span className="font-semibold">Phone:</span>
                <a href="tel:+966540694040" className="text-[#003f8a] hover:underline">+966 540 694 040</a>
              </div>
              <div className="flex items-center justify-between pt-2">
                <span className="font-semibold">Social:</span>
                <div className="flex gap-4">
                  <a 
                    href="https://x.com/FAprgs" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[#003f8a] hover:underline text-xl"
                  >
                    𝕏
                  </a>
                  <span className="text-gray-400">LinkedIn (Coming Soon)</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <footer className="bg-gray-900 text-white py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">FA For Projects</h3>
              <p className="text-gray-400">
                Leading with Precision in Project Management
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <div className="space-y-2">
                <a href="#chat" className="block text-gray-400 hover:text-white transition-colors">Chat</a>
                <a href="#about" className="block text-gray-400 hover:text-white transition-colors">About</a>
                <a href="#contact" className="block text-gray-400 hover:text-white transition-colors">Contact</a>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a 
                  href="https://x.com/FAprgs" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors text-2xl"
                >
                  𝕏
                </a>
                <span className="text-gray-400">LinkedIn (Coming Soon)</span>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} FA. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;