import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";
import { StarBackground } from "../components/StarBackground"

const projects = [
  {
    id: 1,
    title: "OshCode",
    description: "OshCode Editor is a powerful and intelligent code editor that enhances your coding experience with advanced features and seamless integration. It is designed to help you write, debug, and optimize your code efficiently.",
    image: "/projects/oshcode.jpeg",
    tags: ["React", "TailwindCSS", "Node.js","TypeScript","MongoDB", "Next.js", "Groq","Prisma","ShadCn"],
    demoUrl: "https://oshcode.vercel.app/",
    githubUrl: "https://github.com/OshimRaeen/oshcode",
  },
  {
    id: 2,
    title: "Interview-Prep App",
    description: "A beautiful web app using MERN and AI.",
    image: "/projects/project1.png",
    tags: ["React", "TailwindCSS", "Node.js","JavaScript","MongoDB", "Next.js", "OpenAI"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "File-Studio",
    description: "🚀 File-Studio is an AI-powered web application that streamlines file conversion and document processing. Users can convert and compress images (JPEG, PNG, WebP), transform images into PDFs, and leverage Gemini AI to generate smart image insights. The platform also supports PDF uploads and extracts text using advanced AI capabilities, enhancing productivity and document accessibility.",
    image: "/projects/filestudio.jpeg",
    tags: ["React", "TailwindCSS", "Node.js","TypeScript", "Next.js", "Gemini"],
    demoUrl: "https://file-studio.vercel.app/",
    githubUrl: "https://github.com/OshimRaeen/file-studio",
  },
  {
    id: 4,
    title: "Story-vault",
    description: "Story-Vault is a thoughtfully designed web application that helps users capture, store, and preserve stories or ideas that arise in various situations. It serves as a personal digital vault, making it easy to revisit and reflect on meaningful thoughts anytime.",
    tags: ["React", "TailwindCSS", "Node.js","JavaScript","MongoDB"],
    image: "/projects/story.jpeg",
    demoUrl: "https://storiesvault.vercel.app/",
    githubUrl: "https://github.com/OshimRaeen?tab=repositories",
  },
  {
    id: 5,
    title: "ATS screener Dashboard",
    description: "Interactive analytics dashboard with data visualization and filtering capabilities.",
    image: "/projects/project2.png",
    tags: ["JavaScript", "React","MongoDB", "Next.js","OpenAI"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 6,
    title: "Recommendation System",
    description: "Full-featured platform with Recommendation.",
    image: "/projects/project3.png",
    tags: ["React", "TailwindCSS", "Node.js","JavaScript","MongoDB", "Next.js", "OpenAI","ML","DL"],
    demoUrl: "#",
    githubUrl: "#",
  },
];

// --- Animation Variants ---
// The container controls the staggering of its children
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // 0.2 second delay between each card animating in
    },
  },
};

// The individual cards slide up and fade in
const cardVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative bg-slate-950 overflow-hidden">
      <StarBackground />
      <div className="container mx-auto max-w-6xl relative z-10">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 relative"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500 drop-shadow-[0_0_15px_rgba(168,85,247,0.5)]">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            Here are some of my recent creations. Each project was carefully
            crafted with attention to detail, performance, and user experience.
          </p>
        </motion.div>

        {/* Grid Section wrapped in motion.div */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }} // Triggers slightly before scrolling fully into view
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              className="group relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:border-purple-500/50 hover:shadow-[0_0_30px_rgba(168,85,247,0.2)] flex flex-col h-full"
            >
              {/* Image Container */}
              <div className="h-56 overflow-hidden relative border-b border-white/10">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Content Container */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-purple-400 transition-colors duration-300"> 
                  {project.title}
                </h3>
                
                <p className="text-slate-300/80 text-sm mb-6 line-clamp-3 flex-grow leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="px-3 py-1 text-[10px] uppercase tracking-wider font-semibold border border-white/10 rounded-full bg-white/5 text-slate-300 group-hover:border-purple-500/30 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center space-x-4 mt-auto pt-4 border-t border-white/5">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-medium text-slate-300 hover:text-purple-400 transition-colors duration-300"
                  >
                    <ExternalLink size={18} />
                    <span>Live Demo</span>
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-medium text-slate-300 hover:text-purple-400 transition-colors duration-300"
                  >
                    <Github size={18} />
                    <span>Source</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="text-center mt-16"
        >
          <a
            className="cosmic-button inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white/5 border border-white/10 hover:border-purple-500/50 hover:bg-purple-500/10 text-white font-medium transition-all duration-300 hover:shadow-[0_0_20px_rgba(168,85,247,0.3)] hover:-translate-y-1"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/OshimRaeen"
          >
            Check My GitHub <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};