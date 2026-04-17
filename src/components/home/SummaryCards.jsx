import SummaryCard from './SummaryCard';

export default function SummaryCards({ stats }) {
  const safeStats = {
    total: stats?.total ?? 0,
    onTrack: stats?.onTrack ?? 0,
    needAttention: stats?.needAttention ?? 0,
    interactionsThisMonth: stats?.interactionsThisMonth ?? 0
  };

  const cards = [
    { label: 'Total Friends', value: safeStats.total },
    { label: 'On Track', value: safeStats.onTrack },
    { label: 'Need Attention', value: safeStats.needAttention },
    { label: 'Interactions This Month', value: safeStats.interactionsThisMonth }
  ];

  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {cards.map((card) => (
        <SummaryCard
          key={card.label}
          label={card.label}
          value={card.value}
        />
      ))}
    </div>
  );
}