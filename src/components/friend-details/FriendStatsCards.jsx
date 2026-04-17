import { formatDateLong } from '@/lib/utils';

export default function FriendStatsCards({ friend }) {
  const stats = [
    { label: 'Days Since Contact', value: friend.days_since_contact },
    { label: 'Goal (Days)', value: friend.goal },
    { label: 'Next Due', value: formatDateLong(friend.next_due_date) }
  ];

  return (
    <div className="grid gap-5 md:grid-cols-3">
      {stats.map((item) => (
        <div key={item.label} className="card-surface px-6 py-8 text-center">
          <h3 className="text-4xl font-extrabold text-[#255845] sm:text-5xl">{item.value}</h3>
          <p className="mt-4 text-lg text-slate-500 sm:text-2xl">{item.label}</p>
        </div>
      ))}
    </div>
  );
}