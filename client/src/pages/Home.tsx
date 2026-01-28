import { Scene } from "@/components/Scene";
import { Link } from "wouter";
import { ArrowRight, Terminal } from "lucide-react";
import { motion } from "framer-motion";
import { GlitchText } from "@/components/GlitchText";

export default function Home() {
  return (
    <div className="relative w-full h-screen overflow-hidden flex items-center justify-center">
      <Scene />
      
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center gap-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col gap-2"
        >
          <div className="flex items-center justify-center gap-2 text-primary font-mono mb-4 text-sm md:text-base bg-primary/10 border border-primary/20 px-4 py-1 w-fit mx-auto backdrop-blur-md">
            <Terminal size={14} />
            <span>FULLSTACK_CREATIVE.TSX</span>
          </div>
          
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter leading-tight font-display text-white mix-blend-screen">
            <GlitchText text="DIGITAL" /> <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-white to-accent animate-pulse">
              ALCHEMIST
            </span>
          </h1>
        </motion.div>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-muted-foreground text-lg md:text-xl font-light max-w-2xl font-mono leading-relaxed"
        >
          Building immersive web experiences where <span className="text-white">design</span> meets <span className="text-secondary">code</span>. 
          Ready to break the simulation?
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8 }}
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

      <div className="absolute bottom-8 left-8 hidden md:block">
        <div className="text-xs font-mono text-muted-foreground flex flex-col gap-1">
          <span>COORDS: 34.0522° N, 118.2437° W</span>
          <span>SYSTEM: ONLINE</span>
        </div>
      </div>
    </div>
  );
}
