import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { api } from '../lib/api';

const tiers = [
  { name: 'Free', price: '$0', features: ['Up to 3 sources', 'Basic alerts', 'Community support'] },
  { name: 'Pro', price: '$19', features: ['Unlimited sources', 'AI summaries', 'Email digests'] },
  { name: 'Premium', price: '$49', features: ['Team seats', 'Advanced AI', 'Priority support'] },
];

export default function PricingPage() {
  const handlePurchase = async (plan) => {
    const { url } = await api.createCheckoutSession(plan);
    window.location.href = url;
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-16">
      <motion.h1 initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="text-3xl font-bold">Pricing</motion.h1>
      <p className="mt-2 max-w-2xl text-zinc-400">Choose the plan that fits your newsroom.</p>
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {tiers.map((t, i) => (
          <motion.div key={t.name} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i*0.06 }} className="relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6">
            <div className="pointer-events-none absolute -top-10 -right-10 h-40 w-40 rounded-full bg-amber-500/10 blur-3xl" />
            <h3 className="text-lg font-medium text-white">{t.name}</h3>
            <div className="mt-2 text-3xl font-extrabold text-amber-400">{t.price}<span className="text-sm text-zinc-400">/mo</span></div>
            <ul className="mt-4 space-y-2 text-sm text-zinc-300">
              {t.features.map((f) => (<li key={f}>• {f}</li>))}
            </ul>
            <button onClick={() => handlePurchase(t.name)} className="mt-6 inline-flex items-center gap-2 rounded-full bg-amber-500 px-4 py-2 text-sm font-medium text-black hover:bg-amber-400">
              Get {t.name}
              <ArrowRight size={16} />
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
