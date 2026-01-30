import { Scene } from "@/components/Scene";
import { Link } from "wouter";
import { ArrowRight, Terminal, Github, Linkedin, Mail, ChevronDown, Code2, Brain, Cpu } from "lucide-react";
import { motion } from "framer-motion";
import { GlitchText } from "@/components/GlitchText";

export default function Home() {
  return (
    <div className="relative w-full min-h-screen overflow-x-hidden">
      {/* Hero Section */}
      <div className="relative w-full h-screen flex items-center justify-center">
        <Scene />

        {/* Background Image Overlay */}
        <div
          className="absolute inset-0 z-0 opacity-20"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/70 to-black z-[1]" />

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center gap-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col gap-2"
          >
            <div className="flex items-center justify-center gap-2 text-primary font-mono mb-4 text-sm md:text-base bg-primary/10 border border-primary/20 px-4 py-1 w-fit mx-auto backdrop-blur-md">
              <Terminal size={14} />
              <span>ML_ENGINEER.AI</span>
            </div>

            <h1 className="text-5xl md:text-8xl font-black tracking-tighter leading-tight font-display text-white">
              <GlitchText text="NIKHIL" /> <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-white to-accent">
                MANA
              </span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-muted-foreground text-lg md:text-xl font-light max-w-2xl font-mono leading-relaxed"
          >
            Aspiring <span className="text-white">Machine Learning Engineer</span> building intelligent systems with <span className="text-secondary">AI & Computer Vision</span>.
            Ready to transform ideas into reality?
          </motion.p>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="flex gap-4"
          >
            <a
              href="https://github.com/NikhilMana"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 border border-white/20 hover:border-primary hover:bg-primary/10 transition-all duration-300 group"
            >
              <Github className="w-5 h-5 text-white/80 group-hover:text-primary transition-colors" />
            </a>
            <a
              href="https://linkedin.com/in/nikhilmana"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 border border-white/20 hover:border-secondary hover:bg-secondary/10 transition-all duration-300 group"
            >
              <Linkedin className="w-5 h-5 text-white/80 group-hover:text-secondary transition-colors" />
            </a>
            <a
              href="mailto:nikhilmana@example.com"
              className="p-3 border border-white/20 hover:border-accent hover:bg-accent/10 transition-all duration-300 group"
            >
              <Mail className="w-5 h-5 text-white/80 group-hover:text-accent transition-colors" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.9 }}
          >
            <Link href="/work">
              <button className="group relative px-8 py-4 bg-white text-black font-bold font-display uppercase tracking-widest text-sm hover:bg-primary transition-all duration-300 hover:shadow-[0_0_20px_#39FF14] hover:-translate-y-1 active:translate-y-0">
                <span className="flex items-center gap-2">
                  Explore Work <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute -inset-1 border border-white/20 group-hover:border-primary/50 -z-10 translate-x-1 translate-y-1 transition-transform group-hover:translate-x-2 group-hover:translate-y-2" />
              </button>
            </Link>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ChevronDown className="w-6 h-6 text-white/50" />
        </motion.div>

        <div className="absolute bottom-8 left-8 hidden md:block z-10">
          <div className="text-xs font-mono text-muted-foreground flex flex-col gap-1">
            <span>LOCATION: Bidar, Karnataka</span>
            <span>STATUS: <span className="text-primary">ONLINE</span></span>
          </div>
        </div>
      </div>

      {/* About Summary Section */}
      <section className="relative py-24 px-8 bg-gradient-to-b from-black to-black/95">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          >
            <div className="space-y-6">
              <h2 className="text-3xl md:text-5xl font-bold font-display">
                Building the <span className="text-primary">Future</span> with AI
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                I'm a B.E. Computer Science (AI & ML) student at Maharaja Institute of Technology, Mysore,
                passionate about building intelligent systems that solve real-world problems.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                From winning <span className="text-secondary font-semibold">TiE u Pitchfest 2025</span> with Sign Health
                to developing computer vision systems and AI-powered applications, I bring creativity and technical
                excellence to every project I undertake.
              </p>
              <Link href="/about">
                <button className="flex items-center gap-2 text-white font-bold uppercase tracking-wider hover:text-primary transition-colors group">
                  Learn More About Me
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
            </div>

            {/* Skills Preview */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Brain, label: "Machine Learning", desc: "TensorFlow, Deep Learning, CNN" },
                { icon: Cpu, label: "Computer Vision", desc: "OpenCV, Image Processing" },
                { icon: Code2, label: "Development", desc: "Python, Java, JavaScript" },
                { icon: Github, label: "Open Source", desc: "Active Contributor" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-6 border border-white/10 bg-white/5 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 group"
                >
                  <item.icon className="w-8 h-8 text-primary mb-3 group-hover:scale-110 transition-transform" />
                  <h3 className="font-bold text-white mb-1">{item.label}</h3>
                  <p className="text-xs text-muted-foreground font-mono">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 px-8 border-t border-white/5">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">
              Let's <span className="text-accent">Connect</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Interested in collaborating on AI/ML projects or discussing opportunities?
              I'm always open to new challenges and connections.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Link href="/contact">
              <button className="px-8 py-4 bg-primary text-black font-bold uppercase tracking-widest text-sm hover:bg-primary/80 transition-all duration-300">
                Get In Touch
              </button>
            </Link>
            <a
              href="https://linkedin.com/in/nikhilmana"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border border-white/20 text-white font-bold uppercase tracking-widest text-sm hover:border-secondary hover:text-secondary transition-all duration-300 flex items-center gap-2"
            >
              <Linkedin className="w-4 h-4" /> LinkedIn
            </a>
            <a
              href="https://github.com/NikhilMana"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border border-white/20 text-white font-bold uppercase tracking-widest text-sm hover:border-primary hover:text-primary transition-all duration-300 flex items-center gap-2"
            >
              <Github className="w-4 h-4" /> GitHub
            </a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-8 border-t border-white/5">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-muted-foreground font-mono">
            © 2025 Nikhil Mana. Built with React & Three.js
          </div>
          <div className="flex gap-6">
            <a href="https://github.com/NikhilMana" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com/in/nikhilmana" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-secondary transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="mailto:nikhilmana@example.com" className="text-muted-foreground hover:text-accent transition-colors">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
