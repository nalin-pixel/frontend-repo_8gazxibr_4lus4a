import { motion } from 'framer-motion';
import { Bot, BellRing, Gauge, Mail, Radar } from 'lucide-react';

const features = [
  { icon: Bot, title: 'AI Assistant', desc: 'Chat with an AI trained to prioritize, summarize, and surface context.' },
  { icon: Radar, title: 'Real-time Monitoring', desc: 'Track domains, sections, and RSS feeds with customizable polling.' },
  { icon: Mail, title: 'Email Alerts', desc: 'Instant notifications or scheduled digests tailored to your beat.' },
  { icon: Gauge, title: 'Summarization', desc: 'Short and long summaries, entities, sentiment, and credibility.' },
  { icon: BellRing, title: 'Notifications', desc: 'In-app alerts with filtering by topic, importance, or keywords.' },
];

export default function FeaturesPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16">
      <motion.h1 initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="text-3xl font-bold">Features</motion.h1>
      <p className="mt-2 max-w-2xl text-zinc-400">Everything you need for a faster newsroom workflow.</p>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 shadow-sm backdrop-blur"
          >
            <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500/10 text-amber-400">
              <f.icon />
            </div>
            <h3 className="text-lg font-semibold text-white">{f.title}</h3>
            <p className="mt-1 text-sm text-zinc-400">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
