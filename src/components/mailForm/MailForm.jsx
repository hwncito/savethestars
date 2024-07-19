'use client';

import { addSupporter } from '@/services/supporters';
import { useState } from 'react';
import Spinner from '../spinner/Spinner';

export default function MailForm({
  session,
  supporters,
  setSupporters,
  setTotalSupporters,
}) {
  const [email, setEmail] = useState(session?.user?.email);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) {
      return;
    }
    if (supporters.flat().includes(email)) {
      return;
    }
    setIsLoading(true);
    try {
      const newSupporters = await addSupporter(email);
      const newRecentSupporters = newSupporters.slice(0, 5);
      setSupporters(newRecentSupporters);
      setTotalSupporters(newSupporters.length);
      setIsLoading(false);
    } catch (e) {
      setIsLoading(false);
      throw new Error(`There was an error: ${e.message}`);
    }
  };
  return (
    <form className="w-full max-w-md mx-auto p-6" onSubmit={handleSubmit}>
      <div className="mb-4 flex">
        <input
          type="email"
          placeholder="Your Email"
          readOnly
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="px-5 py-3 rounded-r rounded-full w-full border border-white bg-transparent focus:outline-none focus:border-gray-300"
        />

        <button
          type="submit"
          className="border-r border-t border-b rounded-l rounded-full py-2 px-4 w-[160px] font-medium hover:bg-white text-white hover:text-slate-950 transition-all hero-button"
        >
          {isLoading ? <Spinner /> : 'Subscribe'}
        </button>
      </div>
    </form>
  );
}
