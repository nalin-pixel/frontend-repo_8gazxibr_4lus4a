import { Github, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-zinc-800/50 bg-black/40 py-10 text-zinc-400">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-4">
          <div>
            <h3 className="text-sm font-semibold text-white">JournalistTool</h3>
            <p className="mt-2 text-sm">
              Real-time, AI-powered monitoring for modern newsrooms.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white">Product</h3>
            <ul className="mt-2 space-y-1 text-sm">
              <li><a href="/features" className="hover:text-white">Features</a></li>
              <li><a href="/pricing" className="hover:text-white">Pricing</a></li>
              <li><a href="/dashboard" className="hover:text-white">Dashboard</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white">Company</h3>
            <ul className="mt-2 space-y-1 text-sm">
              <li><a href="/contact" className="hover:text-white">Contact</a></li>
              <li><a href="#" className="hover:text-white">Privacy</a></li>
              <li><a href="#" className="hover:text-white">Terms</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white">Connect</h3>
            <div className="mt-2 flex items-center gap-3">
              <a href="#" className="inline-flex items-center gap-2 rounded-full border border-zinc-800 px-3 py-1.5 text-sm hover:border-zinc-700 hover:text-white"><Github size={16}/> GitHub</a>
              <a href="/contact" className="inline-flex items-center gap-2 rounded-full border border-zinc-800 px-3 py-1.5 text-sm hover:border-zinc-700 hover:text-white"><Mail size={16}/> Email</a>
            </div>
          </div>
        </div>
        <p className="mt-8 text-xs">© {new Date().getFullYear()} JournalistTool. All rights reserved.</p>
      </div>
    </footer>
  );
}
