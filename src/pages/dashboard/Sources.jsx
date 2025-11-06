import { useEffect, useState } from 'react';
import { api } from '../../lib/api';
import { motion } from 'framer-motion';

export default function DashboardSources() {
  const [items, setItems] = useState(null);

  useEffect(() => {
    (async () => setItems(await api.sources()))();
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-semibold">My Sources</h1>
      {!items && (
        <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="h-24 animate-pulse rounded-xl bg-zinc-800" />
          ))}
        </div>
      )}
      {items && (
        <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((s, idx) => (
            <motion.div key={s.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: idx*0.04 }} className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-4">
              <div className="text-sm font-medium">{s.name}</div>
              <div className="text-xs text-zinc-400">{s.url}</div>
              <div className="mt-2 text-xs text-amber-400">{s.tags.join(', ')} • Every {s.freq}</div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}
