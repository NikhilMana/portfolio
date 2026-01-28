import { PageTransition } from "@/components/PageTransition";
import { GlitchText } from "@/components/GlitchText";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertMessageSchema } from "@shared/schema";
import { useSendMessage } from "@/hooks/use-portfolio";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";
import { Send, Mail, Github, Twitter, Linkedin, Loader2 } from "lucide-react";
import { z } from "zod";

// Frontend validation schema matching the backend insert schema
const contactFormSchema = insertMessageSchema;
type ContactFormData = z.infer<typeof contactFormSchema>;

export default function Contact() {
  const { toast } = useToast();
  const sendMessage = useSendMessage();
  
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: ""
    }
  });

  function onSubmit(data: ContactFormData) {
    sendMessage.mutate(data, {
      onSuccess: () => {
        toast({
          title: "TRANSMISSION SUCCESSFUL",
          description: "Your message has been received. I'll respond shortly.",
          className: "bg-black border-primary text-primary font-mono",
        });
        form.reset();
      },
      onError: (error) => {
        toast({
          title: "TRANSMISSION FAILED",
          description: error.message,
          variant: "destructive",
          className: "font-mono"
        });
      }
    });
  }

  return (
    <PageTransition>
      <div className="max-w-6xl mx-auto min-h-[80vh] flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Info Side */}
          <div className="space-y-8">
            <div>
              <h1 className="text-5xl md:text-7xl font-bold font-display mb-6">
                <GlitchText text="LET'S_TALK" />
              </h1>
              <p className="text-xl text-muted-foreground font-light max-w-md">
                Have a project in mind or just want to vibe? Send a signal. I'm always open to new collaborations and chaotic good ideas.
              </p>
            </div>

            <div className="space-y-4">
              <a href="mailto:nikhilmana22@gmail.com" className="flex items-center gap-4 text-white hover:text-primary transition-colors group">
                <div className="w-12 h-12 glass-panel flex items-center justify-center border border-white/10 group-hover:border-primary">
                  <Mail className="w-5 h-5" />
                </div>
                <span className="font-mono text-lg">nikhilmana22@gmail.com</span>
              </a>
            </div>

            <div className="pt-8 border-t border-white/10">
              <h3 className="text-sm font-mono text-muted-foreground mb-4 uppercase tracking-widest">Social Uplinks</h3>
              <div className="flex gap-4">
                {[
                  { icon: Github, href: "https://github.com/NikhilMana" },
                  { icon: Twitter, href: "https://twitter.com" },
                  { icon: Linkedin, href: "https://www.linkedin.com/in/nikhil-mana-078a732a7/" }
                ].map((social, i) => (
                  <a 
                    key={i} 
                    href={social.href} 
                    target="_blank" 
                    rel="noreferrer"
                    className="w-12 h-12 bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-primary hover:text-black hover:-translate-y-1 transition-all duration-300"
                  >
                    <social.icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="glass-panel p-8 md:p-10 border border-white/10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 blur-3xl -z-10" />
            
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="space-y-2">
                <label className="text-xs font-mono uppercase tracking-wider text-muted-foreground">Identity</label>
                <input
                  {...form.register("name")}
                  className="w-full bg-black/50 border border-white/10 p-4 text-white focus:outline-none focus:border-primary focus:shadow-[0_0_15px_rgba(57,255,20,0.1)] transition-all placeholder:text-white/20"
                  placeholder="John Doe"
                />
                {form.formState.errors.name && (
                  <span className="text-destructive text-xs font-mono">{form.formState.errors.name.message}</span>
                )}
              </div>

              <div className="space-y-2">
                <label className="text-xs font-mono uppercase tracking-wider text-muted-foreground">Frequency (Email)</label>
                <input
                  {...form.register("email")}
                  className="w-full bg-black/50 border border-white/10 p-4 text-white focus:outline-none focus:border-primary focus:shadow-[0_0_15px_rgba(57,255,20,0.1)] transition-all placeholder:text-white/20"
                  placeholder="john@example.com"
                />
                {form.formState.errors.email && (
                  <span className="text-destructive text-xs font-mono">{form.formState.errors.email.message}</span>
                )}
              </div>

              <div className="space-y-2">
                <label className="text-xs font-mono uppercase tracking-wider text-muted-foreground">Signal (Message)</label>
                <textarea
                  {...form.register("message")}
                  rows={5}
                  className="w-full bg-black/50 border border-white/10 p-4 text-white focus:outline-none focus:border-primary focus:shadow-[0_0_15px_rgba(57,255,20,0.1)] transition-all resize-none placeholder:text-white/20"
                  placeholder="Your message..."
                />
                {form.formState.errors.message && (
                  <span className="text-destructive text-xs font-mono">{form.formState.errors.message.message}</span>
                )}
              </div>

              <button
                type="submit"
                disabled={sendMessage.isPending}
                className="w-full bg-white text-black font-bold uppercase py-4 hover:bg-primary transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 group"
              >
                {sendMessage.isPending ? (
                  <>
                    <Loader2 className="animate-spin" /> Transmitting...
                  </>
                ) : (
                  <>
                    Send Signal <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </form>
          </div>

        </div>
      </div>
    </PageTransition>
  );
}
