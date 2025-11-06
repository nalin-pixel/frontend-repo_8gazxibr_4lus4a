import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function ForgotPassword(){
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    setTimeout(()=> setSent(true), 600);
  };

  return (
    <section className="mx-auto max-w-md px-4 py-16">
      <h1 className="mb-6 text-3xl font-bold">Reset your password</h1>
      {!sent ? (
        <form onSubmit={submit} className="space-y-4">
          <div>
            <label className="block text-sm text-zinc-300">Email</label>
            <input required type="email" value={email} onChange={(e)=>setEmail(e.target.value)} className="mt-1 w-full rounded-lg border border-zinc-800 bg-zinc-900 px-3 py-2 outline-none focus:border-amber-500" />
          </div>
          <button className="w-full rounded-lg bg-amber-500 px-4 py-2 font-medium text-black hover:bg-amber-400">Send reset link</button>
        </form>
      ) : (
        <div className="rounded-lg border border-emerald-900/30 bg-emerald-950/40 p-4 text-emerald-300">If an account exists for {email}, well send a reset link.</div>
      )}
      <div className="mt-4 text-right text-sm text-zinc-400">
        <Link to="/signin" className="hover:text-white">Back to sign in</Link>
      </div>
    </section>
  );
}
