import Image from 'next/image';
import Link from 'next/link';
import { getStatusStyles } from '@/lib/utils';

export default function FriendCard({ friend }) {
  return (
    <Link
      href={`/friends/${friend.id}`}
      className="card-surface flex min-h-[250px] flex-col items-center px-6 py-7 text-center transition hover:-translate-y-1 hover:shadow-md"
    >
      <Image
        src={friend.picture}
        alt={friend.name}
        width={80}
        height={80}
        className="h-20 w-20 rounded-full object-cover"
      />

      <h3 className="mt-5 text-2xl font-bold leading-tight text-slate-800 sm:text-[32px]">
        {friend.name}
      </h3>

      <p className="mt-2 text-sm text-slate-400 sm:text-base">
        {friend.days_since_contact}d ago
      </p>

      <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
        {friend.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-[#dff3e8] px-3 py-1 text-xs font-medium uppercase text-[#255845] sm:text-sm"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-auto pt-6">
        <span
          className={`inline-flex rounded-full border px-3 py-1 text-xs font-semibold capitalize sm:text-sm ${getStatusStyles(friend.status)}`}
        >
          {friend.status === 'on-track'
            ? 'On-Track'
            : friend.status === 'almost due'
            ? 'Almost Due'
            : 'Overdue'}
        </span>
      </div>
    </Link>
  );
}