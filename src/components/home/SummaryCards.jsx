import SummaryCard from './SummaryCard';

export default function SummaryCards({ stats }) {
  const cards = [
    { label: 'Total Friends', value: stats.total, helper: 'People currently in your friendship circle' },
    { label: 'Overdue', value: stats.overdue, helper: 'Friends who need your attention soonest' },
    { label: 'Almost Due', value: stats.almostDue, helper: 'Friends nearing their next check-in date' },
    { label: 'On Track', value: stats.onTrack, helper: 'Friendships currently in a healthy rhythm' }
  ];

  return (
    <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
      {cards.map((card) => (
        <SummaryCard key={card.label} {...card} />
      ))}
    </div>
  );
}
