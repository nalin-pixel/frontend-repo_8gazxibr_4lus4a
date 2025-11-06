import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero3D() {
  return (
    <section className="relative min-h-[70vh] overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
      <div className="relative z-10 mx-auto flex min-h-[70vh] max-w-7xl items-center px-4">
        <div className="max-w-2xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl"
          >
            AI-Powered News Monitoring for Modern Journalists
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-4 text-lg leading-relaxed text-zinc-300"
          >
            Track sources, spot breaking stories, and get instant AI summaries. Real-time alerts, ranked by importance, with deep context at a glance.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <Link
              to="/signup"
              className="pointer-events-auto inline-flex items-center gap-2 rounded-full bg-amber-500 px-6 py-3 text-sm font-medium text-black shadow-lg shadow-amber-500/20 transition hover:-translate-y-0.5 hover:bg-amber-400"
            >
              Start Free Trial
              <ArrowRight size={18} />
            </Link>
            <Link
              to="/features"
              className="pointer-events-auto inline-flex items-center gap-2 rounded-full border border-zinc-700/60 bg-black/40 px-6 py-3 text-sm font-medium text-white backdrop-blur transition hover:bg-black/60"
            >
              Explore Features
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
