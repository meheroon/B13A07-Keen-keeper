export function getSummaryStats(friends = []) {
  let timeline = [];

  if (typeof window !== 'undefined') {
    timeline = JSON.parse(localStorage.getItem('keenkeeper-timeline') || '[]');
  }

  const now = new Date();
  const currentMonth = now.getMonth();
  const currentYear = now.getFullYear();

  const interactionsThisMonth = timeline.filter((item) => {
    const d = new Date(item.date);
    return d.getMonth() === currentMonth && d.getFullYear() === currentYear;
  }).length;

  return {
    total: friends.length,
    onTrack: friends.filter((friend) => friend.status === 'on-track').length,
    needAttention: friends.filter(
      (friend) =>
        friend.status === 'overdue' || friend.status === 'almost due'
    ).length,
    interactionsThisMonth
  };
}