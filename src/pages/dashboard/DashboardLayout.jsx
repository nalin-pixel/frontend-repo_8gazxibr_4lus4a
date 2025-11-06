import { NavLink, Outlet, useLocation } from 'react-router-dom';\nimport { useState } from 'react';
import { Bell, BookOpen, ListTree, Settings, Sparkles, Newspaper, Menu } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function DashboardLayout() {
  const [open, setOpen] = useState(true);
  const location = useLocation();

  const items = [
    { to: '/dashboard/articles', icon: Newspaper, label: 'New Articles' },
    { to: '/dashboard/sources', icon: ListTree, label: 'My Sources' },
    { to: '/dashboard/summaries', icon: Sparkles, label: 'AI Summaries' },
    { to: '/dashboard/notifications', icon: Bell, label: 'Notifications' },
    { to: '/dashboard/settings', icon: Settings, label: 'Settings' },
  ];

  return (
    <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-4 py-10 md:grid-cols-[240px_1fr]">
      <div>
        <button className="mb-3 inline-flex items-center gap-2 rounded-lg border border-zinc-800 bg-zinc-900 px-3 py-2 text-sm hover:bg-zinc-800" onClick={()=>setOpen(v=>!v)}>
          <Menu size={16}/> {open?'Collapse':'Expand'}
        </button>
        <AnimatePresence initial={false}>
          {open && (
            <motion.aside initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 6 }} className="sticky top-24 space-y-1 rounded-2xl border border-zinc-800 bg-zinc-900/40 p-2">
              {items.map((it) => (
                <NavLink key={it.to} to={it.to} className={({ isActive }) =>
                  'flex items-center gap-2 rounded-xl px-3 py-2 text-sm hover:bg-zinc-800 ' + (isActive? 'bg-zinc-800 text-white' : 'text-zinc-300')
                }>
                  <it.icon size={16} /> {it.label}
                </NavLink>
              ))}
            </motion.aside>
          )}
        </AnimatePresence>
      </div>

      <motion.section key={location.pathname} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.25 }} className="min-h-[60vh]">
        <Outlet />
      </motion.section>
    </div>
  );
}
