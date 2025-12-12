import { motion } from "framer-motion";
import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Work", href: "#experience" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 mix-blend-difference text-white">
      <div className="container mx-auto px-6 py-8 flex justify-between items-center">
        <Link href="/">
          <a className="text-2xl font-display font-bold tracking-tighter uppercase">
            Omshankar<span className="opacity-50">.Passi</span>
          </a>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-12">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="font-sans text-sm uppercase tracking-widest hover:opacity-50 transition-opacity"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 right-0 bg-black text-white p-6 md:hidden"
        >
          <div className="flex flex-col gap-6 items-center">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="font-display text-2xl uppercase"
              >
                {link.name}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
}
