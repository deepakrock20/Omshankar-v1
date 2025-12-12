import { motion } from "framer-motion";
import { Mail, Linkedin, Phone } from "lucide-react";

export default function Contact() {
  return (
    <footer id="contact" className="bg-foreground text-background py-24 md:py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-6xl md:text-8xl lg:text-9xl font-bold uppercase tracking-tighter mb-12"
          >
            Let's <br/>
            <span className="text-white/20">Connect</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-12 mt-20">
            <div className="space-y-8">
              <h3 className="font-mono text-sm uppercase tracking-widest text-white/50">Contact Info</h3>
              <div className="space-y-4">
                <a href="mailto:deepakpassi574@gmail.com" className="flex items-center gap-4 text-xl hover:text-white/70 transition-colors group">
                  <div className="p-3 border border-white/20 rounded-full group-hover:bg-white group-hover:text-black transition-all">
                    <Mail size={20} />
                  </div>
                  deepakpassi574@gmail.com
                </a>
                <a href="tel:+917028334796" className="flex items-center gap-4 text-xl hover:text-white/70 transition-colors group">
                  <div className="p-3 border border-white/20 rounded-full group-hover:bg-white group-hover:text-black transition-all">
                    <Phone size={20} />
                  </div>
                  +91 7028334796
                </a>
                <a href="https://linkedin.com/in/omshankarpassi" target="_blank" className="flex items-center gap-4 text-xl hover:text-white/70 transition-colors group">
                  <div className="p-3 border border-white/20 rounded-full group-hover:bg-white group-hover:text-black transition-all">
                    <Linkedin size={20} />
                  </div>
                  linkedin.com/in/omshankarpassi
                </a>
              </div>
            </div>

            <div className="space-y-8 md:text-right flex flex-col justify-end">
               <h3 className="font-mono text-sm uppercase tracking-widest text-white/50">Education</h3>
               <div>
                <p className="text-xl font-bold">Bachelor in Computer Application</p>
                <p className="text-white/60">MES Vasant Joshi College (2023–2026)</p>
               </div>
            </div>
          </div>
        </div>
        
        <div className="mt-32 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-sm text-white/40 font-mono">
          <p>© 2025 Omshankar Passi. All rights reserved.</p>
          <p>Designed with Architectural Precision.</p>
        </div>
      </div>
    </footer>
  );
}
