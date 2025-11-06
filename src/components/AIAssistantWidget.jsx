import { useEffect, useRef, useState } from 'react';
import { Bot, Send, Loader2 } from 'lucide-react';

const SUGGESTIONS = [
  'Summarize last 24h',
  'Top regional stories',
  'Classify sources by reliability',
  'Show tech stories importance > 0.7',
];

export default function AIAssistantWidget() {
  const [open, setOpen] = useState(true);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, role: 'assistant', content: 'Hi! I can analyze your feed in real-time. Try one of the prompts below.' },
  ]);
  const endRef = useRef(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, open]);

  const sendMessage = async () => {
    const text = input.trim();
    if (!text) return;
    setInput('');
    setMessages((m) => [...m, { id: Date.now(), role: 'user', content: text }]);
    setLoading(true);
    // Simulate AI response for this preview
    setTimeout(() => {
      setMessages((m) => [
        ...m,
        {
          id: Date.now() + 1,
          role: 'assistant',
          content:
            'Here are the top 3 stories with high importance in the last 24h. I also added quick links and tags for you. (Preview response)',
        },
      ]);
      setLoading(false);
    }, 900);
  };

  return (
    <div className="fixed bottom-4 right-4 z-40">
      {/* Launcher for small screens */}
      {!open && (
        <button
          className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-500 text-white shadow-lg shadow-amber-500/30"
          onClick={() => setOpen(true)}
          aria-label="Open AI Assistant"
        >
          <Bot />
        </button>
      )}

      {open && (
        <div className="flex h-[440px] w-[350px] flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-2xl dark:border-zinc-800 dark:bg-zinc-900">
          <div className="flex items-center justify-between border-b border-zinc-200 px-3 py-2 dark:border-zinc-800">
            <div className="inline-flex items-center gap-2 text-sm font-medium text-zinc-800 dark:text-zinc-200">
              <Bot className="text-amber-500" size={18} /> AI Assistant
            </div>
            <button
              className="rounded-md px-2 py-1 text-sm text-zinc-500 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-800"
              onClick={() => setOpen(false)}
            >
              Hide
            </button>
          </div>

          <div className="flex-1 space-y-3 overflow-y-auto p-3 text-sm">
            {messages.map((m) => (
              <div key={m.id} className={m.role === 'user' ? 'text-right' : 'text-left'}>
                <div
                  className={
                    'inline-block max-w-[85%] rounded-2xl px-3 py-2 ' +
                    (m.role === 'user'
                      ? 'bg-amber-500 text-white'
                      : 'bg-zinc-100 text-zinc-800 dark:bg-zinc-800 dark:text-zinc-100')
                  }
                >
                  {m.content}
                </div>
              </div>
            ))}
            {loading && (
              <div className="inline-flex items-center gap-2 rounded-2xl bg-zinc-100 px-3 py-2 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-200">
                <Loader2 className="animate-spin" size={16} /> Thinking…
              </div>
            )}
            <div ref={endRef} />
          </div>

          <div className="border-t border-zinc-200 p-3 dark:border-zinc-800">
            <div className="mb-2 flex flex-wrap gap-2">
              {SUGGESTIONS.map((s) => (
                <button
                  key={s}
                  className="rounded-full border border-zinc-200 px-2 py-1 text-xs text-zinc-600 hover:bg-zinc-50 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800"
                  onClick={() => setInput(s)}
                >
                  {s}
                </button>
              ))}
            </div>
            <div className="flex items-center rounded-xl border border-zinc-200 bg-white px-2 dark:border-zinc-700 dark:bg-zinc-900">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
                placeholder="Ask anything…"
                className="flex-1 bg-transparent py-2 text-sm outline-none placeholder:text-zinc-400"
              />
              <button
                onClick={sendMessage}
                className="inline-flex items-center gap-1 rounded-lg bg-amber-500 px-3 py-1.5 text-sm font-medium text-white hover:bg-amber-600"
              >
                <Send size={16} />
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
