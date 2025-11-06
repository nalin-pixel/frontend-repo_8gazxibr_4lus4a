import { useState } from 'react';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    setTimeout(() => setSent(true), 700);
  };

  return (
    <div className="mx-auto max-w-md px-4 py-16">
      <h1 className="text-3xl font-bold">Forgot Password</h1>
      <p className="mt-2 text-zinc-400">Enter your email to receive a reset link.</p>
      <form onSubmit={submit} className="mt-6 space-y-4">
        <div>
          <label className="mb-1 block text-sm text-zinc-300">Email</label>
          <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" required className="w-full rounded-lg border border-zinc-800 bg-zinc-900 p-3 outline-none" />
        </div>
        <button className="w-full rounded-full bg-amber-500 px-5 py-2 text-sm font-medium text-black hover:bg-amber-400">Send reset link</button>
      </form>
      {sent && <p className="mt-4 text-sm text-emerald-400">If that email exists, we sent you a link.</p>}
    </div>
  );
}
