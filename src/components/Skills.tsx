import { Code2, Terminal, Hammer } from 'lucide-react';
import { skillsData } from '../data';

export default function Skills() {
  const getIcon = (iconName: string, color: string) => {
    switch (iconName) {
      case 'Code2':
        return <Code2 className={`w-8 h-8 ${color === 'primary' ? 'text-[#835245]' : color === 'secondary' ? 'text-[#7d562d]' : 'text-[#675d4f]'}`} />;
      case 'Terminal':
        return <Terminal className={`w-8 h-8 ${color === 'primary' ? 'text-[#835245]' : color === 'secondary' ? 'text-[#7d562d]' : 'text-[#675d4f]'}`} />;
      case 'Hammer':
        return <Hammer className={`w-8 h-8 ${color === 'primary' ? 'text-[#835245]' : color === 'secondary' ? 'text-[#7d562d]' : 'text-[#675d4f]'}`} />;
      default:
        return <Code2 className="w-8 h-8 text-[#835245]" />;
    }
  };

  const getColors = (color: string) => {
    switch (color) {
      case 'primary':
        return {
          bg: 'bg-[#ffdbd1]/35 hover:bg-[#835245]',
          border: 'border-[#ffdbd1]/30 hover:border-[#835245]',
          shadow: 'shadow-[#835245]/5'
        };
      case 'secondary':
        return {
          bg: 'bg-[#ffdcbd]/35 hover:bg-[#7d562d]',
          border: 'border-[#ffdcbd]/30 hover:border-[#7d562d]',
          shadow: 'shadow-[#7d562d]/5'
        };
      case 'tertiary':
        return {
          bg: 'bg-[#efe0cf]/40 hover:bg-[#675d4f]',
          border: 'border-[#efe0cf]/30 hover:border-[#675d4f]',
          shadow: 'shadow-[#675d4f]/5'
        };
      default:
        return {
          bg: 'bg-[#ffdbd1]/40 hover:bg-[#835245]',
          border: 'border-[#ffdbd1]/30 hover:border-[#835245]',
          shadow: 'shadow-[#835245]/5'
        };
    }
  };

  return (
    <section id="skills" className="py-24 px-8 bg-[#fff1ed]/20 relative">
      <div className="max-w-[1200px] mx-auto">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-16 space-y-6">
          <div className="w-[70px] h-[3.5px] bg-gradient-to-r from-[#835245] to-[#f4b5a4] rounded-full"></div>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-[#271813]">
            Technical Arsenal
          </h2>
          <p className="font-sans text-base sm:text-lg text-[#514440] opacity-90 leading-relaxed">
            A curated stack of technologies I leverage to architect intelligent, data-driven solutions.
          </p>
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillsData.map((category) => {
            const styles = getColors(category.color);
            return (
              <div 
                key={category.id} 
                className="glass-card p-10 rounded-[2.5rem] flex flex-col items-start group border-none"
              >
                {/* Icon wrapper */}
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 transition-all duration-500 ${styles.bg}`}>
                  <div className="group-hover:text-white transition-all duration-300">
                    {getIcon(category.icon, category.color)}
                  </div>
                </div>

                <h3 className="font-serif text-2xl font-bold text-[#271813] mb-6">
                  {category.name}
                </h3>

                {/* Sub tags */}
                <div className="flex flex-wrap gap-2.5">
                  {category.skills.map((skill) => (
                    <span 
                      key={skill}
                      className={`px-5 py-2 bg-white rounded-full text-xs font-semibold shadow-sm border text-[#514440] transition-all duration-300 cursor-default ${styles.border}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
