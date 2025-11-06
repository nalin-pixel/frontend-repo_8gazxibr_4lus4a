import { useEffect, useState } from 'react';
import { api } from '../../lib/api';
import { motion } from 'framer-motion';
import Modal from '../../components/Modal';

export default function DashboardArticles() {
  const [items, setItems] = useState(null);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    let mounted = true;
    (async () => {
      const data = await api.articles();
      if (mounted) setItems(data);
    })();
    return () => (mounted = false);
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-semibold">New Articles</h1>
      {!items && (
        <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="h-28 animate-pulse rounded-xl bg-zinc-800" />
          ))}
        </div>
      )}
      {items && (
        <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((a, idx) => (
            <motion.article
              key={a.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.04 }}
              className="cursor-pointer rounded-xl border border-zinc-800 bg-zinc-900/40 p-4 hover:bg-zinc-900"
              onClick={() => setSelected(a)}
            >
              <div className="mb-1 text-xs text-zinc-400">{a.source} • {a.time}</div>
              <h3 className="line-clamp-2 text-base font-semibold">{a.title}</h3>
              <div className="mt-2 text-xs text-amber-400">Importance: {a.importance.toFixed(2)}</div>
            </motion.article>
          ))}
        </div>
      )}

      <Modal open={!!selected} onClose={() => setSelected(null)}>
        {selected && (
          <ArticleModalContent article={selected} onClose={() => setSelected(null)} />
        )}
      </Modal>
    </div>
  );
}

function ArticleModalContent({ article, onClose }) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    (async () => {
      const res = await api.summarize(article.id);
      setData(res);
      setLoading(false);
    })();
  }, [article.id]);

  return (
    <div>
      <div className="mb-3 text-xs text-zinc-400">{article.source} • {article.time}</div>
      <h2 className="text-xl font-semibold">{article.title}</h2>
      {loading && <div className="mt-4 h-20 animate-pulse rounded-lg bg-zinc-800" />}
      {!loading && data && (
        <div className="mt-4 space-y-3 text-sm text-zinc-300">
          <p>{data.summary}</p>
          <div className="flex flex-wrap items-center gap-2">
            {data.tags.map((t) => (
              <span key={t} className="rounded-full border border-amber-400/30 bg-amber-400/10 px-2 py-0.5 text-xs text-amber-300">{t}</span>
            ))}
          </div>
          <div className="text-amber-400">Importance score: {data.importance.toFixed(2)}</div>
          <div className="pt-2">
            <a href={article.url} target="_blank" rel="noreferrer" className="rounded-full bg-amber-500 px-3 py-1.5 text-sm font-medium text-black hover:bg-amber-400">View full details</a>
          </div>
        </div>
      )}
      <button onClick={onClose} className="mt-5 text-sm text-zinc-400 hover:text-white">Close</button>
    </div>
  );
}
