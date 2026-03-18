// import { useState } from "react";
// import { cn } from "@/lib/utils";
// import { Sparkles } from "lucide-react";

// const skills = [
//   // Others
//   { name: "DSA", level: 75, category: "others" },
//   { name: "JAVA", level: 75, category: "others" },
//   // Frontend
//   { name: "HTML/CSS", level: 95, category: "frontend" },
//   { name: "JavaScript", level: 90, category: "frontend" },
//   { name: "React", level: 85, category: "frontend" },
//   { name: "TypeScript", level: 70, category: "frontend" },
//   { name: "Tailwind CSS", level: 90, category: "frontend" },
//   { name: "Next.js", level: 80, category: "frontend" },
//   // Backend
//   { name: "Node.js", level: 80, category: "backend" },
//   { name: "Express", level: 75, category: "backend" },
//   { name: "MongoDB", level: 70, category: "backend" },
//   // Tools
//   { name: "Git/GitHub", level: 90, category: "tools" },
//   { name: "VS Code", level: 95, category: "tools" },
// ];

// const categories = ["all", "frontend", "backend", "tools", "others"];

// export const SkillsSection = () => {
//   const [activeCategory, setActiveCategory] = useState("all");

//   const filteredSkills = skills.filter(
//     (skill) => activeCategory === "all" || skill.category === activeCategory
//   );

//   return (
//     <section id="skills" className="py-24 px-4 relative overflow-hidden bg-background">
//       {/* Background Nebula Effects */}
//       <div className="absolute top-20 left-10 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />
//       <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

//       <div className="container mx-auto max-w-5xl relative z-10">
//         {/* Section Header */}
//         <div className="flex flex-col items-center mb-16">
//           <h2 className="text-4xl md:text-5xl font-bold text-center tracking-tight flex items-center gap-3">
//             My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 drop-shadow-[0_0_15px_rgba(168,85,247,0.5)]">
//               Skills
//             </span>
//             <Sparkles className="text-purple-400 w-8 h-8 animate-pulse" />
//           </h2>
//           <p className="text-foreground/60 mt-4 text-center max-w-xl">
//             The tools and technologies I use to bring ideas to life across the digital universe.
//           </p>
//         </div>

//         {/* Filter Buttons */}
//         <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-16">
//           {categories.map((category, key) => (
//             <button
//               key={key}
//               onClick={() => setActiveCategory(category)}
//               className={cn(
//                 "px-6 py-2.5 rounded-full transition-all duration-300 capitalize text-sm font-medium tracking-wide border backdrop-blur-sm",
//                 activeCategory === category
//                   ? "bg-purple-500/20 border-purple-500/50 text-white shadow-[0_0_15px_rgba(168,85,247,0.3)]"
//                   : "bg-secondary/20 border-white/5 text-foreground/70 hover:bg-secondary/40 hover:text-white"
//               )}
//             >
//               {category}
//             </button>
//           ))}
//         </div>

//         {/* Skills Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {filteredSkills.map((skill, key) => (
//             <div
//               key={key}
//               className="group relative bg-white/[0.03] border border-white/10 p-6 rounded-2xl shadow-xl backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.05] hover:border-purple-500/30 hover:shadow-[0_8px_30px_rgba(168,85,247,0.15)]"
//             >
//               <div className="flex justify-between items-center mb-4">
//                 <h3 className="font-semibold text-lg text-foreground/90 group-hover:text-white transition-colors">
//                   {skill.name}
//                 </h3>
//                 <span className="text-sm font-mono text-purple-400 opacity-80 group-hover:opacity-100 transition-opacity">
//                   {skill.level}%
//                 </span>
//               </div>
              
//               {/* Shooting Star Progress Bar Container */}
//               <div className="w-full bg-black/40 h-2.5 rounded-full overflow-hidden border border-white/5 relative">
//                 {/* The Bar */}
//                 <div
//                   className="h-full rounded-full bg-gradient-to-r from-blue-500/40 via-blue-400 to-purple-400 relative transition-all duration-1000 ease-out origin-left animate-[grow_1.5s_ease-out]"
//                   style={{ width: `${skill.level}%` }}
//                 >
//                   {/* The Comet Head (Glow at the end of the bar) */}
//                   <div className="absolute top-0 right-0 h-full w-3 bg-white rounded-full shadow-[0_0_10px_3px_rgba(255,255,255,0.8)]" />
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };