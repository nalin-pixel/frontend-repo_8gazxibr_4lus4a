import { useState } from 'react';
import { motion } from 'framer-motion';

export default function DashboardSettings() {
  const [saved, setSaved] = useState(false);
  const save = () => {
    setSaved(false);
    setTimeout(() => setSaved(true), 600);
  };

  return (
    <div>
      <h1 className="text-2xl font-semibold">Settings</h1>

      <div className="mt-6 space-y-6">
        <section className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-5">
          <h2 className="text-lg font-medium">Profile</h2>
          <div className="mt-3 grid gap-3 sm:grid-cols-2">
            <div>
              <label className="mb-1 block text-sm text-zinc-300">Full name</label>
              <input className="w-full rounded-lg border border-zinc-800 bg-zinc-950 p-3 outline-none" />
            </div>
            <div>
              <label className="mb-1 block text-sm text-zinc-300">Email</label>
              <input type="email" className="w-full rounded-lg border border-zinc-800 bg-zinc-950 p-3 outline-none" />
            </div>
          </div>
        </section>

        <section className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-5">
          <h2 className="text-lg font-medium">Notifications</h2>
          <div className="mt-3 space-y-2 text-sm text-zinc-300">
            <label className="flex items-center gap-2"><input type="checkbox" defaultChecked/> In-app alerts</label>
            <label className="flex items-center gap-2"><input type="checkbox" /> Email digests</label>
            <label className="flex items-center gap-2"><input type="checkbox" /> Push notifications</label>
          </div>
        </section>

        <section className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-5">
          <h2 className="text-lg font-medium">Security</h2>
          <div className="mt-3 grid gap-3 sm:grid-cols-2">
            <div>
              <label className="mb-1 block text-sm text-zinc-300">New password</label>
              <input type="password" className="w-full rounded-lg border border-zinc-800 bg-zinc-950 p-3 outline-none" />
            </div>
            <div>
              <label className="mb-1 block text-sm text-zinc-300">Confirm password</label>
              <input type="password" className="w-full rounded-lg border border-zinc-800 bg-zinc-950 p-3 outline-none" />
            </div>
          </div>
        </section>

        <motion.button whileTap={{ scale: 0.98 }} onClick={save} className="rounded-full bg-amber-500 px-5 py-2 text-sm font-medium text-black hover:bg-amber-400">Save changes</motion.button>
        {saved && <div className="text-sm text-emerald-400">Saved!</div>}
      </div>
    </div>
  );
}
