import { motion } from "framer-motion";

const experiences = [
  {
    role: "Digital Marketing Intern",
    company: "L4RG",
    period: "Jul 2025 – Oct 2025",
    description: "Led revenue generation initiatives through targeted digital strategies. Conducted comprehensive market research and competitor analysis to inform branding decisions."
  },
  {
    role: "SEO Intern",
    company: "MyCaptain",
    period: "Feb 2025 – Jun 2025",
    description: "Managed WordPress infrastructure and optimized content for search engines. Executed digital campaigns that enhanced brand visibility across social channels."
  },
  {
    role: "Live Project Intern",
    company: "CareerCarve",
    period: "Nov 2024 – Jan 2025",
    description: "Designed digital creatives and managed social media platforms. Collaborated on live marketing campaigns focusing on engagement and visibility."
  },
  {
    role: "Retail Salesperson",
    company: "Max Fashion",
    period: "Nov 2024 – Feb 2025",
    description: "Provided exceptional customer service and sales support in a fast-paced retail environment. Strengthened communication and teamwork skills."
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-foreground text-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 border-b border-white/20 pb-8 flex justify-between items-end"
        >
          <h2 className="font-display text-5xl md:text-7xl uppercase">Experience</h2>
          <span className="font-mono text-white/50 hidden md:block">2024 — 2025</span>
        </motion.div>

        <div className="space-y-0">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group border-b border-white/10 py-12 hover:bg-white/5 transition-colors cursor-default"
            >
              <div className="grid md:grid-cols-12 gap-8 items-start">
                <div className="md:col-span-3">
                  <span className="font-mono text-sm text-white/40 block mb-2">{exp.period}</span>
                  <h3 className="font-sans text-xl font-bold">{exp.company}</h3>
                </div>
                <div className="md:col-span-4">
                  <h4 className="font-display text-2xl md:text-3xl">{exp.role}</h4>
                </div>
                <div className="md:col-span-5">
                  <p className="text-white/60 leading-relaxed max-w-md">{exp.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
