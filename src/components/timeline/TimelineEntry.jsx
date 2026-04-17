import { FaPhone, FaRegMessage, FaVideo } from 'react-icons/fa6';
import { formatDate } from '@/lib/utils';

const iconMap = {
  call: FaPhone,
  text: FaRegMessage,
  video: FaVideo
};

export default function TimelineEntry({ entry }) {
  const Icon = iconMap[entry.type] || FaRegMessage;

  return (
    <div className="relative pl-10">
      <span className="absolute left-[17px] top-14 h-full w-px bg-slate-200" />
      <span className="absolute left-0 top-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-violet-600 text-white shadow-md">
        <Icon className="text-sm" />
      </span>

      <div className="card-surface p-5">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-violet-600">{entry.type}</p>
        <h3 className="mt-2 text-xl font-black tracking-tight text-slate-950">{entry.title}</h3>
        <p className="mt-3 text-sm text-slate-500">{formatDateTime(entry.date)}</p>
      </div>
    </div>
  );
}
