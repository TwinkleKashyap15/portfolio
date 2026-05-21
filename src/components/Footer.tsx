export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#ffe2d9]/30 py-20 border-t border-[#835245]/5">
      <div className="max-w-[1200px] mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-10">
        
        {/* Left branding */}
        <div className="flex flex-col items-center md:items-start gap-4">
          <div className="font-serif text-3xl font-bold text-[#835245]">
            TWINKLE<span className="text-[#7d562d]">.</span>
          </div>
          <p className="font-sans text-xs sm:text-sm text-[#514440] uppercase tracking-wider font-bold">
            Crafting intelligence with elegance.
          </p>
        </div>

        {/* Right copyright & links */}
        <div className="text-center md:text-right space-y-4">
          <p className="font-sans text-[11px] uppercase tracking-[0.25em] text-[#514440] font-semibold opacity-80">
            © {currentYear} TWINKLE. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-8 justify-center md:justify-end text-sm font-bold text-[#514440]">
            <a 
              href="https://github.com/Twinklekashyap15" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-[#835245] transition-all uppercase tracking-widest text-[11px]"
            >
              GitHub
            </a>
            <a 
              href="https://linkedin.com/in/twinkle-kashyap206" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-[#835245] transition-all uppercase tracking-widest text-[11px]"
            >
              LinkedIn
            </a>
            <a 
              href="#hero" 
              className="hover:text-[#835245] transition-all uppercase tracking-widest text-[11px]"
            >
              Privacy
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
