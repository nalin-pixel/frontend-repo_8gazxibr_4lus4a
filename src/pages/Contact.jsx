import { motion } from 'framer-motion';

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16">
      <motion.h1 initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="text-3xl font-bold">Contact</motion.h1>
      <p className="mt-2 text-zinc-400">We'd love to hear from you.</p>
      <form className="mt-8 space-y-4">
        <div>
          <label className="mb-1 block text-sm text-zinc-300">Name</label>
          <input className="w-full rounded-lg border border-zinc-800 bg-zinc-900 p-3 outline-none" />
        </div>
        <div>
          <label className="mb-1 block text-sm text-zinc-300">Email</label>
          <input type="email" className="w-full rounded-lg border border-zinc-800 bg-zinc-900 p-3 outline-none" />
        </div>
        <div>
          <label className="mb-1 block text-sm text-zinc-300">Message</label>
          <textarea rows={5} className="w-full rounded-lg border border-zinc-800 bg-zinc-900 p-3 outline-none" />
        </div>
        <button className="rounded-full bg-amber-500 px-5 py-2 text-sm font-medium text-black hover:bg-amber-400">Send</button>
      </form>
    </div>
  );
}
