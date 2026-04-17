export function getSummaryStats(friends) {
  return {
    total: friends.length,
    overdue: friends.filter((friend) => friend.status === 'overdue').length,
    almostDue: friends.filter((friend) => friend.status === 'almost due').length,
    onTrack: friends.filter((friend) => friend.status === 'on-track').length
  };
}
