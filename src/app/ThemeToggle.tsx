"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  return (
    <div className="mt-3 fixed right-10 bottom-10 z-50">
      <button
        className="p-2 rounded-full bg-neutral-200 dark:bg-neutral-700 dark:text-white text-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        {theme === "dark" ? <Sun /> : <Moon size={20} />}
      </button>
    </div>
  );
}
