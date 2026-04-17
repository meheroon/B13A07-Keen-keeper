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
    <div className="card-surface flex items-center gap-5 px-5 py-5">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 text-xl text-[#255845]">
        <Icon />
      </div>

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