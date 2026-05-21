import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Work from './components/Work';
import EducationAndCertifications from './components/EducationAndCertifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  const toggleResume = () => {
    setIsResumeOpen((prev) => !prev);
  };

  return (
    <div className="relative min-h-screen text-[#271813] bg-[#fff8f6] selection:bg-[#ffdbd1] selection:text-[#331108]">
      
      {/* Dynamic Glowing Ambient Blobs */}
      <div className="blob top-[-10%] left-[-10%] opacity-75"></div>
      <div 
        className="blob top-[35%] right-[-8%] opacity-55" 
        style={{ 
          background: 'radial-gradient(circle, rgba(239, 224, 207, 0.45) 0%, transparent 70%)', 
          animationDelay: '-6s' 
        }}
      ></div>
      <div 
        className="blob bottom-[5%] left-[10%] opacity-65" 
        style={{ 
          background: 'radial-gradient(circle, rgba(255, 202, 152, 0.25) 0%, transparent 70%)', 
          animationDelay: '-12s' 
        }}
      ></div>

      {/* Floating Header */}
      <Navbar onOpenResume={toggleResume} />

      {/* Hero Section */}
      <Hero onOpenResume={toggleResume} />

      {/* About Section */}
      <About />

      {/* Skills Section */}
      <Skills />

      {/* Works Section */}
      <Work />

      {/* Education & Certs */}
      <EducationAndCertifications />

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <Footer />

      {/* Interactive CV Panel */}
      <ResumeModal isOpen={isResumeOpen} onClose={toggleResume} />
      
    </div>
  );
}
