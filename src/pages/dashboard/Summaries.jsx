import { motion } from 'framer-motion';

export default function DashboardSummaries() {
  return (
    <div>
      <h1 className="text-2xl font-semibold">AI Summaries</h1>
      <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i*0.04 }} className="h-24 rounded-xl border border-zinc-800 bg-zinc-900/40" />
        ))}
      </div>
    </div>
  );
}
