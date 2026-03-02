import { ArrowUp, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export const Footer = () => {
  // Smooth scroll to the top of the page
  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="relative z-10 py-8 px-4 border-t border-white/10 bg-black/20 backdrop-blur-md mt-12"
    >
      <div className="container mx-auto max-w-6xl flex flex-col sm:flex-row justify-between items-center gap-6">
        
        {/* Copyright Text */}
        <div className="flex items-center gap-2 text-sm text-slate-400">
          <Sparkles size={16} className="text-purple-400 animate-pulse" />
          <p>
            &copy; {new Date().getFullYear()}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 font-semibold tracking-wide">
              OshimRaeen.co
            </span>
            . All rights reserved.
          </p>
        </div>

        {/* Scroll to Top Button */}
        <a
          href="#home"
          onClick={scrollToTop}
          className="group p-3 rounded-full bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:border-purple-500/50 hover:bg-purple-500/20 transition-all duration-300 hover:shadow-[0_0_20px_rgba(168,85,247,0.4)]"
          aria-label="Scroll to top"
        >
          <ArrowUp 
            size={20} 
            className="group-hover:-translate-y-1 transition-transform duration-300" 
          />
        </a>
        
      </div>
    </motion.footer>
  );
};