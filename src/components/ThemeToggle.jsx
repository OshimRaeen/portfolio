import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setIsDarkMode(true);
    } else {
      document.documentElement.classList.remove("dark");
      setIsDarkMode(false);
    }
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        // FIX: Removed fixed positioning, changed to relative so it fits in the nav
        "relative p-2.5 rounded-full overflow-hidden transition-all duration-500",
        "border backdrop-blur-md shadow-lg group",
        isDarkMode
          ? "bg-[#050510]/80 border-purple-500/30 shadow-[0_0_15px_rgba(168,85,247,0.3)] hover:shadow-[0_0_25px_rgba(168,85,247,0.5)] hover:bg-[#050510]"
          : "bg-white/80 border-blue-200/50 shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:shadow-[0_0_25px_rgba(59,130,246,0.4)] hover:bg-white"
      )}
      aria-label="Toggle Theme"
    >
      <div className="relative w-5 h-5 flex items-center justify-center">
        {/* Sun Icon */}
        <Sun
          className={cn(
            "absolute h-5 w-5 transition-all duration-500 transform",
            isDarkMode
              ? "opacity-0 rotate-90 scale-50 text-yellow-300"
              : "opacity-100 rotate-0 scale-100 text-amber-500 drop-shadow-[0_0_8px_rgba(245,158,11,0.6)]"
          )}
        />
        {/* Moon Icon */}
        <Moon
          className={cn(
            "absolute h-5 w-5 transition-all duration-500 transform",
            isDarkMode
              ? "opacity-100 rotate-0 scale-100 text-purple-300 drop-shadow-[0_0_8px_rgba(216,180,254,0.8)]"
              : "opacity-0 -rotate-90 scale-50 text-slate-800"
          )}
        />
      </div>
    </button>
  );
};