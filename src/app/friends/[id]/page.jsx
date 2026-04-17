import { notFound } from 'next/navigation';
import FriendInfoCard from '@/components/friend-details/FriendInfoCard';
import FriendStatsCards from '@/components/friend-details/FriendStatsCards';
import QuickCheckInCard from '@/components/friend-details/QuickCheckInCard';
import RelationshipGoalCard from '@/components/friend-details/RelationshipGoalCard';
import { getFriendById, getFriends } from '@/lib/getFriends';

export async function generateStaticParams() {
  const friends = await getFriends();
  return friends.map((friend) => ({ id: friend.id.toString() }));
}

export default async function FriendDetailsPage({ params }) {
  const { id } = await params;
  const friend = await getFriendById(id);

  if (!friend) notFound();

  return (
    <div className="container-width py-10">
      <div className="grid gap-6 lg:grid-cols-[360px_1fr]">
        <FriendInfoCard friend={friend} />

        <div className="space-y-5">
          <FriendStatsCards friend={friend} />
          <RelationshipGoalCard friend={friend} />
          <QuickCheckInCard friend={friend} />
        </div>
      </div>
    </div>
  );
}