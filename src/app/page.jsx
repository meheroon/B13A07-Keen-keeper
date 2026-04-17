'use client';

import { useEffect, useState } from 'react';
import Banner from '@/components/home/Banner';
import FriendsGrid from '@/components/home/FriendsGrid';
import SummaryCards from '@/components/home/SummaryCards';
import LoadingSpinner from '@/components/shared/LoadingSpinner';
import useFriends from '@/hooks/useFriends';
import { getSummaryStats } from '@/lib/analytics';

export default function HomePage() {
  const { friends, loading } = useFriends();

  const [stats, setStats] = useState({
    total: 0,
    onTrack: 0,
    needAttention: 0,
    interactionsThisMonth: 0
  });

  useEffect(() => {
    setStats(getSummaryStats(friends || []));
  }, [friends]);

  return (
    <div className="container-width py-8 sm:py-12">
      <Banner />

      <SummaryCards stats={stats} />

      <div className="my-8 border-t border-gray-200" />

      <section>
        <h2 className="mb-6 text-4xl font-bold text-slate-800">Your Friends</h2>
        {loading ? <LoadingSpinner /> : <FriendsGrid friends={friends || []} />}
      </section>
    </div>
  );
}