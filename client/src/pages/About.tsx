import { PageTransition } from "@/components/PageTransition";
import { GlitchText } from "@/components/GlitchText";
import { useSkills, useEducation } from "@/hooks/use-portfolio";
import { SkillCard } from "@/components/SkillCard";
import { motion } from "framer-motion";
import { GraduationCap, Code2, Cpu } from "lucide-react";

export default function About() {
  const { data: skills, isLoading: skillsLoading } = useSkills();
  const { data: education, isLoading: educationLoading } = useEducation();

  return (
    <PageTransition>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Left Column: Bio & Education */}
        <div className="space-y-16">
          <section>
            <h1 className="text-4xl md:text-6xl font-bold mb-8 font-display">
              <GlitchText text="WHO AM I?" />
            </h1>
            <div className="prose prose-invert prose-lg font-light text-muted-foreground leading-relaxed">
              <p className="mb-4">
                I'm Nikhil Mana, an aspiring Machine Learning Engineer pursuing B.E. in Computer Science (AI & ML) 
                at Maharaja Institute of Technology, Mysore. I'm passionate about building intelligent systems 
                that solve real-world problems.
              </p>
              <p>
                My philosophy is simple: <span className="text-primary font-bold">Innovation through AI.</span> 
                From winning TiE u Pitchfest 2025 with Sign Health to leading Python workshops for 50+ participants, 
                I bring creativity and technical excellence to every project I undertake.
              </p>
            </div>
            
            {/* Stats / Traits */}
            <div className="grid grid-cols-3 gap-4 mt-8">
              {[
                { label: "HACKATHONS", val: "36+ HRS" },
                { label: "CGPA", val: "8.0+" },
                { label: "PROJECTS", val: "10+" }
              ].map((stat, i) => (
                <div key={i} className="border border-white/10 p-4 text-center bg-white/5">
                  <div className="text-xs text-muted-foreground font-mono mb-1">{stat.label}</div>
                  <div className="text-xl font-bold text-accent font-display">{stat.val}</div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <div className="flex items-center gap-4 mb-6">
              <GraduationCap className="text-secondary w-8 h-8" />
              <h2 className="text-2xl font-bold text-white">Education</h2>
            </div>
            
            <div className="space-y-6 relative border-l border-white/10 pl-8 ml-3">
              {educationLoading ? (
                <div className="text-muted-foreground font-mono animate-pulse">Loading data source...</div>
              ) : (
                education?.map((edu, i) => (
                  <motion.div 
                    key={edu.id}
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: i * 0.1 }}
                    className="relative"
                  >
                    <div className="absolute -left-[39px] top-1 w-5 h-5 bg-black border-2 border-secondary rounded-full flex items-center justify-center">
                      <div className="w-1.5 h-1.5 bg-secondary rounded-full" />
                    </div>
                    <h3 className="text-xl font-bold text-white">{edu.school}</h3>
                    <div className="text-secondary font-mono text-sm mb-1">{edu.degree}</div>
                    <div className="text-muted-foreground text-sm font-mono">{edu.year}</div>
                  </motion.div>
                ))
              )}
            </div>
          </section>
        </div>

        {/* Right Column: Skills */}
        <div className="space-y-8">
          <section>
             <div className="flex items-center gap-4 mb-8">
              <Cpu className="text-primary w-8 h-8" />
              <h2 className="text-2xl font-bold text-white">Tech Stack</h2>
            </div>

            {skillsLoading ? (
              <div className="grid grid-cols-2 gap-4">
                {[1,2,3,4,5,6].map(i => (
                  <div key={i} className="h-24 bg-white/5 animate-pulse border border-white/5" />
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {skills?.map((skill, index) => (
                  <SkillCard key={skill.id} skill={skill} index={index} />
                ))}
              </div>
            )}
          </section>

          {/* Decorative element */}
          <div className="p-8 border border-accent/20 bg-accent/5 mt-8 backdrop-blur-sm relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-accent/0 via-accent/10 to-accent/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
            <Code2 className="w-12 h-12 text-accent mb-4" />
            <h3 className="text-xl font-bold text-white mb-2 font-display">ALWAYS LEARNING</h3>
            <p className="text-sm text-muted-foreground font-mono">
              Currently exploring Agentic AI, advanced Deep Learning architectures, and Computer Vision to push the boundaries of intelligent systems.
            </p>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
