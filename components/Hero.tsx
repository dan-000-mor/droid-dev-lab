import React from 'react';
import { CheckCircle } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-lightBg">
      {/* Abstract Background Element */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-gray-200/50 to-transparent skew-x-12 transform translate-x-32 z-0 pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Text Content */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl text-darkText leading-tight mb-6">
              Enterprise-Grade <span className="text-android">Android App</span> Development Services
            </h1>
            <p className="text-lg text-gray-600 mb-10 max-w-xl mx-auto lg:mx-0">
              Transform your business ideas into powerful, user-centric mobile applications. We build secure and scalable native Android solutions that dominate the Google Play Store using Kotlin and Jetpack Compose.
            </p>
            
            <button 
              onClick={scrollToContact}
              className="bg-android hover:bg-emerald-500 text-white font-bold text-lg px-10 py-4 rounded-xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-1"
            >
              Book a Free Consultation
            </button>

            {/* Trust Bar */}
            <div className="mt-10 flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-8">
              <div className="flex items-center space-x-2 text-sm font-medium text-gray-700">
                <CheckCircle className="w-5 h-5 text-android" />
                <span>100% Native Code</span>
              </div>
              <div className="flex items-center space-x-2 text-sm font-medium text-gray-700">
                <CheckCircle className="w-5 h-5 text-android" />
                <span>5+ Years Experience</span>
              </div>
              <div className="flex items-center space-x-2 text-sm font-medium text-gray-700">
                <CheckCircle className="w-5 h-5 text-android" />
                <span>Post-Release Support</span>
              </div>
            </div>
          </div>

          {/* Visual Content (Phone Mockup) */}
          <div className="lg:w-1/2 relative flex justify-center">
             <div className="relative w-[300px] h-[600px] bg-slate-900 rounded-[3rem] border-8 border-slate-800 shadow-2xl overflow-hidden ring-1 ring-slate-900/50">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-40 h-6 bg-slate-800 rounded-b-xl z-20"></div>
                <img 
                    src="https://picsum.photos/400/800?random=10" 
                    alt="App Interface" 
                    className="w-full h-full object-cover opacity-90"
                />
                {/* Floating Elements mimicking UI components */}
                <div className="absolute bottom-10 left-4 right-4 bg-white/10 backdrop-blur-lg p-4 rounded-2xl border border-white/20 text-white z-10 shadow-lg">
                    <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 bg-android rounded-full flex items-center justify-center font-bold">KT</div>
                        <div>
                            <div className="text-sm font-bold">Optimized for Speed</div>
                            <div className="text-xs text-gray-300">Native Kotlin Performance</div>
                        </div>
                    </div>
                </div>
             </div>
             {/* Decorative Elements */}
             <div className="absolute -z-10 top-10 right-10 w-64 h-64 bg-android/20 rounded-full blur-3xl"></div>
             <div className="absolute -z-10 bottom-10 left-10 w-64 h-64 bg-deepBlue/10 rounded-full blur-3xl"></div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;