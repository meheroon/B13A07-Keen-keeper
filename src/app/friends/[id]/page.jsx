import { notFound } from 'next/navigation';
import FriendInfoCard from '@/components/friend-details/FriendInfoCard';
import FriendStatsCards from '@/components/friend-details/FriendStatsCards';
import QuickCheckInCard from '@/components/friend-details/QuickCheckInCard';
import RelationshipGoalCard from '@/components/friend-details/RelationshipGoalCard';
import SectionTitle from '@/components/shared/SectionTitle';
import { getFriendById, getFriends } from '@/lib/getFriends';

export async function generateStaticParams() {
  const friends = await getFriends();
  return friends.map((friend) => ({ id: friend.id.toString() }));
}

export default async function FriendDetailsPage({ params }) {
  const friend = await getFriendById(params.id);

  if (!friend) {
    notFound();
  }

  return (
    <div className="container-width py-8 sm:py-10">
      <SectionTitle
        eyebrow="Friend Details"
        title={`Catch up with ${friend.name}`}
        description="Review your friendship health, update your connection goal, and instantly log your latest interaction."
      />

      <div className="grid gap-6 lg:grid-cols-[1fr_1.2fr]">
        <FriendInfoCard friend={friend} />
        <div className="space-y-6">
          <FriendStatsCards friend={friend} />
          <RelationshipGoalCard friend={friend} />
          <QuickCheckInCard friend={friend} />
        </div>
      </div>
    </div>
  );
}
