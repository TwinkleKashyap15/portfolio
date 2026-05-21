import { X, Printer, Download, Mail, Phone, MapPin, Award, Terminal, Code2, Hammer } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Overlay backdrop */}
      <div 
        className="absolute inset-0 bg-[#3e2c26]/60 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Canvas */}
      <div className="relative bg-white w-full max-w-[850px] max-h-[90vh] overflow-y-auto rounded-[2rem] shadow-2xl border border-[#ffdbd1]/15 z-10 flex flex-col my-4">
        
        {/* Sticky Control Header */}
        <div className="sticky top-0 bg-white border-b border-[#ffe2d9] px-8 py-4 flex justify-between items-center z-20">
          <h3 className="font-serif text-lg md:text-xl font-bold text-[#835245]">
            Curriculum Vitae
          </h3>
          <div className="flex gap-2">
            <button 
              onClick={handlePrint}
              style={{ contentVisibility: 'auto' }}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#ffdbd1]/50 text-[#835245] hover:bg-[#835245] hover:text-white transition-all text-xs font-bold"
              title="Print Resume"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print/PDF</span>
            </button>
            <button 
              onClick={onClose}
              className="p-1 px-2.5 rounded-full bg-stone-100 text-stone-600 hover:bg-[#ba1a1a] hover:text-white transition-all text-xs font-bold font-sans"
              title="Close Panel"
            >
              <X className="w-4 h-4 inline" /> Close
            </button>
          </div>
        </div>

        {/* Printable/Scrollable Resume Content */}
        <div id="printable-resume" className="p-8 md:p-12 space-y-10 text-left font-sans select-text">
          
          {/* Resume Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 border-b border-stone-100 pb-8">
            <div className="space-y-2">
              <h1 className="font-serif text-4xl font-bold text-[#271813]">
                TWINKLE
              </h1>
              <h2 className="text-[#835245] text-sm font-bold uppercase tracking-widest font-sans">
                AI &amp; Data Science Student • Student Engineer
              </h2>
            </div>
            
            <div className="space-y-1.5 text-stone-600 text-xs font-semibold">
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#835245]" />
                <a href="mailto:kashyaptwinkle206@gmail.com" className="hover:underline">kashyaptwinkle206@gmail.com</a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#835245]" />
                <span>+91 8295950385</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#835245]" />
                <span>Haryana, India</span>
              </div>
            </div>
          </div>

          {/* Core Profile */}
          <div className="space-y-3">
            <h3 className="font-serif text-lg font-bold text-[#835245] uppercase tracking-wide border-b border-stone-100 pb-1.5 flex items-center gap-2">
              Professional Summary
            </h3>
            <p className="text-stone-600 text-sm leading-relaxed">
              Enthusiastic and analytical B.Tech Artificial Intelligence &amp; Data Science student at Arya College of Engineering &amp; IT with a strong foundation in deep learning, algorithm design, and software systems. Skilled at leveraging Python, data structures, and web technologies to develop intelligent, user-centric systems. Proven track record of high academic performance and validated technical expertise.
            </p>
          </div>

          {/* Education Timeline */}
          <div className="space-y-4">
            <h3 className="font-serif text-lg font-bold text-[#835245] uppercase tracking-wide border-b border-stone-100 pb-1.5 flex items-center gap-2">
              Education
            </h3>
            
            <div className="space-y-6">
              <div className="relative pl-6 border-l-2 border-[#ffdbd1] space-y-1">
                <span className="text-stone-400 text-xs font-bold block">2021 — PRESENT</span>
                <h4 className="font-serif text-base font-bold text-stone-800">B.Tech in Artificial Intelligence &amp; Data Science</h4>
                <p className="text-stone-600 text-xs font-semibold">Arya College of Engineering &amp; IT</p>
                <div className="inline-block mt-1 text-xs font-bold text-[#835245]">CGPA: 9.0 (Current)</div>
              </div>

              <div className="relative pl-6 border-l-2 border-[#ffdbd1] space-y-1">
                <span className="text-stone-400 text-xs font-bold block">2021 — 2022</span>
                <h4 className="font-serif text-base font-bold text-stone-800">Intermediate (Science)</h4>
                <p className="text-stone-600 text-xs font-semibold">St. Mary's Convent Sr. Sec. School</p>
                <div className="inline-block mt-1 text-xs font-medium text-stone-500">Percentage: 77.6%</div>
              </div>
            </div>
          </div>

          {/* Technical Arsenal Grid */}
          <div className="space-y-4">
            <h3 className="font-serif text-lg font-bold text-[#835245] uppercase tracking-wide border-b border-stone-100 pb-1.5 flex items-center gap-2">
              Technical Skillset
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-2 p-4 bg-stone-50 rounded-xl">
                <div className="flex items-center gap-2 text-[#835245] font-serif font-bold text-sm">
                  <Code2 className="w-4 h-4" /> Programming
                </div>
                <div className="flex flex-wrap gap-1.5">
                  <span className="px-2 py-0.5 bg-white rounded border border-stone-100 text-xs font-medium text-stone-600">Python</span>
                  <span className="px-2 py-0.5 bg-white rounded border border-stone-100 text-xs font-medium text-stone-600">C++</span>
                  <span className="px-2 py-0.5 bg-white rounded border border-stone-100 text-xs font-medium text-stone-600">Java</span>
                  <span className="px-2 py-0.5 bg-white rounded border border-stone-100 text-xs font-medium text-stone-600">SQL</span>
                </div>
              </div>

              <div className="space-y-2 p-4 bg-stone-50 rounded-xl">
                <div className="flex items-center gap-2 text-[#7d562d] font-serif font-bold text-sm">
                  <Terminal className="w-4 h-4" /> Development
                </div>
                <div className="flex flex-wrap gap-1.5">
                  <span className="px-2 py-0.5 bg-white rounded border border-stone-100 text-xs font-medium text-stone-600">HTML5</span>
                  <span className="px-2 py-0.5 bg-white rounded border border-stone-100 text-xs font-medium text-stone-600">CSS3</span>
                  <span className="px-2 py-0.5 bg-white rounded border border-stone-100 text-xs font-medium text-stone-600">JavaScript</span>
                </div>
              </div>

              <div className="space-y-2 p-4 bg-stone-50 rounded-xl">
                <div className="flex items-center gap-2 text-[#675d4f] font-serif font-bold text-sm">
                  <Hammer className="w-4 h-4" /> Infrastructure
                </div>
                <div className="flex flex-wrap gap-1.5">
                  <span className="px-2 py-0.5 bg-white rounded border border-stone-100 text-xs font-medium text-stone-600">Git/GitHub</span>
                  <span className="px-2 py-0.5 bg-white rounded border border-stone-100 text-xs font-medium text-stone-600">VS Code</span>
                  <span className="px-2 py-0.5 bg-white rounded border border-stone-100 text-xs font-medium text-stone-600">Canva</span>
                </div>
              </div>
            </div>
          </div>

          {/* Highlight Key Projects */}
          <div className="space-y-4">
            <h3 className="font-serif text-lg font-bold text-[#835245] uppercase tracking-wide border-b border-stone-100 pb-1.5 flex items-center gap-2">
              Key Projects
            </h3>
            
            <div className="space-y-4 text-xs sm:text-sm">
              <div>
                <h4 className="font-serif font-bold text-stone-800">Smart Energy Monitoring</h4>
                <p className="text-stone-500 font-medium text-xs mb-1">Stack: Python, IoT, Machine Learning</p>
                <p className="text-stone-600">An IoT-based ecosystem developed to track real-time power consumption with intelligent, automated efficiency recommendations powered by predictive modeling.</p>
              </div>
              <div>
                <h4 className="font-serif font-bold text-stone-800">Mother-First</h4>
                <p className="text-stone-500 font-medium text-xs mb-1">Stack: React Native, Frontend Development</p>
                <p className="text-stone-600">Holistic digital health platform focused on maternal wellness, medical scheduling, and prenatal tracking.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
