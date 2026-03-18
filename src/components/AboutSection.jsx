import { Briefcase, Code, User, Download, Send } from "lucide-react";
import { motion } from "framer-motion";

const textVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.3 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { type: "spring", bounce: 0.4, duration: 0.8 }
  }
};

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative z-10 overflow-hidden transition-colors duration-300">
      <div className="container mx-auto max-w-6xl">
        
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white transition-colors">
            About <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-500 to-blue-500 dark:from-purple-400 dark:to-blue-500 drop-shadow-sm dark:drop-shadow-[0_0_15px_rgba(168,85,247,0.5)]">Me</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h3 className="text-2xl md:text-3xl font-semibold text-slate-900 dark:text-white leading-snug transition-colors">
                Passionate Web Developer <br/> & Problem Solver
              </h3>
              
              <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mb-6"></div>

              <p className="text-slate-600 dark:text-slate-300/90 leading-relaxed text-lg transition-colors">
                With experience of building full-stack web applications, I specialize in turning complex problems into elegant, responsive solutions. I combine modern web technologies, Machine Learning integrations, and highly optimized DSA logic to build accessible platforms that perform at scale
              </p>

              {/* <p className="text-slate-600 dark:text-slate-300/90 leading-relaxed text-lg transition-colors">
                I'm passionate about creating elegant solutions to complex problems, and I'm constantly learning new technologies and techniques to stay at the forefront of the ever-evolving web landscape.
              </p> */}
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <a 
                href="#contact" 
                className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium shadow-md shadow-purple-500/20 hover:shadow-lg hover:shadow-purple-500/40 dark:shadow-none dark:hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] hover:-translate-y-1 transition-all duration-300"
              >
                <Send size={18} /> Get In Touch
              </a>

              <a
                href="#"
                className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-white/50 dark:bg-white/5 border border-slate-200 dark:border-purple-500/30 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-purple-500/10 hover:border-purple-400 dark:hover:border-purple-500/80 hover:-translate-y-1 transition-all duration-300"
              >
                <Download size={18} /> Download CV
              </a>
            </div>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 gap-6"
          >
            <motion.div variants={cardVariants} className="group relative bg-white/60 dark:bg-white/5 backdrop-blur-md border border-slate-200 dark:border-white/10 p-6 rounded-2xl shadow-sm hover:shadow-md dark:shadow-none dark:hover:shadow-[0_0_30px_rgba(168,85,247,0.15)] hover:border-purple-400 dark:hover:border-purple-500/50 transition-all duration-500 hover:-translate-y-1">
              <div className="flex items-start gap-5">
                <div className="p-3 rounded-xl bg-purple-100 dark:bg-purple-500/10 border border-purple-200 dark:border-purple-500/20 group-hover:bg-purple-200 dark:group-hover:bg-purple-500/20 group-hover:scale-110 transition-all duration-300">
                  <Code className="h-7 w-7 text-purple-600 dark:text-purple-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-slate-900 dark:text-white mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-300 transition-colors">Web Development</h4>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed transition-colors">
                    Creating responsive websites and web applications with modern frameworks and cutting-edge technologies.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div variants={cardVariants} className="group relative bg-white/60 dark:bg-white/5 backdrop-blur-md border border-slate-200 dark:border-white/10 p-6 rounded-2xl shadow-sm hover:shadow-md dark:shadow-none dark:hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] hover:border-blue-400 dark:hover:border-blue-500/50 transition-all duration-500 hover:-translate-y-1">
              <div className="flex items-start gap-5">
                <div className="p-3 rounded-xl bg-blue-100 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/20 group-hover:bg-blue-200 dark:group-hover:bg-blue-500/20 group-hover:scale-110 transition-all duration-300">
                  <User className="h-7 w-7 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-300 transition-colors">Data Structures & Algorithms</h4>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed transition-colors">
                    Skilled in DSA for efficient problem-solving, breaking down complex challenges into manageable components.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div variants={cardVariants} className="group relative bg-white/60 dark:bg-white/5 backdrop-blur-md border border-slate-200 dark:border-white/10 p-6 rounded-2xl shadow-sm hover:shadow-md dark:shadow-none dark:hover:shadow-[0_0_30px_rgba(99,102,241,0.15)] hover:border-indigo-400 dark:hover:border-indigo-500/50 transition-all duration-500 hover:-translate-y-1">
              <div className="flex items-start gap-5">
                <div className="p-3 rounded-xl bg-indigo-100 dark:bg-indigo-500/10 border border-indigo-200 dark:border-indigo-500/20 group-hover:bg-indigo-200 dark:group-hover:bg-indigo-500/20 group-hover:scale-110 transition-all duration-300">
                  <Briefcase className="h-7 w-7 text-indigo-600 dark:text-indigo-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-slate-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-300 transition-colors">Looking For SDE/SWE Roles</h4>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed transition-colors">
                    Taking projects from conception to completion with agile methodologies and practicing DSA for optimal solutions.
                  </p>
                </div>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};