import { motion } from "framer-motion";
import { type Skill } from "@shared/schema";

export function SkillCard({ skill, index }: { skill: Skill; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.05 }}
      whileHover={{ scale: 1.05, borderColor: "var(--primary)" }}
      className="glass-panel p-4 flex flex-col gap-2 group border border-white/5 hover:border-primary/50 transition-colors"
    >
      <div className="flex justify-between items-center">
        <h3 className="font-bold font-display uppercase tracking-wider text-lg group-hover:text-primary transition-colors">
          {skill.name}
        </h3>
        <span className="text-xs font-mono text-muted-foreground bg-white/5 px-2 py-1 rounded-full">
          {skill.category}
        </span>
      </div>
      
      <div className="w-full bg-white/10 h-1 mt-2 overflow-hidden">
        <motion.div 
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.proficiency}%` }}
          transition={{ duration: 1, delay: 0.2 + (index * 0.05) }}
          className="h-full bg-gradient-to-r from-primary to-accent shadow-[0_0_10px_var(--primary)]"
        />
      </div>
      <div className="flex justify-end">
        <span className="text-xs font-mono text-primary/80">{skill.proficiency}%</span>
      </div>
    </motion.div>
  );
}
