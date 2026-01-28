import { Link } from "wouter";
import { AlertTriangle } from "lucide-react";
import { GlitchText } from "@/components/GlitchText";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-background flex-col gap-8 p-4 text-center">
      <div className="text-primary animate-pulse">
        <AlertTriangle size={64} />
      </div>
      
      <h1 className="text-8xl font-black font-display text-white">
        <GlitchText text="404" />
      </h1>
      
      <div className="font-mono text-muted-foreground max-w-md">
        <p className="mb-2">SYSTEM ERROR: SECTOR NOT FOUND.</p>
        <p>The coordinates you entered lead to a void in the simulation.</p>
      </div>

      <Link href="/">
        <button className="px-8 py-3 border border-primary text-primary font-mono uppercase hover:bg-primary hover:text-black transition-all hover:shadow-[0_0_20px_var(--primary)]">
          Return to Base
        </button>
      </Link>
    </div>
  );
}
