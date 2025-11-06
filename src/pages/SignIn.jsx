import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '../lib/api';

export default function SignInPage() {
  const nav = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const submit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      const res = await api.login({ email, password });
      if (res?.token) nav('/dashboard');
    } catch (e) {
      setError('Invalid credentials');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mx-auto max-w-md px-4 py-16">
      <h1 className="text-3xl font-bold">Sign In</h1>
      <form onSubmit={submit} className="mt-8 space-y-4">
        <div>
          <label className="mb-1 block text-sm text-zinc-300">Email</label>
          <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" required className="w-full rounded-lg border border-zinc-800 bg-zinc-900 p-3 outline-none" />
        </div>
        <div>
          <label className="mb-1 block text-sm text-zinc-300">Password</label>
          <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" required minLength={6} className="w-full rounded-lg border border-zinc-800 bg-zinc-900 p-3 outline-none" />
        </div>
        {error && <p className="text-sm text-red-400">{error}</p>}
        <button disabled={loading} className="w-full rounded-full bg-amber-500 px-5 py-2 text-sm font-medium text-black hover:bg-amber-400 disabled:opacity-60">{loading?'Signing in…':'Sign In'}</button>
      </form>
      <div className="mt-4 text-sm text-zinc-400">
        <a href="/forgot-password" className="hover:text-white">Forgot password?</a>
      </div>
      <div className="mt-6 grid grid-cols-2 gap-3">
        <button className="rounded-full border border-zinc-800 bg-zinc-900 px-4 py-2 text-sm hover:bg-zinc-800">Sign in with Google</button>
        <button className="rounded-full border border-zinc-800 bg-zinc-900 px-4 py-2 text-sm hover:bg-zinc-800">Sign in with Apple</button>
      </div>
      <p className="mt-6 text-sm text-zinc-400">Don’t have an account? <a href="/signup" className="text-amber-400">Sign up</a></p>
    </div>
  );
}
