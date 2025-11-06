import { useEffect, useState } from 'react';
import { Flame, Globe, Newspaper, Filter, Tag, Star, ExternalLink } from 'lucide-react';

const mockArticles = Array.from({ length: 7 }).map((_, i) => ({
  id: i + 1,
  title: `Breaking development ${i + 1}: Market shifts and policy updates`,
  source: ['Reuters', 'AP', 'BBC', 'NYTimes', 'The Verge'][i % 5],
  importance: Math.round((Math.random() * 0.6 + 0.4) * 100) / 100,
  topic: ['Politics', 'Business', 'Tech', 'Intl', 'Health'][i % 5],
  time: `${Math.floor(Math.random() * 55) + 5}m ago`,
  url: 'https://news.example.com/article',
}));

export default function DashboardPreview() {
  const [query, setQuery] = useState('');
  const [filtered, setFiltered] = useState(mockArticles);

  useEffect(() => {
    const q = query.toLowerCase();
    setFiltered(
      mockArticles.filter(
        (a) => a.title.toLowerCase().includes(q) || a.source.toLowerCase().includes(q)
      )
    );
  }, [query]);

  return (
    <section id="preview" className="mx-auto max-w-7xl px-4 py-12">
      <div className="mb-5 flex items-center justify-between">
        <h2 className="text-xl font-semibold text-zinc-900 dark:text-white">
          Live Inbox Preview
        </h2>
        <div className="flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400">
          <Flame className="text-amber-500" size={18} /> Real-time monitoring
        </div>
      </div>

      <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
        <div className="col-span-2 flex items-center rounded-xl border border-zinc-200 bg-white px-3 py-2 text-sm shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
          <Filter size={18} className="mr-2 text-zinc-500" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Filter by title or source..."
            className="w-full bg-transparent outline-none placeholder:text-zinc-400"
          />
        </div>
        <div className="flex items-center justify-end gap-2">
          <button className="inline-flex items-center gap-2 rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm text-zinc-700 shadow-sm hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-200 dark:hover:bg-zinc-800">
            <Globe size={16} /> Manage Sources
          </button>
          <button className="inline-flex items-center gap-2 rounded-lg bg-amber-500 px-3 py-2 text-sm font-medium text-white shadow hover:bg-amber-600">
            <Newspaper size={16} /> New Source
          </button>
        </div>
      </div>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((a) => (
          <article
            key={a.id}
            className="group rounded-xl border border-zinc-200/60 bg-white/70 p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-zinc-800/60 dark:bg-zinc-900/70"
          >
            <div className="mb-2 flex items-center justify-between text-xs text-zinc-500 dark:text-zinc-400">
              <span className="inline-flex items-center gap-1">
                <Tag size={14} className="text-amber-500" /> {a.topic}
              </span>
              <span>{a.time}</span>
            </div>
            <h3 className="line-clamp-2 text-base font-semibold leading-snug text-zinc-900 dark:text-white">
              {a.title}
            </h3>
            <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">{a.source}</p>
            <div className="mt-3 flex items-center justify-between">
              <div className="inline-flex items-center gap-1 text-amber-600 dark:text-amber-400">
                <Star size={16} fill="currentColor" className="opacity-80" />
                <span className="text-sm font-medium">{a.importance.toFixed(2)}</span>
              </div>
              <a
                href={a.url}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-sm text-zinc-700 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white"
              >
                Open <ExternalLink size={14} />
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
