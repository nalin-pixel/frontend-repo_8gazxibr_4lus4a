import Hero3D from '../components/Hero3D';
import { motion } from 'framer-motion';
import { Sparkles, Bell, Cpu } from 'lucide-react';

export default function Home() {
  return (
    <div>
      <Hero3D />
      <section className="mx-auto max-w-7xl px-4 py-16">
        <div className="mb-10 text-center">
          <h2 className="text-2xl font-semibold">How it works</h2>
          <p className="mt-2 text-zinc-400">Monitor sources, analyze with AI, and get real-time alerts.</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-3">
          {[
            { icon: Sparkles, title: 'AI Analysis', text: 'Summaries, entities, sentiment, and credibility signals.' },
            { icon: Bell, title: 'Real-Time Alerts', text: 'Instant notifications with tailored preferences.' },
            { icon: Cpu, title: 'Smart Ranking', text: 'Importance score based on your priorities.' },
          ].map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
              className="rounded-2xl border border-zinc-800/60 bg-zinc-900/50 p-5 backdrop-blur"
            >
              <c.icon className="text-amber-500" />
              <h3 className="mt-3 text-lg font-medium text-white">{c.title}</h3>
              <p className="mt-1 text-sm text-zinc-400">{c.text}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
