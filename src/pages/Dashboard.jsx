import { NavLink, Outlet } from 'react-router-dom';\nimport { motion } from 'framer-motion';
import { Newspaper, ListTree, Bot, Bell, Settings } from 'lucide-react';

export default function DashboardLayout(){
  return (
    <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-4 py-10 md:grid-cols-[240px_1fr]">
      <aside className="h-full rounded-2xl border border-zinc-800/60 bg-zinc-900/40 p-4">
        <nav className="grid gap-1 text-sm">
          <NavLink to="/dashboard/sources" className={({isActive})=>`rounded-lg px-3 py-2 hover:bg-zinc-800 ${isActive? 'bg-zinc-800 text-white' : 'text-zinc-300'}`}><ListTree size={16} className="mr-2 inline"/> My Sources</NavLink>
          <NavLink to="/dashboard/articles" className={({isActive})=>`rounded-lg px-3 py-2 hover:bg-zinc-800 ${isActive? 'bg-zinc-800 text-white' : 'text-zinc-300'}`}><Newspaper size={16} className="mr-2 inline"/> New Articles</NavLink>
          <NavLink to="/dashboard/summaries" className={({isActive})=>`rounded-lg px-3 py-2 hover:bg-zinc-800 ${isActive? 'bg-zinc-800 text-white' : 'text-zinc-300'}`}><Bot size={16} className="mr-2 inline"/> AI Summaries</NavLink>
          <NavLink to="/dashboard/notifications" className={({isActive})=>`rounded-lg px-3 py-2 hover:bg-zinc-800 ${isActive? 'bg-zinc-800 text-white' : 'text-zinc-300'}`}><Bell size={16} className="mr-2 inline"/> Notifications</NavLink>
          <NavLink to="/dashboard/settings" className={({isActive})=>`rounded-lg px-3 py-2 hover:bg-zinc-800 ${isActive? 'bg-zinc-800 text-white' : 'text-zinc-300'}`}><Settings size={16} className="mr-2 inline"/> Settings</NavLink>
        </nav>
      </aside>
      <motion.section initial={{opacity:0,y:6}} animate={{opacity:1,y:0}} transition={{duration:0.35}} className="min-h-[60vh]">
        <Outlet />
      </motion.section>
    </div>
  );
}
