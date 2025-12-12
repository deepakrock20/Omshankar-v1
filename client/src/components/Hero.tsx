import { motion, useScroll, useTransform } from "framer-motion";
import heroBg from "@assets/generated_images/minimalist_abstract_concrete_architecture.png";

export default function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 400]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <section className="relative h-screen flex flex-col justify-center overflow-hidden bg-background">
      {/* Parallax Background Image */}
      <motion.div 
        style={{ y, opacity }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10" />
        <img 
          src={heroBg} 
          alt="Abstract Architecture" 
          className="w-full h-full object-cover grayscale opacity-40"
        />
      </motion.div>

      {/* Content */}
      <div className="container mx-auto px-6 z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="block font-sans text-sm md:text-base uppercase tracking-[0.3em] mb-4 text-muted-foreground">
            Portfolio 2025
          </span>
          <h1 className="font-display text-7xl md:text-[10rem] leading-[0.85] font-bold tracking-tighter uppercase mix-blend-exclusion text-foreground">
            Omshankar
            <br />
            Passi
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-12 md:mt-24 max-w-xl"
        >
          <p className="font-sans text-lg md:text-xl text-muted-foreground leading-relaxed">
            Digital Marketing Strategist & Web Developer crafting data-driven online experiences with architectural precision.
          </p>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-12 left-6 md:left-auto md:right-12 z-10 flex flex-col items-center gap-4"
      >
        <div className="h-16 w-[1px] bg-foreground/20 overflow-hidden">
          <motion.div 
            animate={{ y: ["-100%", "100%"] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
            className="h-full w-full bg-foreground"
          />
        </div>
        <span className="font-mono text-xs uppercase writing-vertical-rl">Scroll</span>
      </motion.div>
    </section>
  );
}
