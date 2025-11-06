import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(251,191,36,0.15),rgba(0,0,0,0))] dark:bg-[radial-gradient(ellipse_at_top,rgba(251,191,36,0.12),rgba(0,0,0,0))]" />
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:py-20 lg:grid-cols-2 lg:gap-14">
        <div className="relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-white sm:text-5xl"
          >
            Monitor the News. Instantly. Intelligently.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="mt-4 max-w-xl text-lg leading-relaxed text-zinc-600 dark:text-zinc-300"
          >
            JournalistTool watches your sources, detects new articles in real-time, and applies AI to summarize, classify, and rank what matters most—so you never miss a story.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a
              href="#preview"
              className="inline-flex items-center gap-2 rounded-full bg-zinc-900 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-amber-500/10 transition hover:-translate-y-0.5 hover:bg-zinc-800 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-100"
            >
              Try the Live Preview
              <ArrowRight size={18} />
            </a>
            <a
              href="#pricing"
              className="inline-flex items-center gap-2 rounded-full border border-zinc-300 bg-white px-6 py-3 text-sm font-medium text-zinc-900 transition hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-900 dark:text-white dark:hover:bg-zinc-800"
            >
              View Plans
            </a>
          </motion.div>

          <div className="mt-6 flex items-center gap-5 text-sm text-zinc-600 dark:text-zinc-400">
            <div className="inline-flex items-center gap-2">
              <ShieldCheck className="text-amber-500" size={18} />
              Enterprise-grade security
            </div>
            <div className="inline-flex items-center gap-2">
              <Sparkles className="text-amber-500" size={18} />
              AI-powered insights
            </div>
          </div>
        </div>

        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative z-10 overflow-hidden rounded-2xl border border-zinc-200/60 bg-white/80 p-3 shadow-2xl backdrop-blur dark:border-zinc-800/60 dark:bg-zinc-900/70"
          >
            <div className="rounded-xl bg-gradient-to-br from-zinc-50 to-amber-50 p-4 dark:from-zinc-900 dark:to-zinc-800">
              <div className="grid grid-cols-3 gap-3">
                {Array.from({ length: 9 }).map((_, i) => (
                  <div key={i} className="h-20 rounded-lg bg-white/70 shadow-sm ring-1 ring-zinc-200/60 dark:bg-zinc-800/60 dark:ring-zinc-700/60" />
                ))}
              </div>
              <p className="mt-4 text-center text-sm text-zinc-500 dark:text-zinc-400">
                Preview of your real-time article inbox
              </p>
            </div>
          </motion.div>

          <div className="pointer-events-none absolute -left-10 -top-10 h-40 w-40 rounded-full bg-amber-400/20 blur-3xl" />
          <div className="pointer-events-none absolute -right-10 -bottom-10 h-40 w-40 rounded-full bg-amber-500/20 blur-3xl" />
        </div>
      </div>
    </section>
  );
}
