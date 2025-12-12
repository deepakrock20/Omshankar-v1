import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import wireframeImg from "@assets/generated_images/abstract_geometric_wireframe_structure.png";

export default function About() {
  return (
    <section id="about" className="py-24 md:py-40 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        
        {/* Left: Image/Graphic */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative aspect-[4/5] bg-secondary overflow-hidden group"
        >
           <img 
            src={wireframeImg} 
            alt="Structure" 
            className="w-full h-full object-cover grayscale transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 border border-border mix-blend-overlay" />
        </motion.div>

        {/* Right: Text Content */}
        <div className="flex flex-col justify-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-4xl md:text-6xl font-bold uppercase mb-8"
          >
            Digital <br/> Architect
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-6 text-lg text-muted-foreground font-light leading-relaxed"
          >
            <p>
              I am a tech-savvy Digital Marketing & Web Development professional with hands-on experience in SEO, social media strategy, and content creation.
            </p>
            <p>
              My approach combines the precision of technical development with the creativity of digital branding. I build structures—not of concrete, but of code and content—designed to boost engagement and optimize online presence.
            </p>
            
            <div className="pt-8">
              <a 
                href="/attached_assets/Omshankar_CV_1765536846586.docx"
                target="_blank"
                className="inline-flex items-center gap-2 text-foreground uppercase tracking-widest text-sm font-bold hover:gap-4 transition-all"
              >
                View Curriculum Vitae <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
