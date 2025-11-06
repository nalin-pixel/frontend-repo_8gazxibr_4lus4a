import { useEffect, useRef, useState } from 'react';
import { Bot, Send, Loader2, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { api } from '../lib/api';
import { useUI } from '../context/UIContext';

const SUGGESTIONS = [
  'Summarize last 24h',
  'Top regional stories',
  'Classify sources by reliability',
  'Show tech stories importance > 0.7',
];

export default function AIAssistantWidget() {
  const { assistantOpen, setAssistantOpen } = useUI();
  const [drag, setDrag] = useState({ x: 0, y: 0 });
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, role: 'assistant', content: 'Hi! I can analyze your feed in real-time. Try one of the prompts below.' },
  ]);
  const endRef = useRef(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, assistantOpen]);

  useEffect(() => {
    const onClick = (e) => {
      const panel = document.getElementById('ai-assistant-panel');
      if (assistantOpen && panel && !panel.contains(e.target)) setAssistantOpen(false);
    };
    document.addEventListener('mousedown', onClick);
    return () => document.removeEventListener('mousedown', onClick);
  }, [assistantOpen, setAssistantOpen]);

  const sendMessage = async () => {
    const text = input.trim();
    if (!text) return;
    setInput('');
    setMessages((m) => [...m, { id: Date.now(), role: 'user', content: text }]);
    setLoading(true);
    try {
      const res = await api.assistant(text);
      setMessages((m) => [...m, { id: Date.now() + 1, role: 'assistant', content: res.reply }]);
    } catch {
      setMessages((m) => [...m, { id: Date.now() + 1, role: 'assistant', content: 'Unable to reach assistant.' }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-40">
      <motion.button
        className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-500 text-black shadow-lg shadow-amber-500/30"
        whileHover={{ scale: 1.06 }}
        animate={{ boxShadow: ['0 0 0 0 rgba(251,191,36,0.6)', '0 0 0 12px rgba(251,191,36,0)'] }}
        transition={{ repeat: Infinity, duration: 2 }}
        onClick={() => setAssistantOpen(true)}
        aria-label="Open AI Assistant"
      >
        <Bot />
      </motion.button>

      <AnimatePresence>
        {assistantOpen && (
          <motion.div
            id="ai-assistant-panel"
            className="absolute bottom-16 right-0 w-[350px] overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950 text-zinc-100 shadow-2xl"
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98, y: 6 }}
            drag
            dragMomentum={false}
            dragConstraints={{ left: -280, right: 20, top: -300, bottom: 20 }}
            style={{ x: drag.x, y: drag.y }}
            onDragEnd={(_, info) => setDrag({ x: info.point.x, y: info.point.y })}
          >
            <div className="flex items-center justify-between border-b border-zinc-800 px-3 py-2">
              <div className="inline-flex items-center gap-2 text-sm font-medium text-zinc-200">
                <Bot className="text-amber-500" size={18} /> AI Assistant
              </div>
              <button
                className="rounded-md p-1 text-zinc-400 hover:bg-zinc-800 hover:text-white"
                onClick={() => setAssistantOpen(false)}
              >
                <X size={16} />
              </button>
            </div>

            <div className="max-h-80 space-y-3 overflow-y-auto p-3 text-sm">
              {messages.map((m) => (
                <div key={m.id} className={m.role === 'user' ? 'text-right' : 'text-left'}>
                  <motion.div
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={
                      'inline-block max-w-[85%] rounded-2xl px-3 py-2 ' +
                      (m.role === 'user'
                        ? 'bg-amber-500 text-black'
                        : 'bg-zinc-900 text-zinc-100')
                    }
                  >
                    {m.content}
                  </motion.div>
                </div>
              ))}
              {loading && (
                <div className="inline-flex items-center gap-2 rounded-2xl bg-zinc-900 px-3 py-2 text-zinc-200">
                  <Loader2 className="animate-spin" size={16} /> Typing…
                </div>
              )}
              <div ref={endRef} />
            </div>

            <div className="border-t border-zinc-800 p-3">
              <div className="mb-2 flex flex-wrap gap-2">
                {SUGGESTIONS.map((s) => (
                  <button
                    key={s}
                    className="rounded-full border border-zinc-800 px-2 py-1 text-xs text-zinc-300 hover:bg-zinc-900"
                    onClick={() => setInput(s)}
                  >
                    {s}
                  </button>
                ))}
              </div>
              <div className="flex items-center rounded-xl border border-zinc-800 bg-zinc-950 px-2">
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
                  placeholder="Ask anything…"
                  className="flex-1 bg-transparent py-2 text-sm outline-none placeholder:text-zinc-500"
                />
                <button
                  onClick={sendMessage}
                  className="inline-flex items-center gap-1 rounded-lg bg-amber-500 px-3 py-1.5 text-sm font-medium text-black hover:bg-amber-400"
                >
                  <Send size={16} />
                  Send
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
