import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

export default function SignIn(){
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
      const { api } = await import('../../lib/api');
      const res = await api.login({ email, password });
      if(res?.token){
        nav('/dashboard');
      }
    } catch (err) {
      setError('Invalid credentials');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="mx-auto max-w-md px-4 py-16">
      <h1 className="mb-6 text-3xl font-bold">Sign In</h1>
      <form onSubmit={submit} className="space-y-4">
        {error && <p className="rounded-md border border-red-900/40 bg-red-950/40 px-3 py-2 text-sm text-red-300">{error}</p>}
        <div>
          <label className="block text-sm text-zinc-300">Email</label>
          <input required type="email" value={email} onChange={(e)=>setEmail(e.target.value)} className="mt-1 w-full rounded-lg border border-zinc-800 bg-zinc-900 px-3 py-2 outline-none focus:border-amber-500" />
        </div>
        <div>
          <label className="block text-sm text-zinc-300">Password</label>
          <input required type="password" value={password} onChange={(e)=>setPassword(e.target.value)} className="mt-1 w-full rounded-lg border border-zinc-800 bg-zinc-900 px-3 py-2 outline-none focus:border-amber-500" />
        </div>
        <button disabled={loading} className="w-full rounded-lg bg-amber-500 px-4 py-2 font-medium text-black hover:bg-amber-400 disabled:opacity-60">{loading? 'Signing in...' : 'Sign In'}</button>
        <div className="flex items-center justify-between text-sm text-zinc-400">
          <Link to="/forgot-password" className="hover:text-white">Forgot password?</Link>
          <Link to="/signup" className="hover:text-white">Create account</Link>
        </div>
        <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
          <button type="button" className="rounded-lg border border-zinc-800 px-3 py-2 hover:bg-zinc-900">Sign in with Google</button>
          <button type="button" className="rounded-lg border border-zinc-800 px-3 py-2 hover:bg-zinc-900">Sign in with Apple</button>
        </div>
      </form>
    </section>
  );
}
