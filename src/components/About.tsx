export default function About() {
  return (
    <section id="about" className="py-24 px-8 relative bg-[#fff8f6]">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-start">
          
          {/* Left Block */}
          <div className="lg:col-span-5 space-y-6">
            <div className="w-[70px] h-[3.5px] bg-gradient-to-r from-[#835245] to-[#f4b5a4] rounded-full"></div>
            <h2 className="font-serif text-4xl sm:text-5xl leading-tight text-[#271813] font-bold">
              Data with<br />
              <span className="text-[#835245] italic">Purpose.</span>
            </h2>
            <div className="relative group pl-6">
              <div className="absolute left-0 top-1 bottom-1 w-1 bg-[#ffdbd1] group-hover:bg-[#835245] transition-colors duration-500 rounded-full"></div>
              <p className="font-serif text-lg sm:text-2xl text-[#271813] italic font-normal leading-relaxed">
                "Transforming raw complexities into actionable insights that fuel the next wave of innovation."
              </p>
            </div>
          </div>

          {/* Right Block */}
          <div className="lg:col-span-7 space-y-10">
            <p className="font-sans text-base sm:text-lg text-[#514440] leading-relaxed">
              Currently in my 3rd year pursuing a B.Tech in Artificial Intelligence &amp; Data Science at Arya College of Engineering &amp; IT. I am driven by the potential of deep learning to solve systemic challenges and optimize human potential.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
              {/* Academic Status Card */}
              <div className="p-8 bg-white/40 backdrop-blur-md rounded-[2rem] border border-white/60 hover:bg-white/80 transition-all shadow-[0_4px_24px_rgba(131,82,69,0.02)] hover:shadow-xl group">
                <span className="text-stone-400 text-xs font-bold uppercase tracking-[0.2em] mb-4 block font-sans">
                  Academic Status
                </span>
                <p className="font-serif text-2xl font-bold text-[#271813] group-hover:text-[#835245] transition-colors">
                  B.Tech Student
                </p>
                <p className="text-[#514440] text-sm font-semibold mt-1">
                  3rd Year, AI &amp; DS
                </p>
              </div>

              {/* Performance Card */}
              <div className="p-8 bg-white/40 backdrop-blur-md rounded-[2rem] border border-white/60 hover:bg-white/80 transition-all shadow-[0_4px_24px_rgba(131,82,69,0.02)] hover:shadow-xl group">
                <span className="text-stone-400 text-xs font-bold uppercase tracking-[0.2em] mb-4 block font-sans">
                  Performance
                </span>
                <p className="font-serif text-4xl sm:text-5xl font-bold text-[#835245] leading-none mb-1">
                  9.0
                </p>
                <p className="text-stone-400 text-xs font-bold uppercase tracking-widest mt-1">
                  CURRENT CGPA
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
