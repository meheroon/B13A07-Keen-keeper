import { formatDate } from '@/lib/utils';

export default function FriendStatsCards({ friend }) {
  const stats = [
    { label: 'Days Since Contact', value: friend.days_since_contact },
    { label: 'Goal', value: `${friend.goal} days` },
    { label: 'Next Due Date', value: formatDate(friend.next_due_date) }
  ];

  return (
    <div className="grid gap-4 sm:grid-cols-3">
      {stats.map((item) => (
        <div key={item.label} className="card-surface p-5">
          <p className="text-sm font-semibold text-slate-500">{item.label}</p>
          <h3 className="mt-3 text-2xl font-black tracking-tight text-slate-950">{item.value}</h3>
        </div>
      ))}
    </div>
  );
}
