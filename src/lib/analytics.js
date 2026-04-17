import { getTimelineEntries } from './timelineStorage';

export function getSummaryStats(friends = []) {
  const timeline =
    typeof window !== 'undefined'
      ? getTimelineEntries()
      : [];

  return {
    total: friends.length,
    onTrack: friends.filter((friend) => friend.status === 'on-track').length,
    needAttention: friends.filter(
      (friend) => friend.status === 'overdue' || friend.status === 'almost due'
    ).length,
    interactionsThisMonth: timeline.length
  };
}