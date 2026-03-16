import { ArrowDown, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

// --- Animation Variants ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.3 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { type: "spring", bounce: 0.4, duration: 0.8 }
  }
};

export const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden z-10">
      
      {/* Optional: If you created the StarryBackground component earlier, place it here! */}
      {/* <StarryBackground /> */}

      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[120px] pointer-events-none -z-10" />

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container max-w-4xl mx-auto text-center relative z-10"
      >
        <div className="space-y-8">
          
          {/* Main Heading */}
          <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-extrabold tracking-tight text-white leading-tight">
            Hi, I'm <br className="md:hidden" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-indigo-400 drop-shadow-[0_0_20px_rgba(168,85,247,0.4)]">
              Oshim Raeen
            </span>
          </motion.h1>

          {/* Subtitle/Bio */}
          <motion.p variants={itemVariants} className="text-lg md:text-xl text-slate-300/90 max-w-2xl mx-auto leading-relaxed">
           Crafting intelligent, high-performance web experiences. I am a full-stack developer who merges robust web development skills with Machine Learning and a strong foundation in DSA to build responsive applications that captivate users.
          </motion.p>

          {/* CTA Button */}
          <motion.div variants={itemVariants} className="pt-6 flex justify-center">
            <a 
              href="#projects" 
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold tracking-wide hover:shadow-[0_0_30px_rgba(168,85,247,0.5)] hover:-translate-y-1 transition-all duration-300"
            >
              <Sparkles size={18} className="text-white/80" />
              View My Work
            </a>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Down Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
      >
        <span className="text-xs uppercase tracking-widest text-slate-400 mb-3 font-semibold"> 
          Scroll 
        </span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="p-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-purple-400 shadow-[0_0_15px_rgba(168,85,247,0.2)]"
        >
          <ArrowDown className="h-5 w-5" />
        </motion.div>
      </motion.div>
      
    </section>
  );
};