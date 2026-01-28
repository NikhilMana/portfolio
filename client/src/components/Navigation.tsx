import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/work", label: "Work" },
  { href: "/contact", label: "Contact" },
];

export function Navigation() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center p-6 md:p-8 mix-blend-difference text-white">
      <Link href="/" className="text-2xl font-bold tracking-tighter hover:text-primary transition-colors duration-300 font-display uppercase">
        VIBE<span className="text-primary">.DEV</span>
      </Link>

      {/* Desktop Nav */}
      <div className="hidden md:flex gap-8 items-center">
        {links.map((link) => (
          <Link key={link.href} href={link.href}>
            <div className={`relative cursor-pointer text-sm font-medium tracking-widest uppercase hover:text-primary transition-colors ${location === link.href ? "text-primary" : "text-white/80"}`}>
              {link.label}
              {location === link.href && (
                <motion.div
                  layoutId="underline"
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary shadow-[0_0_10px_#39FF14]"
                />
              )}
            </div>
          </Link>
        ))}
      </div>

      {/* Mobile Menu Button */}
      <button 
        className="md:hidden p-2 hover:text-primary transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X /> : <Menu />}
      </button>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-20 right-4 w-64 glass-panel p-6 flex flex-col gap-4 rounded-none border-l-4 border-primary shadow-[0_0_30px_rgba(0,0,0,0.5)] md:hidden"
          >
            {links.map((link) => (
              <Link key={link.href} href={link.href}>
                <div 
                  className={`text-xl font-bold uppercase tracking-wider cursor-pointer hover:text-primary hover:pl-2 transition-all duration-200 ${location === link.href ? "text-primary pl-2" : "text-white"}`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </div>
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
