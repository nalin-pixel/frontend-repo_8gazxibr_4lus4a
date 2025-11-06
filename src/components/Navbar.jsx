import { useState, useEffect } from 'react';
import { Bell, Settings, User, Menu, X, Zap, LogIn, UserPlus } from 'lucide-react';
import { Link, NavLink } from 'react-router-dom';

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
      className="inline-flex items-center gap-2 rounded-full border border-zinc-700 bg-zinc-900/60 px-3 py-1.5 text-sm text-zinc-200 backdrop-blur transition hover:bg-zinc-800 dark:border-zinc-700/50"
    >
      <span className="h-3 w-3 rounded-full bg-amber-500 shadow-inner" />
      <span className="hidden sm:block">{theme === 'dark' ? 'Light' : 'Dark'} Mode</span>
    </button>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800/60 bg-black/60 backdrop-blur supports-[backdrop-filter]:bg-black/50">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:py-4">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex h-9 w-9 items-center justify-center rounded-lg bg-amber-500 text-black shadow-sm">
            <Zap size={20} />
          </Link>
          <Link to="/" className="text-lg font-semibold tracking-tight text-white">
            JournalistTool
          </Link>
        </div>

        <nav className="hidden items-center gap-6 text-sm text-zinc-300 md:flex">
          <NavLink to="/" className={({isActive})=> (isActive? 'text-white':'hover:text-white')}>Home</NavLink>
          <NavLink to="/features" className={({isActive})=> (isActive? 'text-white':'hover:text-white')}>Features</NavLink>
          <NavLink to="/pricing" className={({isActive})=> (isActive? 'text-white':'hover:text-white')}>Pricing</NavLink>
          <NavLink to="/dashboard" className={({isActive})=> (isActive? 'text-white':'hover:text-white')}>Dashboard</NavLink>
          <NavLink to="/contact" className={({isActive})=> (isActive? 'text-white':'hover:text-white')}>Contact</NavLink>
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Link to="/signin" className="inline-flex items-center gap-2 rounded-full border border-zinc-700 bg-zinc-900 px-4 py-2 text-sm text-zinc-200 shadow-sm transition hover:bg-zinc-800">
            <LogIn size={18} />
            Sign In
          </Link>
          <Link to="/signup" className="inline-flex items-center gap-2 rounded-full bg-amber-500 px-4 py-2 text-sm font-medium text-black shadow-sm transition hover:bg-amber-400">
            <UserPlus size={18} />
            Sign Up
          </Link>
          <ThemeToggle />
        </div>

        <button
          className="inline-flex items-center justify-center rounded-md p-2 text-zinc-300 hover:bg-zinc-900 md:hidden"
          onClick={() => setOpen((s) => !s)}
          aria-label="Open menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="border-t border-zinc-800/60 bg-black/80 px-4 py-3 backdrop-blur md:hidden">
          <nav className="grid gap-3 text-sm text-zinc-300">
            <NavLink to="/" onClick={()=>setOpen(false)} className="rounded px-2 py-1 hover:bg-zinc-900">Home</NavLink>
            <NavLink to="/features" onClick={()=>setOpen(false)} className="rounded px-2 py-1 hover:bg-zinc-900">Features</NavLink>
            <NavLink to="/pricing" onClick={()=>setOpen(false)} className="rounded px-2 py-1 hover:bg-zinc-900">Pricing</NavLink>
            <NavLink to="/dashboard" onClick={()=>setOpen(false)} className="rounded px-2 py-1 hover:bg-zinc-900">Dashboard</NavLink>
            <NavLink to="/contact" onClick={()=>setOpen(false)} className="rounded px-2 py-1 hover:bg-zinc-900">Contact</NavLink>
          </nav>
          <div className="mt-3 flex items-center gap-2">
            <Link to="/signin" onClick={()=>setOpen(false)} className="inline-flex items-center gap-2 rounded-full border border-zinc-700 bg-zinc-900 px-4 py-2 text-sm text-zinc-200">
              <User size={18} />
              Sign In
            </Link>
            <Link to="/signup" onClick={()=>setOpen(false)} className="inline-flex items-center gap-2 rounded-full bg-amber-500 px-4 py-2 text-sm font-medium text-black">
              <UserPlus size={18} />
              Sign Up
            </Link>
            <ThemeToggle />
          </div>
        </div>
      )}
    </header>
  );
}
