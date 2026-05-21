import { Award, GraduationCap } from 'lucide-react';
import { educationData, certificationsData } from '../data';

export default function EducationAndCertifications() {
  return (
    <section id="education" className="py-24 px-8 bg-[#fff1ed]/10 relative">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          
          {/* Left Column: Education Timeline */}
          <div className="space-y-12 text-left">
            <div className="space-y-4">
              <div className="w-[70px] h-[3.5px] bg-gradient-to-r from-[#835245] to-[#f4b5a4] rounded-full"></div>
              <h2 className="font-serif text-4xl sm:text-5xl font-bold text-[#271813]">
                Education
              </h2>
            </div>

            <div className="space-y-12 relative pl-8 before:content-[''] before:absolute before:left-1.5 before:top-2 before:bottom-2 before:w-[2px] before:bg-[#ffdbd1]">
              {educationData.map((item, index) => (
                <div key={item.id} className="relative group text-left">
                  {/* Timeline dot */}
                  <div className={`absolute -left-[30px] top-1.5 w-3 h-3 rounded-full transition-transform duration-300 ${
                    index === 0 
                      ? 'bg-[#835245] ring-6 ring-[#ffdbd1]/60 scale-125' 
                      : 'bg-[#d6c2bd] group-hover:bg-[#835245] scale-100 group-hover:scale-110'
                  }`} />
                  
                  <span className={`font-sans text-xs font-bold mb-2.5 block tracking-widest uppercase ${
                    index === 0 ? 'text-[#835245]' : 'text-[#84736f]'
                  }`}>
                    {item.period}
                  </span>
                  
                  <h4 className="font-serif text-xl sm:text-2xl font-bold text-[#271813] mb-1">
                    {item.degree}
                  </h4>
                  
                  <p className="text-[#514440] font-sans text-sm sm:text-base font-semibold mb-3">
                    {item.institution}
                  </p>

                  {item.grade ? (
                    <div className="inline-flex items-center gap-2 px-5 py-2 bg-[#835245] text-white text-sm sm:text-base font-bold rounded-xl shadow-md shadow-[#835245]/20">
                      CGPA: {item.grade}
                    </div>
                  ) : (
                    <div className="inline-block px-4 py-1.5 bg-[#d6c2bd]/20 text-[#514440] text-xs sm:text-sm font-bold rounded-full border border-[#d6c2bd]/30">
                      Percentage: {item.percentage}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Certifications */}
          <div className="space-y-12 text-left">
            <div className="space-y-4">
              <div className="w-[70px] h-[3.5px] bg-gradient-to-r from-[#7d562d] to-[#ffca98] rounded-full"></div>
              <h2 className="font-serif text-4xl sm:text-5xl font-bold text-[#271813]">
                Certifications
              </h2>
            </div>

            <div className="space-y-5">
              {certificationsData.map((cert) => {
                const isPrimary = cert.color === 'primary';
                const isSecondary = cert.color === 'secondary';

                return (
                  <div 
                    key={cert.id} 
                    className="glass-card p-6 rounded-[2rem] flex items-center gap-6 group hover:bg-white transition-all border-none text-left"
                  >
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-500 ${
                      isPrimary 
                        ? 'bg-[#ffdbd1]/50 text-[#835245] group-hover:bg-[#835245] group-hover:text-white' 
                        : isSecondary 
                        ? 'bg-[#ffdcbd]/50 text-[#7d562d] group-hover:bg-[#7d562d] group-hover:text-white' 
                        : 'bg-[#efe0cf]/50 text-[#675d4f] group-hover:bg-[#675d4f] group-hover:text-white'
                    }`}>
                      <Award className="w-6 h-6" />
                    </div>
                    
                    <div className="space-y-0.5">
                      <h4 className="font-serif text-lg sm:text-xl font-bold text-[#271813] leading-tight">
                        {cert.title}
                      </h4>
                      <p className="text-[#514440] font-sans text-xs sm:text-sm font-semibold tracking-wide uppercase opacity-80">
                        {cert.issuer}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
