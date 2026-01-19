import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, Smartphone } from 'lucide-react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const navigate = useNavigate();

  const handleScrollTo = (id: string) => {
    setIsOpen(false);
    // Check if we are on the home page
    if (window.location.hash !== '' && window.location.hash !== '#/') {
        navigate('/');
        // Small delay to allow navigation to complete before scrolling
        setTimeout(() => {
            const element = document.getElementById(id);
            if (element) element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
    } else {
        const element = document.getElementById(id);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNavigate = (path: string) => {
    setIsOpen(false);
    navigate(path);
  };

  return (
    <header className="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="container mx-auto px-4 md:px-8 h-20 flex items-center justify-between">
        {/* Logo */}
        <div 
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => handleNavigate('/')}
        >
          <div className="bg-android p-1.5 rounded-lg">
            <Smartphone className="w-6 h-6 text-white" />
          </div>
          <span className="font-heading font-bold text-xl text-deepBlue tracking-tight">DroidDevLab</span>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-8">
          <button onClick={() => handleScrollTo('services')} className="text-darkText hover:text-android transition-colors font-medium">Services</button>
          <button onClick={() => handleScrollTo('technologies')} className="text-darkText hover:text-android transition-colors font-medium">Technologies</button>
          <button onClick={() => handleScrollTo('process')} className="text-darkText hover:text-android transition-colors font-medium">Process</button>
          <button onClick={() => handleNavigate('/blog')} className="text-darkText hover:text-android transition-colors font-medium">Blog</button>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <button 
            onClick={() => handleScrollTo('contact')}
            className="bg-deepBlue hover:bg-slate-800 text-white px-6 py-2.5 rounded-lg font-medium transition-all shadow-lg hover:shadow-xl"
          >
            Get an Estimate
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
          <Menu className="w-6 h-6 text-darkText" />
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full left-0 top-20 shadow-lg p-4 flex flex-col space-y-4">
          <button onClick={() => handleScrollTo('services')} className="text-left py-2 font-medium">Services</button>
          <button onClick={() => handleScrollTo('technologies')} className="text-left py-2 font-medium">Technologies</button>
          <button onClick={() => handleScrollTo('process')} className="text-left py-2 font-medium">Process</button>
          <button onClick={() => handleNavigate('/blog')} className="text-left py-2 font-medium">Blog</button>
          <button 
            onClick={() => handleScrollTo('contact')}
            className="bg-android text-white py-3 rounded-lg font-bold text-center mt-2"
          >
            Get an Estimate
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;