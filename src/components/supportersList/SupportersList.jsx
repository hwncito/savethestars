'use client';
import { fetchSupporters } from '@/services/supporters';
import { useEffect, useState } from 'react';
import './SupportersList.css';
import Spinner from '../spinner/Spinner';

export default function SupportersList({
  supporters,
  setSupporters,
  setTotalSupporters,
}) {
  const [loading, setLoading] = useState(false);
  const getSupporters = async () => {
    setLoading(true);
    try {
      const supporters = await fetchSupporters();
      const recentSupporters = supporters.slice(0, 5);
      setSupporters(recentSupporters);
      setTotalSupporters(supporters.length);
      setLoading(false);
    } catch (e) {
      setLoading(false);
      throw new Error(`There was an error: ${e.message}`);
    }
  };

  useEffect(() => {
    getSupporters();
  }, []);

  return (
    <div className="border border-1 rounded-lg p-2 min-h-[218px]">
      <div className="border border-1 rounded-md p-2 min-h-[218px]">
        {loading ? (
          <div className="flex items-center justify-center min-h-[200px]">
            <Spinner />
          </div>
        ) : (
          <ul className="list-none">
            {supporters.map((supporter, index) => (
              <li
                key={index}
                className="text-base py-2 pl-4 transition-all text-shadow flex items-center gap-2"
              >
                {supporter}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
