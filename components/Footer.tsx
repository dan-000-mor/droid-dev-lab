import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-deepBlue text-white py-12 border-t border-slate-800">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <h3 className="font-heading font-bold text-2xl mb-2">DroidDevLab</h3>
            <p className="text-slate-400">Enterprise Native Android Development</p>
          </div>
          <div className="flex space-x-6 text-sm text-slate-300">
            <a href="#" className="hover:text-android transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-android transition-colors">Terms of Service</a>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-slate-800 text-center md:text-left text-slate-500 text-sm flex flex-col md:flex-row justify-between items-center">
            <p>&copy; 2024 DroidDevLab. All rights reserved.</p>
            <a href="mailto:hello@droid-dev-lab.com" className="mt-4 md:mt-0 text-android hover:underline">hello@droid-dev-lab.com</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;