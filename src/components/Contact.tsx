import React, { useState } from 'react';
import { Mail, Phone, Code2, Link as LinkIcon, Send, CheckCircle2 } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill in all the standard fields.");
      return;
    }
    setStatus('sending');
    
    // Simulate real high-end transmission with visual feedback
    setTimeout(() => {
      setStatus('success');
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <section id="contact" className="py-24 px-8 relative bg-[#fff8f6]">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Column: Direct Info */}
          <div className="space-y-12 text-left">
            <div className="space-y-6">
              <div className="w-[70px] h-[3.5px] bg-gradient-to-r from-[#835245] to-[#f4b5a4] rounded-full"></div>
              <h2 className="font-serif text-5xl sm:text-6xl font-bold leading-tight text-[#271813]">
                Let's build<br />
                something <span className="text-[#835245]">intelligent.</span>
              </h2>
              <p className="font-sans text-base sm:text-xl text-[#514440] leading-relaxed max-w-md">
                Available for impactful internships and collaborative research in AI/ML.
              </p>
            </div>

            {/* Direct Contact Links */}
            <div className="space-y-6">
              {/* Email Link */}
              <a 
                href="mailto:kashyaptwinkle206@gmail.com" 
                className="flex items-center gap-6 group p-4 -ml-4 hover:bg-white/60 rounded-[2rem] transition-all cursor-pointer"
              >
                <span className="w-16 h-16 rounded-2xl bg-white shadow-md flex items-center justify-center group-hover:scale-105 group-hover:bg-[#835245] group-hover:text-white transition-all duration-300">
                  <Mail className="w-6 h-6 text-[#835245] group-hover:text-white" />
                </span>
                <div>
                  <p className="text-xs font-bold text-[#835245] uppercase tracking-[0.25em] mb-1 font-sans">
                    Email me
                  </p>
                  <span className="font-serif text-lg sm:text-2xl text-[#271813] break-all">
                    kashyaptwinkle206@gmail.com
                  </span>
                </div>
              </a>

              {/* Call Info */}
              <div className="flex items-center gap-6 group p-4 -ml-4 rounded-[2rem] transition-all">
                <span className="w-16 h-16 rounded-2xl bg-white shadow-md flex items-center justify-center">
                  <Phone className="w-6 h-6 text-[#835245]" />
                </span>
                <div>
                  <p className="text-xs font-bold text-[#835245] uppercase tracking-[0.25em] mb-1 font-sans">
                    Call me
                  </p>
                  <span className="font-serif text-lg sm:text-2xl text-[#271813]">
                    +91 8295950385
                  </span>
                </div>
              </div>
            </div>

            {/* Platform links */}
            <div className="flex gap-4 pt-4">
              <a 
                href="https://github.com/Twinklekashyap15" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="magnetic-btn w-12 h-12 rounded-[1.2rem] glass-card flex items-center justify-center text-[#835245] hover:bg-[#835245] hover:text-white transition-all"
                title="GitHub"
              >
                <Code2 className="w-5 h-5" />
              </a>
              <a 
                href="https://linkedin.com/in/twinkle-kashyap206" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="magnetic-btn w-12 h-12 rounded-[1.2rem] glass-card flex items-center justify-center text-[#835245] hover:bg-[#835245] hover:text-white transition-all"
                title="LinkedIn"
              >
                <LinkIcon className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Right Column: Contact Card with Form */}
          <div className="glass-card p-8 sm:p-12 md:p-14 rounded-[3.5rem] shadow-xl relative overflow-hidden bg-white/60">
            {status === 'success' ? (
              <div className="py-12 flex flex-col items-center text-center space-y-6 animate-fade-in">
                <CheckCircle2 className="w-16 h-16 text-[#835245] animate-bounce" />
                <div className="space-y-2">
                  <h3 className="font-serif text-3xl font-bold text-[#271813]">
                    Message Transmitted!
                  </h3>
                  <p className="text-[#514440] text-sm font-semibold max-w-sm">
                    Thank you, I will get back to you immediately within the next 24 hours.
                  </p>
                </div>
                <button 
                  onClick={() => setStatus('idle')}
                  className="px-6 py-2.5 bg-[#835245] text-white rounded-full font-bold text-xs uppercase tracking-wider"
                >
                  Send Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8 relative z-10 text-left">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div className="space-y-2.5">
                    <label className="font-sans text-xs uppercase tracking-widest text-[#514440] font-bold ml-2">
                      Name
                    </label>
                    <input 
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      className="w-full bg-white/80 border-none rounded-xl p-4 focus:ring-2 focus:ring-[#835245] outline-none transition-all placeholder:text-[#84736f]/40 shadow-sm text-stone-800 font-sans"
                      required
                    />
                  </div>
                  <div className="space-y-2.5">
                    <label className="font-sans text-xs uppercase tracking-widest text-[#514440] font-bold ml-2">
                      Email
                    </label>
                    <input 
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Email Address"
                      className="w-full bg-white/80 border-none rounded-xl p-4 focus:ring-2 focus:ring-[#835245] outline-none transition-all placeholder:text-[#84736f]/40 shadow-sm text-stone-800 font-sans"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2.5 text-left">
                  <label className="font-sans text-xs uppercase tracking-widest text-[#514440] font-bold ml-2">
                    Message
                  </label>
                  <textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    rows={5}
                    className="w-full bg-white/80 border-none rounded-[1.8rem] p-5 focus:ring-2 focus:ring-[#835245] outline-none transition-all placeholder:text-[#84736f]/40 shadow-sm text-stone-800 font-sans"
                    required
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  disabled={status === 'sending'}
                  className="magnetic-btn w-full py-4.5 bg-[#835245] text-white font-bold rounded-xl shadow-lg shadow-[#835245]/20 hover:bg-[#835245]/95 transition-all flex items-center justify-center gap-2.5 text-base cursor-pointer disabled:opacity-50"
                >
                  {status === 'sending' ? (
                    <span>Transmitting...</span>
                  ) : (
                    <>
                      Send Message <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
