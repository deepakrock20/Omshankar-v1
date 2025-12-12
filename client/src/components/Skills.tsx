import { motion } from "framer-motion";
import textureImg from "@assets/generated_images/close_up_architectural_texture.png";

const skillCategories = [
  {
    title: "Digital Strategy",
    items: ["SEO (Technical & On-Page)", "Social Media Management", "Branding Strategy", "Market Research", "Marketing Automation", "Content Creation"]
  },
  {
    title: "Creative Tools",
    items: ["Canva", "GIMP", "CapCut", "Graphic Design", "Video Editing"]
  },
  {
    title: "Development",
    items: ["WordPress", "Front-end Technologies", "Google Analytics", "Jira", "MS Office Suite"]
  }
];

export default function Skills() {
  return (
    <section className="py-24 md:py-40 bg-background relative">
      {/* Background Texture Element */}
      <div className="absolute right-0 top-0 w-1/3 h-full opacity-5 pointer-events-none hidden md:block">
        <img src={textureImg} className="w-full h-full object-cover" alt="texture" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="font-display text-4xl md:text-6xl uppercase mb-20"
        >
          Technical<br/>Capabilities
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-12 md:gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="space-y-6"
            >
              <h3 className="text-sm font-mono uppercase tracking-widest border-b border-foreground pb-4 mb-6">
                0{idx + 1} / {category.title}
              </h3>
              <ul className="space-y-4">
                {category.items.map((skill, sIdx) => (
                  <li key={sIdx} className="font-display text-2xl md:text-3xl text-foreground/80 hover:text-foreground hover:pl-4 transition-all duration-300 cursor-default">
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
