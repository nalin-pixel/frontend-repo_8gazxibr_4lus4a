import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

export default function SignUp(){
  const nav = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const submit = async (e) => {
    e.preventDefault();
    setError('');
    if(password !== confirm){
      setError('Passwords do not match');
      return;
    }
    setLoading(true);
    try {
      const { api } = await import('../../lib/api');
      const res = await api.register({ email, password });
      if(res?.success){
        nav('/dashboard');
      }
    } catch (err) {
      setError('Failed to register');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="mx-auto max-w-md px-4 py-16">
      <h1 className="mb-6 text-3xl font-bold">Create your account</h1>
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
        <div>
          <label className="block text-sm text-zinc-300">Confirm Password</label>
          <input required type="password" value={confirm} onChange={(e)=>setConfirm(e.target.value)} className="mt-1 w-full rounded-lg border border-zinc-800 bg-zinc-900 px-3 py-2 outline-none focus:border-amber-500" />
        </div>
        <button disabled={loading} className="w-full rounded-lg bg-amber-500 px-4 py-2 font-medium text-black hover:bg-amber-400 disabled:opacity-60">{loading? 'Creating...' : 'Create account'}</button>
        <div className="text-right text-sm text-zinc-400">
          <Link to="/signin" className="hover:text-white">Have an account? Sign in</Link>
        </div>
      </form>
    </section>
  );
}
