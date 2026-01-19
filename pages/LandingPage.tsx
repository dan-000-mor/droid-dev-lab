import React from 'react';
import Hero from '../components/Hero';
import { Zap, Cpu, Shield, ArrowRight } from 'lucide-react';
import { SERVICES, FAQ_ITEMS, TESTIMONIALS } from '../constants';

const LandingPage: React.FC = () => {
  return (
    <div className="flex flex-col">
      <Hero />
      
      {/* Block 3: Intro & Stats */}
      <section id="process" className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="font-heading font-bold text-3xl md:text-4xl mb-6 text-deepBlue">Why Choose Native Android Development?</h2>
                <p className="text-gray-600 text-lg">
                    With over 70% of the global market share, Android is the go-to platform for reaching a massive audience. At DroidDevLab, we don't just write code; we engineer mobile experiences. Native development allows us to utilize the full potential of the device hardware.
                </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="p-8 rounded-2xl bg-lightBg hover:shadow-lg transition-shadow border border-gray-100">
                    <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                        <Zap className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="font-heading font-bold text-xl mb-3">High Performance</h3>
                    <p className="text-gray-600">Apps run directly on the device with 60 FPS speed and instant response.</p>
                </div>
                <div className="p-8 rounded-2xl bg-lightBg hover:shadow-lg transition-shadow border border-gray-100">
                    <div className="w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center mb-6">
                        <Cpu className="w-8 h-8 text-android" />
                    </div>
                    <h3 className="font-heading font-bold text-xl mb-3">Hardware Access</h3>
                    <p className="text-gray-600">Seamless integration with Camera, GPS, Bluetooth, NFC, and sensors.</p>
                </div>
                <div className="p-8 rounded-2xl bg-lightBg hover:shadow-lg transition-shadow border border-gray-100">
                    <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                        <Shield className="w-8 h-8 text-purple-600" />
                    </div>
                    <h3 className="font-heading font-bold text-xl mb-3">Enhanced Security</h3>
                    <p className="text-gray-600">Built-in Android security features and custom encryption for enterprise data.</p>
                </div>
            </div>
        </div>
      </section>

      {/* Block 4: Services */}
      <section id="services" className="py-20 bg-lightBg">
          <div className="container mx-auto px-4 md:px-8">
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-12 text-center text-deepBlue">Our Android Development Expertise</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                {SERVICES.map((service, idx) => (
                    <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:border-android transition-colors">
                        <h3 className="font-heading font-bold text-2xl mb-4">{service.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{service.description}</p>
                    </div>
                ))}
            </div>
          </div>
      </section>

      {/* Block 5: Tech Stack */}
      <section id="technologies" className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8">
            <div className="text-center mb-16">
                <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4 text-deepBlue">Technologies We Leverage</h2>
                <p className="text-gray-600 text-lg">We stay ahead of the curve by utilizing modern libraries and frameworks.</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="text-center">
                    <h4 className="font-bold text-lg mb-4 text-deepBlue">Languages</h4>
                    <ul className="space-y-2 text-gray-600">
                        <li>Kotlin (Primary)</li>
                        <li>Java</li>
                    </ul>
                </div>
                <div className="text-center">
                    <h4 className="font-bold text-lg mb-4 text-deepBlue">Frameworks</h4>
                    <ul className="space-y-2 text-gray-600">
                        <li>Android SDK</li>
                        <li>Jetpack Compose</li>
                        <li>Coroutines</li>
                    </ul>
                </div>
                <div className="text-center">
                    <h4 className="font-bold text-lg mb-4 text-deepBlue">Architecture</h4>
                    <ul className="space-y-2 text-gray-600">
                        <li>MVVM</li>
                        <li>Clean Architecture</li>
                    </ul>
                </div>
                <div className="text-center">
                    <h4 className="font-bold text-lg mb-4 text-deepBlue">Tools</h4>
                    <ul className="space-y-2 text-gray-600">
                        <li>Android Studio</li>
                        <li>Firebase</li>
                        <li>Dagger/Hilt</li>
                        <li>Retrofit</li>
                    </ul>
                </div>
            </div>
        </div>
      </section>

      {/* Block 6: Comparison */}
      <section className="py-20 bg-deepBlue text-white">
        <div className="container mx-auto px-4 md:px-8">
            <div className="text-center mb-12">
                <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">Native Android vs. Cross-Platform</h2>
                <p className="text-slate-300 max-w-2xl mx-auto">Choosing the right approach is critical. Here is why we recommend Native Android (Kotlin) for serious business:</p>
            </div>
            
            <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse min-w-[600px]">
                    <thead>
                        <tr>
                            <th className="p-4 border-b border-slate-600 font-bold text-lg text-android">Feature</th>
                            <th className="p-4 border-b border-slate-600 font-bold text-lg text-white bg-slate-800/50 rounded-t-lg">Native Android (Kotlin)</th>
                            <th className="p-4 border-b border-slate-600 font-bold text-lg text-slate-400">Cross-Platform (Flutter/React)</th>
                        </tr>
                    </thead>
                    <tbody className="text-slate-200">
                        <tr>
                            <td className="p-4 border-b border-slate-700 font-medium">Performance</td>
                            <td className="p-4 border-b border-slate-700 bg-slate-800/30 font-semibold text-white">Highest possible (Direct hardware access)</td>
                            <td className="p-4 border-b border-slate-700 text-slate-400">Good, but can lag on complex tasks</td>
                        </tr>
                        <tr>
                            <td className="p-4 border-b border-slate-700 font-medium">UX/UI</td>
                            <td className="p-4 border-b border-slate-700 bg-slate-800/30 font-semibold text-white">100% Native feel (Material Design)</td>
                            <td className="p-4 border-b border-slate-700 text-slate-400">Mimics native, occasional glitches</td>
                        </tr>
                        <tr>
                            <td className="p-4 border-b border-slate-700 font-medium">Device Access</td>
                            <td className="p-4 border-b border-slate-700 bg-slate-800/30 font-semibold text-white">Full & Immediate API access</td>
                            <td className="p-4 border-b border-slate-700 text-slate-400">Dependent on 3rd party plugins</td>
                        </tr>
                        <tr>
                            <td className="p-4 font-medium">Scalability</td>
                            <td className="p-4 bg-slate-800/30 font-semibold text-white rounded-b-lg">Unlimited (Best for Banking/IoT)</td>
                            <td className="p-4 text-slate-400">Limited for complex logic</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
      </section>

      {/* Block 7: Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8">
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-12 text-center text-deepBlue">What Our Clients Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {TESTIMONIALS.map((t, idx) => (
                    <div key={idx} className="bg-lightBg p-8 rounded-2xl relative">
                        <div className="text-4xl text-android font-serif absolute top-4 left-6">"</div>
                        <p className="text-gray-700 italic relative z-10 mb-6 mt-4">{t.text}</p>
                        <div className="mt-auto">
                            <p className="font-bold text-deepBlue">{t.name}</p>
                            <p className="text-sm text-gray-500">{t.role}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* Block 8: FAQ */}
      <section className="py-20 bg-lightBg">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-12 text-center text-deepBlue">Frequently Asked Questions</h2>
            <div className="space-y-4">
                {FAQ_ITEMS.map((item, idx) => (
                    <div key={idx} className="bg-white rounded-lg shadow-sm overflow-hidden">
                        <details className="group">
                            <summary className="flex justify-between items-center font-medium cursor-pointer list-none p-6">
                                <span className="text-lg font-heading font-bold text-deepBlue">{item.question}</span>
                                <span className="transition group-open:rotate-180">
                                    <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                                </span>
                            </summary>
                            <div className="text-gray-600 px-6 pb-6">
                                <p>{item.answer}</p>
                            </div>
                        </details>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* Block 9: Contact Form */}
      <section id="contact" className="py-20 bg-white">
          <div className="container mx-auto px-4 md:px-8 max-w-2xl">
              <div className="text-center mb-10">
                <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4 text-deepBlue">Ready to Build Your App?</h2>
                <p className="text-gray-600">Leave a request and get a technical consultation + rough estimate within 24 hours.</p>
              </div>

              <form className="space-y-6 bg-lightBg p-8 rounded-2xl border border-gray-100 shadow-sm" onSubmit={(e) => e.preventDefault()}>
                  <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                      <input type="text" id="name" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-android focus:border-transparent outline-none transition-all" placeholder="John Doe" />
                  </div>
                  <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                      <input type="email" id="email" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-android focus:border-transparent outline-none transition-all" placeholder="john@company.com" />
                  </div>
                  <div>
                      <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-1">Budget</label>
                      <select id="budget" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-android focus:border-transparent outline-none transition-all bg-white">
                          <option value="<10k">&lt; $10k</option>
                          <option value="10k-50k">$10k - $50k</option>
                          <option value=">50k">&gt; $50k</option>
                      </select>
                  </div>
                  <div>
                      <label htmlFor="details" className="block text-sm font-medium text-gray-700 mb-1">Project Details</label>
                      <textarea id="details" rows={4} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-android focus:border-transparent outline-none transition-all" placeholder="Tell us about your app idea..."></textarea>
                  </div>
                  <button type="submit" className="w-full bg-deepBlue hover:bg-slate-800 text-white font-bold text-lg py-4 rounded-xl shadow-lg transition-all flex items-center justify-center space-x-2">
                    <span>Request Free Estimate</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>
              </form>
          </div>
      </section>
    </div>
  );
};

export default LandingPage;