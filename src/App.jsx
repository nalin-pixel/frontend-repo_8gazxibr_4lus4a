import Navbar from './components/Navbar';
import Hero from './components/Hero';
import DashboardPreview from './components/DashboardPreview';
import AIAssistantWidget from './components/AIAssistantWidget';

function Footer() {
  return (
    <footer id="about" className="mt-16 border-t border-zinc-200/60 bg-white/70 py-10 dark:border-zinc-800/60 dark:bg-zinc-900/70">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          <div>
            <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">About JournalistTool</h3>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
              A professional platform for journalists to monitor sources, detect new articles, and get AI-powered insights in real-time.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">Product</h3>
            <ul className="mt-2 space-y-1 text-sm text-zinc-600 dark:text-zinc-400">
              <li>Dashboard</li>
              <li>Sources</li>
              <li>Alerts</li>
              <li>Billing & Plans</li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">Security & Compliance</h3>
            <ul className="mt-2 space-y-1 text-sm text-zinc-600 dark:text-zinc-400">
              <li>Privacy</li>
              <li>Terms</li>
              <li>Enterprise</li>
              <li>Trust Center</li>
            </ul>
          </div>
        </div>
        <p className="mt-8 text-xs text-zinc-500">© {new Date().getFullYear()} JournalistTool. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-zinc-50 text-zinc-900 antialiased dark:from-zinc-950 dark:to-zinc-900 dark:text-zinc-100">
      <Navbar />
      <main>
        <Hero />
        <DashboardPreview />
      </main>
      <Footer />
      <AIAssistantWidget />
    </div>
  );
}
