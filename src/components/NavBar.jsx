import { cn } from "@/lib/utils";
import { Menu, X, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed w-full z-40 transition-all duration-500",
        isScrolled 
          ? "py-4 bg-background/60 backdrop-blur-xl border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.5)]" 
          : "py-6 bg-transparent"
      )}
    >
      <div className="px-8 md:px-20 lg:px-32 flex items-center justify-between">
        {/* Logo / Brand */}
        <a className="text-2xl font-bold flex items-center gap-2 group" href="#hero">
          <span className="relative z-10 flex items-center">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 drop-shadow-[0_0_12px_rgba(168,85,247,0.4)] tracking-wider">
              OSHIM
            </span>
            <span className="text-foreground/80 ml-2 text-lg font-medium group-hover:text-foreground transition-colors hidden sm:block">
              Portfolio
            </span>
            <Sparkles className="w-4 h-4 ml-2 text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 lg:gap-12">
          {navItems.map((item, key) => (
            <a
              key={key}
              href={item.href}
              className="relative group text-foreground/70 hover:text-white transition-colors duration-300 text-sm tracking-wide"
            >
              {item.name}
              <span className="absolute -bottom-1.5 left-0 w-0 h-[2px] bg-gradient-to-r from-transparent via-blue-400 to-purple-500 transition-all duration-300 group-hover:w-full shadow-[0_0_8px_rgba(168,85,247,0.8)] rounded-full"></span>
            </a>
          ))}
        </div>

        {/* Mobile Menu Button - Wrapper removed, z-50 moved directly to the button */}
        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="md:hidden p-2 text-foreground/80 hover:text-white transition-colors relative z-50"
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Nav Overlay */}
        <div
          className={cn(
            "fixed inset-0 bg-[#050510]/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center",
            "transition-all duration-500 ease-in-out md:hidden",
            isMenuOpen
              ? "opacity-100 pointer-events-auto translate-y-0"
              : "opacity-0 pointer-events-none -translate-y-4"
          )}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-purple-500/20 rounded-full blur-[100px] -z-10"></div>

          <div className="flex flex-col space-y-8 text-2xl font-light text-center">
            {navItems.map((item, key) => (
               <a
               key={key}
               href={item.href}
               className="text-foreground/70 hover:text-white transition-all duration-300 hover:scale-110 hover:tracking-widest"
               onClick={() => setIsMenuOpen(false)}
             >
               {item.name}
             </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};