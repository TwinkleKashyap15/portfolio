import { Link, Github, ArrowRight } from 'lucide-react';
import { projectsData } from '../data';

export default function Work() {
  const featuredProject = projectsData.find(p => p.featured);
  const regularProjects = projectsData.filter(p => !p.featured);

  return (
    <section id="projects" className="py-24 px-8 relative bg-[#fff8f6]">
      <div className="max-w-[1200px] mx-auto">
        
        {/* Header Block with CTA */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-16 gap-6">
          <div className="max-w-xl space-y-6 text-left">
            <div className="w-[70px] h-[3.5px] bg-gradient-to-r from-[#835245] to-[#f4b5a4] rounded-full"></div>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-[#271813]">
              Selected Work
            </h2>
            <p className="font-sans text-base sm:text-lg text-[#514440] opacity-90 leading-relaxed">
              Practical implementations across AI, Data Science, and full-stack ecosystems.
            </p>
          </div>
          
          <a 
            href="https://github.com/Twinklekashyap15" 
            target="_blank"
            rel="noopener noreferrer"
            className="magnetic-btn group flex items-center gap-3 text-[#835245] font-bold text-xs uppercase tracking-widest bg-white px-6 py-3.5 rounded-full border border-[#835245]/20 shadow-sm hover:shadow-md transition-all whitespace-nowrap"
          >
            See all projects 
            <span className="w-8 h-8 rounded-full bg-[#ffdbd1]/60 flex items-center justify-center group-hover:bg-[#835245] group-hover:text-white transition-all text-[#835245]">
              <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </a>
        </div>

        {/* Projects Layout Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          
          {/* Featured Project */}
          {featuredProject && (
            <div className="md:col-span-12 group glass-card rounded-[3rem] overflow-hidden">
              <div className="flex flex-col lg:flex-row">
                {/* Image Section */}
                <div className="lg:w-1/2 h-[340px] sm:h-[400px] overflow-hidden relative">
                  <img 
                    src={featuredProject.image} 
                    alt={featuredProject.title} 
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-102"
                  />
                  <div className="absolute inset-0 bg-[#835245]/15 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
                    <span className="px-6 py-2.5 bg-white text-[#835245] rounded-full text-xs font-bold shadow-lg">
                      View Repository
                    </span>
                  </div>
                </div>
                
                {/* Details Section */}
                <div className="lg:w-1/2 p-8 sm:p-12 flex flex-col justify-center text-left">
                  <div className="flex gap-2.5 mb-5">
                    {featuredProject.tags.map(tag => (
                      <span 
                        key={tag}
                        className="px-4 py-1 bg-[#ffdbd1] text-[10px] uppercase font-bold tracking-widest rounded-full text-[#673b2f]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <h3 className="font-serif text-3xl sm:text-4xl font-bold text-[#271813] mb-4">
                    {featuredProject.title}
                  </h3>
                  
                  <p className="text-[#514440] text-sm sm:text-base leading-relaxed mb-6 font-sans">
                    {featuredProject.description}
                  </p>
                  
                  {/* Action Link Icons */}
                  <div className="flex gap-3">
                    <a 
                      href={featuredProject.link} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-11 h-11 rounded-full border border-[#835245]/20 flex items-center justify-center text-[#835245] hover:bg-[#835245] hover:text-white transition-all shadow-sm"
                      title="Live Demo"
                    >
                      <Link className="w-4 h-4" />
                    </a>
                    <a 
                      href={featuredProject.github} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-11 h-11 rounded-full border border-[#835245]/20 flex items-center justify-center text-[#835245] hover:bg-[#835245] hover:text-white transition-all shadow-sm"
                      title="Source Code"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Regular Projects */}
          {regularProjects.map((project) => (
            <div 
              key={project.id} 
              className="md:col-span-6 group glass-card rounded-[2.5rem] overflow-hidden flex flex-col"
            >
              {/* Thumbnail Image */}
              <div className="relative h-64 sm:h-72 overflow-hidden bg-stone-100">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-102"
                />
                <div className="absolute inset-0 bg-[#7d562d]/15 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white text-[#7d562d] rounded-full shadow-lg"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Text Body */}
              <div className="p-8 flex-grow flex flex-col justify-between text-left">
                <div className="space-y-4">
                  <div className="flex gap-2">
                    {project.tags.map(tag => (
                      <span 
                        key={tag}
                        className="px-4 py-1 bg-[#ffdbd1]/50 text-[10px] uppercase font-bold text-[#673b2f] rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-[#271813] max-w-[90%]">
                    {project.title}
                  </h3>
                  <p className="text-[#514440] text-sm leading-relaxed font-sans line-clamp-3">
                    {project.description}
                  </p>
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
