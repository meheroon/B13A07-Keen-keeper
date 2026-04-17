import FriendCard from './FriendCard';

export default function FriendsGrid({ friends }) {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {friends.map((friend) => (
        <FriendCard key={friend.id} friend={friend} />
      ))}
    </div>
  );
}
