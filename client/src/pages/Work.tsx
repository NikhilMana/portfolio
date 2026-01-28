import { PageTransition } from "@/components/PageTransition";
import { GlitchText } from "@/components/GlitchText";
import { useProjects, useExperience } from "@/hooks/use-portfolio";
import { motion } from "framer-motion";
import { ExternalLink, Briefcase, Calendar } from "lucide-react";

export default function Work() {
  const { data: projects, isLoading: projectsLoading } = useProjects();
  const { data: experience, isLoading: experienceLoading } = useExperience();

  return (
    <PageTransition>
      <div className="space-y-24">
        {/* Projects Section */}
        <section>
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-white/10 pb-8">
            <h1 className="text-4xl md:text-6xl font-bold font-display">
              <GlitchText text="SELECTED_WORKS" />
            </h1>
            <span className="font-mono text-primary text-sm hidden md:block">
              // SCROLL_TO_EXPLORE
            </span>
          </div>

          {projectsLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[1, 2].map(i => (
                <div key={i} className="aspect-video bg-white/5 animate-pulse border border-white/10" />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-16">
              {projects?.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                  className="group grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
                >
                  {/* Image Side */}
                  <div className={`lg:col-span-7 relative overflow-hidden ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <div className="aspect-video bg-muted relative overflow-hidden border border-white/10 group-hover:border-primary/50 transition-colors">
                      {/* Using Unsplash placeholder if URL is not absolute (assuming dummy data might not have real images) */}
                      {/* Portfolio Project Image */}
                      <img 
                        src={project.imageUrl || `https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&q=80`} 
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 saturate-0 group-hover:saturate-100"
                      />
                      <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity mix-blend-overlay" />
                    </div>
                  </div>

                  {/* Content Side */}
                  <div className={`lg:col-span-5 flex flex-col gap-6 ${index % 2 === 1 ? 'lg:order-1 lg:text-right items-end' : ''}`}>
                    <div>
                      <h2 className="text-3xl md:text-5xl font-bold font-display text-white mb-2 group-hover:text-primary transition-colors">
                        {project.title}
                      </h2>
                      <div className={`h-1 w-20 bg-secondary ${index % 2 === 1 ? 'ml-auto' : ''}`} />
                    </div>
                    
                    <p className="text-muted-foreground font-light leading-relaxed">
                      {project.description}
                    </p>

                    <div className={`flex flex-wrap gap-2 ${index % 2 === 1 ? 'justify-end' : ''}`}>
                      {project.techStack.map((tech, i) => (
                        <span key={i} className="px-3 py-1 text-xs font-mono uppercase border border-white/20 text-white/80 bg-white/5">
                          {tech}
                        </span>
                      ))}
                    </div>

                    {project.link && (
                      <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noreferrer"
                        className="flex items-center gap-2 text-white font-bold uppercase tracking-wider hover:text-accent transition-colors mt-2"
                      >
                        Visit Project <ExternalLink size={16} />
                      </a>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </section>

        {/* Experience Section */}
        <section className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-12">
             <Briefcase className="w-8 h-8 text-secondary" />
             <h2 className="text-3xl font-bold font-display">WORK_HISTORY</h2>
          </div>
          
          <div className="space-y-8">
             {experienceLoading ? (
               <div className="space-y-4">
                 {[1,2,3].map(i => <div key={i} className="h-32 bg-white/5 animate-pulse" />)}
               </div>
             ) : (
               experience?.map((job, index) => (
                 <motion.div
                   key={job.id}
                   initial={{ opacity: 0, x: -20 }}
                   whileInView={{ opacity: 1, x: 0 }}
                   transition={{ delay: index * 0.1 }}
                   className="glass-panel p-8 border-l-4 border-l-secondary hover:border-l-primary transition-colors group"
                 >
                   <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                     <div>
                       <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors">{job.title}</h3>
                       <div className="text-lg text-white/80">{job.company}</div>
                     </div>
                     <div className="flex items-center gap-2 text-sm font-mono text-muted-foreground bg-white/5 px-3 py-1 rounded-sm w-fit">
                        <Calendar size={14} />
                        {job.period}
                     </div>
                   </div>
                   <p className="text-muted-foreground leading-relaxed">
                     {job.description}
                   </p>
                 </motion.div>
               ))
             )}
          </div>
        </section>
      </div>
    </PageTransition>
  );
}
