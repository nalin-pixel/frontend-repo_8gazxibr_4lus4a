import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '../lib/api';

export default function SignUpPage() {
  const nav = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const submit = async (e) => {
    e.preventDefault();
    setError('');
    if (password !== confirm) {
      setError('Passwords do not match');
      return;
    }
    setLoading(true);
    try {
      const res = await api.register({ email, password });
      if (res?.success) nav('/dashboard');
    } catch (e) {
      setError('Registration failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mx-auto max-w-md px-4 py-16">
      <h1 className="text-3xl font-bold">Create Account</h1>
      <form onSubmit={submit} className="mt-8 space-y-4">
        <div>
          <label className="mb-1 block text-sm text-zinc-300">Email</label>
          <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" required className="w-full rounded-lg border border-zinc-800 bg-zinc-900 p-3 outline-none" />
        </div>
        <div>
          <label className="mb-1 block text-sm text-zinc-300">Password</label>
          <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" required minLength={6} className="w-full rounded-lg border border-zinc-800 bg-zinc-900 p-3 outline-none" />
        </div>
        <div>
          <label className="mb-1 block text-sm text-zinc-300">Confirm Password</label>
          <input value={confirm} onChange={(e)=>setConfirm(e.target.value)} type="password" required minLength={6} className="w-full rounded-lg border border-zinc-800 bg-zinc-900 p-3 outline-none" />
        </div>
        {error && <p className="text-sm text-red-400">{error}</p>}
        <button disabled={loading} className="w-full rounded-full bg-amber-500 px-5 py-2 text-sm font-medium text-black hover:bg-amber-400 disabled:opacity-60">{loading?'Creating…':'Create account'}</button>
      </form>
      <p className="mt-6 text-sm text-zinc-400">Already have an account? <a href="/signin" className="text-amber-400">Sign in</a></p>
    </div>
  );
}
