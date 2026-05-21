import { useState, useEffect } from 'react';

interface NavbarProps {
  onOpenResume: () => void;
}

export default function Navbar({ onOpenResume }: NavbarProps) {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      id="navbar" 
      className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-[900px] transition-all duration-500`}
    >
      <div 
        className={`rounded-full px-6 md:px-10 py-3.5 flex justify-between items-center transition-all duration-300 ${
          isSticky 
            ? 'bg-white/80 backdrop-blur-md border border-[#835245]/15 shadow-lg shadow-[#835245]/5 py-2.5' 
            : 'bg-white/30 backdrop-blur-sm border border-white/40'
        }`}
      >
        {/* Logo */}
        <a href="#hero" className="font-serif text-xl md:text-2xl font-bold text-[#835245] tracking-tighter">
          TWINKLE<span className="text-[#7d562d]">.</span>
        </a>

        {/* Links */}
        <div className="hidden md:flex gap-8 items-center">
          <a href="#hero" className="text-sm font-semibold text-[#835245] hover:opacity-80 transition-all font-sans">
            Home
          </a>
          <a href="#about" className="text-sm font-semibold text-[#514440] hover:text-[#835245] transition-all font-sans">
            About
          </a>
          <a href="#skills" className="text-sm font-semibold text-[#514440] hover:text-[#835245] transition-all font-sans">
            Skills
          </a>
          <a href="#projects" className="text-sm font-semibold text-[#514440] hover:text-[#835245] transition-all font-sans">
            Work
          </a>
          <a href="#contact" className="text-sm font-semibold text-[#514440] hover:text-[#835245] transition-all font-sans">
            Contact
          </a>
        </div>

        {/* Action Button */}
        <button 
          onClick={onOpenResume}
          className="magnetic-btn bg-[#835245] text-white px-5 md:px-7 py-2 md:py-2.5 rounded-full text-xs md:text-sm font-bold shadow-md hover:shadow-lg hover:shadow-[#835245]/10 active:scale-95 transition-all text-center"
        >
          Resume
        </button>
      </div>
    </nav>
  );
}
