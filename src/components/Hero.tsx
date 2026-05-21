import { useState, useEffect } from 'react';
import { ArrowUpRight, BrainCircuit, Sparkles, Image as ImageIcon } from 'lucide-react';
import AIVisualizer from './AIVisualizer';
import portraitImg from '../assets/images/twinkle_portrait_new_style_1779394251162.png';

interface HeroProps {
  onOpenResume: () => void;
}

export default function Hero({ onOpenResume }: HeroProps) {
  const tagline = "AI & Data Science Student";
  const [displayText, setDisplayText] = useState('');
  const [taglineIndex, setTaglineIndex] = useState(0);
  const [showAI, setShowAI] = useState(false);

  useEffect(() => {
    if (taglineIndex < tagline.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + tagline.charAt(taglineIndex));
        setTaglineIndex((prev) => prev + 1);
      }, 70);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setDisplayText('');
        setTaglineIndex(0);
      }, 5000); // Wait 5 seconds and loop
      return () => clearTimeout(timeout);
    }
  }, [taglineIndex, tagline]);

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-28 lg:pt-0 overflow-hidden bg-[#fff8f6]">
      <div className="max-w-[1200px] mx-auto px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-8 text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#ffdbd1]/40 text-[#673b2f] text-[11px] font-semibold uppercase tracking-[0.18em] border border-[#ffdbd1]/60 backdrop-blur-sm shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#835245] animate-pulse"></span>
              Available for internships
            </div>
            
            <div className="space-y-4">
              <h1 className="font-serif text-5xl sm:text-7xl md:text-8xl leading-[1.05] text-[#271813] font-bold tracking-tight">
                Designing<br />
                <span className="text-[#835245] italic font-medium">Intelligence</span>
              </h1>
              <div className="h-10 flex items-center">
                <p className="font-serif text-xl sm:text-2xl md:text-3xl text-[#7d562d] font-normal typing-cursor">
                  {displayText}
                </p>
              </div>
            </div>

            <p className="font-sans text-base sm:text-lg text-[#514440] max-w-xl leading-relaxed opacity-95">
              Hello, I'm Twinkle. I specialize in bridging the gap between rigorous engineering and intelligent automation to extract impactful stories from raw data.
            </p>

            <div className="flex flex-wrap gap-4 sm:gap-6 pt-2">
              <button 
                onClick={onOpenResume}
                className="magnetic-btn px-8 sm:px-10 py-4 bg-[#835245] text-[#ffffff] font-bold text-sm rounded-full shadow-lg shadow-[#835245]/20 hover:bg-[#835245]/90 transition-all cursor-pointer"
              >
                Download CV
              </button>
              <a 
                href="#contact" 
                className="magnetic-btn px-8 sm:px-10 py-4 border-2 border-[#835245]/15 text-[#835245] font-bold text-sm bg-white/40 hover:bg-white/70 transition-all rounded-full flex items-center gap-2 cursor-pointer shadow-sm"
              >
                Let's Chat <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Hero Image / Floating elements */}
          <div className="lg:col-span-5 relative flex flex-col items-center justify-center">
            <div className="relative w-full max-w-[420px] aspect-[4/5] group">
              {/* Blur backdrop light */}
              <div className="absolute -inset-8 bg-gradient-to-tr from-[#ffdbd1]/30 via-[#ffca98]/15 to-[#efe0cf]/30 rounded-[3rem] blur-2xl opacity-70 group-hover:opacity-90 transition-all duration-1000"></div>
              
              {showAI ? (
                <AIVisualizer />
              ) : (
                <div className="relative h-full w-full rounded-[2.5rem] overflow-hidden border-[10px] border-white shadow-[0_30px_70px_rgba(131,82,69,0.12)] bg-stone-100 flex items-center justify-center">
                  <img 
                    src={portraitImg} 
                    alt="Twinkle Portrait" 
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-102"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent"></div>
                </div>
              )}

            </div>

            {/* Quick interactive toggle switch */}
            <div className="mt-6 inline-flex items-center bg-[#835245]/5 p-1 rounded-full border border-[#835245]/10 backdrop-blur-xs select-none">
              <button
                onClick={() => setShowAI(false)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                  !showAI 
                    ? 'bg-[#835245] text-white shadow-md' 
                    : 'text-[#835245]/70 hover:text-[#835245]'
                }`}
              >
                <ImageIcon className="w-3.5 h-3.5" /> Portrait
              </button>
              <button
                onClick={() => setShowAI(true)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                  showAI 
                    ? 'bg-[#835245] text-white shadow-md' 
                    : 'text-[#835245]/70 hover:text-[#835245]'
                }`}
              >
                <BrainCircuit className="w-3.5 h-3.5" /> AI Dashboard
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
