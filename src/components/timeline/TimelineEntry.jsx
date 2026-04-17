import { formatDate } from '@/lib/utils';

const iconMap = {
  call: '📞',
  text: '💬',
  video: '📹',
  meetup: '🤝'
};

export default function TimelineEntry({ entry }) {
  return (
   <div className="card-surface flex items-start gap-4 px-5 py-5 sm:items-center">
      <span className="text-4xl">{iconMap[entry.type] || '💬'}</span>

      <div>
        <h3 className="text-xl font-semibold text-[#255845]">
          {entry.type.charAt(0).toUpperCase() + entry.type.slice(1)}{' '}
          <span className="font-normal text-slate-500">with {entry.friendName}</span>
        </h3>

        <p className="mt-1 text-base text-slate-500">{formatDate(entry.date)}</p>
      </div>
    </div>
  );
}