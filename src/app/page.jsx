'use client';

import Banner from '@/components/home/Banner';
import FriendsGrid from '@/components/home/FriendsGrid';
import SummaryCards from '@/components/home/SummaryCards';
import LoadingSpinner from '@/components/shared/LoadingSpinner';
import SectionTitle from '@/components/shared/SectionTitle';
import useFriends from '@/hooks/useFriends';
import { getSummaryStats } from '@/lib/analytics';

export default function HomePage() {
  const { friends, loading } = useFriends();
  const stats = getSummaryStats(friends);

  return (
    <div className="container-width space-y-10 py-8 sm:py-10">
      <Banner />
      <SummaryCards stats={stats} />

      <section id="friends">
        <SectionTitle
          eyebrow="Your Circle"
          title="Your Friends"
          description="Every friendship card gives you a quick pulse on who needs attention, who is nearly due, and who is already on track."
        />

        {loading ? <LoadingSpinner /> : <FriendsGrid friends={friends} />}
      </section>
    </div>
  );
}
