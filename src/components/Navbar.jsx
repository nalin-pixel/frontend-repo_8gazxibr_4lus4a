import { useState, useEffect } from 'react';
import { Bell, Settings, User, Menu, X, Zap } from 'lucide-react';

function ThemeToggle() {
  const [theme, setTheme] = useState(
    typeof window !== 'undefined' && window.localStorage.getItem('theme')
      ? window.localStorage.getItem('theme')
      : 'dark'
  );

  useEffect(() => {
    if (!theme) return;
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    window.localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <button
      aria-label="Toggle theme"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="inline-flex items-center gap-2 rounded-full border border-zinc-300/20 bg-zinc-100/40 px-3 py-1.5 text-sm text-zinc-800 backdrop-blur transition hover:bg-zinc-100 dark:border-zinc-700/50 dark:bg-zinc-800/50 dark:text-zinc-100 dark:hover:bg-zinc-800"
    >
      <span className="h-3 w-3 rounded-full bg-amber-500 shadow-inner" />
      <span className="hidden sm:block">{theme === 'dark' ? 'Light' : 'Dark'} Mode</span>
    </button>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200/60 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:border-zinc-800/60 dark:bg-zinc-900/60">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:py-4">
        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-amber-500 text-white shadow-sm">
            <Zap size={20} />
          </div>
          <span className="text-lg font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
            JournalistTool
          </span>
        </div>

        <nav className="hidden items-center gap-6 text-sm text-zinc-700 dark:text-zinc-300 md:flex">
          <a href="#features" className="hover:text-zinc-900 dark:hover:text-white">Features</a>
          <a href="#preview" className="hover:text-zinc-900 dark:hover:text-white">Dashboard</a>
          <a href="#pricing" className="hover:text-zinc-900 dark:hover:text-white">Pricing</a>
          <a href="#about" className="hover:text-zinc-900 dark:hover:text-white">About</a>
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <button className="rounded-full p-2 text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-white" aria-label="Notifications">
            <Bell size={20} />
          </button>
          <button className="rounded-full p-2 text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-white" aria-label="Settings">
            <Settings size={20} />
          </button>
          <button className="inline-flex items-center gap-2 rounded-full bg-zinc-900 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-zinc-800 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-100">
            <User size={18} />
            Sign In
          </button>
          <ThemeToggle />
        </div>

        <button
          className="inline-flex items-center justify-center rounded-md p-2 text-zinc-700 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-800 md:hidden"
          onClick={() => setOpen((s) => !s)}
          aria-label="Open menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="border-t border-zinc-200/60 bg-white/80 px-4 py-3 backdrop-blur dark:border-zinc-800/60 dark:bg-zinc-900/80 md:hidden">
          <nav className="grid gap-3 text-sm text-zinc-700 dark:text-zinc-300">
            <a href="#features" className="rounded px-2 py-1 hover:bg-zinc-100 dark:hover:bg-zinc-800">Features</a>
            <a href="#preview" className="rounded px-2 py-1 hover:bg-zinc-100 dark:hover:bg-zinc-800">Dashboard</a>
            <a href="#pricing" className="rounded px-2 py-1 hover:bg-zinc-100 dark:hover:bg-zinc-800">Pricing</a>
            <a href="#about" className="rounded px-2 py-1 hover:bg-zinc-100 dark:hover:bg-zinc-800">About</a>
          </nav>
          <div className="mt-3 flex items-center gap-2">
            <button className="inline-flex items-center gap-2 rounded-full bg-zinc-900 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-zinc-800 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-100">
              <User size={18} />
              Sign In
            </button>
            <ThemeToggle />
          </div>
        </div>
      )}
    </header>
  );
}
